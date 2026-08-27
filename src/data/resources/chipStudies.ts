import type { Localized } from '@/i18n';
import type { ChipDocument } from '@/types/resource';
import { chipAssetUrl } from './chipAssets';

/**
 * Nombre de archivo de cada estudio, en el orden en que se listan. Cuelgan de
 * una subcarpeta propia dentro de `images/ruta_del_chip/`.
 */
const FILES = [
  'Analisis_de_Competitividad_y_Benchmarking_EMS_mundo.pdf',
  'Analisis_de_subsectores_EMS_y_CGV_mundo.pdf',
  'Cadena_de_valor_EMS_y_Refrigeracion_Guatemala.pdf',
  'Electronicos_y_Refrigeracion_Guatemala.pdf',
  'Factores_competitividad_Manufactura_EMS_y_Refrigeracion_Guatemala.pdf',
  'Manufactura_de_Electronicos_(resumen).pdf',
  'Manufactura_de_Electronicos_(resumen)_INGLES.pdf',
  'Manufactura_de_Empaque_Guatemala.pdf',
  'Manufactura_de_Metalmecanica_Guatemala.pdf',
  'Manufactura_de_Plasticos_Guatemala.pdf',
  'RETOS_Y_OPORTUNIDADES_MANUFACTURAELECTRONICA_GUATEMALA.pdf',
  'Retos_y_Oportunidades_para_manufactura_electronicos_INGLES.pdf',
  'Talento_Humano_Certificaciones_Modelos_de_Contratacion_mundo.pdf',
] as const;

/** Ids (1-based) cuyo PDF esta redactado en ingles. */
export const ENGLISH_CHIP_STUDY_IDS = new Set([7, 12]);

const NAMES: Localized<string[]> = {
  es: [
    'Análisis de competitividad y benchmarking',
    'Análisis de subsectores EMS y su cadena global de valor',
    'Cadena de valor EMS y Refrigeración y subsectores vinculados',
    'Manufactura en Guatemala, Electrónicos y Refrigeración (I)',
    'Manufactura en Guatemala, Electrónicos y Refrigeración (II)',
    'Manufactura de Electrónicos (resumen)',
    'Manufactura de Electrónicos (resumen en inglés)',
    'Manufactura de Empaque (I)',
    'Manufactura de Empaque (II)',
    'Manufactura de Plásticos',
    'Retos y Oportunidades para la Atracción de Inversión en el Sector de Manufactura de Equipos Electrónicos en Guatemala',
    'Challenges and opportunities for attracting investment for the Electronics Manufacturing sector in Guatemala',
    'Talento Humano, Certificaciones y Modelos de Contratación',
  ],
  en: [
    'Competitiveness analysis and benchmarking',
    'EMS subsector analysis and its global value chain',
    'EMS and refrigeration value chain and related subsectors',
    'Manufacturing in Guatemala: electronics and refrigeration (I)',
    'Manufacturing in Guatemala: electronics and refrigeration (II)',
    'Electronics manufacturing (summary)',
    'Electronics manufacturing (summary, English)',
    'Packaging manufacturing (I)',
    'Packaging manufacturing (II)',
    'Plastics manufacturing',
    'Challenges and opportunities for attracting investment in the electronic equipment manufacturing sector in Guatemala',
    'Challenges and opportunities for attracting investment for the Electronics Manufacturing sector in Guatemala',
    'Human talent, certifications and hiring models',
  ],
};

const build = (names: string[]): ChipDocument[] =>
  names.map((name, index) => ({
    id: index + 1,
    name,
    link: chipAssetUrl(`estudios_preliminares/${FILES[index]}`),
  }));

/**
 * Estudios preliminares de la Ruta del Chip: la investigacion sectorial previa
 * a la estrategia. En el micrositio se publican en un bloque aparte de los
 * descargables, y aqui esa division se conserva como subfiltro.
 */
export const chipStudies: Localized<ChipDocument[]> = {
  es: build(NAMES.es),
  en: build(NAMES.en),
};
