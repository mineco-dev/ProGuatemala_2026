import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { PRESS_COLLECTIONS } from '@/data/press';
import type { PressArticle, PressCollection } from '@/types/press';

/** Fila de `press_articles` tal como la devuelve Supabase. */
interface PressArticleRow {
  collection_id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  url: string;
  image_url: string | null;
  published_date: string | null;
  position: number;
}

function rowToArticle(row: PressArticleRow): PressArticle {
  return {
    id: row.slug,
    title: row.title,
    excerpt: row.excerpt ?? '',
    url: row.url,
    image: row.image_url ?? undefined,
    date: row.published_date ?? undefined,
  };
}

/**
 * Colecciones de prensa con sus notas. Los datos de la colección (nombre,
 * descripción, logo, fondo) salen de `PRESS_COLLECTIONS`; las notas se traen de
 * Supabase (sincronizadas desde el MINECO por la edge function `sync-press`).
 *
 * Se parte de las notas estáticas de `press.ts` para pintar de inmediato y no
 * dejar la sección vacía mientras carga ni si la consulta falla. Cuando Supabase
 * responde con notas de una colección, reemplazan a las estáticas de esa misma
 * colección.
 */
export function usePressCollections(): PressCollection[] {
  const [collections, setCollections] = useState<PressCollection[]>(PRESS_COLLECTIONS);

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        const { data, error } = await supabase
          .from('press_articles')
          .select('collection_id, slug, title, excerpt, url, image_url, published_date, position')
          .order('position', { ascending: true });
        if (error) throw error;

        const byCollection = new Map<string, PressArticle[]>();
        for (const row of (data ?? []) as PressArticleRow[]) {
          const list = byCollection.get(row.collection_id) ?? [];
          list.push(rowToArticle(row));
          byCollection.set(row.collection_id, list);
        }

        if (!active) return;

        setCollections(
          PRESS_COLLECTIONS.map((collection) => {
            const synced = byCollection.get(collection.id);
            // Solo se reemplazan las notas si la colección trae datos en la
            // tabla; si no, se conservan las estáticas como respaldo.
            return synced && synced.length > 0 ? { ...collection, articles: synced } : collection;
          }),
        );
      } catch (error) {
        console.error('Error fetching press articles:', error);
        // Se mantienen las notas estáticas ya cargadas en el estado inicial.
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  return collections;
}
