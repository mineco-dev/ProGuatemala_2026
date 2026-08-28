/**
 * Tipos del asistente del sitio. El chat no usa un modelo de lenguaje: responde
 * unicamente con contenido oficial que ya vive en `src/data` y `src/i18n`, de
 * modo que nunca puede inventar una cifra ni un beneficio fiscal.
 */

export type KnowledgeCategory =
  | 'sector'
  | 'incentive'
  | 'advantage'
  | 'park'
  | 'service'
  | 'faq'
  | 'contact'
  | 'country'
  | 'process';

/** Unidad minima de conocimiento: un tema del sitio con su enlace a la pagina. */
export interface KnowledgeEntry {
  id: string;
  category: KnowledgeCategory;
  /** Titulo mostrado como encabezado de la respuesta. */
  title: string;
  /** Cuerpo de la respuesta, ya formateado con vinetas. */
  body: string;
  /**
   * Terminos y sinonimos con los que el usuario preguntaria por el tema.
   * Son la senal fuerte del buscador: si la consulta coincide aqui o en el
   * titulo, la respuesta se considera pertinente.
   */
  keywords: string[];
  /**
   * Texto derivado del contenido (beneficios, requisitos, cadena de valor).
   * Ayuda a afinar el orden de los resultados, pero por si solo no basta para
   * dar por buena una respuesta: evita que una palabra suelta del cuerpo
   * dispare un tema que no tiene que ver con la pregunta.
   */
  related?: string[];
  /** Ruta interna donde el usuario amplia la informacion. */
  link?: string;
}

export interface SearchResult {
  entry: KnowledgeEntry;
  score: number;
  /** Proporcion de terminos de la consulta que aparecen en la entrada (0-1). */
  coverage: number;
  /** Mayor peso informativo entre los terminos que coinciden en titulo o keywords. */
  strongIdf: number;
  /** La consulta completa cabe dentro del titulo de la entrada. */
  titleMatch: boolean;
}
