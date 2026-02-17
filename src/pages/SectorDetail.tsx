import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Download, MessageCircle, BarChart3, 
  Users, DollarSign, TrendingUp, MapPin, Award,
  CheckCircle, Building, Globe, Star
} from 'lucide-react';
import AgroindustriaImg from '../assets/images/agroindustria.jpg';
import ManufacturaImg from '../assets/images/manufactura.jpg';
import ServiciosGlobalesImg from '../assets/images/serviciosglobales.jpg';
import EnergiasLimpiasImg from '../assets/images/energiaslimpias.jpg';
import TurismoSostenibleImg from '../assets/images/turismo.jpg';

const SectorDetail: React.FC = () => {
  const { sector } = useParams();
  
  // Sector data (in real app, this would come from an API)
  const sectorData = {
    'agroindustria': {
      name: 'Agroindustria',
      description: 'Guatemala es reconocido mundialmente por su tradición agrícola y la calidad excepcional de sus productos. El sector agroindustrial representa una oportunidad única para inversionistas que buscan aprovechar el clima tropical, la diversidad de pisos altitudinales y la experiencia centenaria en cultivos de exportación.',
      image: AgroindustriaImg,
      stats: {
        investment: '$2.3B',
        employment: '850K empleos',
        growth: '+4.2%',
        exports: '$3.8B'
      },
      keyOpportunities: [
        {
          title: 'Café de Especialidad',
          description: 'Guatemala produce algunos de los mejores cafés del mundo con denominaciones de origen reconocidas internacionalmente.',
          potential: 'Alto'
        },
        {
          title: 'Frutas Tropicales',
          description: 'Banano, piña, mango y frutas exóticas con demanda creciente en mercados premium.',
          potential: 'Muy Alto'
        },
        {
          title: 'Hortalizas de Exportación',
          description: 'Brócoli, ejote francés, arveja china y otros productos frescos para mercados de alta gama.',
          potential: 'Alto'
        },
        {
          title: 'Productos Orgánicos',
          description: 'Certificaciones internacionales y creciente demanda por productos orgánicos y sostenibles.',
          potential: 'Muy Alto'
        }
      ],
      valueChain: [
        'Producción primaria',
        'Procesamiento y empaque',
        'Logística y distribución',
        'Comercialización internacional',
        'Certificaciones de calidad'
      ],
      advantages: [
        'Diversidad de microclimas',
        'Mano de obra especializada',
        'Proximidad a mercados de EE.UU.',
        'Tratados comerciales preferenciales',
        'Infraestructura logística establecida'
      ],
      caseStudies: [
        {
          company: 'Grupo Pantaleón',
          sector: 'Azúcar y Energía',
          investment: '$500M',
          description: 'Líder regional en producción de azúcar y generación de energía renovable',
          logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          company: 'Del Monte',
          sector: 'Frutas Frescas',
          investment: '$200M',
          description: 'Producción y exportación de banano y piña para mercados globales',
          logo: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    },
    'alimentos-procesados': {
      name: 'Alimentos Procesados',
      description: 'El sector de alimentos procesados en Guatemala ofrece oportunidades excepcionales para la transformación y agregación de valor a productos agrícolas. Con acceso a materias primas de alta calidad y una ubicación estratégica, el país se posiciona como un hub regional para la industria alimentaria.',
      image: AgroindustriaImg,
      stats: {
        investment: '$2.3B',
        employment: '120K empleos',
        growth: '+6.8%',
        exports: '$2.1B'
      },
      keyOpportunities: [
        {
          title: 'Alimentos Orgánicos',
          description: 'Procesamiento de productos orgánicos certificados con creciente demanda en mercados internacionales.',
          potential: 'Muy Alto'
        },
        {
          title: 'Snacks Saludables',
          description: 'Producción de snacks naturales y saludables basados en frutas, vegetales y granos locales.',
          potential: 'Alto'
        },
        {
          title: 'Café de Especialidad Procesado',
          description: 'Tostado, empaque y comercialización de café premium con marca propia.',
          potential: 'Alto'
        },
        {
          title: 'Conservas y Enlatados',
          description: 'Procesamiento de frutas y vegetales en conservas para exportación.',
          potential: 'Medio'
        }
      ],
      valueChain: [
        'Abastecimiento de materias primas',
        'Procesamiento industrial',
        'Control de calidad',
        'Empaque y etiquetado',
        'Distribución y exportación'
      ],
      advantages: [
        'Acceso a materias primas de alta calidad',
        'Costos competitivos de producción',
        'Tratados de libre comercio',
        'Infraestructura industrial establecida',
        'Talento especializado en procesamiento'
      ],
      caseStudies: [
        {
          company: 'Alimentos Maravilla',
          sector: 'Alimentos Procesados',
          investment: '$180M',
          description: 'Líder en producción y distribución de alimentos procesados en Centroamérica',
          logo: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          company: 'Productos Forestales',
          sector: 'Alimentos Orgánicos',
          investment: '$95M',
          description: 'Producción de alimentos orgánicos certificados para exportación',
          logo: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    },
    'bebidas-no-alcoholicas': {
      name: 'Bebidas No Alcohólicas',
      description: 'Guatemala cuenta con recursos naturales excepcionales para la producción de bebidas, incluyendo agua de alta calidad y frutas tropicales. El sector ofrece oportunidades en bebidas naturales, funcionales y premium.',
      image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stats: {
        investment: '$1.2B',
        employment: '120K empleos',
        growth: '+6.5%',
        exports: '$890M'
      },
      keyOpportunities: [
        {
          title: 'Jugos Naturales Premium',
          description: 'Producción de jugos 100% naturales de frutas tropicales para mercados de alta gama.',
          potential: 'Muy Alto'
        },
        {
          title: 'Bebidas Funcionales',
          description: 'Bebidas con beneficios nutricionales y saludables basadas en ingredientes naturales.',
          potential: 'Alto'
        },
        {
          title: 'Agua Embotellada',
          description: 'Embotellamiento de agua natural de manantiales guatemaltecos.',
          potential: 'Alto'
        },
        {
          title: 'Bebidas Energéticas Naturales',
          description: 'Bebidas energéticas formuladas con ingredientes naturales y orgánicos.',
          potential: 'Medio'
        }
      ],
      valueChain: [
        'Extracción de materias primas',
        'Formulación y mezcla',
        'Embotellado y envasado',
        'Control de calidad',
        'Distribución comercial'
      ],
      advantages: [
        'Fuentes de agua de alta calidad',
        'Frutas tropicales todo el año',
        'Costos competitivos de producción',
        'Acceso a mercados regionales',
        'Plantas embotelladoras modernas'
      ],
      caseStudies: [
        {
          company: 'Jugos del Valle',
          sector: 'Bebidas Naturales',
          investment: '$120M',
          description: 'Producción de jugos naturales premium para toda Centroamérica',
          logo: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          company: 'Agua Pura',
          sector: 'Agua Embotellada',
          investment: '$85M',
          description: 'Líder en embotellamiento de agua natural en la región',
          logo: 'https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    },
    'vestuario-textil': {
      name: 'Vestuario y Textil',
      description: 'La industria textil guatemalteca es reconocida por su calidad, flexibilidad y capacidad de producción. Con más de 40 años de experiencia en confección para marcas globales, el sector ofrece oportunidades en textiles técnicos, moda sostenible y manufactura especializada.',
      image: ManufacturaImg,
      stats: {
        investment: '$1.8B',
        employment: '420K empleos',
        growth: '+5.1%',
        exports: '$2.9B'
      },
      keyOpportunities: [
        {
          title: 'Textiles Técnicos',
          description: 'Producción de textiles especializados para uso médico, deportivo e industrial.',
          potential: 'Muy Alto'
        },
        {
          title: 'Moda Sostenible',
          description: 'Confección de prendas con textiles orgánicos y procesos ecológicos.',
          potential: 'Alto'
        },
        {
          title: 'Uniformes Corporativos',
          description: 'Manufactura de uniformes especializados para empresas y sectores específicos.',
          potential: 'Alto'
        },
        {
          title: 'Confección Premium',
          description: 'Producción de prendas de alta calidad para marcas internacionales.',
          potential: 'Alto'
        }
      ],
      valueChain: [
        'Abastecimiento de textiles',
        'Diseño y patronaje',
        'Corte y confección',
        'Control de calidad',
        'Empaque y exportación'
      ],
      advantages: [
        'Mano de obra calificada y experimentada',
        'Proximidad al mercado estadounidense',
        'Régimen de zonas francas',
        'Infraestructura textil consolidada',
        'Capacidad de producción flexible'
      ],
      caseStudies: [
        {
          company: 'Textiles Modernos',
          sector: 'Confección',
          investment: '$220M',
          description: 'Producción de prendas para marcas globales de moda',
          logo: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          company: 'TechFabric Guatemala',
          sector: 'Textiles Técnicos',
          investment: '$150M',
          description: 'Manufactura de textiles especializados para uso médico y deportivo',
          logo: 'https://images.pexels.com/photos/3735645/pexels-photo-3735645.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    },
    'quimicos': {
      name: 'Químicos',
      description: 'El sector químico guatemalteco abarca la producción de químicos industriales, productos de limpieza, fertilizantes y cosméticos. Con una ubicación estratégica y acceso a materias primas, Guatemala ofrece ventajas competitivas para la manufactura química.',
      image: 'https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stats: {
        investment: '$950M',
        employment: '85K empleos',
        growth: '+7.2%',
        exports: '$780M'
      },
      keyOpportunities: [
        {
          title: 'Químicos Industriales',
          description: 'Producción de químicos para uso industrial y manufactura.',
          potential: 'Alto'
        },
        {
          title: 'Productos de Limpieza Ecológicos',
          description: 'Manufactura de productos de limpieza biodegradables y sostenibles.',
          potential: 'Muy Alto'
        },
        {
          title: 'Fertilizantes Especializados',
          description: 'Producción de fertilizantes orgánicos y de liberación controlada.',
          potential: 'Alto'
        },
        {
          title: 'Cosméticos Naturales',
          description: 'Fabricación de cosméticos basados en ingredientes naturales guatemaltecos.',
          potential: 'Alto'
        }
      ],
      valueChain: [
        'Abastecimiento de químicos base',
        'Formulación y mezcla',
        'Producción industrial',
        'Control de calidad',
        'Empaque y distribución'
      ],
      advantages: [
        'Acceso a materias primas regionales',
        'Infraestructura industrial moderna',
        'Personal técnico calificado',
        'Mercado regional en crecimiento',
        'Regulaciones competitivas'
      ],
      caseStudies: [
        {
          company: 'Químicos de Guatemala',
          sector: 'Químicos Industriales',
          investment: '$175M',
          description: 'Producción de químicos industriales para Centroamérica',
          logo: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          company: 'EcoClean Guatemala',
          sector: 'Productos de Limpieza',
          investment: '$95M',
          description: 'Manufactura de productos de limpieza ecológicos',
          logo: 'https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    },
    'farmaceuticos': {
      name: 'Farmacéuticos',
      description: 'La industria farmacéutica guatemalteca está experimentando un crecimiento significativo, con oportunidades en producción de medicamentos genéricos, suplementos y productos farmacéuticos especializados para el mercado regional.',
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stats: {
        investment: '$820M',
        employment: '65K empleos',
        growth: '+9.8%',
        exports: '$690M'
      },
      keyOpportunities: [
        {
          title: 'Medicamentos Genéricos',
          description: 'Producción de medicamentos genéricos de alta calidad para el mercado regional.',
          potential: 'Muy Alto'
        },
        {
          title: 'Suplementos Nutricionales',
          description: 'Manufactura de suplementos vitamínicos y nutricionales.',
          potential: 'Alto'
        },
        {
          title: 'Productos Farmacéuticos OTC',
          description: 'Fabricación de medicamentos de venta libre.',
          potential: 'Alto'
        },
        {
          title: 'Vitaminas y Minerales',
          description: 'Producción de complejos vitamínicos y suplementos minerales.',
          potential: 'Alto'
        }
      ],
      valueChain: [
        'Abastecimiento de principios activos',
        'Formulación farmacéutica',
        'Producción y manufactura',
        'Control de calidad GMP',
        'Distribución y comercialización'
      ],
      advantages: [
        'Regulaciones farmacéuticas robustas',
        'Personal técnico especializado',
        'Plantas con certificación GMP',
        'Acceso al mercado centroamericano',
        'Costos competitivos de producción'
      ],
      caseStudies: [
        {
          company: 'Laboratorios Chalver',
          sector: 'Medicamentos Genéricos',
          investment: '$140M',
          description: 'Producción de medicamentos genéricos para toda Centroamérica',
          logo: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          company: 'Pharma Guatemala',
          sector: 'Suplementos',
          investment: '$95M',
          description: 'Manufactura de suplementos nutricionales y vitaminas',
          logo: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    },
    'tics-software': {
      name: 'TICs y Software',
      description: 'El sector tecnológico guatemalteco está en rápida expansión, con oportunidades en desarrollo de software, aplicaciones móviles, ciberseguridad y servicios en la nube. Guatemala cuenta con una creciente comunidad de desarrolladores talentosos y bilingües.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stats: {
        investment: '$750M',
        employment: '95K empleos',
        growth: '+15.8%',
        exports: '$620M'
      },
      keyOpportunities: [
        {
          title: 'Desarrollo de Software Personalizado',
          description: 'Desarrollo de aplicaciones empresariales y soluciones a medida.',
          potential: 'Muy Alto'
        },
        {
          title: 'Aplicaciones Móviles',
          description: 'Diseño y desarrollo de aplicaciones para iOS y Android.',
          potential: 'Muy Alto'
        },
        {
          title: 'Cloud Computing',
          description: 'Servicios de migración y gestión en la nube.',
          potential: 'Alto'
        },
        {
          title: 'Ciberseguridad',
          description: 'Soluciones de seguridad informática y protección de datos.',
          potential: 'Muy Alto'
        }
      ],
      valueChain: [
        'Análisis de requisitos',
        'Diseño y arquitectura',
        'Desarrollo y programación',
        'Testing y QA',
        'Implementación y soporte'
      ],
      advantages: [
        'Talento técnico bilingüe',
        'Costos competitivos',
        'Zona horaria compatible con EE.UU.',
        'Creciente ecosistema tech',
        'Incentivos para empresas tecnológicas'
      ],
      caseStudies: [
        {
          company: 'SoftTech Guatemala',
          sector: 'Desarrollo de Software',
          investment: '$120M',
          description: 'Desarrollo de soluciones empresariales para clientes internacionales',
          logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          company: 'Mobile Solutions GT',
          sector: 'Apps Móviles',
          investment: '$75M',
          description: 'Desarrollo de aplicaciones móviles para startups y empresas',
          logo: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    },
    'servicios-empresariales': {
      name: 'Servicios Empresariales, Contact Centers y BPOs',
      description: 'Guatemala es un destino líder para servicios de outsourcing en la región, con una fuerza laboral bilingüe, costos competitivos y excelente conectividad. El sector ofrece oportunidades en contact centers, BPO y servicios de back office.',
      image: ServiciosGlobalesImg,
      stats: {
        investment: '$950M',
        employment: '180K empleos',
        growth: '+8.7%',
        exports: '$1.2B'
      },
      keyOpportunities: [
        {
          title: 'Contact Centers Multicanal',
          description: 'Centros de atención al cliente con soporte omnicanal.',
          potential: 'Muy Alto'
        },
        {
          title: 'BPO de Procesos Financieros',
          description: 'Outsourcing de procesos contables y financieros.',
          potential: 'Alto'
        },
        {
          title: 'Soporte Técnico Especializado',
          description: 'Help desk y soporte técnico para productos tecnológicos.',
          potential: 'Alto'
        },
        {
          title: 'Back Office Services',
          description: 'Servicios de procesamiento de datos y gestión administrativa.',
          potential: 'Alto'
        }
      ],
      valueChain: [
        'Reclutamiento y capacitación',
        'Operaciones de servicio',
        'Gestión de calidad',
        'Tecnología y plataformas',
        'Reportes y analytics'
      ],
      advantages: [
        'Fuerza laboral bilingüe (español-inglés)',
        'Costos operativos competitivos',
        'Zona horaria compatible',
        'Alta calidad de servicio',
        'Infraestructura tecnológica moderna'
      ],
      caseStudies: [
        {
          company: 'Atento Guatemala',
          sector: 'Contact Centers',
          investment: '$180M',
          description: 'Líder en servicios de contact center para marcas globales',
          logo: 'https://images.pexels.com/photos/7709184/pexels-photo-7709184.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          company: 'BPO Solutions',
          sector: 'BPO',
          investment: '$125M',
          description: 'Servicios de BPO para procesos financieros y administrativos',
          logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    },
    'energia': {
      name: 'Energía',
      description: 'Guatemala tiene un potencial excepcional para energía renovable, incluyendo hidroeléctrica, solar, eólica y geotérmica. El país está comprometido con la transición energética y ofrece incentivos atractivos para inversiones en generación limpia.',
      image: EnergiasLimpiasImg,
      stats: {
        investment: '$3.2B',
        employment: '45K empleos',
        growth: '+12.3%',
        exports: '$420M'
      },
      keyOpportunities: [
        {
          title: 'Energía Hidroeléctrica',
          description: 'Desarrollo de proyectos hidroeléctricos de pequeña y mediana escala.',
          potential: 'Muy Alto'
        },
        {
          title: 'Energía Solar Fotovoltaica',
          description: 'Granjas solares y sistemas de generación distribuida.',
          potential: 'Muy Alto'
        },
        {
          title: 'Energía Eólica',
          description: 'Parques eólicos en zonas de alto potencial de viento.',
          potential: 'Alto'
        },
        {
          title: 'Biomasa y Biogás',
          description: 'Aprovechamiento de residuos agrícolas para generación eléctrica.',
          potential: 'Alto'
        }
      ],
      valueChain: [
        'Estudios y desarrollo de proyectos',
        'Construcción de plantas',
        'Operación y mantenimiento',
        'Generación y despacho',
        'Comercialización de energía'
      ],
      advantages: [
        'Alto potencial de recursos renovables',
        'Incentivos fiscales para energía limpia',
        'Marco regulatorio favorable',
        'Demanda energética creciente',
        'Posibilidad de exportación regional'
      ],
      caseStudies: [
        {
          company: 'Hidro Guatemala',
          sector: 'Hidroeléctrica',
          investment: '$450M',
          description: 'Desarrollo de proyectos hidroeléctricos renovables',
          logo: 'https://images.pexels.com/photos/2850347/pexels-photo-2850347.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          company: 'Solar Power GT',
          sector: 'Energía Solar',
          investment: '$320M',
          description: 'Desarrollo de granjas solares fotovoltaicas',
          logo: 'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    },
    'servicios-compartidos': {
      name: 'Centro de Servicios Compartidos',
      description: 'Guatemala es un destino estratégico para centros de servicios compartidos de empresas multinacionales. Con talento profesional calificado, costos competitivos y ubicación estratégica, el país ofrece ventajas significativas para SSCs.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stats: {
        investment: '$1.1B',
        employment: '145K empleos',
        growth: '+10.5%',
        exports: '$980M'
      },
      keyOpportunities: [
        {
          title: 'Finanzas y Contabilidad Compartidas',
          description: 'Centros de servicios financieros y contables para operaciones regionales.',
          potential: 'Muy Alto'
        },
        {
          title: 'Recursos Humanos Compartidos',
          description: 'Servicios de nómina, reclutamiento y gestión de talento.',
          potential: 'Alto'
        },
        {
          title: 'IT Compartido',
          description: 'Soporte tecnológico y gestión de infraestructura IT.',
          potential: 'Alto'
        },
        {
          title: 'Servicios de Compras',
          description: 'Procurement y gestión de proveedores centralizados.',
          potential: 'Alto'
        }
      ],
      valueChain: [
        'Establecimiento de operaciones',
        'Reclutamiento de talento',
        'Implementación de procesos',
        'Operación de servicios',
        'Mejora continua'
      ],
      advantages: [
        'Profesionales bilingües calificados',
        'Costos operativos competitivos',
        'Zona horaria favorable',
        'Infraestructura empresarial moderna',
        'Estabilidad política y económica'
      ],
      caseStudies: [
        {
          company: 'Global SSC Guatemala',
          sector: 'Servicios Corporativos',
          investment: '$220M',
          description: 'Centro de servicios compartidos para empresa Fortune 500',
          logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          company: 'Finance Hub GT',
          sector: 'Finanzas Compartidas',
          investment: '$165M',
          description: 'Centro regional de finanzas y contabilidad',
          logo: 'https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    },
    'electrico-electronico': {
      name: 'Eléctrico-Electrónico (Autopartes)',
      description: 'La industria de componentes eléctricos y electrónicos para autopartes está creciendo en Guatemala, aprovechando la experiencia en manufactura y la proximidad al mercado norteamericano. El sector ofrece oportunidades en componentes especializados y sistemas avanzados.',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stats: {
        investment: '$980M',
        employment: '115K empleos',
        growth: '+11.2%',
        exports: '$1.1B'
      },
      keyOpportunities: [
        {
          title: 'Arneses Eléctricos',
          description: 'Manufactura de arneses y cableado para vehículos.',
          potential: 'Muy Alto'
        },
        {
          title: 'Componentes Electrónicos',
          description: 'Producción de componentes electrónicos para sistemas automotrices.',
          potential: 'Alto'
        },
        {
          title: 'Sensores y Actuadores',
          description: 'Fabricación de sensores para sistemas de seguridad y control.',
          potential: 'Alto'
        },
        {
          title: 'Sistemas de Control',
          description: 'Ensamble de módulos de control electrónico.',
          potential: 'Muy Alto'
        }
      ],
      valueChain: [
        'Abastecimiento de componentes',
        'Ensamble y manufactura',
        'Testing y validación',
        'Control de calidad',
        'Empaque y envío'
      ],
      advantages: [
        'Mano de obra calificada',
        'Proximidad a plantas automotrices',
        'Tratados comerciales favorables',
        'Infraestructura manufacturera',
        'Experiencia en manufactura de precisión'
      ],
      caseStudies: [
        {
          company: 'Auto Components GT',
          sector: 'Autopartes Eléctricas',
          investment: '$185M',
          description: 'Manufactura de arneses y componentes eléctricos automotrices',
          logo: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          company: 'ElectroTech Guatemala',
          sector: 'Componentes Electrónicos',
          investment: '$140M',
          description: 'Producción de sensores y actuadores para la industria automotriz',
          logo: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    },
    'servicios-salud': {
      name: 'Servicios de Salud',
      description: 'Guatemala está emergiendo como destino para turismo médico y servicios de salud especializados. Con profesionales médicos de alta calidad, costos competitivos y facilidades modernas, el sector ofrece oportunidades en servicios médicos especializados y telemedicina.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stats: {
        investment: '$890M',
        employment: '125K empleos',
        growth: '+11.3%',
        exports: '$340M'
      },
      keyOpportunities: [
        {
          title: 'Turismo Médico',
          description: 'Servicios médicos especializados para pacientes internacionales.',
          potential: 'Muy Alto'
        },
        {
          title: 'Telemedicina',
          description: 'Plataformas de consulta médica remota y diagnóstico a distancia.',
          potential: 'Alto'
        },
        {
          title: 'Clínicas Especializadas',
          description: 'Centros médicos especializados en cirugía estética, dental y oftalmológica.',
          potential: 'Alto'
        },
        {
          title: 'Atención Domiciliaria',
          description: 'Servicios de cuidado médico y enfermería a domicilio.',
          potential: 'Medio'
        }
      ],
      valueChain: [
        'Captación de pacientes',
        'Evaluación y diagnóstico',
        'Tratamiento y procedimientos',
        'Recuperación y seguimiento',
        'Servicios post-tratamiento'
      ],
      advantages: [
        'Profesionales médicos altamente calificados',
        'Costos 40-60% menores que EE.UU.',
        'Facilidades médicas modernas',
        'Ubicación geográfica conveniente',
        'Atención personalizada de calidad'
      ],
      caseStudies: [
        {
          company: 'Medical Tourism Guatemala',
          sector: 'Turismo Médico',
          investment: '$165M',
          description: 'Red de clínicas especializadas para pacientes internacionales',
          logo: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          company: 'TeleSalud GT',
          sector: 'Telemedicina',
          investment: '$95M',
          description: 'Plataforma de telemedicina para Centroamérica',
          logo: 'https://images.pexels.com/photos/4021808/pexels-photo-4021808.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    },
    'metalmecanica': {
      name: 'Metalmecánica',
      description: 'El sector metalmecánico guatemalteco ofrece capacidades de fabricación de estructuras metálicas, maquinaria y componentes industriales. Con una base industrial establecida y personal técnico calificado, el sector está preparado para proyectos de manufactura avanzada.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stats: {
        investment: '$720M',
        employment: '95K empleos',
        growth: '+8.5%',
        exports: '$620M'
      },
      keyOpportunities: [
        {
          title: 'Estructuras Metálicas',
          description: 'Fabricación de estructuras para construcción y proyectos industriales.',
          potential: 'Alto'
        },
        {
          title: 'Maquinaria Industrial',
          description: 'Manufactura de maquinaria y equipos para diferentes industrias.',
          potential: 'Alto'
        },
        {
          title: 'Herramientas y Moldes',
          description: 'Producción de herramientas de precisión y moldes industriales.',
          potential: 'Medio'
        },
        {
          title: 'Componentes Mecánicos',
          description: 'Fabricación de piezas y componentes mecánicos especializados.',
          potential: 'Alto'
        }
      ],
      valueChain: [
        'Diseño y ingeniería',
        'Corte y mecanizado',
        'Soldadura y ensamble',
        'Tratamiento superficial',
        'Inspección y entrega'
      ],
      advantages: [
        'Personal técnico especializado',
        'Talleres equipados con tecnología moderna',
        'Capacidad de fabricación flexible',
        'Costos competitivos',
        'Experiencia en proyectos complejos'
      ],
      caseStudies: [
        {
          company: 'MetalTech Guatemala',
          sector: 'Estructuras Metálicas',
          investment: '$135M',
          description: 'Fabricación de estructuras metálicas para proyectos industriales',
          logo: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          company: 'Precision Tools GT',
          sector: 'Herramientas Industriales',
          investment: '$85M',
          description: 'Manufactura de herramientas de precisión y moldes',
          logo: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    },
    'turismo': {
      name: 'Turismo',
      description: 'Guatemala posee un patrimonio cultural maya único, biodiversidad excepcional y paisajes impresionantes. El sector turístico ofrece oportunidades en turismo cultural, ecoturismo, turismo de aventura y desarrollo de infraestructura hotelera.',
      image: TurismoSostenibleImg,
      stats: {
        investment: '$1.1B',
        employment: '320K empleos',
        growth: '+6.8%',
        exports: '$1.8B'
      },
      keyOpportunities: [
        {
          title: 'Turismo Cultural Maya',
          description: 'Desarrollo de experiencias turísticas en sitios arqueológicos mayas.',
          potential: 'Muy Alto'
        },
        {
          title: 'Ecoturismo',
          description: 'Proyectos de turismo sostenible en áreas naturales protegidas.',
          potential: 'Alto'
        },
        {
          title: 'Turismo de Aventura',
          description: 'Actividades de aventura como senderismo, escalada y deportes acuáticos.',
          potential: 'Alto'
        },
        {
          title: 'MICE (Reuniones y Eventos)',
          description: 'Desarrollo de infraestructura para convenciones y eventos corporativos.',
          potential: 'Alto'
        }
      ],
      valueChain: [
        'Desarrollo de destinos',
        'Infraestructura hotelera',
        'Servicios turísticos',
        'Promoción y marketing',
        'Experiencia del visitante'
      ],
      advantages: [
        'Patrimonio cultural maya único',
        'Biodiversidad excepcional',
        'Clima agradable todo el año',
        'Proximidad a mercados emisores',
        'Costos competitivos'
      ],
      caseStudies: [
        {
          company: 'Maya Heritage Hotels',
          sector: 'Hotelería',
          investment: '$240M',
          description: 'Cadena de hoteles boutique en destinos culturales',
          logo: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          company: 'EcoAdventure Guatemala',
          sector: 'Ecoturismo',
          investment: '$125M',
          description: 'Operador de turismo de aventura y ecoturismo',
          logo: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    },
    'biotecnologia': {
      name: 'Biotecnología',
      description: 'Guatemala está desarrollando capacidades en biotecnología, con un enfoque en aplicaciones agrícolas y médicas. La biodiversidad del país y su experiencia agrícola crean oportunidades únicas en este sector emergente.',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stats: {
        investment: '$650M',
        employment: '45K empleos',
        growth: '+18.7%',
        exports: '$420M'
      },
      keyOpportunities: [
        {
          title: 'Biotecnología Agrícola',
          description: 'Desarrollo de cultivos mejorados y soluciones biotech para agricultura.',
          potential: 'Muy Alto'
        },
        {
          title: 'Medicina Personalizada',
          description: 'Diagnóstico molecular y terapias personalizadas.',
          potential: 'Alto'
        },
        {
          title: 'Biocombustibles',
          description: 'Producción de biocombustibles de segunda y tercera generación.',
          potential: 'Alto'
        },
        {
          title: 'Investigación Genética',
          description: 'Estudios genéticos aplicados a biodiversidad local.',
          potential: 'Alto'
        }
      ],
      valueChain: [
        'Investigación y desarrollo',
        'Estudios clínicos/de campo',
        'Producción piloto',
        'Escalamiento industrial',
        'Comercialización'
      ],
      advantages: [
        'Biodiversidad única',
        'Recursos genéticos valiosos',
        'Talento científico emergente',
        'Apoyo institucional para I+D',
        'Mercado regional para innovación'
      ],
      caseStudies: [
        {
          company: 'BioTech Guatemala',
          sector: 'Biotecnología Agrícola',
          investment: '$125M',
          description: 'Desarrollo de cultivos mejorados mediante biotecnología',
          logo: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          company: 'BioFuel Solutions',
          sector: 'Biocombustibles',
          investment: '$95M',
          description: 'Producción de biocombustibles de segunda generación',
          logo: 'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    },
    'dispositivos-medicos': {
      name: 'Dispositivos y Equipo Médico',
      description: 'El sector de dispositivos médicos en Guatemala ofrece oportunidades de manufactura de dispositivos médicos, equipos de diagnóstico e instrumental quirúrgico. Con regulaciones robustas y capacidades de manufactura de precisión, el país es un destino atractivo.',
      image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stats: {
        investment: '$580M',
        employment: '55K empleos',
        growth: '+16.4%',
        exports: '$490M'
      },
      keyOpportunities: [
        {
          title: 'Dispositivos Médicos Desechables',
          description: 'Manufactura de dispositivos médicos de un solo uso.',
          potential: 'Muy Alto'
        },
        {
          title: 'Equipos de Diagnóstico',
          description: 'Fabricación de equipos y kits de diagnóstico médico.',
          potential: 'Alto'
        },
        {
          title: 'Instrumental Quirúrgico',
          description: 'Producción de instrumentos quirúrgicos especializados.',
          potential: 'Alto'
        },
        {
          title: 'Prótesis y Órtesis',
          description: 'Manufactura de prótesis y dispositivos ortopédicos.',
          potential: 'Alto'
        }
      ],
      valueChain: [
        'Diseño y desarrollo',
        'Manufactura de componentes',
        'Ensamble y esterilización',
        'Control de calidad',
        'Empaque y distribución'
      ],
      advantages: [
        'Experiencia en manufactura de precisión',
        'Regulaciones médicas robustas',
        'Personal técnico calificado',
        'Costos competitivos',
        'Proximidad a mercados principales'
      ],
      caseStudies: [
        {
          company: 'MedDevice Guatemala',
          sector: 'Dispositivos Médicos',
          investment: '$115M',
          description: 'Manufactura de dispositivos médicos desechables',
          logo: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          company: 'Surgical Tools GT',
          sector: 'Instrumental Quirúrgico',
          investment: '$85M',
          description: 'Producción de instrumental quirúrgico especializado',
          logo: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    },
    'componentes-electronicos': {
      name: 'Componentes y Equipo Electrónico',
      description: 'Guatemala está desarrollando capacidades en manufactura de componentes electrónicos avanzados, incluyendo semiconductores, circuitos integrados y componentes PCB. El sector ofrece oportunidades en electrónica de alto valor agregado.',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stats: {
        investment: '$720M',
        employment: '65K empleos',
        growth: '+19.2%',
        exports: '$890M'
      },
      keyOpportunities: [
        {
          title: 'Ensamble de Semiconductores',
          description: 'Empaque y testing de semiconductores y circuitos integrados.',
          potential: 'Muy Alto'
        },
        {
          title: 'Circuitos Integrados',
          description: 'Manufactura de circuitos integrados de aplicación específica.',
          potential: 'Alto'
        },
        {
          title: 'Componentes PCB',
          description: 'Fabricación de placas de circuito impreso multicapa.',
          potential: 'Alto'
        },
        {
          title: 'Sensores Avanzados',
          description: 'Producción de sensores electrónicos especializados.',
          potential: 'Muy Alto'
        }
      ],
      valueChain: [
        'Diseño de circuitos',
        'Fabricación de componentes',
        'Ensamble y soldadura',
        'Testing y validación',
        'Empaque final'
      ],
      advantages: [
        'Mano de obra técnica especializada',
        'Infraestructura de manufactura limpia',
        'Experiencia en manufactura de precisión',
        'Costos competitivos',
        'Tratados comerciales favorables'
      ],
      caseStudies: [
        {
          company: 'SemiCon Guatemala',
          sector: 'Semiconductores',
          investment: '$195M',
          description: 'Planta de ensamble y testing de semiconductores',
          logo: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          company: 'PCB Manufacturing GT',
          sector: 'Circuitos Impresos',
          investment: '$145M',
          description: 'Fabricación de PCBs multicapa de alta complejidad',
          logo: 'https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    },
    'ti-manufactura-avanzada': {
      name: 'Tecnologías de la Información para Manufactura Avanzada',
      description: 'Guatemala está posicionándose en soluciones tecnológicas para la Industria 4.0, incluyendo IoT industrial, automatización, inteligencia artificial y robótica. Este sector emergente ofrece oportunidades en tecnologías de manufactura avanzada.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200',
      stats: {
        investment: '$840M',
        employment: '75K empleos',
        growth: '+21.5%',
        exports: '$720M'
      },
      keyOpportunities: [
        {
          title: 'IoT Industrial',
          description: 'Soluciones de Internet de las Cosas para manufactura inteligente.',
          potential: 'Muy Alto'
        },
        {
          title: 'Automatización Industrial',
          description: 'Sistemas de automatización y control para plantas manufactureras.',
          potential: 'Muy Alto'
        },
        {
          title: 'IA para Manufactura',
          description: 'Aplicaciones de inteligencia artificial en optimización de procesos.',
          potential: 'Alto'
        },
        {
          title: 'Robótica Industrial',
          description: 'Integración de sistemas robóticos en líneas de producción.',
          potential: 'Alto'
        }
      ],
      valueChain: [
        'Consultoría y análisis',
        'Diseño de soluciones',
        'Desarrollo e integración',
        'Implementación',
        'Soporte y mantenimiento'
      ],
      advantages: [
        'Talento en tecnologías emergentes',
        'Ecosistema de innovación creciente',
        'Proximidad a clientes manufactureros',
        'Costos competitivos de desarrollo',
        'Infraestructura tecnológica moderna'
      ],
      caseStudies: [
        {
          company: 'Industry 4.0 Solutions',
          sector: 'Automatización',
          investment: '$175M',
          description: 'Soluciones de automatización para manufactura avanzada',
          logo: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          company: 'Smart Factory GT',
          sector: 'IoT Industrial',
          investment: '$125M',
          description: 'Plataformas de IoT para manufactura inteligente',
          logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ]
    }
  };

  const currentSector = sectorData[sector as keyof typeof sectorData];

  if (!currentSector) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Sector no encontrado</h1>
          <Link to="/strategic-sectors" className="text-sector-6 hover:brightness-110">
            Volver a Sectores Estratégicos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/strategic-sectors"
            className="inline-flex items-center text-sector-6 hover:brightness-110 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Sectores Estratégicos
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sector-6 via-sector-1 to-sector-3 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {currentSector.name}
              </h1>
              <p className="text-xl text-white/80 mb-8">
                {currentSector.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-sector-4 hover:brightness-110 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Descargar ficha sectorial
                </button>
                <Link
                  to="/contact"
                  className="border border-white text-white hover:bg-white hover:text-sector-6 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Habla con un especialista
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={currentSector.image}
                  alt={currentSector.name}
                  className="w-full h-80 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Indicadores Clave del Sector
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, label: 'Inversión Acumulada', value: currentSector.stats.investment, color: 'text-sector-3' },
              { icon: Users, label: 'Empleos Generados', value: currentSector.stats.employment, color: 'text-sector-6' },
              { icon: TrendingUp, label: 'Crecimiento Anual', value: currentSector.stats.growth, color: 'text-sector-3' },
              { icon: Globe, label: 'Exportaciones', value: currentSector.stats.exports, color: 'text-sector-2' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-gray-50 rounded-2xl p-6"
                >
                  <div className={`w-16 h-16 ${stat.color.replace('text', 'bg').replace('600', '100')} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Principales Oportunidades de Inversión
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentSector.keyOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{opportunity.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    opportunity.potential === 'Muy Alto' ? 'bg-sector-3-soft text-sector-3' :
                    opportunity.potential === 'Alto' ? 'bg-sector-1-soft text-sector-2' :
                    'bg-sector-4-soft text-gray-900'
                  }`}>
                    Potencial {opportunity.potential}
                  </span>
                </div>
                <p className="text-gray-600">{opportunity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Chain */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cadena de Valor
            </h2>
            <p className="text-xl text-gray-600">
              Oportunidades de inversión a lo largo de toda la cadena productiva
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            {currentSector.valueChain.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-sector-1-soft text-sector-2 px-6 py-3 rounded-lg font-medium text-center min-w-[160px]"
                >
                  {step}
                </motion.div>
                {index < currentSector.valueChain.length - 1 && (
                  <ArrowLeft className="w-6 h-6 text-gray-400 transform rotate-180" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ventajas Competitivas
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                ¿Por qué elegir Guatemala para tu inversión en {currentSector.name.toLowerCase()}?
              </p>
              <ul className="space-y-4">
                {currentSector.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-sector-3 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Casos de Éxito</h3>
              <div className="space-y-6">
                {currentSector.caseStudies.map((study, index) => (
                  <div key={index} className="border-l-4 border-sector-6 pl-4">
                    <div className="flex items-start space-x-4 mb-3">
                      <img
                        src={study.logo}
                        alt={`${study.company} logo`}
                        className="w-12 h-12 rounded-lg object-cover border border-gray-200 flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-gray-900">{study.company}</h4>
                          <span className="text-sm bg-sector-1-soft text-sector-2 px-2 py-1 rounded">{study.investment}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{study.sector}</p>
                        <p className="text-gray-700">{study.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sector-6 to-sector-3 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para invertir en {currentSector.name}?
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Nuestros especialistas sectoriales pueden proporcionarte información detallada,
              conectarte con socios locales y acompañarte en todo el proceso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-sector-6 hover:brightness-95 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Descargar guía completa
              </button>
              <Link
                to="/contact"
                className="border border-white text-white hover:bg-white hover:text-sector-6 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Habla con un especialista
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SectorDetail;
