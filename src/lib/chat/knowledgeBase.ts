import type { Language } from '@/i18n';
import { faqs, contactInfo } from '@/data/contact';
import {
  applicationSteps,
  incentivePrograms,
  legalFramework,
  protections,
} from '@/data/legalIncentives';
import { digitalTools } from '@/data/resources/digitalTools';
import { isSectorSlug, sectorDetails } from '@/data/sectorDetails';
import { sectors } from '@/data/sectorsData';
import { services } from '@/data/services';
import { advantages } from '@/data/whyGuatemala/advantages';
import { parks } from '@/data/whyGuatemala/parks';
import { ports } from '@/data/whyGuatemala/ports';
import { statistics } from '@/data/whyGuatemala/statistics';
import type { KnowledgeEntry } from './types';

/**
 * Arma la base de conocimiento del chat a partir del contenido que ya publica
 * el sitio. No hay textos duplicados aqui: si cambia una cifra en `src/data`,
 * el chat responde con la cifra nueva sin tocar este archivo.
 */

/**
 * Sinonimos por tema. Son la diferencia entre entender "cuanto pago de
 * impuestos" y no entenderlo: el usuario rara vez escribe el titulo exacto.
 * Se mezclan los dos idiomas a proposito, porque las consultas llegan mezcladas.
 */
const TOPIC_KEYWORDS = {
  sector: [
    'sector', 'sectores', 'industria', 'industrias', 'invertir', 'inversion', 'oportunidad',
    'oportunidades', 'negocio', 'rubro', 'industry', 'invest', 'investment', 'opportunity',
    'business',
  ],
  incentive: [
    'incentivo', 'incentivos', 'fiscal', 'fiscales', 'impuesto', 'impuestos', 'isr', 'iva',
    'arancel', 'aranceles', 'exencion', 'exoneracion', 'beneficio', 'beneficios', 'tributario',
    'regimen', 'ley', 'legal', 'juridico', 'zona', 'franca', 'maquila', 'zdeep', 'tax', 'taxes',
    'exemption', 'tariff', 'duty', 'incentive', 'regime', 'law', 'free', 'trade',
  ],
  park: [
    'parque', 'parques', 'industrial', 'zona', 'zonas', 'franca', 'terreno', 'bodega', 'nave',
    'instalacion', 'infraestructura', 'centro', 'productivo', 'park', 'warehouse', 'land',
    'facility', 'infrastructure',
  ],
  contact: [
    'contacto', 'contactar', 'telefono', 'correo', 'email', 'direccion', 'oficina', 'horario',
    'ubicacion', 'asesor', 'agente', 'cita', 'reunion', 'hablar', 'llamar', 'escribir',
    'contact', 'phone', 'address', 'office', 'hours', 'advisor', 'appointment', 'meeting',
  ],
  country: [
    'guatemala', 'pais', 'economia', 'macroeconomia', 'pib', 'poblacion', 'exportacion',
    'exportaciones', 'importacion', 'ied', 'estadistica', 'estadisticas', 'dato', 'datos',
    'cifra', 'cifras', 'indicador', 'country', 'economy', 'gdp', 'population', 'exports',
    'imports', 'fdi', 'statistics', 'data',
  ],
  service: [
    'servicio', 'servicios', 'apoyo', 'ayuda', 'acompanamiento', 'asesoria', 'gratuito',
    'softlanding', 'proguatemala', 'service', 'services', 'support', 'help', 'assistance',
    'free',
  ],
  process: [
    'proceso', 'paso', 'pasos', 'tramite', 'tramites', 'requisito', 'requisitos', 'solicitud',
    'tiempo', 'duracion', 'aplicar', 'como', 'empezar', 'iniciar', 'process', 'step', 'steps',
    'requirement', 'requirements', 'application', 'time', 'apply', 'start',
  ],
  advantage: [
    'ventaja', 'ventajas', 'beneficio', 'razon', 'razones', 'competitivo', 'atractivo',
    'talento', 'mano', 'obra', 'energia', 'ubicacion', 'logistica', 'advantage', 'advantages',
    'benefit', 'reason', 'competitive', 'talent', 'workforce', 'energy', 'location',
    'logistics',
  ],
} as const;

/** Etiquetas de las secciones dentro de una respuesta. */
const LABELS: Record<Language, Record<string, string>> = {
  es: {
    keyFigures: 'Cifras clave',
    opportunities: 'Oportunidades destacadas',
    benefits: 'Beneficios',
    requirements: 'Requisitos',
    sectors: 'Sectores aplicables',
    includes: 'Incluye',
    highlights: 'Destaca por',
    steps: 'Etapas del proceso',
    revenue: 'Ingresos',
    employment: 'Empleo',
    growth: 'Crecimiento',
    exports: 'Exportaciones',
    valueChain: 'Cadena de valor',
    ports: 'Puertos principales',
    availableParks: 'Centros productivos disponibles',
    strategicSectors: 'Sectores estratégicos',
    allSectorsBody:
      'Guatemala impulsa la inversión en los siguientes sectores estratégicos. Pregúntame por cualquiera de ellos para ver sus cifras y oportunidades.',
    whyTitle: 'Por qué invertir en Guatemala',
    whyBody: 'Estas son las ventajas competitivas del país para la inversión extranjera:',
    figuresTitle: 'Guatemala en cifras',
    figuresBody: 'Principales indicadores del país (fuente: Banco de Guatemala):',
    protectionsTitle: 'Protección al inversionista',
    protectionsBody: 'Garantías que el marco legal guatemalteco ofrece al inversionista:',
    processTitle: 'Proceso para aplicar a un régimen de incentivos',
    parksTitle: 'Parques y centros productivos empresariales',
    parksBody:
      'Guatemala cuenta con centros productivos empresariales listos para recibir operaciones:',
    portsTitle: 'Puertos y logística',
    portsBody: 'Guatemala opera puertos en ambos océanos, lo que acorta los tiempos de embarque:',
    servicesTitle: 'Servicios de ProGuatemala',
    servicesBody:
      'ProGuatemala acompaña al inversionista en todo el proceso. Todos los servicios son gratuitos:',
    contactTitle: 'Contacto con ProGuatemala',
    contactBody: 'Puedes comunicarte con nuestro equipo por estos medios:',
    toolsTitle: 'Ventanillas y herramientas digitales',
    toolsBody: 'Plataformas oficiales para realizar trámites en línea:',
  },
  en: {
    keyFigures: 'Key figures',
    opportunities: 'Featured opportunities',
    benefits: 'Benefits',
    requirements: 'Requirements',
    sectors: 'Applicable sectors',
    includes: 'Includes',
    highlights: 'Highlights',
    steps: 'Process stages',
    revenue: 'Revenue',
    employment: 'Employment',
    growth: 'Growth',
    exports: 'Exports',
    valueChain: 'Value chain',
    ports: 'Main ports',
    availableParks: 'Available industrial parks',
    strategicSectors: 'Strategic sectors',
    allSectorsBody:
      'Guatemala promotes investment in the following strategic sectors. Ask me about any of them to see its figures and opportunities.',
    whyTitle: 'Why invest in Guatemala',
    whyBody: "These are the country's competitive advantages for foreign investment:",
    figuresTitle: 'Guatemala in figures',
    figuresBody: 'Main country indicators (source: Banco de Guatemala):',
    protectionsTitle: 'Investor protection',
    protectionsBody: 'Guarantees that the Guatemalan legal framework offers investors:',
    processTitle: 'How to apply for an incentive regime',
    parksTitle: 'Industrial and business parks',
    parksBody: 'Guatemala has business production centres ready to host operations:',
    portsTitle: 'Ports and logistics',
    portsBody: 'Guatemala operates ports on both oceans, which shortens shipping times:',
    servicesTitle: 'ProGuatemala services',
    servicesBody:
      'ProGuatemala supports investors throughout the process. All services are free of charge:',
    contactTitle: 'Contact ProGuatemala',
    contactBody: 'You can reach our team through these channels:',
    toolsTitle: 'Digital windows and tools',
    toolsBody: 'Official platforms to complete procedures online:',
  },
};

const bullets = (items: string[], max = 5): string =>
  items
    .filter(Boolean)
    .slice(0, max)
    .map((item) => `• ${item}`)
    .join('\n');

const section = (label: string, items: string[], max = 5): string =>
  items.filter(Boolean).length > 0 ? `\n\n${label}:\n${bullets(items, max)}` : '';

export const buildKnowledgeBase = (language: Language): KnowledgeEntry[] => {
  const label = LABELS[language];
  const entries: KnowledgeEntry[] = [];

  // --- Sectores -------------------------------------------------------------
  const sectorList = sectors[language];

  for (const sector of sectorList) {
    const detail = isSectorSlug(sector.id) ? sectorDetails[language][sector.id] : undefined;

    const figures = [
      sector.investment ? `${label.revenue}: ${sector.investment}` : '',
      sector.employment ? `${label.employment}: ${sector.employment}` : '',
      sector.growth ? `${label.growth}: ${sector.growth}` : '',
      sector.exports ? `${label.exports}: ${sector.exports}` : '',
    ];

    const opportunities = (sector.opportunities ?? detail?.keyOpportunities ?? []).map(
      (opportunity) => `${opportunity.title} (${opportunity.potential})`,
    );

    const body =
      sector.description +
      section(label.keyFigures, figures, 4) +
      section(label.opportunities, opportunities, 4) +
      section(label.highlights, sector.highlights ?? [], 4);

    entries.push({
      id: `sector-${sector.id}`,
      category: 'sector',
      title: sector.name,
      body,
      keywords: [sector.name, ...TOPIC_KEYWORDS.sector],
      related: [
        ...(sector.highlights ?? []),
        ...(detail?.valueChain ?? []),
        ...(detail?.advantages ?? []),
        ...opportunities,
      ],
      link: isSectorSlug(sector.id) ? `/strategic-sectors/${sector.id}` : '/strategic-sectors',
    });
  }

  entries.push({
    id: 'sectors-overview',
    category: 'sector',
    title: label.strategicSectors,
    body: `${label.allSectorsBody}\n\n${bullets(
      sectorList.map((sector) => sector.name),
      20,
    )}`,
    keywords: [...TOPIC_KEYWORDS.sector],
    link: '/strategic-sectors',
  });

  // --- Marco legal e incentivos --------------------------------------------
  for (const item of legalFramework[language]) {
    entries.push({
      id: `framework-${item.title}`,
      category: 'incentive',
      title: item.title,
      body: item.description + section(label.benefits, item.benefits),
      keywords: [item.title, ...TOPIC_KEYWORDS.incentive],
      related: item.benefits,
      link: '/legal-incentives',
    });
  }

  for (const program of incentivePrograms[language]) {
    entries.push({
      id: `incentive-${program.name}`,
      category: 'incentive',
      title: program.name,
      body:
        program.description +
        section(label.benefits, program.benefits) +
        section(label.requirements, program.requirements) +
        section(label.sectors, program.sectors, 6),
      keywords: [program.name, ...program.sectors, ...TOPIC_KEYWORDS.incentive],
      related: [...program.benefits, ...program.requirements],
      link: '/legal-incentives',
    });
  }

  entries.push({
    id: 'investor-protections',
    category: 'incentive',
    title: label.protectionsTitle,
    body: `${label.protectionsBody}\n\n${bullets(
      protections[language].map((item) => `${item.title}: ${item.description}`),
      6,
    )}`,
    keywords: [
      ...protections[language].map((item) => item.title),
      'proteccion', 'garantia', 'seguridad', 'certeza', 'arbitraje', 'expropiacion',
      'protection', 'guarantee', 'security', 'arbitration', 'expropriation',
      ...TOPIC_KEYWORDS.incentive,
    ],
    related: protections[language].map((item) => item.description),
    link: '/legal-incentives',
  });

  entries.push({
    id: 'application-process',
    category: 'process',
    title: label.processTitle,
    body: bullets(
      applicationSteps[language].map(
        (step) => `${step.step}. ${step.title} (${step.time}): ${step.description}`,
      ),
      8,
    ),
    keywords: [...TOPIC_KEYWORDS.process, ...TOPIC_KEYWORDS.incentive],
    related: applicationSteps[language].map((step) => `${step.title} ${step.description}`),
    link: '/legal-incentives',
  });

  // --- Por que Guatemala ----------------------------------------------------
  for (const advantage of advantages[language]) {
    entries.push({
      id: `advantage-${advantage.title}`,
      category: 'advantage',
      title: advantage.title,
      body: advantage.description,
      keywords: [advantage.title, ...TOPIC_KEYWORDS.advantage, ...TOPIC_KEYWORDS.country],
      link: '/why-guatemala',
    });
  }

  entries.push({
    id: 'why-guatemala',
    category: 'advantage',
    title: label.whyTitle,
    body: `${label.whyBody}\n\n${bullets(
      advantages[language].map((advantage) => `${advantage.title}: ${advantage.description}`),
      6,
    )}`,
    keywords: [...TOPIC_KEYWORDS.advantage, ...TOPIC_KEYWORDS.country],
    link: '/why-guatemala',
  });

  entries.push({
    id: 'country-figures',
    category: 'country',
    title: label.figuresTitle,
    body: `${label.figuresBody}\n\n${bullets(
      statistics[language].map((statistic) =>
        [
          `${statistic.label}: ${statistic.value}`,
          statistic.suffix,
          statistic.badge ? `(${statistic.badge})` : '',
        ]
          .filter(Boolean)
          .join(' '),
      ),
      10,
    )}`,
    keywords: [
      ...statistics[language].map((statistic) => statistic.label),
      ...statistics[language].map((statistic) => statistic.subtitle ?? ''),
      ...TOPIC_KEYWORDS.country,
    ],
    related: statistics[language].map((statistic) => statistic.badge ?? ''),
    link: '/why-guatemala',
  });

  // --- Infraestructura ------------------------------------------------------
  for (const park of parks[language]) {
    entries.push({
      id: `park-${park.id}`,
      category: 'park',
      title: park.title,
      body: (park.overview || park.description) + section(label.highlights, park.highlights),
      keywords: [park.title, ...TOPIC_KEYWORDS.park],
      related: park.highlights,
      link: '/why-guatemala',
    });
  }

  entries.push({
    id: 'parks-overview',
    category: 'park',
    title: label.parksTitle,
    body: `${label.parksBody}\n\n${bullets(
      parks[language].map((park) => `${park.title}: ${park.description}`),
      10,
    )}`,
    keywords: [...TOPIC_KEYWORDS.park],
    link: '/why-guatemala',
  });

  entries.push({
    id: 'ports',
    category: 'park',
    title: label.portsTitle,
    body: `${label.portsBody}\n\n${bullets(
      ports[language].map((port) => `${port.name}: ${port.load}`),
      6,
    )}`,
    keywords: [
      ...ports[language].map((port) => port.name),
      'puerto', 'puertos', 'maritimo', 'carga', 'logistica', 'exportar', 'embarque',
      'port', 'ports', 'shipping', 'cargo', 'logistics', 'export',
    ],
    link: '/why-guatemala',
  });

  // --- Servicios ------------------------------------------------------------
  for (const service of services[language]) {
    entries.push({
      id: `service-${service.id}`,
      category: 'service',
      title: service.title,
      body: service.description + section(label.includes, service.features),
      keywords: [service.title, ...TOPIC_KEYWORDS.service],
      related: service.features,
      link: '/services',
    });
  }

  entries.push({
    id: 'services-overview',
    category: 'service',
    title: label.servicesTitle,
    body: `${label.servicesBody}\n\n${bullets(
      services[language].map((service) => `${service.title}: ${service.description}`),
      6,
    )}`,
    keywords: [...TOPIC_KEYWORDS.service],
    link: '/services',
  });

  // --- Preguntas frecuentes y contacto -------------------------------------
  faqs[language].forEach((faq, index) => {
    entries.push({
      id: `faq-${index}`,
      category: 'faq',
      title: faq.question,
      body: faq.answer,
      keywords: [faq.question, ...TOPIC_KEYWORDS.service],
      link: '/contact',
    });
  });

  entries.push({
    id: 'contact',
    category: 'contact',
    title: label.contactTitle,
    body: `${label.contactBody}\n\n${bullets(
      contactInfo[language].map((item) =>
        [`${item.title}: ${item.content}`, item.subContent].filter(Boolean).join(' — '),
      ),
      6,
    )}`,
    keywords: [
      ...contactInfo[language].map((item) => item.title),
      ...TOPIC_KEYWORDS.contact,
    ],
    link: '/contact',
  });

  entries.push({
    id: 'digital-tools',
    category: 'service',
    title: label.toolsTitle,
    body: `${label.toolsBody}\n\n${bullets(
      digitalTools[language].map((tool) => `${tool.name}: ${tool.description} — ${tool.url}`),
      8,
    )}`,
    keywords: [
      ...digitalTools[language].map((tool) => tool.name),
      'ventanilla', 'ventanillas', 'plataforma', 'portal', 'permiso', 'permisos', 'licencia',
      'window', 'platform', 'permit', 'license',
    ],
    related: digitalTools[language].map((tool) => tool.description),
    link: '/resources',
  });

  return entries;
};
