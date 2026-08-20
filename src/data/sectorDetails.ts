import type { Localized } from '@/i18n';
import type { OpportunityPotential, SectorDetailContent } from '@/types/sectorDetail';

import AgroindustriaImg from '@/assets/images/agroindustria.jpg';
import ManufacturaImg from '@/assets/images/manufactura.jpg';
import ServiciosGlobalesImg from '@/assets/images/serviciosglobales.jpg';
import EnergiasLimpiasImg from '@/assets/images/energiaslimpias.jpg';
import TurismoSostenibleImg from '@/assets/images/turismo.jpg';

/**
 * Datos que NO dependen del idioma: imagen, cifras, nivel de potencial y logos.
 * Viven una sola vez para que al actualizar una cifra no haya que tocarla en
 * los dos idiomas y se puedan desincronizar.
 */
interface SectorFacts {
  image: string;
  stats: SectorDetailContent['stats'];
  /** Nivel de potencial de cada oportunidad, en el mismo orden que el texto. */
  potentials: OpportunityPotential[];
  caseStudies: Array<{ investment: string; logo: string }>;
}

const FACTS = {
  'agroindustria': {
    image: AgroindustriaImg,
    stats: {
      investment: '$2.3B',
      employment: '850K',
      growth: '+4.2%',
      exports: '$3.8B',
    },
    potentials: ['Alto', 'Muy Alto', 'Alto', 'Muy Alto'],
    caseStudies: [
      { investment: '$500M', logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { investment: '$200M', logo: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
  },
  'alimentos-procesados': {
    image: AgroindustriaImg,
    stats: {
      investment: '$2.3B',
      employment: '120K',
      growth: '+6.8%',
      exports: '$2.1B',
    },
    potentials: ['Muy Alto', 'Alto', 'Alto', 'Medio'],
    caseStudies: [
      { investment: '$180M', logo: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { investment: '$95M', logo: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
  },
  'bebidas-no-alcoholicas': {
    image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stats: {
      investment: '$1.2B',
      employment: '120K',
      growth: '+6.5%',
      exports: '$890M',
    },
    potentials: ['Muy Alto', 'Alto', 'Alto', 'Medio'],
    caseStudies: [
      { investment: '$120M', logo: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { investment: '$85M', logo: 'https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
  },
  'vestuario-textil': {
    image: ManufacturaImg,
    stats: {
      investment: '$1.8B',
      employment: '420K',
      growth: '+5.1%',
      exports: '$2.9B',
    },
    potentials: ['Muy Alto', 'Alto', 'Alto', 'Alto'],
    caseStudies: [
      { investment: '$220M', logo: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { investment: '$150M', logo: 'https://images.pexels.com/photos/3735645/pexels-photo-3735645.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
  },
  'quimicos': {
    image: 'https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stats: {
      investment: '$950M',
      employment: '85K',
      growth: '+7.2%',
      exports: '$780M',
    },
    potentials: ['Alto', 'Muy Alto', 'Alto', 'Alto'],
    caseStudies: [
      { investment: '$175M', logo: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { investment: '$95M', logo: 'https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
  },
  'farmaceuticos': {
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stats: {
      investment: '$820M',
      employment: '65K',
      growth: '+9.8%',
      exports: '$690M',
    },
    potentials: ['Muy Alto', 'Alto', 'Alto', 'Alto'],
    caseStudies: [
      { investment: '$140M', logo: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { investment: '$95M', logo: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
  },
  'tics-software': {
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stats: {
      investment: '$750M',
      employment: '95K',
      growth: '+15.8%',
      exports: '$620M',
    },
    potentials: ['Muy Alto', 'Muy Alto', 'Alto', 'Muy Alto'],
    caseStudies: [
      { investment: '$120M', logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { investment: '$75M', logo: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
  },
  'servicios-empresariales': {
    image: ServiciosGlobalesImg,
    stats: {
      investment: '$950M',
      employment: '180K',
      growth: '+8.7%',
      exports: '$1.2B',
    },
    potentials: ['Muy Alto', 'Alto', 'Alto', 'Alto'],
    caseStudies: [
      { investment: '$180M', logo: 'https://images.pexels.com/photos/7709184/pexels-photo-7709184.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { investment: '$125M', logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
  },
  'energia': {
    image: EnergiasLimpiasImg,
    stats: {
      investment: '$3.2B',
      employment: '45K',
      growth: '+12.3%',
      exports: '$420M',
    },
    potentials: ['Muy Alto', 'Muy Alto', 'Alto', 'Alto'],
    caseStudies: [
      { investment: '$450M', logo: 'https://images.pexels.com/photos/2850347/pexels-photo-2850347.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { investment: '$320M', logo: 'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
  },
  'servicios-compartidos': {
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stats: {
      investment: '$1.1B',
      employment: '145K',
      growth: '+10.5%',
      exports: '$980M',
    },
    potentials: ['Muy Alto', 'Alto', 'Alto', 'Alto'],
    caseStudies: [
      { investment: '$220M', logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { investment: '$165M', logo: 'https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
  },
  'electrico-electronico': {
    image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stats: {
      investment: '$980M',
      employment: '115K',
      growth: '+11.2%',
      exports: '$1.1B',
    },
    potentials: ['Muy Alto', 'Alto', 'Alto', 'Muy Alto'],
    caseStudies: [
      { investment: '$185M', logo: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { investment: '$140M', logo: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
  },
  'servicios-salud': {
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stats: {
      investment: '$890M',
      employment: '125K',
      growth: '+11.3%',
      exports: '$340M',
    },
    potentials: ['Muy Alto', 'Alto', 'Alto', 'Medio'],
    caseStudies: [
      { investment: '$165M', logo: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { investment: '$95M', logo: 'https://images.pexels.com/photos/4021808/pexels-photo-4021808.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
  },
  'metalmecanica': {
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stats: {
      investment: '$720M',
      employment: '95K',
      growth: '+8.5%',
      exports: '$620M',
    },
    potentials: ['Alto', 'Alto', 'Medio', 'Alto'],
    caseStudies: [
      { investment: '$135M', logo: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { investment: '$85M', logo: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
  },
  'turismo': {
    image: TurismoSostenibleImg,
    stats: {
      investment: '$1.1B',
      employment: '320K',
      growth: '+6.8%',
      exports: '$1.8B',
    },
    potentials: ['Muy Alto', 'Alto', 'Alto', 'Alto'],
    caseStudies: [
      { investment: '$240M', logo: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { investment: '$125M', logo: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
  },
  'biotecnologia': {
    image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stats: {
      investment: '$650M',
      employment: '45K',
      growth: '+18.7%',
      exports: '$420M',
    },
    potentials: ['Muy Alto', 'Alto', 'Alto', 'Alto'],
    caseStudies: [
      { investment: '$125M', logo: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { investment: '$95M', logo: 'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
  },
  'dispositivos-medicos': {
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stats: {
      investment: '$580M',
      employment: '55K',
      growth: '+16.4%',
      exports: '$490M',
    },
    potentials: ['Muy Alto', 'Alto', 'Alto', 'Alto'],
    caseStudies: [
      { investment: '$115M', logo: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { investment: '$85M', logo: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
  },
  'componentes-electronicos': {
    image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stats: {
      investment: '$720M',
      employment: '65K',
      growth: '+19.2%',
      exports: '$890M',
    },
    potentials: ['Muy Alto', 'Alto', 'Alto', 'Muy Alto'],
    caseStudies: [
      { investment: '$195M', logo: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { investment: '$145M', logo: 'https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
  },
  'ti-manufactura-avanzada': {
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stats: {
      investment: '$840M',
      employment: '75K',
      growth: '+21.5%',
      exports: '$720M',
    },
    potentials: ['Muy Alto', 'Muy Alto', 'Alto', 'Alto'],
    caseStudies: [
      { investment: '$175M', logo: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=100' },
      { investment: '$125M', logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=100' },
    ],
  },
} satisfies Record<string, SectorFacts>;

/** Slugs validos para la ruta /strategic-sectors/:sector */
export type SectorSlug = keyof typeof FACTS;

/** Solo el texto: es lo unico que cambia entre idiomas. */
interface SectorCopy {
  name: string;
  description: string;
  opportunities: Array<{ title: string; description: string }>;
  valueChain: string[];
  advantages: string[];
  caseStudies: Array<{ company: string; sector: string; description: string }>;
}

const COPY: Localized<Record<SectorSlug, SectorCopy>> = {
  es: {
    'agroindustria': {
      name: 'Agroindustria',
      description:
        'Guatemala es reconocido mundialmente por su tradición agrícola y la calidad excepcional de sus productos. El sector agroindustrial representa una oportunidad única para inversionistas que buscan aprovechar el clima tropical, la diversidad de pisos altitudinales y la experiencia centenaria en cultivos de exportación.',
      opportunities: [
        {
          title: 'Café de Especialidad',
          description:
            'Guatemala produce algunos de los mejores cafés del mundo con denominaciones de origen reconocidas internacionalmente.',
        },
        {
          title: 'Frutas Tropicales',
          description:
            'Banano, piña, mango y frutas exóticas con demanda creciente en mercados premium.',
        },
        {
          title: 'Hortalizas de Exportación',
          description:
            'Brócoli, ejote francés, arveja china y otros productos frescos para mercados de alta gama.',
        },
        {
          title: 'Productos Orgánicos',
          description:
            'Certificaciones internacionales y creciente demanda por productos orgánicos y sostenibles.',
        },
      ],
      valueChain: ['Producción primaria', 'Procesamiento y empaque', 'Logística y distribución', 'Comercialización internacional', 'Certificaciones de calidad'],
      advantages: [
        'Diversidad de microclimas',
        'Mano de obra especializada',
        'Proximidad a mercados de EE.UU.',
        'Tratados comerciales preferenciales',
        'Infraestructura logística establecida',
      ],
      caseStudies: [
        {
          company: 'Grupo Pantaleón',
          sector: 'Azúcar y Energía',
          description:
            'Líder regional en producción de azúcar y generación de energía renovable',
        },
        {
          company: 'Del Monte',
          sector: 'Frutas Frescas',
          description:
            'Producción y exportación de banano y piña para mercados globales',
        },
      ],
    },
    'alimentos-procesados': {
      name: 'Alimentos Procesados',
      description:
        'El sector de alimentos procesados en Guatemala ofrece oportunidades excepcionales para la transformación y agregación de valor a productos agrícolas. Con acceso a materias primas de alta calidad y una ubicación estratégica, el país se posiciona como un hub regional para la industria alimentaria.',
      opportunities: [
        {
          title: 'Alimentos Orgánicos',
          description:
            'Procesamiento de productos orgánicos certificados con creciente demanda en mercados internacionales.',
        },
        {
          title: 'Snacks Saludables',
          description:
            'Producción de snacks naturales y saludables basados en frutas, vegetales y granos locales.',
        },
        {
          title: 'Café de Especialidad Procesado',
          description:
            'Tostado, empaque y comercialización de café premium con marca propia.',
        },
        {
          title: 'Conservas y Enlatados',
          description:
            'Procesamiento de frutas y vegetales en conservas para exportación.',
        },
      ],
      valueChain: ['Abastecimiento de materias primas', 'Procesamiento industrial', 'Control de calidad', 'Empaque y etiquetado', 'Distribución y exportación'],
      advantages: [
        'Acceso a materias primas de alta calidad',
        'Costos competitivos de producción',
        'Tratados de libre comercio',
        'Infraestructura industrial establecida',
        'Talento especializado en procesamiento',
      ],
      caseStudies: [
        {
          company: 'Alimentos Maravilla',
          sector: 'Alimentos Procesados',
          description:
            'Líder en producción y distribución de alimentos procesados en Centroamérica',
        },
        {
          company: 'Productos Forestales',
          sector: 'Alimentos Orgánicos',
          description:
            'Producción de alimentos orgánicos certificados para exportación',
        },
      ],
    },
    'bebidas-no-alcoholicas': {
      name: 'Bebidas No Alcohólicas',
      description:
        'Guatemala cuenta con recursos naturales excepcionales para la producción de bebidas, incluyendo agua de alta calidad y frutas tropicales. El sector ofrece oportunidades en bebidas naturales, funcionales y premium.',
      opportunities: [
        {
          title: 'Jugos Naturales Premium',
          description:
            'Producción de jugos 100% naturales de frutas tropicales para mercados de alta gama.',
        },
        {
          title: 'Bebidas Funcionales',
          description:
            'Bebidas con beneficios nutricionales y saludables basadas en ingredientes naturales.',
        },
        {
          title: 'Agua Embotellada',
          description:
            'Embotellamiento de agua natural de manantiales guatemaltecos.',
        },
        {
          title: 'Bebidas Energéticas Naturales',
          description:
            'Bebidas energéticas formuladas con ingredientes naturales y orgánicos.',
        },
      ],
      valueChain: ['Extracción de materias primas', 'Formulación y mezcla', 'Embotellado y envasado', 'Control de calidad', 'Distribución comercial'],
      advantages: [
        'Fuentes de agua de alta calidad',
        'Frutas tropicales todo el año',
        'Costos competitivos de producción',
        'Acceso a mercados regionales',
        'Plantas embotelladoras modernas',
      ],
      caseStudies: [
        {
          company: 'Jugos del Valle',
          sector: 'Bebidas Naturales',
          description:
            'Producción de jugos naturales premium para toda Centroamérica',
        },
        {
          company: 'Agua Pura',
          sector: 'Agua Embotellada',
          description:
            'Líder en embotellamiento de agua natural en la región',
        },
      ],
    },
    'vestuario-textil': {
      name: 'Vestuario y Textil',
      description:
        'La industria textil guatemalteca es reconocida por su calidad, flexibilidad y capacidad de producción. Con más de 40 años de experiencia en confección para marcas globales, el sector ofrece oportunidades en textiles técnicos, moda sostenible y manufactura especializada.',
      opportunities: [
        {
          title: 'Textiles Técnicos',
          description:
            'Producción de textiles especializados para uso médico, deportivo e industrial.',
        },
        {
          title: 'Moda Sostenible',
          description:
            'Confección de prendas con textiles orgánicos y procesos ecológicos.',
        },
        {
          title: 'Uniformes Corporativos',
          description:
            'Manufactura de uniformes especializados para empresas y sectores específicos.',
        },
        {
          title: 'Confección Premium',
          description:
            'Producción de prendas de alta calidad para marcas internacionales.',
        },
      ],
      valueChain: ['Abastecimiento de textiles', 'Diseño y patronaje', 'Corte y confección', 'Control de calidad', 'Empaque y exportación'],
      advantages: [
        'Mano de obra calificada y experimentada',
        'Proximidad al mercado estadounidense',
        'Régimen de zonas francas',
        'Infraestructura textil consolidada',
        'Capacidad de producción flexible',
      ],
      caseStudies: [
        {
          company: 'Textiles Modernos',
          sector: 'Confección',
          description:
            'Producción de prendas para marcas globales de moda',
        },
        {
          company: 'TechFabric Guatemala',
          sector: 'Textiles Técnicos',
          description:
            'Manufactura de textiles especializados para uso médico y deportivo',
        },
      ],
    },
    'quimicos': {
      name: 'Químicos',
      description:
        'El sector químico guatemalteco abarca la producción de químicos industriales, productos de limpieza, fertilizantes y cosméticos. Con una ubicación estratégica y acceso a materias primas, Guatemala ofrece ventajas competitivas para la manufactura química.',
      opportunities: [
        {
          title: 'Químicos Industriales',
          description:
            'Producción de químicos para uso industrial y manufactura.',
        },
        {
          title: 'Productos de Limpieza Ecológicos',
          description:
            'Manufactura de productos de limpieza biodegradables y sostenibles.',
        },
        {
          title: 'Fertilizantes Especializados',
          description:
            'Producción de fertilizantes orgánicos y de liberación controlada.',
        },
        {
          title: 'Cosméticos Naturales',
          description:
            'Fabricación de cosméticos basados en ingredientes naturales guatemaltecos.',
        },
      ],
      valueChain: ['Abastecimiento de químicos base', 'Formulación y mezcla', 'Producción industrial', 'Control de calidad', 'Empaque y distribución'],
      advantages: [
        'Acceso a materias primas regionales',
        'Infraestructura industrial moderna',
        'Personal técnico calificado',
        'Mercado regional en crecimiento',
        'Regulaciones competitivas',
      ],
      caseStudies: [
        {
          company: 'Químicos de Guatemala',
          sector: 'Químicos Industriales',
          description:
            'Producción de químicos industriales para Centroamérica',
        },
        {
          company: 'EcoClean Guatemala',
          sector: 'Productos de Limpieza',
          description:
            'Manufactura de productos de limpieza ecológicos',
        },
      ],
    },
    'farmaceuticos': {
      name: 'Farmacéuticos',
      description:
        'La industria farmacéutica guatemalteca está experimentando un crecimiento significativo, con oportunidades en producción de medicamentos genéricos, suplementos y productos farmacéuticos especializados para el mercado regional.',
      opportunities: [
        {
          title: 'Medicamentos Genéricos',
          description:
            'Producción de medicamentos genéricos de alta calidad para el mercado regional.',
        },
        {
          title: 'Suplementos Nutricionales',
          description:
            'Manufactura de suplementos vitamínicos y nutricionales.',
        },
        {
          title: 'Productos Farmacéuticos OTC',
          description:
            'Fabricación de medicamentos de venta libre.',
        },
        {
          title: 'Vitaminas y Minerales',
          description:
            'Producción de complejos vitamínicos y suplementos minerales.',
        },
      ],
      valueChain: ['Abastecimiento de principios activos', 'Formulación farmacéutica', 'Producción y manufactura', 'Control de calidad GMP', 'Distribución y comercialización'],
      advantages: [
        'Regulaciones farmacéuticas robustas',
        'Personal técnico especializado',
        'Plantas con certificación GMP',
        'Acceso al mercado centroamericano',
        'Costos competitivos de producción',
      ],
      caseStudies: [
        {
          company: 'Laboratorios Chalver',
          sector: 'Medicamentos Genéricos',
          description:
            'Producción de medicamentos genéricos para toda Centroamérica',
        },
        {
          company: 'Pharma Guatemala',
          sector: 'Suplementos',
          description:
            'Manufactura de suplementos nutricionales y vitaminas',
        },
      ],
    },
    'tics-software': {
      name: 'TICs y Software',
      description:
        'El sector tecnológico guatemalteco está en rápida expansión, con oportunidades en desarrollo de software, aplicaciones móviles, ciberseguridad y servicios en la nube. Guatemala cuenta con una creciente comunidad de desarrolladores talentosos y bilingües.',
      opportunities: [
        {
          title: 'Desarrollo de Software Personalizado',
          description:
            'Desarrollo de aplicaciones empresariales y soluciones a medida.',
        },
        {
          title: 'Aplicaciones Móviles',
          description:
            'Diseño y desarrollo de aplicaciones para iOS y Android.',
        },
        {
          title: 'Cloud Computing',
          description:
            'Servicios de migración y gestión en la nube.',
        },
        {
          title: 'Ciberseguridad',
          description:
            'Soluciones de seguridad informática y protección de datos.',
        },
      ],
      valueChain: ['Análisis de requisitos', 'Diseño y arquitectura', 'Desarrollo y programación', 'Testing y QA', 'Implementación y soporte'],
      advantages: [
        'Talento técnico bilingüe',
        'Costos competitivos',
        'Zona horaria compatible con EE.UU.',
        'Creciente ecosistema tech',
        'Incentivos para empresas tecnológicas',
      ],
      caseStudies: [
        {
          company: 'SoftTech Guatemala',
          sector: 'Desarrollo de Software',
          description:
            'Desarrollo de soluciones empresariales para clientes internacionales',
        },
        {
          company: 'Mobile Solutions GT',
          sector: 'Apps Móviles',
          description:
            'Desarrollo de aplicaciones móviles para startups y empresas',
        },
      ],
    },
    'servicios-empresariales': {
      name: 'Servicios Empresariales, Contact Centers y BPOs',
      description:
        'Guatemala es un destino líder para servicios de outsourcing en la región, con una fuerza laboral bilingüe, costos competitivos y excelente conectividad. El sector ofrece oportunidades en contact centers, BPO y servicios de back office.',
      opportunities: [
        {
          title: 'Contact Centers Multicanal',
          description:
            'Centros de atención al cliente con soporte omnicanal.',
        },
        {
          title: 'BPO de Procesos Financieros',
          description:
            'Outsourcing de procesos contables y financieros.',
        },
        {
          title: 'Soporte Técnico Especializado',
          description:
            'Help desk y soporte técnico para productos tecnológicos.',
        },
        {
          title: 'Back Office Services',
          description:
            'Servicios de procesamiento de datos y gestión administrativa.',
        },
      ],
      valueChain: ['Reclutamiento y capacitación', 'Operaciones de servicio', 'Gestión de calidad', 'Tecnología y plataformas', 'Reportes y analytics'],
      advantages: [
        'Fuerza laboral bilingüe (español-inglés)',
        'Costos operativos competitivos',
        'Zona horaria compatible',
        'Alta calidad de servicio',
        'Infraestructura tecnológica moderna',
      ],
      caseStudies: [
        {
          company: 'Atento Guatemala',
          sector: 'Contact Centers',
          description:
            'Líder en servicios de contact center para marcas globales',
        },
        {
          company: 'BPO Solutions',
          sector: 'BPO',
          description:
            'Servicios de BPO para procesos financieros y administrativos',
        },
      ],
    },
    'energia': {
      name: 'Energía',
      description:
        'Guatemala tiene un potencial excepcional para energía renovable, incluyendo hidroeléctrica, solar, eólica y geotérmica. El país está comprometido con la transición energética y ofrece incentivos atractivos para inversiones en generación limpia.',
      opportunities: [
        {
          title: 'Energía Hidroeléctrica',
          description:
            'Desarrollo de proyectos hidroeléctricos de pequeña y mediana escala.',
        },
        {
          title: 'Energía Solar Fotovoltaica',
          description:
            'Granjas solares y sistemas de generación distribuida.',
        },
        {
          title: 'Energía Eólica',
          description:
            'Parques eólicos en zonas de alto potencial de viento.',
        },
        {
          title: 'Biomasa y Biogás',
          description:
            'Aprovechamiento de residuos agrícolas para generación eléctrica.',
        },
      ],
      valueChain: ['Estudios y desarrollo de proyectos', 'Construcción de plantas', 'Operación y mantenimiento', 'Generación y despacho', 'Comercialización de energía'],
      advantages: [
        'Alto potencial de recursos renovables',
        'Incentivos fiscales para energía limpia',
        'Marco regulatorio favorable',
        'Demanda energética creciente',
        'Posibilidad de exportación regional',
      ],
      caseStudies: [
        {
          company: 'Hidro Guatemala',
          sector: 'Hidroeléctrica',
          description:
            'Desarrollo de proyectos hidroeléctricos renovables',
        },
        {
          company: 'Solar Power GT',
          sector: 'Energía Solar',
          description:
            'Desarrollo de granjas solares fotovoltaicas',
        },
      ],
    },
    'servicios-compartidos': {
      name: 'Centro de Servicios Compartidos',
      description:
        'Guatemala es un destino estratégico para centros de servicios compartidos de empresas multinacionales. Con talento profesional calificado, costos competitivos y ubicación estratégica, el país ofrece ventajas significativas para SSCs.',
      opportunities: [
        {
          title: 'Finanzas y Contabilidad Compartidas',
          description:
            'Centros de servicios financieros y contables para operaciones regionales.',
        },
        {
          title: 'Recursos Humanos Compartidos',
          description:
            'Servicios de nómina, reclutamiento y gestión de talento.',
        },
        {
          title: 'IT Compartido',
          description:
            'Soporte tecnológico y gestión de infraestructura IT.',
        },
        {
          title: 'Servicios de Compras',
          description:
            'Procurement y gestión de proveedores centralizados.',
        },
      ],
      valueChain: ['Establecimiento de operaciones', 'Reclutamiento de talento', 'Implementación de procesos', 'Operación de servicios', 'Mejora continua'],
      advantages: [
        'Profesionales bilingües calificados',
        'Costos operativos competitivos',
        'Zona horaria favorable',
        'Infraestructura empresarial moderna',
        'Estabilidad política y económica',
      ],
      caseStudies: [
        {
          company: 'Global SSC Guatemala',
          sector: 'Servicios Corporativos',
          description:
            'Centro de servicios compartidos para empresa Fortune 500',
        },
        {
          company: 'Finance Hub GT',
          sector: 'Finanzas Compartidas',
          description:
            'Centro regional de finanzas y contabilidad',
        },
      ],
    },
    'electrico-electronico': {
      name: 'Eléctrico-Electrónico (Autopartes)',
      description:
        'La industria de componentes eléctricos y electrónicos para autopartes está creciendo en Guatemala, aprovechando la experiencia en manufactura y la proximidad al mercado norteamericano. El sector ofrece oportunidades en componentes especializados y sistemas avanzados.',
      opportunities: [
        {
          title: 'Arneses Eléctricos',
          description:
            'Manufactura de arneses y cableado para vehículos.',
        },
        {
          title: 'Componentes Electrónicos',
          description:
            'Producción de componentes electrónicos para sistemas automotrices.',
        },
        {
          title: 'Sensores y Actuadores',
          description:
            'Fabricación de sensores para sistemas de seguridad y control.',
        },
        {
          title: 'Sistemas de Control',
          description:
            'Ensamble de módulos de control electrónico.',
        },
      ],
      valueChain: ['Abastecimiento de componentes', 'Ensamble y manufactura', 'Testing y validación', 'Control de calidad', 'Empaque y envío'],
      advantages: [
        'Mano de obra calificada',
        'Proximidad a plantas automotrices',
        'Tratados comerciales favorables',
        'Infraestructura manufacturera',
        'Experiencia en manufactura de precisión',
      ],
      caseStudies: [
        {
          company: 'Auto Components GT',
          sector: 'Autopartes Eléctricas',
          description:
            'Manufactura de arneses y componentes eléctricos automotrices',
        },
        {
          company: 'ElectroTech Guatemala',
          sector: 'Componentes Electrónicos',
          description:
            'Producción de sensores y actuadores para la industria automotriz',
        },
      ],
    },
    'servicios-salud': {
      name: 'Servicios de Salud',
      description:
        'Guatemala está emergiendo como destino para turismo médico y servicios de salud especializados. Con profesionales médicos de alta calidad, costos competitivos y facilidades modernas, el sector ofrece oportunidades en servicios médicos especializados y telemedicina.',
      opportunities: [
        {
          title: 'Turismo Médico',
          description:
            'Servicios médicos especializados para pacientes internacionales.',
        },
        {
          title: 'Telemedicina',
          description:
            'Plataformas de consulta médica remota y diagnóstico a distancia.',
        },
        {
          title: 'Clínicas Especializadas',
          description:
            'Centros médicos especializados en cirugía estética, dental y oftalmológica.',
        },
        {
          title: 'Atención Domiciliaria',
          description:
            'Servicios de cuidado médico y enfermería a domicilio.',
        },
      ],
      valueChain: ['Captación de pacientes', 'Evaluación y diagnóstico', 'Tratamiento y procedimientos', 'Recuperación y seguimiento', 'Servicios post-tratamiento'],
      advantages: [
        'Profesionales médicos altamente calificados',
        'Costos 40-60% menores que EE.UU.',
        'Facilidades médicas modernas',
        'Ubicación geográfica conveniente',
        'Atención personalizada de calidad',
      ],
      caseStudies: [
        {
          company: 'Medical Tourism Guatemala',
          sector: 'Turismo Médico',
          description:
            'Red de clínicas especializadas para pacientes internacionales',
        },
        {
          company: 'TeleSalud GT',
          sector: 'Telemedicina',
          description:
            'Plataforma de telemedicina para Centroamérica',
        },
      ],
    },
    'metalmecanica': {
      name: 'Metalmecánica',
      description:
        'El sector metalmecánico guatemalteco ofrece capacidades de fabricación de estructuras metálicas, maquinaria y componentes industriales. Con una base industrial establecida y personal técnico calificado, el sector está preparado para proyectos de manufactura avanzada.',
      opportunities: [
        {
          title: 'Estructuras Metálicas',
          description:
            'Fabricación de estructuras para construcción y proyectos industriales.',
        },
        {
          title: 'Maquinaria Industrial',
          description:
            'Manufactura de maquinaria y equipos para diferentes industrias.',
        },
        {
          title: 'Herramientas y Moldes',
          description:
            'Producción de herramientas de precisión y moldes industriales.',
        },
        {
          title: 'Componentes Mecánicos',
          description:
            'Fabricación de piezas y componentes mecánicos especializados.',
        },
      ],
      valueChain: ['Diseño y ingeniería', 'Corte y mecanizado', 'Soldadura y ensamble', 'Tratamiento superficial', 'Inspección y entrega'],
      advantages: [
        'Personal técnico especializado',
        'Talleres equipados con tecnología moderna',
        'Capacidad de fabricación flexible',
        'Costos competitivos',
        'Experiencia en proyectos complejos',
      ],
      caseStudies: [
        {
          company: 'MetalTech Guatemala',
          sector: 'Estructuras Metálicas',
          description:
            'Fabricación de estructuras metálicas para proyectos industriales',
        },
        {
          company: 'Precision Tools GT',
          sector: 'Herramientas Industriales',
          description:
            'Manufactura de herramientas de precisión y moldes',
        },
      ],
    },
    'turismo': {
      name: 'Turismo',
      description:
        'Guatemala posee un patrimonio cultural maya único, biodiversidad excepcional y paisajes impresionantes. El sector turístico ofrece oportunidades en turismo cultural, ecoturismo, turismo de aventura y desarrollo de infraestructura hotelera.',
      opportunities: [
        {
          title: 'Turismo Cultural Maya',
          description:
            'Desarrollo de experiencias turísticas en sitios arqueológicos mayas.',
        },
        {
          title: 'Ecoturismo',
          description:
            'Proyectos de turismo sostenible en áreas naturales protegidas.',
        },
        {
          title: 'Turismo de Aventura',
          description:
            'Actividades de aventura como senderismo, escalada y deportes acuáticos.',
        },
        {
          title: 'MICE (Reuniones y Eventos)',
          description:
            'Desarrollo de infraestructura para convenciones y eventos corporativos.',
        },
      ],
      valueChain: ['Desarrollo de destinos', 'Infraestructura hotelera', 'Servicios turísticos', 'Promoción y marketing', 'Experiencia del visitante'],
      advantages: [
        'Patrimonio cultural maya único',
        'Biodiversidad excepcional',
        'Clima agradable todo el año',
        'Proximidad a mercados emisores',
        'Costos competitivos',
      ],
      caseStudies: [
        {
          company: 'Maya Heritage Hotels',
          sector: 'Hotelería',
          description:
            'Cadena de hoteles boutique en destinos culturales',
        },
        {
          company: 'EcoAdventure Guatemala',
          sector: 'Ecoturismo',
          description:
            'Operador de turismo de aventura y ecoturismo',
        },
      ],
    },
    'biotecnologia': {
      name: 'Biotecnología',
      description:
        'Guatemala está desarrollando capacidades en biotecnología, con un enfoque en aplicaciones agrícolas y médicas. La biodiversidad del país y su experiencia agrícola crean oportunidades únicas en este sector emergente.',
      opportunities: [
        {
          title: 'Biotecnología Agrícola',
          description:
            'Desarrollo de cultivos mejorados y soluciones biotech para agricultura.',
        },
        {
          title: 'Medicina Personalizada',
          description:
            'Diagnóstico molecular y terapias personalizadas.',
        },
        {
          title: 'Biocombustibles',
          description:
            'Producción de biocombustibles de segunda y tercera generación.',
        },
        {
          title: 'Investigación Genética',
          description:
            'Estudios genéticos aplicados a biodiversidad local.',
        },
      ],
      valueChain: ['Investigación y desarrollo', 'Estudios clínicos/de campo', 'Producción piloto', 'Escalamiento industrial', 'Comercialización'],
      advantages: [
        'Biodiversidad única',
        'Recursos genéticos valiosos',
        'Talento científico emergente',
        'Apoyo institucional para I+D',
        'Mercado regional para innovación',
      ],
      caseStudies: [
        {
          company: 'BioTech Guatemala',
          sector: 'Biotecnología Agrícola',
          description:
            'Desarrollo de cultivos mejorados mediante biotecnología',
        },
        {
          company: 'BioFuel Solutions',
          sector: 'Biocombustibles',
          description:
            'Producción de biocombustibles de segunda generación',
        },
      ],
    },
    'dispositivos-medicos': {
      name: 'Dispositivos y Equipo Médico',
      description:
        'El sector de dispositivos médicos en Guatemala ofrece oportunidades de manufactura de dispositivos médicos, equipos de diagnóstico e instrumental quirúrgico. Con regulaciones robustas y capacidades de manufactura de precisión, el país es un destino atractivo.',
      opportunities: [
        {
          title: 'Dispositivos Médicos Desechables',
          description:
            'Manufactura de dispositivos médicos de un solo uso.',
        },
        {
          title: 'Equipos de Diagnóstico',
          description:
            'Fabricación de equipos y kits de diagnóstico médico.',
        },
        {
          title: 'Instrumental Quirúrgico',
          description:
            'Producción de instrumentos quirúrgicos especializados.',
        },
        {
          title: 'Prótesis y Órtesis',
          description:
            'Manufactura de prótesis y dispositivos ortopédicos.',
        },
      ],
      valueChain: ['Diseño y desarrollo', 'Manufactura de componentes', 'Ensamble y esterilización', 'Control de calidad', 'Empaque y distribución'],
      advantages: [
        'Experiencia en manufactura de precisión',
        'Regulaciones médicas robustas',
        'Personal técnico calificado',
        'Costos competitivos',
        'Proximidad a mercados principales',
      ],
      caseStudies: [
        {
          company: 'MedDevice Guatemala',
          sector: 'Dispositivos Médicos',
          description:
            'Manufactura de dispositivos médicos desechables',
        },
        {
          company: 'Surgical Tools GT',
          sector: 'Instrumental Quirúrgico',
          description:
            'Producción de instrumental quirúrgico especializado',
        },
      ],
    },
    'componentes-electronicos': {
      name: 'Componentes y Equipo Electrónico',
      description:
        'Guatemala está desarrollando capacidades en manufactura de componentes electrónicos avanzados, incluyendo semiconductores, circuitos integrados y componentes PCB. El sector ofrece oportunidades en electrónica de alto valor agregado.',
      opportunities: [
        {
          title: 'Ensamble de Semiconductores',
          description:
            'Empaque y testing de semiconductores y circuitos integrados.',
        },
        {
          title: 'Circuitos Integrados',
          description:
            'Manufactura de circuitos integrados de aplicación específica.',
        },
        {
          title: 'Componentes PCB',
          description:
            'Fabricación de placas de circuito impreso multicapa.',
        },
        {
          title: 'Sensores Avanzados',
          description:
            'Producción de sensores electrónicos especializados.',
        },
      ],
      valueChain: ['Diseño de circuitos', 'Fabricación de componentes', 'Ensamble y soldadura', 'Testing y validación', 'Empaque final'],
      advantages: [
        'Mano de obra técnica especializada',
        'Infraestructura de manufactura limpia',
        'Experiencia en manufactura de precisión',
        'Costos competitivos',
        'Tratados comerciales favorables',
      ],
      caseStudies: [
        {
          company: 'SemiCon Guatemala',
          sector: 'Semiconductores',
          description:
            'Planta de ensamble y testing de semiconductores',
        },
        {
          company: 'PCB Manufacturing GT',
          sector: 'Circuitos Impresos',
          description:
            'Fabricación de PCBs multicapa de alta complejidad',
        },
      ],
    },
    'ti-manufactura-avanzada': {
      name: 'Tecnologías de la Información para Manufactura Avanzada',
      description:
        'Guatemala está posicionándose en soluciones tecnológicas para la Industria 4.0, incluyendo IoT industrial, automatización, inteligencia artificial y robótica. Este sector emergente ofrece oportunidades en tecnologías de manufactura avanzada.',
      opportunities: [
        {
          title: 'IoT Industrial',
          description:
            'Soluciones de Internet de las Cosas para manufactura inteligente.',
        },
        {
          title: 'Automatización Industrial',
          description:
            'Sistemas de automatización y control para plantas manufactureras.',
        },
        {
          title: 'IA para Manufactura',
          description:
            'Aplicaciones de inteligencia artificial en optimización de procesos.',
        },
        {
          title: 'Robótica Industrial',
          description:
            'Integración de sistemas robóticos en líneas de producción.',
        },
      ],
      valueChain: ['Consultoría y análisis', 'Diseño de soluciones', 'Desarrollo e integración', 'Implementación', 'Soporte y mantenimiento'],
      advantages: [
        'Talento en tecnologías emergentes',
        'Ecosistema de innovación creciente',
        'Proximidad a clientes manufactureros',
        'Costos competitivos de desarrollo',
        'Infraestructura tecnológica moderna',
      ],
      caseStudies: [
        {
          company: 'Industry 4.0 Solutions',
          sector: 'Automatización',
          description:
            'Soluciones de automatización para manufactura avanzada',
        },
        {
          company: 'Smart Factory GT',
          sector: 'IoT Industrial',
          description:
            'Plataformas de IoT para manufactura inteligente',
        },
      ],
    },
  },
  en: {
    'agroindustria': {
      name: 'Agribusiness',
      description:
        'Guatemala is recognized worldwide for its agricultural tradition and the exceptional quality of its products. The agribusiness sector represents a unique opportunity for investors looking to take advantage of the tropical climate, the diversity of altitude zones and a century of experience in export crops.',
      opportunities: [
        {
          title: 'Specialty Coffee',
          description:
            'Guatemala produces some of the world\'s finest coffees, with internationally recognized denominations of origin.',
        },
        {
          title: 'Tropical Fruit',
          description:
            'Banana, pineapple, mango and exotic fruit with growing demand in premium markets.',
        },
        {
          title: 'Export Vegetables',
          description:
            'Broccoli, French beans, snow peas and other fresh produce for high-end markets.',
        },
        {
          title: 'Organic Products',
          description:
            'International certifications and growing demand for organic, sustainable products.',
        },
      ],
      valueChain: ['Primary production', 'Processing and packing', 'Logistics and distribution', 'International marketing', 'Quality certifications'],
      advantages: [
        'Diversity of microclimates',
        'Specialized workforce',
        'Proximity to U.S. markets',
        'Preferential trade agreements',
        'Established logistics infrastructure',
      ],
      caseStudies: [
        {
          company: 'Grupo Pantaleón',
          sector: 'Sugar and Energy',
          description:
            'Regional leader in sugar production and renewable energy generation',
        },
        {
          company: 'Del Monte',
          sector: 'Fresh Fruit',
          description:
            'Production and export of banana and pineapple for global markets',
        },
      ],
    },
    'alimentos-procesados': {
      name: 'Processed Foods',
      description:
        'Guatemala\'s processed food sector offers exceptional opportunities to transform agricultural products and add value to them. With access to high-quality raw materials and a strategic location, the country is positioned as a regional hub for the food industry.',
      opportunities: [
        {
          title: 'Organic Foods',
          description:
            'Processing of certified organic products with growing demand in international markets.',
        },
        {
          title: 'Healthy Snacks',
          description:
            'Production of natural, healthy snacks based on local fruit, vegetables and grains.',
        },
        {
          title: 'Processed Specialty Coffee',
          description:
            'Roasting, packaging and marketing of premium own-brand coffee.',
        },
        {
          title: 'Preserves and Canned Goods',
          description:
            'Processing of fruit and vegetables into preserves for export.',
        },
      ],
      valueChain: ['Raw material sourcing', 'Industrial processing', 'Quality control', 'Packaging and labeling', 'Distribution and export'],
      advantages: [
        'Access to high-quality raw materials',
        'Competitive production costs',
        'Free trade agreements',
        'Established industrial infrastructure',
        'Talent specialized in processing',
      ],
      caseStudies: [
        {
          company: 'Alimentos Maravilla',
          sector: 'Processed Foods',
          description:
            'Leader in the production and distribution of processed foods in Central America',
        },
        {
          company: 'Productos Forestales',
          sector: 'Organic Foods',
          description:
            'Production of certified organic foods for export',
        },
      ],
    },
    'bebidas-no-alcoholicas': {
      name: 'Non-Alcoholic Beverages',
      description:
        'Guatemala has exceptional natural resources for beverage production, including high-quality water and tropical fruit. The sector offers opportunities in natural, functional and premium beverages.',
      opportunities: [
        {
          title: 'Premium Natural Juices',
          description:
            'Production of 100% natural tropical fruit juices for high-end markets.',
        },
        {
          title: 'Functional Beverages',
          description:
            'Beverages with nutritional and health benefits based on natural ingredients.',
        },
        {
          title: 'Bottled Water',
          description:
            'Bottling of natural water from Guatemalan springs.',
        },
        {
          title: 'Natural Energy Drinks',
          description:
            'Energy drinks formulated with natural and organic ingredients.',
        },
      ],
      valueChain: ['Raw material extraction', 'Formulation and blending', 'Bottling and packaging', 'Quality control', 'Commercial distribution'],
      advantages: [
        'High-quality water sources',
        'Tropical fruit year-round',
        'Competitive production costs',
        'Access to regional markets',
        'Modern bottling plants',
      ],
      caseStudies: [
        {
          company: 'Jugos del Valle',
          sector: 'Natural Beverages',
          description:
            'Production of premium natural juices for all of Central America',
        },
        {
          company: 'Agua Pura',
          sector: 'Bottled Water',
          description:
            'Regional leader in natural water bottling',
        },
      ],
    },
    'vestuario-textil': {
      name: 'Apparel and Textiles',
      description:
        'Guatemala\'s textile industry is recognized for its quality, flexibility and production capacity. With more than 40 years of experience manufacturing for global brands, the sector offers opportunities in technical textiles, sustainable fashion and specialized manufacturing.',
      opportunities: [
        {
          title: 'Technical Textiles',
          description:
            'Production of specialized textiles for medical, sports and industrial use.',
        },
        {
          title: 'Sustainable Fashion',
          description:
            'Garment manufacturing with organic textiles and eco-friendly processes.',
        },
        {
          title: 'Corporate Uniforms',
          description:
            'Manufacturing of specialized uniforms for companies and specific sectors.',
        },
        {
          title: 'Premium Garment Manufacturing',
          description:
            'Production of high-quality garments for international brands.',
        },
      ],
      valueChain: ['Textile sourcing', 'Design and pattern making', 'Cutting and sewing', 'Quality control', 'Packaging and export'],
      advantages: [
        'Skilled, experienced workforce',
        'Proximity to the U.S. market',
        'Free trade zone regime',
        'Consolidated textile infrastructure',
        'Flexible production capacity',
      ],
      caseStudies: [
        {
          company: 'Textiles Modernos',
          sector: 'Garment Manufacturing',
          description:
            'Production of garments for global fashion brands',
        },
        {
          company: 'TechFabric Guatemala',
          sector: 'Technical Textiles',
          description:
            'Manufacturing of specialized textiles for medical and sports use',
        },
      ],
    },
    'quimicos': {
      name: 'Chemicals',
      description:
        'Guatemala\'s chemical sector spans the production of industrial chemicals, cleaning products, fertilizers and cosmetics. With a strategic location and access to raw materials, Guatemala offers competitive advantages for chemical manufacturing.',
      opportunities: [
        {
          title: 'Industrial Chemicals',
          description:
            'Production of chemicals for industrial use and manufacturing.',
        },
        {
          title: 'Eco-Friendly Cleaning Products',
          description:
            'Manufacturing of biodegradable, sustainable cleaning products.',
        },
        {
          title: 'Specialized Fertilizers',
          description:
            'Production of organic and controlled-release fertilizers.',
        },
        {
          title: 'Natural Cosmetics',
          description:
            'Manufacturing of cosmetics based on Guatemalan natural ingredients.',
        },
      ],
      valueChain: ['Base chemical sourcing', 'Formulation and blending', 'Industrial production', 'Quality control', 'Packaging and distribution'],
      advantages: [
        'Access to regional raw materials',
        'Modern industrial infrastructure',
        'Qualified technical staff',
        'Growing regional market',
        'Competitive regulations',
      ],
      caseStudies: [
        {
          company: 'Químicos de Guatemala',
          sector: 'Industrial Chemicals',
          description:
            'Production of industrial chemicals for Central America',
        },
        {
          company: 'EcoClean Guatemala',
          sector: 'Cleaning Products',
          description:
            'Manufacturing of eco-friendly cleaning products',
        },
      ],
    },
    'farmaceuticos': {
      name: 'Pharmaceuticals',
      description:
        'Guatemala\'s pharmaceutical industry is experiencing significant growth, with opportunities in the production of generic medicines, supplements and specialized pharmaceutical products for the regional market.',
      opportunities: [
        {
          title: 'Generic Medicines',
          description:
            'Production of high-quality generic medicines for the regional market.',
        },
        {
          title: 'Nutritional Supplements',
          description:
            'Manufacturing of vitamin and nutritional supplements.',
        },
        {
          title: 'OTC Pharmaceuticals',
          description:
            'Manufacturing of over-the-counter medicines.',
        },
        {
          title: 'Vitamins and Minerals',
          description:
            'Production of vitamin complexes and mineral supplements.',
        },
      ],
      valueChain: ['Active ingredient sourcing', 'Pharmaceutical formulation', 'Production and manufacturing', 'GMP quality control', 'Distribution and marketing'],
      advantages: [
        'Robust pharmaceutical regulations',
        'Specialized technical staff',
        'GMP-certified plants',
        'Access to the Central American market',
        'Competitive production costs',
      ],
      caseStudies: [
        {
          company: 'Laboratorios Chalver',
          sector: 'Generic Medicines',
          description:
            'Production of generic medicines for all of Central America',
        },
        {
          company: 'Pharma Guatemala',
          sector: 'Supplements',
          description:
            'Manufacturing of nutritional supplements and vitamins',
        },
      ],
    },
    'tics-software': {
      name: 'ICT and Software',
      description:
        'Guatemala\'s technology sector is expanding rapidly, with opportunities in software development, mobile applications, cybersecurity and cloud services. Guatemala has a growing community of talented, bilingual developers.',
      opportunities: [
        {
          title: 'Custom Software Development',
          description:
            'Development of enterprise applications and tailor-made solutions.',
        },
        {
          title: 'Mobile Applications',
          description:
            'Design and development of iOS and Android applications.',
        },
        {
          title: 'Cloud Computing',
          description:
            'Cloud migration and management services.',
        },
        {
          title: 'Cybersecurity',
          description:
            'IT security and data protection solutions.',
        },
      ],
      valueChain: ['Requirements analysis', 'Design and architecture', 'Development and programming', 'Testing and QA', 'Deployment and support'],
      advantages: [
        'Bilingual technical talent',
        'Competitive costs',
        'Time zone aligned with the U.S.',
        'Growing tech ecosystem',
        'Incentives for technology companies',
      ],
      caseStudies: [
        {
          company: 'SoftTech Guatemala',
          sector: 'Software Development',
          description:
            'Development of enterprise solutions for international clients',
        },
        {
          company: 'Mobile Solutions GT',
          sector: 'Mobile Apps',
          description:
            'Development of mobile applications for startups and companies',
        },
      ],
    },
    'servicios-empresariales': {
      name: 'Business Services, Contact Centers and BPOs',
      description:
        'Guatemala is a leading outsourcing destination in the region, with a bilingual workforce, competitive costs and excellent connectivity. The sector offers opportunities in contact centers, BPO and back office services.',
      opportunities: [
        {
          title: 'Multichannel Contact Centers',
          description:
            'Customer service centers with omnichannel support.',
        },
        {
          title: 'Financial Process BPO',
          description:
            'Outsourcing of accounting and financial processes.',
        },
        {
          title: 'Specialized Technical Support',
          description:
            'Help desk and technical support for technology products.',
        },
        {
          title: 'Back Office Services',
          description:
            'Data processing and administrative management services.',
        },
      ],
      valueChain: ['Recruitment and training', 'Service operations', 'Quality management', 'Technology and platforms', 'Reporting and analytics'],
      advantages: [
        'Bilingual workforce (Spanish-English)',
        'Competitive operating costs',
        'Compatible time zone',
        'High service quality',
        'Modern technology infrastructure',
      ],
      caseStudies: [
        {
          company: 'Atento Guatemala',
          sector: 'Contact Centers',
          description:
            'Leader in contact center services for global brands',
        },
        {
          company: 'BPO Solutions',
          sector: 'BPO',
          description:
            'BPO services for financial and administrative processes',
        },
      ],
    },
    'energia': {
      name: 'Energy',
      description:
        'Guatemala has exceptional potential for renewable energy, including hydro, solar, wind and geothermal. The country is committed to the energy transition and offers attractive incentives for investment in clean generation.',
      opportunities: [
        {
          title: 'Hydropower',
          description:
            'Development of small- and medium-scale hydroelectric projects.',
        },
        {
          title: 'Photovoltaic Solar Energy',
          description:
            'Solar farms and distributed generation systems.',
        },
        {
          title: 'Wind Energy',
          description:
            'Wind farms in areas with high wind potential.',
        },
        {
          title: 'Biomass and Biogas',
          description:
            'Use of agricultural waste for electricity generation.',
        },
      ],
      valueChain: ['Studies and project development', 'Plant construction', 'Operation and maintenance', 'Generation and dispatch', 'Energy trading'],
      advantages: [
        'High renewable resource potential',
        'Tax incentives for clean energy',
        'Favorable regulatory framework',
        'Growing energy demand',
        'Potential for regional export',
      ],
      caseStudies: [
        {
          company: 'Hidro Guatemala',
          sector: 'Hydropower',
          description:
            'Development of renewable hydroelectric projects',
        },
        {
          company: 'Solar Power GT',
          sector: 'Solar Energy',
          description:
            'Development of photovoltaic solar farms',
        },
      ],
    },
    'servicios-compartidos': {
      name: 'Shared Services Center',
      description:
        'Guatemala is a strategic destination for multinational shared services centers. With qualified professional talent, competitive costs and a strategic location, the country offers significant advantages for SSCs.',
      opportunities: [
        {
          title: 'Shared Finance and Accounting',
          description:
            'Financial and accounting service centers for regional operations.',
        },
        {
          title: 'Shared Human Resources',
          description:
            'Payroll, recruitment and talent management services.',
        },
        {
          title: 'Shared IT',
          description:
            'Technology support and IT infrastructure management.',
        },
        {
          title: 'Procurement Services',
          description:
            'Centralized procurement and supplier management.',
        },
      ],
      valueChain: ['Setting up operations', 'Talent recruitment', 'Process implementation', 'Service operations', 'Continuous improvement'],
      advantages: [
        'Qualified bilingual professionals',
        'Competitive operating costs',
        'Favorable time zone',
        'Modern business infrastructure',
        'Political and economic stability',
      ],
      caseStudies: [
        {
          company: 'Global SSC Guatemala',
          sector: 'Corporate Services',
          description:
            'Shared services center for a Fortune 500 company',
        },
        {
          company: 'Finance Hub GT',
          sector: 'Shared Finance',
          description:
            'Regional finance and accounting center',
        },
      ],
    },
    'electrico-electronico': {
      name: 'Electrical-Electronic (Auto Parts)',
      description:
        'The electrical and electronic auto parts industry is growing in Guatemala, building on manufacturing experience and proximity to the North American market. The sector offers opportunities in specialized components and advanced systems.',
      opportunities: [
        {
          title: 'Wiring Harnesses',
          description:
            'Manufacturing of harnesses and wiring for vehicles.',
        },
        {
          title: 'Electronic Components',
          description:
            'Production of electronic components for automotive systems.',
        },
        {
          title: 'Sensors and Actuators',
          description:
            'Manufacturing of sensors for safety and control systems.',
        },
        {
          title: 'Control Systems',
          description:
            'Assembly of electronic control modules.',
        },
      ],
      valueChain: ['Component sourcing', 'Assembly and manufacturing', 'Testing and validation', 'Quality control', 'Packaging and shipping'],
      advantages: [
        'Skilled workforce',
        'Proximity to automotive plants',
        'Favorable trade agreements',
        'Manufacturing infrastructure',
        'Experience in precision manufacturing',
      ],
      caseStudies: [
        {
          company: 'Auto Components GT',
          sector: 'Electrical Auto Parts',
          description:
            'Manufacturing of automotive harnesses and electrical components',
        },
        {
          company: 'ElectroTech Guatemala',
          sector: 'Electronic Components',
          description:
            'Production of sensors and actuators for the automotive industry',
        },
      ],
    },
    'servicios-salud': {
      name: 'Health Services',
      description:
        'Guatemala is emerging as a destination for medical tourism and specialized health services. With high-quality medical professionals, competitive costs and modern facilities, the sector offers opportunities in specialized medical services and telemedicine.',
      opportunities: [
        {
          title: 'Medical Tourism',
          description:
            'Specialized medical services for international patients.',
        },
        {
          title: 'Telemedicine',
          description:
            'Remote medical consultation and distance diagnosis platforms.',
        },
        {
          title: 'Specialized Clinics',
          description:
            'Medical centers specializing in cosmetic, dental and ophthalmic surgery.',
        },
        {
          title: 'Home Care',
          description:
            'Home-based medical care and nursing services.',
        },
      ],
      valueChain: ['Patient acquisition', 'Assessment and diagnosis', 'Treatment and procedures', 'Recovery and follow-up', 'Post-treatment services'],
      advantages: [
        'Highly qualified medical professionals',
        'Costs 40-60% lower than the U.S.',
        'Modern medical facilities',
        'Convenient geographic location',
        'Quality personalized care',
      ],
      caseStudies: [
        {
          company: 'Medical Tourism Guatemala',
          sector: 'Medical Tourism',
          description:
            'Network of specialized clinics for international patients',
        },
        {
          company: 'TeleSalud GT',
          sector: 'Telemedicine',
          description:
            'Telemedicine platform for Central America',
        },
      ],
    },
    'metalmecanica': {
      name: 'Metalworking',
      description:
        'Guatemala\'s metalworking sector offers capabilities in the fabrication of metal structures, machinery and industrial components. With an established industrial base and qualified technical staff, the sector is ready for advanced manufacturing projects.',
      opportunities: [
        {
          title: 'Metal Structures',
          description:
            'Fabrication of structures for construction and industrial projects.',
        },
        {
          title: 'Industrial Machinery',
          description:
            'Manufacturing of machinery and equipment for various industries.',
        },
        {
          title: 'Tools and Molds',
          description:
            'Production of precision tools and industrial molds.',
        },
        {
          title: 'Mechanical Components',
          description:
            'Fabrication of specialized mechanical parts and components.',
        },
      ],
      valueChain: ['Design and engineering', 'Cutting and machining', 'Welding and assembly', 'Surface treatment', 'Inspection and delivery'],
      advantages: [
        'Specialized technical staff',
        'Workshops equipped with modern technology',
        'Flexible manufacturing capacity',
        'Competitive costs',
        'Experience in complex projects',
      ],
      caseStudies: [
        {
          company: 'MetalTech Guatemala',
          sector: 'Metal Structures',
          description:
            'Fabrication of metal structures for industrial projects',
        },
        {
          company: 'Precision Tools GT',
          sector: 'Industrial Tools',
          description:
            'Manufacturing of precision tools and molds',
        },
      ],
    },
    'turismo': {
      name: 'Tourism',
      description:
        'Guatemala has a unique Mayan cultural heritage, exceptional biodiversity and stunning landscapes. The tourism sector offers opportunities in cultural tourism, ecotourism, adventure tourism and hotel infrastructure development.',
      opportunities: [
        {
          title: 'Mayan Cultural Tourism',
          description:
            'Development of tourism experiences at Mayan archaeological sites.',
        },
        {
          title: 'Ecotourism',
          description:
            'Sustainable tourism projects in protected natural areas.',
        },
        {
          title: 'Adventure Tourism',
          description:
            'Adventure activities such as hiking, climbing and water sports.',
        },
        {
          title: 'MICE (Meetings and Events)',
          description:
            'Development of infrastructure for conventions and corporate events.',
        },
      ],
      valueChain: ['Destination development', 'Hotel infrastructure', 'Tourism services', 'Promotion and marketing', 'Visitor experience'],
      advantages: [
        'Unique Mayan cultural heritage',
        'Exceptional biodiversity',
        'Pleasant climate year-round',
        'Proximity to source markets',
        'Competitive costs',
      ],
      caseStudies: [
        {
          company: 'Maya Heritage Hotels',
          sector: 'Hospitality',
          description:
            'Chain of boutique hotels in cultural destinations',
        },
        {
          company: 'EcoAdventure Guatemala',
          sector: 'Ecotourism',
          description:
            'Adventure tourism and ecotourism operator',
        },
      ],
    },
    'biotecnologia': {
      name: 'Biotechnology',
      description:
        'Guatemala is building biotechnology capabilities with a focus on agricultural and medical applications. The country\'s biodiversity and agricultural experience create unique opportunities in this emerging sector.',
      opportunities: [
        {
          title: 'Agricultural Biotechnology',
          description:
            'Development of improved crops and biotech solutions for agriculture.',
        },
        {
          title: 'Personalized Medicine',
          description:
            'Molecular diagnostics and personalized therapies.',
        },
        {
          title: 'Biofuels',
          description:
            'Production of second- and third-generation biofuels.',
        },
        {
          title: 'Genetic Research',
          description:
            'Genetic studies applied to local biodiversity.',
        },
      ],
      valueChain: ['Research and development', 'Clinical/field trials', 'Pilot production', 'Industrial scale-up', 'Commercialization'],
      advantages: [
        'Unique biodiversity',
        'Valuable genetic resources',
        'Emerging scientific talent',
        'Institutional support for R&D',
        'Regional market for innovation',
      ],
      caseStudies: [
        {
          company: 'BioTech Guatemala',
          sector: 'Agricultural Biotechnology',
          description:
            'Development of improved crops through biotechnology',
        },
        {
          company: 'BioFuel Solutions',
          sector: 'Biofuels',
          description:
            'Production of second-generation biofuels',
        },
      ],
    },
    'dispositivos-medicos': {
      name: 'Medical Devices and Equipment',
      description:
        'Guatemala\'s medical device sector offers opportunities in the manufacturing of medical devices, diagnostic equipment and surgical instruments. With robust regulations and precision manufacturing capabilities, the country is an attractive destination.',
      opportunities: [
        {
          title: 'Disposable Medical Devices',
          description:
            'Manufacturing of single-use medical devices.',
        },
        {
          title: 'Diagnostic Equipment',
          description:
            'Manufacturing of medical diagnostic equipment and kits.',
        },
        {
          title: 'Surgical Instruments',
          description:
            'Production of specialized surgical instruments.',
        },
        {
          title: 'Prosthetics and Orthotics',
          description:
            'Manufacturing of prosthetics and orthopedic devices.',
        },
      ],
      valueChain: ['Design and development', 'Component manufacturing', 'Assembly and sterilization', 'Quality control', 'Packaging and distribution'],
      advantages: [
        'Experience in precision manufacturing',
        'Robust medical regulations',
        'Qualified technical staff',
        'Competitive costs',
        'Proximity to major markets',
      ],
      caseStudies: [
        {
          company: 'MedDevice Guatemala',
          sector: 'Medical Devices',
          description:
            'Manufacturing of disposable medical devices',
        },
        {
          company: 'Surgical Tools GT',
          sector: 'Surgical Instruments',
          description:
            'Production of specialized surgical instruments',
        },
      ],
    },
    'componentes-electronicos': {
      name: 'Electronic Components and Equipment',
      description:
        'Guatemala is building capabilities in the manufacturing of advanced electronic components, including semiconductors, integrated circuits and PCB components. The sector offers opportunities in high-value-added electronics.',
      opportunities: [
        {
          title: 'Semiconductor Assembly',
          description:
            'Packaging and testing of semiconductors and integrated circuits.',
        },
        {
          title: 'Integrated Circuits',
          description:
            'Manufacturing of application-specific integrated circuits.',
        },
        {
          title: 'PCB Components',
          description:
            'Fabrication of multilayer printed circuit boards.',
        },
        {
          title: 'Advanced Sensors',
          description:
            'Production of specialized electronic sensors.',
        },
      ],
      valueChain: ['Circuit design', 'Component fabrication', 'Assembly and soldering', 'Testing and validation', 'Final packaging'],
      advantages: [
        'Specialized technical workforce',
        'Clean manufacturing infrastructure',
        'Experience in precision manufacturing',
        'Competitive costs',
        'Favorable trade agreements',
      ],
      caseStudies: [
        {
          company: 'SemiCon Guatemala',
          sector: 'Semiconductors',
          description:
            'Semiconductor assembly and testing plant',
        },
        {
          company: 'PCB Manufacturing GT',
          sector: 'Printed Circuits',
          description:
            'Fabrication of highly complex multilayer PCBs',
        },
      ],
    },
    'ti-manufactura-avanzada': {
      name: 'Information Technology for Advanced Manufacturing',
      description:
        'Guatemala is positioning itself in technology solutions for Industry 4.0, including industrial IoT, automation, artificial intelligence and robotics. This emerging sector offers opportunities in advanced manufacturing technologies.',
      opportunities: [
        {
          title: 'Industrial IoT',
          description:
            'Internet of Things solutions for smart manufacturing.',
        },
        {
          title: 'Industrial Automation',
          description:
            'Automation and control systems for manufacturing plants.',
        },
        {
          title: 'AI for Manufacturing',
          description:
            'Artificial intelligence applications for process optimization.',
        },
        {
          title: 'Industrial Robotics',
          description:
            'Integration of robotic systems into production lines.',
        },
      ],
      valueChain: ['Consulting and analysis', 'Solution design', 'Development and integration', 'Implementation', 'Support and maintenance'],
      advantages: [
        'Talent in emerging technologies',
        'Growing innovation ecosystem',
        'Proximity to manufacturing clients',
        'Competitive development costs',
        'Modern technology infrastructure',
      ],
      caseStudies: [
        {
          company: 'Industry 4.0 Solutions',
          sector: 'Automation',
          description:
            'Automation solutions for advanced manufacturing',
        },
        {
          company: 'Smart Factory GT',
          sector: 'Industrial IoT',
          description:
            'IoT platforms for smart manufacturing',
        },
      ],
    },
  },
};

/** Une el texto del idioma activo con las cifras compartidas. */
function merge(copy: Record<SectorSlug, SectorCopy>): Record<SectorSlug, SectorDetailContent> {
  const entries = (Object.keys(FACTS) as SectorSlug[]).map((slug) => {
    const facts = FACTS[slug];
    const text = copy[slug];

    return [
      slug,
      {
        name: text.name,
        description: text.description,
        image: facts.image,
        stats: facts.stats,
        keyOpportunities: text.opportunities.map((opportunity, index) => ({
          ...opportunity,
          potential: facts.potentials[index],
        })),
        valueChain: text.valueChain,
        advantages: text.advantages,
        caseStudies: text.caseStudies.map((study, index) => ({
          ...study,
          ...facts.caseStudies[index],
        })),
      },
    ] as const;
  });

  return Object.fromEntries(entries) as Record<SectorSlug, SectorDetailContent>;
}

/**
 * Contenido de cada pagina de detalle sectorial, indexado por el slug de la
 * ruta /strategic-sectors/:sector.
 */
export const sectorDetails: Localized<Record<SectorSlug, SectorDetailContent>> = {
  es: merge(COPY.es),
  en: merge(COPY.en),
};

export const isSectorSlug = (value: string | undefined): value is SectorSlug =>
  value !== undefined && value in FACTS;
