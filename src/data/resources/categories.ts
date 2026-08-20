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
