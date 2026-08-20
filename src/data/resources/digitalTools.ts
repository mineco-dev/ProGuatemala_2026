import type { Localized } from '@/i18n';
import type { DigitalTool } from '@/types/resource';

/** Los nombres oficiales de las ventanillas se mantienen; la version inglesa anade la glosa. */
export const digitalTools: Localized<DigitalTool[]> = {
  es: [
    {
      name: 'VUCE - Ventanilla Única de Comercio Exterior',
      description: 'Plataforma para trámites de importación y exportación',
      url: 'https://www.vuce.gob.gt/',
      type: 'Portal Gubernamental',
    },
    {
      name: 'VUPE - Ventanilla Única de Permisos de Edificación',
      description: 'Sistema para permisos de construcción y edificación',
      url: 'https://vupe.minfin.gob.gt/',
      type: 'Portal Gubernamental',
    },
    {
      name: 'VAC - Ventanilla Ágil de la Construcción',
      description: 'Facilitación de trámites para proyectos de construcción',
      url: 'https://www.mineco.gob.gt/ventanilla-agil-de-la-construccion',
      type: 'Portal Gubernamental',
    },
    {
      name: 'VAI - Ventanilla Ágil de la Industria',
      description: 'Trámites empresariales e industriales simplificados',
      url: 'https://www.mineco.gob.gt/ventanilla-agil-de-la-industria',
      type: 'Portal Gubernamental',
    },
  ],
  en: [
    {
      name: 'VUCE - Ventanilla Única de Comercio Exterior (Foreign Trade Single Window)',
      description: 'Platform for import and export procedures',
      url: 'https://www.vuce.gob.gt/',
      type: 'Government Portal',
    },
    {
      name: 'VUPE - Ventanilla Única de Permisos de Edificación (Building Permits Single Window)',
      description: 'System for construction and building permits',
      url: 'https://vupe.minfin.gob.gt/',
      type: 'Government Portal',
    },
    {
      name: 'VAC - Ventanilla Ágil de la Construcción (Fast-Track Construction Window)',
      description: 'Streamlined procedures for construction projects',
      url: 'https://www.mineco.gob.gt/ventanilla-agil-de-la-construccion',
      type: 'Government Portal',
    },
    {
      name: 'VAI - Ventanilla Ágil de la Industria (Fast-Track Industry Window)',
      description: 'Simplified business and industrial procedures',
      url: 'https://www.mineco.gob.gt/ventanilla-agil-de-la-industria',
      type: 'Government Portal',
    },
  ],
};
