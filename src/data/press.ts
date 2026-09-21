import type { PressCollection } from '@/types/press';

/**
 * Notas de prensa que se muestran en la seccion "Prensa".
 *
 * COMO AGREGAR UNA NUEVA NOTA:
 * 1. Ubica la coleccion correspondiente ("brujula-de-inversion" o
 *    "el-equipaje-de-la-ruta-del-chip").
 * 2. Agrega un objeto al inicio del arreglo `articles` (las notas se muestran
 *    en el mismo orden del arreglo, de la mas reciente a la mas antigua).
 * 3. Escribe `title` y `excerpt` en su idioma original (espanol): NO se traducen,
 *    porque el articulo enlazado en el MINECO tambien esta en espanol.
 * 4. Usa `mineco('/slug-del-articulo')` para la URL y para la imagen destacada.
 *
 * Nota: el nombre y la descripcion de cada coleccion (title/description) si son
 * bilingues ({ es, en }); solo el contenido de las notas queda en su idioma original.
 */

const MINECO_BASE = 'https://www.mineco.gob.gt';

/** Construye una URL absoluta del portal del MINECO a partir de una ruta. */
const mineco = (path: string): string => `${MINECO_BASE}${path}`;

export const PRESS_COLLECTIONS: PressCollection[] = [
  {
    id: 'brujula-de-inversion',
    title: {
      es: 'Brújula de Inversión',
      en: 'Investment Compass',
    },
    description: {
      es: 'Columna de análisis de ProGuatemala sobre las ventajas competitivas del país, sus sectores estratégicos y las tendencias de la inversión extranjera directa.',
      en: "ProGuatemala's analysis column on the country's competitive advantages, its strategic sectors and foreign direct investment trends.",
    },
    sourceUrl: mineco('/brujula-de-inversion'),
    articles: [
      {
        id: 'cuando-la-sostenibilidad-define-una-decision-de-inversion',
        title: 'Cuando la sostenibilidad define una decisión de inversión',
        excerpt:
          'La inversión extranjera directa continúa como una herramienta fundamental para impulsar el crecimiento económico, generar empleo, promover la transferencia de tecnología e insertar al país en cadenas globales de valor.',
        url: mineco('/cuando-la-sostenibilidad-define-una-decision-de-inversion'),
        image: mineco('/images/WhatsApp%20Image%202026-09-08%20at%208.48.58%20AM.jpeg'),
        date: '2026-09-08',
      },
      {
        id: 'ecosistema-de-becas',
        title:
          'Ecosistema de becas: una herramienta estratégica para la formación de talento especializado en electrónica y tecnología',
        excerpt:
          'El desarrollo del talento especializado fortalece la propuesta de Guatemala para atraer inversión extranjera en sectores de alto valor agregado.',
        url: mineco(
          '/ecosistema-de-becas-una-herramienta-estrategica-para-la-formacion-de-talento-especializado-en-electronica-y-tecnologia'
        ),
        image: mineco('/images/WhatsApp%20Image%202026-08-24%20at%203.03.08%20PMcopy.jpeg'),
        date: '2026-08-25',
      },
      {
        id: 'bebidas-no-alcoholicas',
        title: 'Bebidas no alcohólicas en Guatemala: un sector con oportunidades para la inversión',
        excerpt:
          'Un mercado interno amplio, crecimiento real, producción nacional consolidada, baja dependencia de importaciones y acceso a mercados internacionales convergen en una industria atractiva para el inversionista.',
        url: mineco('/bebidas-no-alcoholicas-en-guatemala-un-sector-con-oportunidades-para-la-inversion'),
        image: mineco('/images/WhatsApp%20Image%202026-08-11%20at%208.32.26%20AM.jpeg'),
        date: '2026-08-11',
      },
      {
        id: 'infraestructura-ventaja-competitiva',
        title: 'Guatemala: la infraestructura como palanca de una ventaja competitiva real',
        excerpt:
          'Hay países que esperan la inversión y hay países que la construyen. Guatemala apuesta por la infraestructura como palanca de una ventaja competitiva real.',
        url: mineco('/guatemala-la-infraestructura-como-palanca-de-una-ventaja-competitiva-real'),
        image: mineco('/images/brujula-inversion/BRUJULA%2022%20DE%20JULIO.jpeg'),
        date: '2026-07-22',
      },
      {
        id: 'talento-guatemalteco-industria-global',
        title: 'Talento guatemalteco para una industria global en transformación',
        excerpt:
          'La inteligencia artificial acelera la demanda de capacidades especializadas en semiconductores, y el talento guatemalteco se posiciona para una industria global en transformación.',
        url: mineco('/talento-guatemalteco-para-una-industria-global-en-transformacion'),
        image: mineco('/images/brujula-inversion/Talento_Guatemalteco.jpeg'),
        date: '2026-07-07',
      },
      {
        id: 'invertir-donde-la-estrategia-se-convierte-en-ventaja',
        title: 'Guatemala: invertir donde la estrategia se convierte en ventaja',
        excerpt:
          'En un entorno global más exigente, Guatemala ofrece condiciones concretas para empresas que buscan operar con estabilidad, acceder a nuevos mercados y crecer con mayor confianza.',
        url: mineco('/guatemala-invertir-donde-la-estrategia-se-convierte-en-ventaja'),
        image: mineco('/images/acuerdos/Brujula.jpg'),
        date: '2026-06-22',
      },
      {
        id: 'guatemala-gana-relevancia',
        title: 'Guatemala gana relevancia como destino de inversión en un entorno global más competitivo',
        excerpt:
          'La diversificación de los flujos de inversión extranjera directa muestra el potencial del país como plataforma estratégica para empresas que buscan estabilidad, acceso regional y crecimiento.',
        url: mineco('/guatemala-gana-relevancia-como-destino-de-inversion-en-un-entorno-global-mas-competitivo'),
        image: mineco(
          '/images/brujula-inversion/Guatemala%20como%20destino%20de%20inversion%20en%20un%20entorno%20mas%20competitivo.jpeg'
        ),
        date: '2026-05-21',
      },
      {
        id: 'talento-humano-semiconductores',
        title:
          '¿Qué talento humano necesita Guatemala para integrarse a la cadena de valor de los semiconductores?',
        excerpt:
          'Guatemala ha identificado una oportunidad estratégica para integrarse a la industria global de semiconductores mediante actividades de diseño y pruebas no físicas, una etapa de alto valor agregado.',
        url: mineco(
          '/que-talento-humano-necesita-guatemala-para-integrarse-a-la-cadena-de-valor-de-los-semiconductores'
        ),
        image: mineco('/images/226A0179.jpg'),
        date: '2026-04-10',
      },
      {
        id: 'escuintla-nodo-del-pacifico',
        title: 'Escuintla: el nodo del Pacífico que conecta abastecimiento, logística y producción',
        excerpt:
          'El departamento se consolida como un punto estratégico para la economía guatemalteca al concentrar infraestructura portuaria, tejido empresarial y actividad productiva.',
        url: mineco('/escuintla-el-nodo-del-pacifico-que-conecta-abastecimiento-logistica-y-produccion'),
        image: mineco('/images/Portada.jpeg'),
        date: '2026-03-23',
      },
      {
        id: 'tendencias-globales-ied-2026',
        title:
          'Tendencias globales de la Inversión Extranjera Directa para 2026 y el posicionamiento estratégico de Guatemala',
        excerpt:
          'El año 2026 se perfila con un entorno donde la incertidumbre macroeconómica, las tensiones geopolíticas y el reordenamiento de las cadenas globales de valor seguirán incidiendo en los flujos de inversión.',
        url: mineco(
          '/tendencias-globales-de-la-inversion-extranjera-directa-para-2026-y-el-posicionamiento-estrategico-de-guatemala'
        ),
        image: mineco('/images/brujula-inversion/Portada_br%C3%BAjula.png'),
        date: '2026-02-10',
      },
    ],
  },
  {
    id: 'el-equipaje-de-la-ruta-del-chip',
    title: {
      es: 'El Equipaje de la Ruta del Chip',
      en: 'The Ruta del Chip Travel Log',
    },
    description: {
      es: 'Bitácora de las misiones internacionales de la Ruta del Chip: aprendizajes de los ecosistemas de semiconductores y tecnología que Guatemala visita para fortalecer su estrategia.',
      en: 'A log of the Ruta del Chip international missions: lessons from the semiconductor and technology ecosystems Guatemala visits to strengthen its strategy.',
    },
    sourceUrl: mineco('/el-equipaje-de-la-ruta-del-chip'),
    articles: [
      {
        id: 'taipei-taiwan',
        title: 'Taipéi, Taiwán',
        excerpt:
          'La Ruta del Chip regresó a Taiwán en septiembre de 2025 para profundizar en las capacidades que Guatemala necesita desarrollar para integrarse a la industria de semiconductores.',
        url: mineco('/taipei-taiwan'),
        image: mineco('/images/WhatsApp%20Image%202026-08-13%20at%2012.53.58%20PM.jpeg'),
      },
      {
        id: 'barranquilla-colombia',
        title: 'Barranquilla, Colombia',
        excerpt:
          'Durante más de 15 años, Barranquilla ha desarrollado un sector de BPO y Contact Centers a partir de la articulación entre inversión, infraestructura de telecomunicaciones, talento y colaboración público-privada.',
        url: mineco('/barranquilla-colombia'),
        image: mineco('/images/WhatsApp%20Image%202026-08-26%20at%209.01.19%20AM.jpeg'),
      },
      {
        id: 'taiwan',
        title: 'Taiwán',
        excerpt:
          'El primer viaje de la Ruta del Chip llevó a Guatemala a Taiwán y Singapur para estudiar cómo se desarrollaron dos ecosistemas vinculados con industrias de alta tecnología.',
        url: mineco('/taiwan'),
        image: mineco('/images/COVER%2005.jpg-2.jpeg'),
      },
      {
        id: 'viaje-1-taiwan-y-singapur',
        title: 'Taiwán y Singapur',
        excerpt:
          'La industria electrónica y de semiconductores ocupa un lugar estratégico en la economía mundial por su papel en el desarrollo tecnológico y la generación de empleos de alto valor.',
        url: mineco('/viaje-1-taiwan-y-singapur'),
        image: mineco('/images/COVER%2005.jpg-2.jpeg'),
      },
    ],
  },
];
