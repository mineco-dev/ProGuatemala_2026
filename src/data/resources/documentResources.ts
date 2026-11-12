import type { Language, Localized } from '@/i18n';
import type { Resource } from '@/types/resource';
import { onePagers } from '@/data/onePagers';
import { sectors } from '@/data/sectorsData';

/**
 * Centraliza en el catalogo de Recursos los PDF que viven dispersos por el
 * sitio: las fichas sectoriales (una por sector, en Sectores de Inversion) y
 * los one pagers generales e incentivos legales (Inicio, Marco Legal, etc.).
 *
 * Reutilizan las mismas urls que ya publica `onePagers` / `sectorOnePagers`,
 * asi que no hay que mantener los enlaces en dos lugares: aqui solo se les da
 * un titulo, una categoria y el shape `Resource` que entiende la pagina.
 */

/** Campos comunes a todo documento estatico; evita repetirlos en cada builder. */
const baseResource = {
  type: 'PDF',
  size: null,
  downloads: 0,
  is_featured: false,
} as const;

/** Fichas sectoriales: una tarjeta por sector con one pager en el idioma activo. */
export function sectorDocsAsResources(
  language: Language,
  description: string,
  publishedDate: string,
): Resource[] {
  const seen = new Set<string>();
  const result: Resource[] = [];

  // `pdfUrl` ya viene resuelto al idioma activo desde `sectorsData`. Se omiten
  // los sectores sin ficha y los enlaces repetidos (p. ej. servicios
  // empresariales y compartidos publican el mismo PDF).
  for (const sector of sectors[language]) {
    if (!sector.pdfUrl || seen.has(sector.pdfUrl)) continue;
    seen.add(sector.pdfUrl);

    result.push({
      ...baseResource,
      id: `sector-${sector.id}`,
      title: sector.name,
      description,
      category: 'sectors',
      file_url: sector.pdfUrl,
      published_date: publishedDate,
      language: language.toUpperCase(),
    });
  }

  return result;
}

type OnePagerKey = keyof typeof onePagers;

/** One pager general con su categoria y titulo por idioma. */
interface GeneralDoc {
  key: OnePagerKey;
  category: 'institutional' | 'legal';
  title: Localized<string>;
}

/**
 * One pagers generales e incentivos. Los institucionales presentan el pais y
 * la estrategia; los de marco legal detallan cada regimen de incentivos.
 */
const GENERAL_DOCS: GeneralDoc[] = [
  {
    key: 'welcomePackage',
    category: 'institutional',
    title: { es: 'Paquete de bienvenida (Trifoliar)', en: 'Welcome package (Trifold)' },
  },
  {
    key: 'country',
    category: 'institutional',
    title: { es: 'One Pager País', en: 'Country One Pager' },
  },
  {
    key: 'strategy',
    category: 'institutional',
    title: {
      es: 'Estrategia Nacional de Atracción de Inversiones',
      en: 'National Investment Attraction Strategy',
    },
  },
  {
    key: 'energySupply',
    category: 'legal',
    title: { es: 'Suministro de energía', en: 'Energy supply' },
  },
  {
    key: 'taxCreditRefund',
    category: 'legal',
    title: { es: 'Devolución de crédito fiscal', en: 'Tax credit refund' },
  },
  {
    key: 'partTimeWork',
    category: 'legal',
    title: { es: 'Trabajo a tiempo parcial', en: 'Part-time work' },
  },
  {
    key: 'freeZones',
    category: 'legal',
    title: { es: 'Zonas francas', en: 'Free zones' },
  },
  {
    key: 'zdeep',
    category: 'legal',
    title: { es: 'ZDEEP (Decreto 30-2008)', en: 'ZDEEP (Decree 30-2008)' },
  },
  {
    key: 'maquilaLaw',
    category: 'legal',
    title: { es: 'Ley de Maquila (Decreto 29-89)', en: 'Maquila Law (Decree 29-89)' },
  },
];

/** Descripcion por categoria para los one pagers generales. */
interface GeneralDescriptions {
  institutional: string;
  legal: string;
}

/** One pagers generales e incentivos legales publicados en el idioma activo. */
export function generalDocsAsResources(
  language: Language,
  descriptions: GeneralDescriptions,
  publishedDate: string,
): Resource[] {
  return GENERAL_DOCS.flatMap((doc) => {
    const fileUrl = onePagers[doc.key][language];
    // Algunos materiales solo estan publicados en un idioma: se omiten en el otro.
    if (!fileUrl) return [];

    return [
      {
        ...baseResource,
        id: `doc-${doc.key}`,
        title: doc.title[language],
        description: descriptions[doc.category],
        category: doc.category,
        file_url: fileUrl,
        published_date: publishedDate,
        language: language.toUpperCase(),
      },
    ];
  });
}
