export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  file_url: string | null;
  size: string;
  downloads: number;
  published_date: string;
  is_featured: boolean;
  language: string;
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
