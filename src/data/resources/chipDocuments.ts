import type { Localized } from '@/i18n';
import type { ChipDocument } from '@/types/resource';

/**
 * Origen desde el que se sirven los PDF de la Ruta del Chip.
 *
 * Hoy viven en el portal del Ministerio de Economia. Para servirlos desde este
 * mismo sitio basta con dejar `BASE` vacio y copiar los archivos a
 * `public/images/ruta_del_chip/`; las rutas relativas resultantes son las
 * mismas que usa mineco.gob.gt.
 */
const BASE = 'https://www.mineco.gob.gt';

/** Nombre de archivo de cada documento, en el orden en que se listan. */
const FILES = [
  '0. Ruta del Chip_DESCRIPCION_compressed.pdf',
  '1. ONE PAGER RUTA DEL CHIP_compressed.pdf',
  '2. One Pager Cadena de Valor_compressed.pdf',
  '3. One Pager Diseno Semiconductores_compressed.pdf',
  '8. Industria de Semiconductores - Ruta del Chip Gt_compressed.pdf',
  '4. One Pager Cadena de Valor Prototipado_compressed.pdf',
  '5. One Pager Cuenta Pasos - Ruta del Chip_compressed.pdf',
  '6. One Pager Sensor Agroclimatico_compressed.pdf',
  '7. One Pager Sensor de amenazas_compressed.pdf',
  '10. Eje Talento Humano - Ruta del Chip Gt_compressed.pdf',
  '11. Eje Entorno Empresarial - Ruta del Chip Gt_compressed.pdf',
  '12. Eje Infraestructura y Facilidades - Ruta del Chip Gt_compressed.pdf',
  '13. Eje Politica Publica - Ruta del Chip Gt_compressed.pdf',
  'ONE PAGER RUTA DEL CHIP Ingles.pdf',
] as const;

/** Ids (1-based) cuyo PDF esta redactado en ingles. */
export const ENGLISH_CHIP_DOCUMENT_IDS = new Set([14]);

const NAMES: Localized<string[]> = {
  es: [
    'Presentación Ruta del Chip',
    'Infografía Ruta del Chip',
    'Cadena de valor de semiconductores',
    'Diseño semiconductores',
    'Industria de semiconductores',
    'Cadena de Valor Prototipado',
    'Cuenta Pasos',
    'Sensor Agroclimático',
    'Sensor de Amenazas',
    'Talento Humano',
    'Entorno Empresarial',
    'Infraestructura y Facilidades',
    'Política Pública',
    'Infografía Ruta del Chip (inglés)',
  ],
  en: [
    'Ruta del Chip Presentation',
    'Ruta del Chip Infographic',
    'Semiconductor value chain',
    'Semiconductor design',
    'Semiconductor industry',
    'Prototyping value chain',
    'Step Counter',
    'Agroclimatic Sensor',
    'Threat Sensor',
    'Human Talent',
    'Business Environment',
    'Infrastructure and Facilities',
    'Public Policy',
    'Ruta del Chip Infographic (English)',
  ],
};

const build = (names: string[]): ChipDocument[] =>
  names.map((name, index) => ({
    id: index + 1,
    name,
    link: `${BASE}/images/ruta_del_chip/${encodeURIComponent(FILES[index])}`,
  }));

/**
 * Documentos oficiales e infografias de la estrategia Ruta del Chip Guatemala.
 * El nombre del programa es una marca institucional y se mantiene en espanol.
 */
export const chipDocuments: Localized<ChipDocument[]> = {
  es: build(NAMES.es),
  en: build(NAMES.en),
};
