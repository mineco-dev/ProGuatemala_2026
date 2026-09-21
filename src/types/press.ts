import type { Localized } from '@/i18n';

/**
 * Tipos para la seccion de Prensa.
 * Una "nota de prensa" (PressArticle) pertenece a una coleccion (PressCollection)
 * y enlaza al articulo original publicado en el portal del MINECO.
 *
 * Los datos de la coleccion (title, description) usan `Localized<string>`
 * ({ es, en }) para traducirse al cambiar de idioma. El titulo y el extracto de
 * cada nota, en cambio, se conservan en su IDIOMA ORIGINAL (espanol), porque el
 * articulo enlazado en el portal del MINECO tambien esta publicado en espanol.
 */
export interface PressArticle {
  /** Identificador estable (usar el slug del articulo en mineco.gob.gt). */
  id: string;
  /** Titulo de la nota, en su idioma original (no se traduce). */
  title: string;
  /** Extracto corto (1-2 frases), en su idioma original (no se traduce). */
  excerpt: string;
  /** URL absoluta del articulo publicado en el MINECO. */
  url: string;
  /** URL absoluta de la imagen destacada. Opcional: si falla, se muestra un marcador. */
  image?: string;
  /** Fecha de publicacion en formato ISO (YYYY-MM-DD). Opcional. */
  date?: string;
}

export interface PressCollection {
  /** Identificador de la coleccion. */
  id: string;
  /** Nombre de la coleccion, en espanol e ingles. */
  title: Localized<string>;
  /** Descripcion breve de la coleccion, en espanol e ingles. */
  description: Localized<string>;
  /** URL de la pagina indice de la coleccion en el MINECO. */
  sourceUrl: string;
  /** Notas de prensa que integran la coleccion, de la mas reciente a la mas antigua. */
  articles: PressArticle[];
}
