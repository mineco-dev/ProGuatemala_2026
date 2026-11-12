// Edge function: sincroniza las notas de prensa del portal del MINECO (Joomla)
// hacia la tabla `press_articles`. Pensada para ejecutarse por cron (ver README).
//
// Para cada colección: lee la página índice, extrae cada nota (título, slug,
// imagen y fecha), toma el primer párrafo del artículo como extracto y hace
// upsert. Las notas que ya no aparecen en el portal se eliminan, de modo que la
// tabla siempre refleja lo publicado.
//
// Deploy:  supabase functions deploy sync-press --no-verify-jwt
//
// deno-lint-ignore-file no-explicit-any
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const BASE = 'https://www.mineco.gob.gt';

/** Colecciones de prensa a sincronizar (comparten la misma plantilla Gantry). */
const COLLECTIONS = [
  { id: 'brujula-de-inversion', path: '/brujula-de-inversion' },
  { id: 'el-equipaje-de-la-ruta-del-chip', path: '/el-equipaje-de-la-ruta-del-chip' },
];

const MONTHS: Record<string, number> = {
  enero: 1, febrero: 2, marzo: 3, abril: 4, mayo: 5, junio: 6,
  julio: 7, agosto: 8, septiembre: 9, setiembre: 9, octubre: 10,
  noviembre: 11, diciembre: 12,
};

/** Decodifica las entidades HTML más comunes. */
function decodeEntities(input: string): string {
  return input
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}

/** Quita etiquetas, decodifica entidades y colapsa espacios. */
function textOf(htmlFragment: string): string {
  return decodeEntities(htmlFragment.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

/** Convierte una ruta relativa del portal en URL absoluta. */
function absolutize(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${BASE}${path.startsWith('/') ? '' : '/'}${path}`;
}

/** "Jueves, Noviembre 05, 2026" -> "2026-11-05" (o null si no se reconoce). */
function parseSpanishDate(raw: string): string | null {
  const m = raw.match(/([A-Za-zÁÉÍÓÚáéíóúñÑ]+)\s+(\d{1,2}),\s+(\d{4})/);
  if (!m) return null;
  const month = MONTHS[m[1].toLowerCase()];
  if (!month) return null;
  const day = String(Number(m[2])).padStart(2, '0');
  return `${m[3]}-${String(month).padStart(2, '0')}-${day}`;
}

interface ParsedArticle {
  slug: string;
  title: string;
  url: string;
  image_url: string | null;
  published_date: string | null;
  position: number;
}

/** Extrae las notas del HTML del índice de una colección. */
function parseListing(html: string): ParsedArticle[] {
  // Cada nota es un bloque que empieza con el contenedor "row g-0 border rounded".
  const blocks = html.split('row g-0 border rounded').slice(1);
  const articles: ParsedArticle[] = [];

  blocks.forEach((block, index) => {
    const hrefMatch = block.match(/href="(\/[^"]+)"/);
    const titleMatch = block.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
    const imgMatch = block.match(/<img[^>]*src="([^"#]+)/);
    const dateMatch = block.match(/g-array-item-date"[^>]*>([\s\S]*?)<\/span>/);
    if (!hrefMatch || !titleMatch) return;

    const path = hrefMatch[1];
    const slug = path.replace(/^\//, '').replace(/\/$/, '');
    const title = textOf(titleMatch[1]);
    if (!slug || !title) return;

    articles.push({
      slug,
      title,
      url: absolutize(path),
      image_url: imgMatch ? absolutize(imgMatch[1]) : null,
      published_date: dateMatch ? parseSpanishDate(decodeEntities(dateMatch[1])) : null,
      position: index,
    });
  });

  return articles;
}

/** Toma el primer párrafo real del cuerpo del artículo como extracto. */
function parseExcerpt(html: string): string | null {
  const start = html.indexOf('itemprop="articleBody"');
  const body = start !== -1 ? html.slice(start) : html;
  const paragraphs = body.match(/<p[^>]*>([\s\S]*?)<\/p>/g) ?? [];

  for (const p of paragraphs) {
    const txt = textOf(p);
    // Se descartan fragmentos de estilos/scripts y textos demasiado cortos.
    if (txt.length >= 60 && !txt.includes('{') && !/svg/i.test(txt)) {
      return txt.length > 220 ? `${txt.slice(0, 220).trimEnd()}…` : txt;
    }
  }
  return null;
}

async function fetchText(url: string): Promise<string> {
  const res = await fetch(url, { headers: { 'User-Agent': 'ProGuatemala-PressSync/1.0' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} al leer ${url}`);
  return await res.text();
}

Deno.serve(async () => {
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );

  const summary: Record<string, unknown>[] = [];

  for (const collection of COLLECTIONS) {
    try {
      const listingHtml = await fetchText(`${BASE}${collection.path}`);
      const parsed = parseListing(listingHtml);

      // Si el índice no devolvió nada, no se toca la tabla: así un cambio de
      // plantilla o un error puntual no borra las notas ya guardadas.
      if (parsed.length === 0) {
        summary.push({ collection: collection.id, skipped: 'sin resultados' });
        continue;
      }

      // Extracto por artículo; un fallo individual no aborta la sincronización.
      const rows = await Promise.all(
        parsed.map(async (article) => {
          let excerpt: string | null = null;
          try {
            excerpt = parseExcerpt(await fetchText(article.url));
          } catch (_) {
            // Se deja sin extracto; la tarjeta sigue mostrando título y fecha.
          }
          return {
            collection_id: collection.id,
            slug: article.slug,
            title: article.title,
            excerpt,
            url: article.url,
            image_url: article.image_url,
            published_date: article.published_date,
            position: article.position,
            updated_at: new Date().toISOString(),
          };
        }),
      );

      const { error: upsertError } = await supabase
        .from('press_articles')
        .upsert(rows, { onConflict: 'collection_id,slug' });
      if (upsertError) throw upsertError;

      // Elimina de esta colección las notas que ya no están en el portal.
      const slugs = rows.map((r) => r.slug);
      const { error: deleteError } = await supabase
        .from('press_articles')
        .delete()
        .eq('collection_id', collection.id)
        .not('slug', 'in', `(${slugs.map((s) => `"${s}"`).join(',')})`);
      if (deleteError) throw deleteError;

      summary.push({ collection: collection.id, synced: rows.length });
    } catch (error) {
      summary.push({ collection: collection.id, error: String(error) });
    }
  }

  return new Response(JSON.stringify({ ok: true, summary }, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
});
