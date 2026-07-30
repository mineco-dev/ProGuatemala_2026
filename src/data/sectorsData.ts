import {
  Leaf, Factory, Headphones, Zap, Plane,
  ShoppingBag, Droplet, Shirt, FlaskConical, Battery, Wrench,
  Heart, Cpu
} from 'lucide-react';

import { Sector } from '../types/sector';

// Assets de imágenes
import metalmecanicaImg from '../assets/images/sectores/METALMECÁNICA.jpeg';
import alimentosProcesadosImg from '../assets/images/sectores/ALIMENTOS PROCESADOS.jpeg';
import bebidasNoAlcoholicas from '../assets/images/sectores/BEBIDAS NO ALCOHOLICAS.jpeg';
import biotecnologiaImg from '../assets/images/sectores/BIOTECNOLOGÍA.jpeg';
import centroServiciosCompartidosImg from '../assets/images/sectores/CENTRO DE SERVICIOS COMPARTIDOS.jpeg';
import componentesElectronicosImg from '../assets/images/sectores/COMPONENTES Y EQUIPO ELECTRÓNICO.jpeg';
import dispositivosMedicosImg from '../assets/images/sectores/DISPOSITIVOS Y EQUIPO MÉDICO.jpeg';
import electricoElectronico from '../assets/images/sectores/ELÉCTRICO – ELECTRÓNICO (AUTOPARTES).jpeg';
import energiaImg from '../assets/images/sectores/ENERGÍA.jpg';
import farmaceuticosImg from '../assets/images/sectores/FARMACEÚTICOS.jpeg';
import quimicosImg from '../assets/images/sectores/QUIMICOS.jpeg';
import serviciosSaludImg from '../assets/images/sectores/SERVICIOS DE SALUD.jpeg';
import serviciosEmpresarialesImg from '../assets/images/sectores/SERVICIOS EMPRESARILES, CONTACT CENTERS Y BPOS.jpeg';
import tecnologiaInformacion from '../assets/images/sectores/Tecnologías de la información para manufactura avanzada.jpg';
import ticsSoftware from '../assets/images/sectores/TICS Y SOFTWARE.jpeg';
import turismoImg from '../assets/images/sectores/TURISMO.JPG';
import vestuarioImg from '../assets/images/sectores/VESTUARIO Y TEXTILES.jpeg';

export const sectors: Sector[] = [
  {
    id: 'alimentos-procesados',
    name: 'Alimentos Procesados',
    icon: ShoppingBag,
    image: alimentosProcesadosImg,
    description: 'Procesamiento y transformación de productos alimenticios para mercados locales e internacionales',
    highlights: ['Alimentos procesados', 'Conservación de alimentos', 'Productos alimenticios', 'Molinería'],
    investment: 'US$1,721.4M',
    employment: '196.6K',
    growth: '+2.0%',
    exports: 'US$3,272.0M',
    timeframe: 'short',
    priority: 1,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/1.-Alimentos-Procesados.pdf',
    opportunities: [
      {
        title: 'Alimentos listos para consumo',
        description: 'Producción de comidas preparadas, snacks y productos empacados para supermercados y exportación regional.',
        potential: 'Potencial Muy Alto'
      },
      {
        title: 'Ingredientes y aditivos alimentarios',
        description: 'Fabricación de insumos para la industria alimentaria, como mezclas, saborizantes, conservantes y bases procesadas.',
        potential: 'Potencial Alto'
      },
      {
        title: 'Empaque alimentario especializado',
        description: 'Producción de empaques para conservación, exportación y presentación de alimentos procesados.',
        potential: 'Potencial Alto'
      },
      {
        title: 'Alimentos saludables y funcionales',
        description: 'Desarrollo de productos bajos en azúcar, altos en proteína, fortificados o dirigidos a consumidores saludables.',
        potential: 'Potencial Alto'
      }
    ],
    advantages: [
      'Amplia base agroindustrial local',
      'Disponibilidad de materias primas agrícolas',
      'Experiencia en procesamiento de alimentos',
      'Acceso a mercados regionales y Estados Unidos',
      'Capacidad exportadora consolidada'
    ]
  },
  {
    id: 'bebidas-no-alcoholicas',
    name: 'Bebidas no alcohólicas',
    icon: Droplet,
    image: bebidasNoAlcoholicas,
    description: 'Producción de bebidas naturales, jugos y bebidas funcionales',
    highlights: ['Bebidas no alcohólicas', 'Aguas embotelladas', 'Aguas minerales', 'Elaboración de bebidas'],
    investment: 'US$124.4M',
    employment: '7.0K',
    growth: '+10.1%',
    exports: 'US$273.3M',
    timeframe: 'short',
    priority: 2,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/7.-Bebidas-No-Alcoholicas.pdf',
    opportunities: [
      {
        title: 'Bebidas funcionales',
        description: 'Producción de bebidas con vitaminas, electrolitos, colágeno, proteína o ingredientes naturales.',
        potential: 'Potencial Muy Alto'
      },
      {
        title: 'Agua embotellada y saborizada',
        description: 'Expansión de líneas de agua purificada, mineral, saborizada o con valor agregado.',
        potential: 'Potencial Alto'
      },
      {
        title: 'Jugos y néctares naturales',
        description: 'Procesamiento de frutas locales para bebidas listas para consumo y exportación regional.',
        potential: 'Potencial Alto'
      },
      {
        title: 'Bebidas bajas en azúcar',
        description: 'Desarrollo de gaseosas, tés, refrescos y bebidas saludables con menor contenido calórico.',
        potential: 'Potencial Alto'
      }
    ],
    advantages: [
      'Fuentes de agua de alta calidad',
      'Frutas tropicales disponibles todo el año',
      'Costos competitivos de producción',
      'Acceso a mercados regionales',
      'Plantas embotelladoras y capacidad industrial existente'
    ]
  },
  {
    id: 'vestuario-textil',
    name: 'Vestuario y textil',
    icon: Shirt,
    image: vestuarioImg,
    description: 'Industria textil y de confección con estándares internacionales',
    highlights: ['Hilatura', 'Tejedura', 'Productos textiles', 'Prendas de vestir'],
    investment: 'US$742.3M',
    employment: '125.3K',
    growth: '+5.5%',
    exports: 'US$2,110.0M',
    timeframe: 'short',
    priority: 3,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/6.-Vestuarios-y-Textiles.pdf',
    opportunities: [
      {
        title: 'Textiles técnicos',
        description: 'Producción de textiles especializados para uso médico, deportivo e industrial.',
        potential: 'Potencial Muy Alto'
      },
      {
        title: 'Moda sostenible',
        description: 'Confección de prendas con textiles orgánicos, reciclados y procesos ecológicos.',
        potential: 'Potencial Alto'
      },
      {
        title: 'Uniformes corporativos',
        description: 'Manufactura de uniformes especializados para empresas, hospitales, hoteles e industria.',
        potential: 'Potencial Alto'
      },
      {
        title: 'Confección premium',
        description: 'Producción de prendas de alta calidad para marcas internacionales.',
        potential: 'Potencial Alto'
      }
    ],
    advantages: [
      'Cercanía logística con Estados Unidos',
      'Experiencia exportadora en confección',
      'Mano de obra especializada en manufactura textil',
      'Integración con cadenas regionales de suministro',
      'Capacidad para producción flexible y pedidos de menor escala'
    ]
  },
  {
    id: 'quimicos',
    name: 'Químicos',
    icon: FlaskConical,
    image: quimicosImg,
    description: 'Productos químicos industriales y especializados',
    highlights: ['Abonos', 'Plaguicidas', 'Jabones y detergentes', 'Otros químicos'],
    investment: 'US$226.3M',
    employment: '18.3K',
    growth: '+7.6%',
    exports: 'US$747.9M',
    timeframe: 'short',
    priority: 4,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/3.-Quimicos.pdf',
    opportunities: [
      {
        title: 'Productos de limpieza institucional',
        description: 'Fabricación de detergentes, desinfectantes y químicos para hoteles, hospitales e industria.',
        potential: 'Potencial Muy Alto'
      },
      {
        title: 'Insumos químicos industriales',
        description: 'Producción de químicos utilizados por manufactura, alimentos, textiles y construcción.',
        potential: 'Potencial Alto'
      },
      {
        title: 'Agroquímicos y fertilizantes',
        description: 'Formulación y envasado de productos para agricultura, nutrición vegetal y protección de cultivos.',
        potential: 'Potencial Alto'
      },
      {
        title: 'Cosméticos y cuidado personal',
        description: 'Fabricación de jabones, cremas, champús, fragancias y productos de higiene personal.',
        potential: 'Potencial Medio'
      }
    ],
    advantages: [
      'Demanda local de insumos industriales',
      'Encadenamientos con alimentos, textiles, agroindustria y construcción',
      'Potencial para sustituir importaciones',
      'Ubicación estratégica para distribución regional',
      'Experiencia en productos de limpieza, jabones y formulaciones químicas'
    ]
  },
  {
    id: 'farmaceuticos',
    name: 'Farmacéuticos',
    icon: Heart,
    image: farmaceuticosImg,
    description: 'Producción farmacéutica y medicamentos genéricos',
    highlights: ['Productos farmacéuticos', 'Sustancias Medicinales', 'Productos botánicos', 'Fabricación farmacéutica'],
    investment: 'US$159.0M',
    employment: '8.0K',
    growth: '+13.2%',
    exports: 'US$436.1M',
    timeframe: 'short',
    priority: 5,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/2.-Farmaceuticos.pdf',
    opportunities: [
      {
        title: 'Medicamentos genéricos',
        description: 'Producción de medicamentos de bajo costo para mercado nacional y regional.',
        potential: 'Potencial Muy Alto'
      },
      {
        title: 'Medicamentos OTC',
        description: 'Fabricación de productos de venta libre como analgésicos, antigripales y suplementos básicos.',
        potential: 'Potencial Alto'
      },
      {
        title: 'Empaque farmacéutico',
        description: 'Producción de blísteres, frascos, etiquetas y empaques especializados para medicamentos.',
        potential: 'Potencial Alto'
      },
      {
        title: 'Laboratorios de control de calidad',
        description: 'Servicios de análisis, certificación y pruebas para productos farmacéuticos y cosméticos.',
        potential: 'Potencial Alto'
      }
    ],
    advantages: [
      'Demanda constante de medicamentos y productos de salud',
      'Potencial de exportación hacia Centroamérica',
      'Mercado regional cercano y en crecimiento',
      'Capacidad para producir genéricos y medicamentos OTC',
      'Oportunidades vinculadas a compras públicas, farmacias y distribuidores'
    ]
  },
  {
    id: 'tics-software',
    name: 'TICS y Software',
    icon: Cpu,
    image: ticsSoftware,
    description: 'Desarrollo de software y servicios de tecnología de la información',
    highlights: ['Programación informática', 'TICs', 'Servicios de información', 'Software'],
    investment: 'US$502.4M',
    employment: '29.3K',
    growth: '+6.8%',
    exports: 'US$544.9M',
    timeframe: 'short',
    priority: 6,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/4.-TICs-y-Software.pdf',
    opportunities: [
      {
        title: 'Desarrollo de software empresarial',
        description: 'Creación de soluciones digitales para banca, comercio, logística, salud y gobierno.',
        potential: 'Potencial Muy Alto'
      },
      {
        title: 'Ciberseguridad',
        description: 'Servicios de protección digital, monitoreo, auditorías y respuesta ante incidentes.',
        potential: 'Potencial Muy Alto'
      },
      {
        title: 'Servicios cloud y soporte técnico',
        description: 'Implementación, mantenimiento y soporte de infraestructura tecnológica para empresas.',
        potential: 'Potencial Alto'
      },
      {
        title: 'Fintech y pagos digitales',
        description: 'Desarrollo de plataformas para pagos, billeteras digitales, crédito, remesas y servicios financieros.',
        potential: 'Potencial Alto'
      }
    ],
    advantages: [
      'Talento joven con capacidades digitales',
      'Zona horaria compatible con Estados Unidos',
      'Costos competitivos frente a otros mercados',
      'Crecimiento de la demanda de servicios tecnológicos',
      'Potencial para exportar servicios digitales y software'
    ]
  },
  {
    id: 'servicios-empresariales',
    name: 'Servicios empresariales, contact centers y BPOs',
    icon: Headphones,
    image: serviciosEmpresarialesImg,
    description: 'Servicios de outsourcing, call centers y procesos de negocio',
    highlights: ['Centros de llamadas', 'Servicios administrativos', 'BPO', 'Contact centers'],
    investment: 'US$777.8M',
    employment: '64.0K',
    growth: '+1.2%',
    exports: 'US$869.2M',
    timeframe: 'short',
    priority: 7,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/5.-Servicios-Empresariales-Contact-Centers-y-BPOs.pdf',
    opportunities: [
      {
        title: 'Centros de servicios compartidos',
        description: 'Operación de áreas de finanzas, recursos humanos, compras y administración para empresas regionales.',
        potential: 'Potencial Muy Alto'
      },
      {
        title: 'Contact centers bilingües',
        description: 'Atención al cliente, ventas y soporte técnico para empresas de Estados Unidos y Canadá.',
        potential: 'Potencial Muy Alto'
      },
      {
        title: 'Back office financiero',
        description: 'Servicios de contabilidad, facturación, conciliaciones, análisis financiero y procesamiento administrativo.',
        potential: 'Potencial Alto'
      },
      {
        title: 'BPO especializado en tecnología',
        description: 'Soporte técnico, gestión de tickets, monitoreo y asistencia digital para empresas internacionales.',
        potential: 'Potencial Alto'
      }
    ],
    advantages: [
      'Talento bilingüe para atención a Estados Unidos',
      'Misma zona horaria o similar a mercados clave',
      'Costos laborales competitivos',
      'Experiencia en contact centers y back office',
      'Capacidad para escalar operaciones regionales'
    ]
  },
  {
    id: 'energia',
    name: 'Energía',
    icon: Zap,
    image: energiaImg,
    description: 'Generación y distribución de energía renovable',
    highlights: ['Energía hidroeléctrica', 'Energía solar', 'Energía eólica', 'Biomasa'],
    investment: 'US$3.2B',
    employment: '45K',
    growth: '+12.3%',
    timeframe: 'short',
    priority: 8
  },
  {
    id: 'servicios-compartidos',
    name: 'Centro de Servicios Compartidos',
    icon: Factory,
    image: centroServiciosCompartidosImg,
    description: 'Centros de servicios compartidos para empresas multinacionales',
    highlights: ['Servicios corporativos', 'Finanzas compartidas', 'IT compartido', 'RH compartido'],
    investment: 'US$1.1B',
    employment: '145K',
    growth: '+10.5%',
    timeframe: 'medium',
    priority: 9,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/5.-Servicios-Empresariales-Contact-Centers-y-BPOs.pdf'
  },
  {
    id: 'electrico-electronico',
    name: 'Eléctrico-Electrónico (autopartes)',
    icon: Battery,
    image: electricoElectronico,
    description: 'Manufactura de componentes eléctricos y electrónicos para la industria automotriz',
    highlights: ['Equipo industrial', 'Reparación de maquinaria', 'Equipo industrial', 'Eléctrico - electrónico'],
    investment: 'US$178.5M',
    employment: '15.3K',
    growth: '+8.7%',
    exports: 'US$60.3M',
    timeframe: 'medium',
    priority: 10,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/9.%20Electrico%20Electronico%20autopartes.pdf',
    opportunities: [
      {
        title: 'Ensamble de componentes eléctricos',
        description: 'Producción y ensamblaje de arneses, conectores, tableros y partes eléctricas.',
        potential: 'Potencial Muy Alto'
      },
      {
        title: 'Autopartes livianas',
        description: 'Fabricación de piezas, accesorios y componentes para vehículos y transporte.',
        potential: 'Potencial Alto'
      },
      {
        title: 'Reparación de maquinaria industrial',
        description: 'Servicios de instalación, mantenimiento y reparación de equipos eléctricos e industriales.',
        potential: 'Potencial Alto'
      },
      {
        title: 'Equipos para eficiencia energética',
        description: 'Producción o ensamblaje de soluciones para ahorro energético en empresas e industria.',
        potential: 'Potencial Alto'
      }
    ],
    advantages: [
      'Potencial de integración a cadenas regionales de manufactura',
      'Cercanía con el mercado norteamericano',
      'Demanda de componentes eléctricos e industriales',
      'Capacidad para ensamble y mantenimiento de equipo',
      'Oportunidades de nearshoring en procesos livianos'
    ]
  },
  {
    id: 'servicios-salud',
    name: 'Servicios de Salud',
    icon: Heart,
    image: serviciosSaludImg,
    description: 'Servicios médicos especializados y turismo de salud',
    highlights: ['Turismo médico', 'Telemedicina', 'Clínicas especializadas', 'Atención domiciliaria'],
    investment: 'US$890M',
    employment: '125K',
    growth: '+11.3%',
    timeframe: 'medium',
    priority: 11
  },
  {
    id: 'metalmecanica',
    name: 'Metalmecánica',
    icon: Wrench,
    image: metalmecanicaImg,
    description: 'Fabricación de productos metálicos y maquinaria',
    highlights: ['Metales comunes', 'Metalmecánica', 'Productos metálicos', 'Fabricación de metal'],
    investment: 'US$175.5M',
    employment: '17.8K',
    growth: '-6.4%',
    exports: 'US$160.7M',
    timeframe: 'medium',
    priority: 12,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/10.-Metalmecanica.pdf',
    opportunities: [
      {
        title: 'Estructuras metálicas',
        description: 'Fabricación de estructuras para construcción, bodegas, naves industriales y proyectos logísticos.',
        potential: 'Potencial Muy Alto'
      },
      {
        title: 'Componentes industriales',
        description: 'Producción de piezas metálicas para maquinaria, agroindustria, manufactura y mantenimiento.',
        potential: 'Potencial Alto'
      },
      {
        title: 'Mantenimiento y reparación industrial',
        description: 'Servicios especializados para plantas manufactureras, equipos, líneas de producción y maquinaria.',
        potential: 'Potencial Alto'
      },
      {
        title: 'Mobiliario metálico especializado',
        description: 'Producción de estanterías, racks, mobiliario industrial y soluciones para almacenamiento.',
        potential: 'Potencial Medio-Alto' // Cambiar a 'Potencial Medio' si no actualizaste la interfaz Opportunity
      }
    ],
    advantages: [
      'Demanda de estructuras y componentes metálicos',
      'Encadenamientos con construcción, logística e industria',
      'Capacidad para mantenimiento y reparación industrial',
      'Mano de obra con experiencia manufacturera',
      'Potencial para proveer a sectores productivos locales y regionales'
    ]
  },
  {
    id: 'turismo',
    name: 'Turismo',
    icon: Plane,
    image: turismoImg,
    description: 'Desarrollo turístico sostenible y turismo cultural',
    highlights: ['Turismo cultural', 'Ecoturismo', 'Operadores turísticos', 'Alojamientos'],
    investment: 'US$971.9M',
    employment: '162.5K',
    growth: '+19.5%',
    exports: 'US$1,809.8M',
    timeframe: 'medium',
    priority: 13,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/8.-Turismo.pdf',
    opportunities: [
      {
        title: 'Hoteles boutique',
        description: 'Desarrollo de hospedajes diferenciados en destinos culturales, naturales o urbanos.',
        potential: 'Potencial Muy Alto'
      },
      {
        title: 'Turismo de experiencias',
        description: 'Oferta de tours gastronómicos, culturales, comunitarios, de aventura y naturaleza.',
        potential: 'Potencial Alto'
      },
      {
        title: 'Transporte turístico especializado',
        description: 'Servicios de movilidad segura para turistas, grupos, eventos y rutas regionales.',
        potential: 'Potencial Alto'
      },
      {
        title: 'Plataformas de reservas turísticas',
        description: 'Herramientas digitales para paquetes, hospedajes, tours, pagos y promoción de destinos.',
        potential: 'Potencial Alto'
      }
    ],
    advantages: [
      'Riqueza cultural, natural e histórica',
      'Destinos reconocidos internacionalmente',
      'Crecimiento de ingresos turísticos',
      'Oferta diversa: cultura, naturaleza, gastronomía y aventura',
      'Potencial para desarrollar infraestructura turística especializada'
    ]
  },
  {
    id: 'biotecnologia',
    name: 'Biotecnología',
    icon: Leaf,
    image: biotecnologiaImg,
    description: 'Investigación y desarrollo en biotecnología agrícola y médica',
    highlights: ['Biotech agrícola', 'Medicina personalizada', 'Biocombustibles', 'Investigación genética'],
    investment: 'US$650M',
    employment: '45K',
    growth: '+18.7%',
    timeframe: 'long',
    priority: 14
  },
  {
    id: 'dispositivos-medicos',
    name: 'Dispositivos y equipo médico',
    icon: Heart,
    image: dispositivosMedicosImg,
    description: 'Fabricación de dispositivos y equipos médicos especializados',
    highlights: ['Dispositivos médicos', 'Equipos de diagnóstico', 'Instrumental quirúrgico', 'Prótesis'],
    investment: 'US$580M',
    employment: '55K',
    growth: '+16.4%',
    timeframe: 'long',
    priority: 15
  },
  {
    id: 'componentes-electronicos',
    name: 'Componentes y equipo electrónico',
    icon: Cpu,
    image: componentesElectronicosImg,
    description: 'Manufactura de componentes electrónicos avanzados',
    highlights: ['Semiconductores', 'Circuitos integrados', 'Ensamble electrónico', 'Componentes electrónicos'],
    exports: 'US$32.3M',
    imports: 'US$1,784.7M',
    growth: '+7.1%',
    timeframe: 'long',
    priority: 16,
    opportunities: [
      {
        title: 'Ensamble electrónico liviano',
        description: 'Montaje de componentes, placas, sensores y dispositivos electrónicos básicos.',
        potential: 'Potencial Alto'
      },
      {
        title: 'Distribución de componentes electrónicos',
        description: 'Importación, almacenamiento y distribución regional de partes electrónicas.',
        potential: 'Potencial Alto'
      },
      {
        title: 'Reparación y reacondicionamiento',
        description: 'Servicios de reparación, mantenimiento y recuperación de dispositivos electrónicos.',
        potential: 'Potencial Medio-Alto' // Cambiar a 'Potencial Medio' si no modificaste el tipo en Sector.ts
      },
      {
        title: 'Electrónica para industria y salud',
        description: 'Proveeduría de sensores, controles, dispositivos y componentes para sectores productivos.',
        potential: 'Potencial Medio-Alto'
      }
    ],
    advantages: [
      'Alta demanda interna de componentes importados',
      'Potencial para sustitución parcial de importaciones',
      'Ubicación estratégica para distribución regional',
      'Oportunidad de ensamble electrónico liviano',
      'Encadenamientos con telecomunicaciones, salud, industria y automotriz'
    ]
  },
  {
    id: 'ti-manufactura-avanzada',
    name: 'Tecnologías de la información para manufactura avanzada',
    icon: Factory,
    image: tecnologiaInformacion,
    description: 'Soluciones tecnológicas para la industria 4.0 y manufactura inteligente',
    highlights: ['IoT industrial', 'Automatización', 'IA para manufactura', 'Robótica'],
    investment: 'US$840M',
    employment: '75K',
    growth: '+21.5%',
    timeframe: 'long',
    priority: 17
  }
];