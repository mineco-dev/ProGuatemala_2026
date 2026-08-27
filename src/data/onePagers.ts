import type { Localized } from '@/i18n';

/**
 * Origen de los PDF institucionales de ProGuatemala: viven en el portal del
 * Ministerio de Economia y quien los publica y actualiza es el proyecto
 * `proguatemala-landing`. Las rutas de este archivo son copia de las suyas, y
 * es ahi donde hay que mirar cuando se sustituye un documento.
 */
const BASE = 'https://mineco.gob.gt';

const ES = '/files/proguatemala/es';
const EN = '/files/proguatemala/en';

/**
 * Documento en cada idioma. Es parcial a proposito: hay materiales que solo
 * estan publicados en uno de los dos, y quien los consume ya oculta el enlace
 * cuando falta.
 */
export type LocalizedDocument = Partial<Localized<string>>;

/**
 * Los nombres de archivo traen espacios, acentos y parentesis, asi que las
 * rutas se guardan sin codificar y se codifican aqui una sola vez, tramo a
 * tramo para no tocar las barras.
 */
const url = (path: string): string =>
  `${BASE}${path.split('/').map(encodeURIComponent).join('/')}`;

const toUrls = (paths: LocalizedDocument): LocalizedDocument => {
  const urls: LocalizedDocument = {};
  if (paths.es) urls.es = url(paths.es);
  if (paths.en) urls.en = url(paths.en);
  return urls;
};

/** Documentos generales: trifoliares, one pagers de pais e incentivos. */
export const onePagers = {
  /** Trifoliar / paquete de bienvenida al inversionista. */
  welcomePackage: toUrls({
    es: `${ES}/trifoliar/TRIFOLIAR PROGUATE 2026-1.pdf`,
    en: `${EN}/trifoliar/TRIFOLIAR PROGUATE 2026 INGLES.pdf`,
  }),

  /** One Pager Pais: el resumen de una pagina sobre Guatemala. */
  country: toUrls({
    es: `${ES}/ONE PAGER PAIS PROGUATEMALA 2026.pdf`,
    en: `${EN}/ONE PAGER PAIS PROGUATEMALA INGLES 2026.pdf`,
  }),

  /** Estrategia Nacional de Atraccion de Inversiones. */
  strategy: toUrls({
    es: `${ES}/Atraccion_Inversiones-Espanol.pdf`,
    en: `${EN}/National-Strategy_VF-.pdf`,
  }),

  energySupply: toUrls({
    es: `${ES}/ONE PAGER SUMINSTRO ENERGIA 042026.pdf`,
    en: `${EN}/Suministro-energia Ingles.pdf`,
  }),

  taxCreditRefund: toUrls({
    es: `${ES}/ONE-PAGER-DEVOLUCION-DE-CREDITO-FISCAL-1.pdf`,
    en: `${EN}/ONE-PAGER-DEVOLUCION-DE-CREDITO-INGLESFISCAL.pdf`,
  }),

  partTimeWork: toUrls({
    es: `${ES}/ONE-PAGER-TRABAJO-A-TIEMPO-PARCIAL.pdf`,
    en: `${EN}/ONE-PAGER-part-time-.pdf`,
  }),

  freeZones: toUrls({
    es: `${ES}/ONE-PAGER-ZONAS-FRANCAS.pdf`,
    en: `${EN}/ONE-PAGER-ZONAS-FRANCAS-ingles.pdf`,
  }),

  /** Zonas de Desarrollo Economico Especial Publica (Decreto 30-2008). */
  zdeep: toUrls({
    es: `${ES}/ONE-PAGER-ZDEEP-2026.pdf`,
    en: `${EN}/ONE-PAGER-ingles-ZDEEP-2026.pdf`,
  }),

  /** Ley de Maquila y reformas (Decreto 29-89). */
  maquilaLaw: toUrls({
    es: `${ES}/ONE-PAGER-29-89-LEY-MAQUILA-Y-REFORMAS-OTRAS-INDUSTRIAS-3-1.pdf`,
    en: `${EN}/ONE-PAGER-29-89-LEY-MAQUILA-Y-REFORMAS-OTRAS-INDUSTRIAS-3-2.pdf`,
  }),
} satisfies Record<string, LocalizedDocument>;

/**
 * One pager de cada sector, por `id` de sector. Los dos listados del landing
 * no cubren exactamente los mismos sectores: servicios de salud solo esta en
 * espanol y dispositivos medicos solo en ingles, asi que esas dos entradas
 * traen un unico idioma.
 */
export const sectorOnePagers: Record<string, LocalizedDocument> = {
  'alimentos-procesados': toUrls({
    es: `${ES}/sectoriales/ONE PAGER SECTOR ALIMENTOS 2026.pdf`,
    en: `${EN}/sectoriales/Processed-Foods.pdf`,
  }),
  'bebidas-no-alcoholicas': toUrls({
    es: `${ES}/sectoriales/ONE PAGER SECTOR BEBIDAS 2026.pdf`,
    en: `${EN}/sectoriales/7. Strategic Sector Non-Alcoholic Beverages.pdf`,
  }),
  'vestuario-textil': toUrls({
    es: `${ES}/sectoriales/ONE PAGER TEXTILES PROGUATEMALA 2026.pdf`,
    // Sin extension: es tal cual lo publica el landing. Ver nota en el README
    // del cambio; si resulta ser un error, aqui se le anade ".pdf".
    en: `${EN}/sectoriales/6. Strategic Sector Apparel and Textiles`,
  }),
  quimicos: toUrls({
    es: `${ES}/sectoriales/ONE PAGER QUIMICOS 2026.pdf`,
    en: `${EN}/sectoriales/3. Strategic Sector Chemicals.pdf`,
  }),
  farmaceuticos: toUrls({
    es: `${ES}/sectoriales/ONE PAGER FARMA 2026.pdf`,
    en: `${EN}/sectoriales/2. Strategic Sector Pharmaceutical.pdf`,
  }),
  'tics-software': toUrls({
    es: `${ES}/sectoriales/ONE PAGER ITCs y Software 2026.pdf`,
    en: `${EN}/sectoriales/4. Strategic Sector ICT and Software.pdf`,
  }),
  'servicios-empresariales': toUrls({
    es: `${ES}/sectoriales/ONE PAGER SERVICIOS EMPRESARIALES 2026.pdf`,
    en: `${EN}/sectoriales/Business Services, Contact Centers and BPOs.pdf`,
  }),
  // Comparte documento con servicios empresariales, como en el landing.
  'servicios-compartidos': toUrls({
    es: `${ES}/sectoriales/ONE PAGER SERVICIOS EMPRESARIALES 2026.pdf`,
    en: `${EN}/sectoriales/Business Services, Contact Centers and BPOs.pdf`,
  }),
  'electrico-electronico': toUrls({
    es: `${ES}/sectoriales/ONE PAGER eléctrico-electrónico (autopartes).pdf`,
    en: `${EN}/sectoriales/Strategic Sector electric-electronic (autoparts).pdf`,
  }),
  metalmecanica: toUrls({
    es: `${ES}/sectoriales/ONE PAGER Metalmecánica.pdf`,
    en: `${EN}/sectoriales/Strategic Sector Metalworking.pdf`,
  }),
  turismo: toUrls({
    es: `${ES}/sectoriales/ONE PAGER TURISMO 2026.pdf`,
    en: `${EN}/sectoriales/9. Strategic Sector Tourism.pdf`,
  }),
  'servicios-salud': toUrls({
    es: `${ES}/sectoriales/ONE PAGER SERVICIOS DE SALUD 2026.pdf`,
  }),
  'dispositivos-medicos': toUrls({
    en: `${EN}/sectoriales/Medical Devices.pdf`,
  }),
};
