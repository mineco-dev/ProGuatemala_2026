import type { Localized } from '@/i18n';
import type { ChipVideo } from '@/types/resource';
import { chipAssetUrl } from './chipAssets';

/**
 * Archivo y miniatura de cada video, en el orden en que se listan. Salen del
 * micrositio `ruta-del-chip`: los dos primeros son los testimoniales y los
 * tres siguientes, la seccion de aplicaciones.
 */
const FILES = [
  { file: 'Ruta del chip video 1.mp4', poster: 'miniaturas/01_VV_RDC.jpg' },
  { file: 'Ruta del chip video 2.mp4', poster: 'miniaturas/03_VV_RDC.jpg' },
  { file: 'Video Watchband ProGuate V 1.mp4', poster: 'miniaturas/02_VV_RDC.jpg' },
  { file: 'Video Sensor Agroclimatico.mp4', poster: 'miniaturas/04_VV_RDC.jpg' },
  { file: 'Video Acelegografica.mp4', poster: 'miniaturas/05_VV_RDC.jpg' },
] as const;

interface VideoText {
  name: string;
  description: string;
}

const TEXTS: Localized<VideoText[]> = {
  es: [
    {
      name: 'Ruta del Chip: talento, empleo y desarrollo',
      description:
        'Conoce por qué la Ruta del Chip impulsa empleo, talento joven y desarrollo económico, y cómo el trabajo conjunto entre sector público y privado abre oportunidades reales para el país.',
    },
    {
      name: 'Telecomunicaciones: la base que hace posible la Ruta del Chip',
      description:
        'Descubre cómo la Ruta del Chip articula telecomunicaciones, operadores e industria para crear bases tecnológicas, habilitar investigación y comercio, y preparar al país para una economía digital.',
    },
    {
      name: 'Aplicaciones: Wearables',
      description: 'Aplicación de la Ruta del Chip en dispositivos vestibles.',
    },
    {
      name: 'Aplicaciones: Agrotech',
      description: 'Aplicación de la Ruta del Chip en sensores agroclimáticos.',
    },
    {
      name: 'Aplicaciones: Sensores',
      description: 'Aplicación de la Ruta del Chip en sensores.',
    },
  ],
  en: [
    {
      name: 'Ruta del Chip: talent, jobs and development',
      description:
        'Find out why Ruta del Chip drives jobs, young talent and economic development, and how public and private sectors working together open real opportunities for the country.',
    },
    {
      name: 'Telecommunications: the foundation behind Ruta del Chip',
      description:
        'See how Ruta del Chip brings together telecommunications, operators and industry to build technological foundations, enable research and trade, and prepare the country for a digital economy.',
    },
    {
      name: 'Applications: Wearables',
      description: 'Ruta del Chip applied to wearable devices.',
    },
    {
      name: 'Applications: Agrotech',
      description: 'Ruta del Chip applied to agroclimatic sensors.',
    },
    {
      name: 'Applications: Sensors',
      description: 'Ruta del Chip applied to sensors.',
    },
  ],
};

const build = (texts: VideoText[]): ChipVideo[] =>
  texts.map((text, index) => ({
    id: index + 1,
    name: text.name,
    description: text.description,
    link: chipAssetUrl(FILES[index].file),
    poster: chipAssetUrl(FILES[index].poster),
  }));

/**
 * Videos de la estrategia Ruta del Chip Guatemala. Estan hablados en espanol;
 * solo se traducen el titulo y la descripcion con que se listan.
 */
export const chipVideos: Localized<ChipVideo[]> = {
  es: build(TEXTS.es),
  en: build(TEXTS.en),
};
