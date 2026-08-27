export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  /** Division dentro de la categoria. Hoy solo la usa Ruta del Chip. */
  subcategory?: string;
  type: string;
  file_url: string | null;
  /** Peso del archivo, ej. "2.4 MB". Nulo cuando no se conoce. */
  size: string | null;
  downloads: number;
  published_date: string;
  is_featured: boolean;
  language: string;
  /** Miniatura del recurso. Hoy solo la traen los videos de la Ruta del Chip. */
  poster?: string;
}

export interface ResourceCategory {
  id: string;
  name: string;
}

export interface ResourceCategoryWithCount extends ResourceCategory {
  count: number;
}

export interface DigitalTool {
  name: string;
  description: string;
  url: string;
  type: string;
}

/** Documento PDF de la estrategia Ruta del Chip. */
export interface ChipDocument {
  id: number;
  name: string;
  link: string;
}

/** Video de la estrategia Ruta del Chip. */
export interface ChipVideo {
  id: number;
  name: string;
  description: string;
  link: string;
  /** Fotograma de portada, el mismo que usa el micrositio. */
  poster: string;
}
