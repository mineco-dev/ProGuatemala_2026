import type { Localized } from '@/i18n';
import type { ResourceCategory } from '@/types/resource';

export const resourceCategories: Localized<ResourceCategory[]> = {
  es: [
    { id: 'all', name: 'Todos' },
    { id: 'ruta_chip', name: 'Ruta del Chip' },
    { id: 'guides', name: 'Guías' },
    { id: 'reports', name: 'Informes' },
    { id: 'legal', name: 'Marco Legal' },
    { id: 'sectors', name: 'Sectores' },
    { id: 'videos', name: 'Videos' },
  ],
  en: [
    { id: 'all', name: 'All' },
    { id: 'ruta_chip', name: 'Ruta del Chip' },
    { id: 'guides', name: 'Guides' },
    { id: 'reports', name: 'Reports' },
    { id: 'legal', name: 'Legal Framework' },
    { id: 'sectors', name: 'Sectors' },
    { id: 'videos', name: 'Videos' },
  ],
};

/** Id de la categoria que tiene subfiltro. */
export const RUTA_CHIP_CATEGORY = 'ruta_chip';

/**
 * Subfiltro de Ruta del Chip. El micrositio publica sus PDF en dos bloques
 * —los descargables de la estrategia y los estudios preliminares que la
 * sustentan— y aqui se conserva esa division, porque son materiales de peso y
 * proposito muy distintos.
 */
export const chipSubcategories: Localized<ResourceCategory[]> = {
  es: [
    { id: 'all', name: 'Ambos' },
    { id: 'descargables', name: 'Descargables' },
    { id: 'preliminares', name: 'Estudios Preliminares' },
  ],
  en: [
    { id: 'all', name: 'Both' },
    { id: 'descargables', name: 'Downloads' },
    { id: 'preliminares', name: 'Preliminary Studies' },
  ],
};
