import type { Language, Localized } from '@/i18n';

/**
 * Vistas de Tableau Public por idioma, en formato "Libro/Hoja".
 *
 * Cada tablero esta publicado dos veces en Tableau Public —un libro en espanol
 * y otro en ingles—, asi que el selector de idioma del sitio no solo cambia el
 * idioma del visor: cambia el libro que se carga. Los nombres provienen del
 * proyecto `proguatemala-landing`, que es donde se publican y actualizan.
 */
export type DashboardViz = Localized<string>;

export const dashboards = {
  /** Inversion Extranjera Directa. Se usa en el inicio. */
  fdi: {
    es: 'TablerodeInversinExtranjeraDirecta/Historia1',
    en: 'ForeignDirectInvestmentDashboard_17871606103370/Historia1',
  },

  /** Sectores estrategicos. Se usa en la pagina de sectores y en su modal. */
  strategicSectors: {
    es: 'TablerodeSectoresEstratgicos/Historia1',
    en: 'StrategicSectorsDashboard/Historia1',
  },

  /**
   * Estadisticas departamentales (por que Guatemala). El libro se republico:
   * `proguatemala-landing` ya apunta a "...atractivosFinal/Estadsticas-
   * Departamentales", que sustituye al anterior "...Finalizado/Polosde-
   * DesarrolloEconmico...". Todavia no existe una version en ingles publicada,
   * asi que ambos idiomas apuntan al mismo libro; solo cambia el idioma del
   * visor.
   */
  departmentStats: {
    es: 'EstadsticasdepartamentosatractivosFinal/EstadsticasDepartamentales',
    en: 'EstadsticasdepartamentosatractivosFinal/EstadsticasDepartamentales',
  },

  /** Comparativo regional (Guatemala vs. Region). Se usa en por que Guatemala. */
  regionalComparison: {
    es: 'Indicadoreseconmicosdelaregin/Portada',
    en: 'RegionalEconomicIndicator/Portada',
  },
} satisfies Record<string, DashboardViz>;

/** Codigo de idioma que entiende el visor de Tableau. */
export const tableauLanguage = (language: Language): string =>
  language === 'es' ? 'es-ES' : 'en-US';
