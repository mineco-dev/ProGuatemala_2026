import {
  Leaf, Factory, Headphones, Zap, Plane,
  ShoppingBag, Droplet, Shirt, FlaskConical, Battery, Wrench,
  Heart, Cpu
} from 'lucide-react';

import type { Localized } from '@/i18n';
import type { Opportunity, Sector } from '@/types/sector';

// Assets de imágenes
import metalmecanicaImg from '@/assets/images/sectores/METALMECÁNICA.jpeg';
import alimentosProcesadosImg from '@/assets/images/sectores/ALIMENTOS PROCESADOS.jpeg';
import bebidasNoAlcoholicas from '@/assets/images/sectores/BEBIDAS NO ALCOHOLICAS.jpeg';
import biotecnologiaImg from '@/assets/images/sectores/BIOTECNOLOGÍA.jpeg';
import centroServiciosCompartidosImg from '@/assets/images/sectores/CENTRO DE SERVICIOS COMPARTIDOS.jpeg';
import componentesElectronicosImg from '@/assets/images/sectores/COMPONENTES Y EQUIPO ELECTRÓNICO.jpeg';
import dispositivosMedicosImg from '@/assets/images/sectores/DISPOSITIVOS Y EQUIPO MÉDICO.jpeg';
import electricoElectronico from '@/assets/images/sectores/ELÉCTRICO – ELECTRÓNICO (AUTOPARTES).jpeg';
import energiaImg from '@/assets/images/sectores/ENERGÍA.jpg';
import farmaceuticosImg from '@/assets/images/sectores/FARMACEÚTICOS.jpeg';
import quimicosImg from '@/assets/images/sectores/QUIMICOS.jpeg';
import serviciosSaludImg from '@/assets/images/sectores/SERVICIOS DE SALUD.jpeg';
import serviciosEmpresarialesImg from '@/assets/images/sectores/SERVICIOS EMPRESARILES, CONTACT CENTERS Y BPOS.jpeg';
import tecnologiaInformacion from '@/assets/images/sectores/Tecnologías de la información para manufactura avanzada.jpg';
import ticsSoftware from '@/assets/images/sectores/TICS Y SOFTWARE.jpeg';
import turismoImg from '@/assets/images/sectores/TURISMO.JPG';
import vestuarioImg from '@/assets/images/sectores/VESTUARIO Y TEXTILES.jpeg';

/**
 * Datos que no dependen del idioma: icono, imagen, cifras, horizonte temporal,
 * prioridad, PDF y nivel de potencial de cada oportunidad.
 */
interface SectorFacts {
  id: string;
  icon: Sector['icon'];
  image: string;
  investment?: string;
  employment?: string;
  growth: string;
  exports?: string;
  imports?: string;
  timeframe: Sector['timeframe'];
  priority: number;
  pdfUrl?: string;
  potentials: Array<Opportunity['potential']>;
}

const FACTS: SectorFacts[] = [
  {
    id: 'alimentos-procesados',
    icon: ShoppingBag,
    image: alimentosProcesadosImg,
    investment: 'US$1,721.4M',
    employment: '196.6K',
    growth: '+2.0%',
    exports: 'US$3,272.0M',
    timeframe: 'short',
    priority: 1,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/1.-Alimentos-Procesados.pdf',
    potentials: ['Potencial Muy Alto', 'Potencial Alto', 'Potencial Alto', 'Potencial Alto'],
  },
  {
    id: 'bebidas-no-alcoholicas',
    icon: Droplet,
    image: bebidasNoAlcoholicas,
    investment: 'US$124.4M',
    employment: '7.0K',
    growth: '+10.1%',
    exports: 'US$273.3M',
    timeframe: 'short',
    priority: 2,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/7.-Bebidas-No-Alcoholicas.pdf',
    potentials: ['Potencial Muy Alto', 'Potencial Alto', 'Potencial Alto', 'Potencial Alto'],
  },
  {
    id: 'vestuario-textil',
    icon: Shirt,
    image: vestuarioImg,
    investment: 'US$742.3M',
    employment: '125.3K',
    growth: '+5.5%',
    exports: 'US$2,110.0M',
    timeframe: 'short',
    priority: 3,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/6.-Vestuarios-y-Textiles.pdf',
    potentials: ['Potencial Muy Alto', 'Potencial Alto', 'Potencial Alto', 'Potencial Alto'],
  },
  {
    id: 'quimicos',
    icon: FlaskConical,
    image: quimicosImg,
    investment: 'US$226.3M',
    employment: '18.3K',
    growth: '+7.6%',
    exports: 'US$747.9M',
    timeframe: 'short',
    priority: 4,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/3.-Quimicos.pdf',
    potentials: ['Potencial Muy Alto', 'Potencial Alto', 'Potencial Alto', 'Potencial Medio'],
  },
  {
    id: 'farmaceuticos',
    icon: Heart,
    image: farmaceuticosImg,
    investment: 'US$159.0M',
    employment: '8.0K',
    growth: '+13.2%',
    exports: 'US$436.1M',
    timeframe: 'short',
    priority: 5,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/2.-Farmaceuticos.pdf',
    potentials: ['Potencial Muy Alto', 'Potencial Alto', 'Potencial Alto', 'Potencial Alto'],
  },
  {
    id: 'tics-software',
    icon: Cpu,
    image: ticsSoftware,
    investment: 'US$502.4M',
    employment: '29.3K',
    growth: '+6.8%',
    exports: 'US$544.9M',
    timeframe: 'short',
    priority: 6,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/4.-TICs-y-Software.pdf',
    potentials: ['Potencial Muy Alto', 'Potencial Muy Alto', 'Potencial Alto', 'Potencial Alto'],
  },
  {
    id: 'servicios-empresariales',
    icon: Headphones,
    image: serviciosEmpresarialesImg,
    investment: 'US$777.8M',
    employment: '64.0K',
    growth: '+1.2%',
    exports: 'US$869.2M',
    timeframe: 'short',
    priority: 7,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/5.-Servicios-Empresariales-Contact-Centers-y-BPOs.pdf',
    potentials: ['Potencial Muy Alto', 'Potencial Muy Alto', 'Potencial Alto', 'Potencial Alto'],
  },
  {
    id: 'energia',
    icon: Zap,
    image: energiaImg,
    investment: 'US$3.2B',
    employment: '45K',
    growth: '+12.3%',
    timeframe: 'short',
    priority: 8,
    potentials: [],
  },
  {
    id: 'servicios-compartidos',
    icon: Factory,
    image: centroServiciosCompartidosImg,
    investment: 'US$1.1B',
    employment: '145K',
    growth: '+10.5%',
    timeframe: 'medium',
    priority: 9,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/5.-Servicios-Empresariales-Contact-Centers-y-BPOs.pdf',
    potentials: [],
  },
  {
    id: 'electrico-electronico',
    icon: Battery,
    image: electricoElectronico,
    investment: 'US$178.5M',
    employment: '15.3K',
    growth: '+8.7%',
    exports: 'US$60.3M',
    timeframe: 'medium',
    priority: 10,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/9.%20Electrico%20Electronico%20autopartes.pdf',
    potentials: ['Potencial Muy Alto', 'Potencial Alto', 'Potencial Alto', 'Potencial Alto'],
  },
  {
    id: 'servicios-salud',
    icon: Heart,
    image: serviciosSaludImg,
    investment: 'US$890M',
    employment: '125K',
    growth: '+11.3%',
    timeframe: 'medium',
    priority: 11,
    potentials: [],
  },
  {
    id: 'metalmecanica',
    icon: Wrench,
    image: metalmecanicaImg,
    investment: 'US$175.5M',
    employment: '17.8K',
    growth: '-6.4%',
    exports: 'US$160.7M',
    timeframe: 'medium',
    priority: 12,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/10.-Metalmecanica.pdf',
    potentials: ['Potencial Muy Alto', 'Potencial Alto', 'Potencial Alto', 'Potencial Medio-Alto'],
  },
  {
    id: 'turismo',
    icon: Plane,
    image: turismoImg,
    investment: 'US$971.9M',
    employment: '162.5K',
    growth: '+19.5%',
    exports: 'US$1,809.8M',
    timeframe: 'medium',
    priority: 13,
    pdfUrl: 'https://mineco.gob.gt/files/proguatemala/es/sectoriales/8.-Turismo.pdf',
    potentials: ['Potencial Muy Alto', 'Potencial Alto', 'Potencial Alto', 'Potencial Alto'],
  },
  {
    id: 'biotecnologia',
    icon: Leaf,
    image: biotecnologiaImg,
    investment: 'US$650M',
    employment: '45K',
    growth: '+18.7%',
    timeframe: 'long',
    priority: 14,
    potentials: [],
  },
  {
    id: 'dispositivos-medicos',
    icon: Heart,
    image: dispositivosMedicosImg,
    investment: 'US$580M',
    employment: '55K',
    growth: '+16.4%',
    timeframe: 'long',
    priority: 15,
    potentials: [],
  },
  {
    id: 'componentes-electronicos',
    icon: Cpu,
    image: componentesElectronicosImg,
    growth: '+7.1%',
    exports: 'US$32.3M',
    imports: 'US$1,784.7M',
    timeframe: 'long',
    priority: 16,
    potentials: ['Potencial Alto', 'Potencial Alto', 'Potencial Medio-Alto', 'Potencial Medio-Alto'],
  },
  {
    id: 'ti-manufactura-avanzada',
    icon: Factory,
    image: tecnologiaInformacion,
    investment: 'US$840M',
    employment: '75K',
    growth: '+21.5%',
    timeframe: 'long',
    priority: 17,
    potentials: [],
  },
];

/** Solo el texto del sector. */
interface SectorCopy {
  name: string;
  description: string;
  highlights: string[];
  opportunities: Array<{ title: string; description: string }>;
  advantages: string[];
}

const COPY: Localized<SectorCopy[]> = {
  es: [
    {
      name: 'Alimentos Procesados',
      description:
        'Procesamiento y transformación de productos alimenticios para mercados locales e internacionales',
      highlights: ['Alimentos procesados', 'Conservación de alimentos', 'Productos alimenticios', 'Molinería'],
      opportunities: [
        {
          title: 'Alimentos listos para consumo',
          description:
            'Producción de comidas preparadas, snacks y productos empacados para supermercados y exportación regional.',
        },
        {
          title: 'Ingredientes y aditivos alimentarios',
          description:
            'Fabricación de insumos para la industria alimentaria, como mezclas, saborizantes, conservantes y bases procesadas.',
        },
        {
          title: 'Empaque alimentario especializado',
          description:
            'Producción de empaques para conservación, exportación y presentación de alimentos procesados.',
        },
        {
          title: 'Alimentos saludables y funcionales',
          description:
            'Desarrollo de productos bajos en azúcar, altos en proteína, fortificados o dirigidos a consumidores saludables.',
        },
      ],
      advantages: [
        'Amplia base agroindustrial local',
        'Disponibilidad de materias primas agrícolas',
        'Experiencia en procesamiento de alimentos',
        'Acceso a mercados regionales y Estados Unidos',
        'Capacidad exportadora consolidada',
      ],
    },
    {
      name: 'Bebidas no alcohólicas',
      description:
        'Producción de bebidas naturales, jugos y bebidas funcionales',
      highlights: ['Bebidas no alcohólicas', 'Aguas embotelladas', 'Aguas minerales', 'Elaboración de bebidas'],
      opportunities: [
        {
          title: 'Bebidas funcionales',
          description:
            'Producción de bebidas con vitaminas, electrolitos, colágeno, proteína o ingredientes naturales.',
        },
        {
          title: 'Agua embotellada y saborizada',
          description:
            'Expansión de líneas de agua purificada, mineral, saborizada o con valor agregado.',
        },
        {
          title: 'Jugos y néctares naturales',
          description:
            'Procesamiento de frutas locales para bebidas listas para consumo y exportación regional.',
        },
        {
          title: 'Bebidas bajas en azúcar',
          description:
            'Desarrollo de gaseosas, tés, refrescos y bebidas saludables con menor contenido calórico.',
        },
      ],
      advantages: [
        'Fuentes de agua de alta calidad',
        'Frutas tropicales disponibles todo el año',
        'Costos competitivos de producción',
        'Acceso a mercados regionales',
        'Plantas embotelladoras y capacidad industrial existente',
      ],
    },
    {
      name: 'Vestuario y textil',
      description:
        'Industria textil y de confección con estándares internacionales',
      highlights: ['Hilatura', 'Tejedura', 'Productos textiles', 'Prendas de vestir'],
      opportunities: [
        {
          title: 'Textiles técnicos',
          description:
            'Producción de textiles especializados para uso médico, deportivo e industrial.',
        },
        {
          title: 'Moda sostenible',
          description:
            'Confección de prendas con textiles orgánicos, reciclados y procesos ecológicos.',
        },
        {
          title: 'Uniformes corporativos',
          description:
            'Manufactura de uniformes especializados para empresas, hospitales, hoteles e industria.',
        },
        {
          title: 'Confección premium',
          description:
            'Producción de prendas de alta calidad para marcas internacionales.',
        },
      ],
      advantages: [
        'Cercanía logística con Estados Unidos',
        'Experiencia exportadora en confección',
        'Mano de obra especializada en manufactura textil',
        'Integración con cadenas regionales de suministro',
        'Capacidad para producción flexible y pedidos de menor escala',
      ],
    },
    {
      name: 'Químicos',
      description:
        'Productos químicos industriales y especializados',
      highlights: ['Abonos', 'Plaguicidas', 'Jabones y detergentes', 'Otros químicos'],
      opportunities: [
        {
          title: 'Productos de limpieza institucional',
          description:
            'Fabricación de detergentes, desinfectantes y químicos para hoteles, hospitales e industria.',
        },
        {
          title: 'Insumos químicos industriales',
          description:
            'Producción de químicos utilizados por manufactura, alimentos, textiles y construcción.',
        },
        {
          title: 'Agroquímicos y fertilizantes',
          description:
            'Formulación y envasado de productos para agricultura, nutrición vegetal y protección de cultivos.',
        },
        {
          title: 'Cosméticos y cuidado personal',
          description:
            'Fabricación de jabones, cremas, champús, fragancias y productos de higiene personal.',
        },
      ],
      advantages: [
        'Demanda local de insumos industriales',
        'Encadenamientos con alimentos, textiles, agroindustria y construcción',
        'Potencial para sustituir importaciones',
        'Ubicación estratégica para distribución regional',
        'Experiencia en productos de limpieza, jabones y formulaciones químicas',
      ],
    },
    {
      name: 'Farmacéuticos',
      description:
        'Producción farmacéutica y medicamentos genéricos',
      highlights: ['Productos farmacéuticos', 'Sustancias Medicinales', 'Productos botánicos', 'Fabricación farmacéutica'],
      opportunities: [
        {
          title: 'Medicamentos genéricos',
          description:
            'Producción de medicamentos de bajo costo para mercado nacional y regional.',
        },
        {
          title: 'Medicamentos OTC',
          description:
            'Fabricación de productos de venta libre como analgésicos, antigripales y suplementos básicos.',
        },
        {
          title: 'Empaque farmacéutico',
          description:
            'Producción de blísteres, frascos, etiquetas y empaques especializados para medicamentos.',
        },
        {
          title: 'Laboratorios de control de calidad',
          description:
            'Servicios de análisis, certificación y pruebas para productos farmacéuticos y cosméticos.',
        },
      ],
      advantages: [
        'Demanda constante de medicamentos y productos de salud',
        'Potencial de exportación hacia Centroamérica',
        'Mercado regional cercano y en crecimiento',
        'Capacidad para producir genéricos y medicamentos OTC',
        'Oportunidades vinculadas a compras públicas, farmacias y distribuidores',
      ],
    },
    {
      name: 'TICS y Software',
      description:
        'Desarrollo de software y servicios de tecnología de la información',
      highlights: ['Programación informática', 'TICs', 'Servicios de información', 'Software'],
      opportunities: [
        {
          title: 'Desarrollo de software empresarial',
          description:
            'Creación de soluciones digitales para banca, comercio, logística, salud y gobierno.',
        },
        {
          title: 'Ciberseguridad',
          description:
            'Servicios de protección digital, monitoreo, auditorías y respuesta ante incidentes.',
        },
        {
          title: 'Servicios cloud y soporte técnico',
          description:
            'Implementación, mantenimiento y soporte de infraestructura tecnológica para empresas.',
        },
        {
          title: 'Fintech y pagos digitales',
          description:
            'Desarrollo de plataformas para pagos, billeteras digitales, crédito, remesas y servicios financieros.',
        },
      ],
      advantages: [
        'Talento joven con capacidades digitales',
        'Zona horaria compatible con Estados Unidos',
        'Costos competitivos frente a otros mercados',
        'Crecimiento de la demanda de servicios tecnológicos',
        'Potencial para exportar servicios digitales y software',
      ],
    },
    {
      name: 'Servicios empresariales, contact centers y BPOs',
      description:
        'Servicios de outsourcing, call centers y procesos de negocio',
      highlights: ['Centros de llamadas', 'Servicios administrativos', 'BPO', 'Contact centers'],
      opportunities: [
        {
          title: 'Centros de servicios compartidos',
          description:
            'Operación de áreas de finanzas, recursos humanos, compras y administración para empresas regionales.',
        },
        {
          title: 'Contact centers bilingües',
          description:
            'Atención al cliente, ventas y soporte técnico para empresas de Estados Unidos y Canadá.',
        },
        {
          title: 'Back office financiero',
          description:
            'Servicios de contabilidad, facturación, conciliaciones, análisis financiero y procesamiento administrativo.',
        },
        {
          title: 'BPO especializado en tecnología',
          description:
            'Soporte técnico, gestión de tickets, monitoreo y asistencia digital para empresas internacionales.',
        },
      ],
      advantages: [
        'Talento bilingüe para atención a Estados Unidos',
        'Misma zona horaria o similar a mercados clave',
        'Costos laborales competitivos',
        'Experiencia en contact centers y back office',
        'Capacidad para escalar operaciones regionales',
      ],
    },
    {
      name: 'Energía',
      description:
        'Generación y distribución de energía renovable',
      highlights: ['Energía hidroeléctrica', 'Energía solar', 'Energía eólica', 'Biomasa'],
      opportunities: [],
      advantages: [],
    },
    {
      name: 'Centro de Servicios Compartidos',
      description:
        'Centros de servicios compartidos para empresas multinacionales',
      highlights: ['Servicios corporativos', 'Finanzas compartidas', 'IT compartido', 'RH compartido'],
      opportunities: [],
      advantages: [],
    },
    {
      name: 'Eléctrico-Electrónico (autopartes)',
      description:
        'Manufactura de componentes eléctricos y electrónicos para la industria automotriz',
      highlights: ['Equipo industrial', 'Reparación de maquinaria', 'Equipo industrial', 'Eléctrico - electrónico'],
      opportunities: [
        {
          title: 'Ensamble de componentes eléctricos',
          description:
            'Producción y ensamblaje de arneses, conectores, tableros y partes eléctricas.',
        },
        {
          title: 'Autopartes livianas',
          description:
            'Fabricación de piezas, accesorios y componentes para vehículos y transporte.',
        },
        {
          title: 'Reparación de maquinaria industrial',
          description:
            'Servicios de instalación, mantenimiento y reparación de equipos eléctricos e industriales.',
        },
        {
          title: 'Equipos para eficiencia energética',
          description:
            'Producción o ensamblaje de soluciones para ahorro energético en empresas e industria.',
        },
      ],
      advantages: [
        'Potencial de integración a cadenas regionales de manufactura',
        'Cercanía con el mercado norteamericano',
        'Demanda de componentes eléctricos e industriales',
        'Capacidad para ensamble y mantenimiento de equipo',
        'Oportunidades de nearshoring en procesos livianos',
      ],
    },
    {
      name: 'Servicios de Salud',
      description:
        'Servicios médicos especializados y turismo de salud',
      highlights: ['Turismo médico', 'Telemedicina', 'Clínicas especializadas', 'Atención domiciliaria'],
      opportunities: [],
      advantages: [],
    },
    {
      name: 'Metalmecánica',
      description:
        'Fabricación de productos metálicos y maquinaria',
      highlights: ['Metales comunes', 'Metalmecánica', 'Productos metálicos', 'Fabricación de metal'],
      opportunities: [
        {
          title: 'Estructuras metálicas',
          description:
            'Fabricación de estructuras para construcción, bodegas, naves industriales y proyectos logísticos.',
        },
        {
          title: 'Componentes industriales',
          description:
            'Producción de piezas metálicas para maquinaria, agroindustria, manufactura y mantenimiento.',
        },
        {
          title: 'Mantenimiento y reparación industrial',
          description:
            'Servicios especializados para plantas manufactureras, equipos, líneas de producción y maquinaria.',
        },
        {
          title: 'Mobiliario metálico especializado',
          description:
            'Producción de estanterías, racks, mobiliario industrial y soluciones para almacenamiento.',
        },
      ],
      advantages: [
        'Demanda de estructuras y componentes metálicos',
        'Encadenamientos con construcción, logística e industria',
        'Capacidad para mantenimiento y reparación industrial',
        'Mano de obra con experiencia manufacturera',
        'Potencial para proveer a sectores productivos locales y regionales',
      ],
    },
    {
      name: 'Turismo',
      description:
        'Desarrollo turístico sostenible y turismo cultural',
      highlights: ['Turismo cultural', 'Ecoturismo', 'Operadores turísticos', 'Alojamientos'],
      opportunities: [
        {
          title: 'Hoteles boutique',
          description:
            'Desarrollo de hospedajes diferenciados en destinos culturales, naturales o urbanos.',
        },
        {
          title: 'Turismo de experiencias',
          description:
            'Oferta de tours gastronómicos, culturales, comunitarios, de aventura y naturaleza.',
        },
        {
          title: 'Transporte turístico especializado',
          description:
            'Servicios de movilidad segura para turistas, grupos, eventos y rutas regionales.',
        },
        {
          title: 'Plataformas de reservas turísticas',
          description:
            'Herramientas digitales para paquetes, hospedajes, tours, pagos y promoción de destinos.',
        },
      ],
      advantages: [
        'Riqueza cultural, natural e histórica',
        'Destinos reconocidos internacionalmente',
        'Crecimiento de ingresos turísticos',
        'Oferta diversa: cultura, naturaleza, gastronomía y aventura',
        'Potencial para desarrollar infraestructura turística especializada',
      ],
    },
    {
      name: 'Biotecnología',
      description:
        'Investigación y desarrollo en biotecnología agrícola y médica',
      highlights: ['Biotech agrícola', 'Medicina personalizada', 'Biocombustibles', 'Investigación genética'],
      opportunities: [],
      advantages: [],
    },
    {
      name: 'Dispositivos y equipo médico',
      description:
        'Fabricación de dispositivos y equipos médicos especializados',
      highlights: ['Dispositivos médicos', 'Equipos de diagnóstico', 'Instrumental quirúrgico', 'Prótesis'],
      opportunities: [],
      advantages: [],
    },
    {
      name: 'Componentes y equipo electrónico',
      description:
        'Manufactura de componentes electrónicos avanzados',
      highlights: ['Semiconductores', 'Circuitos integrados', 'Ensamble electrónico', 'Componentes electrónicos'],
      opportunities: [
        {
          title: 'Ensamble electrónico liviano',
          description:
            'Montaje de componentes, placas, sensores y dispositivos electrónicos básicos.',
        },
        {
          title: 'Distribución de componentes electrónicos',
          description:
            'Importación, almacenamiento y distribución regional de partes electrónicas.',
        },
        {
          title: 'Reparación y reacondicionamiento',
          description:
            'Servicios de reparación, mantenimiento y recuperación de dispositivos electrónicos.',
        },
        {
          title: 'Electrónica para industria y salud',
          description:
            'Proveeduría de sensores, controles, dispositivos y componentes para sectores productivos.',
        },
      ],
      advantages: [
        'Alta demanda interna de componentes importados',
        'Potencial para sustitución parcial de importaciones',
        'Ubicación estratégica para distribución regional',
        'Oportunidad de ensamble electrónico liviano',
        'Encadenamientos con telecomunicaciones, salud, industria y automotriz',
      ],
    },
    {
      name: 'Tecnologías de la información para manufactura avanzada',
      description:
        'Soluciones tecnológicas para la industria 4.0 y manufactura inteligente',
      highlights: ['IoT industrial', 'Automatización', 'IA para manufactura', 'Robótica'],
      opportunities: [],
      advantages: [],
    },
  ],
  en: [
    {
      name: 'Processed Foods',
      description:
        'Processing and transformation of food products for local and international markets',
      highlights: ['Processed foods', 'Food preservation', 'Food products', 'Milling'],
      opportunities: [
        {
          title: 'Ready-to-eat foods',
          description:
            'Production of prepared meals, snacks and packaged products for supermarkets and regional export.',
        },
        {
          title: 'Food ingredients and additives',
          description:
            'Manufacturing of inputs for the food industry, such as blends, flavorings, preservatives and processed bases.',
        },
        {
          title: 'Specialized food packaging',
          description:
            'Production of packaging for the preservation, export and presentation of processed foods.',
        },
        {
          title: 'Healthy and functional foods',
          description:
            'Development of low-sugar, high-protein or fortified products aimed at health-conscious consumers.',
        },
      ],
      advantages: [
        'Broad local agribusiness base',
        'Availability of agricultural raw materials',
        'Experience in food processing',
        'Access to regional markets and the United States',
        'Consolidated export capacity',
      ],
    },
    {
      name: 'Non-alcoholic beverages',
      description:
        'Production of natural beverages, juices and functional drinks',
      highlights: ['Non-alcoholic beverages', 'Bottled water', 'Mineral water', 'Beverage production'],
      opportunities: [
        {
          title: 'Functional beverages',
          description:
            'Production of drinks with vitamins, electrolytes, collagen, protein or natural ingredients.',
        },
        {
          title: 'Bottled and flavored water',
          description:
            'Expansion of purified, mineral, flavored or value-added water lines.',
        },
        {
          title: 'Natural juices and nectars',
          description:
            'Processing of local fruit into ready-to-drink beverages for regional export.',
        },
        {
          title: 'Low-sugar beverages',
          description:
            'Development of sodas, teas, soft drinks and healthy beverages with lower calorie content.',
        },
      ],
      advantages: [
        'High-quality water sources',
        'Tropical fruit available year-round',
        'Competitive production costs',
        'Access to regional markets',
        'Existing bottling plants and industrial capacity',
      ],
    },
    {
      name: 'Apparel and textiles',
      description:
        'Textile and garment industry meeting international standards',
      highlights: ['Spinning', 'Weaving', 'Textile products', 'Garments'],
      opportunities: [
        {
          title: 'Technical textiles',
          description:
            'Production of specialized textiles for medical, sports and industrial use.',
        },
        {
          title: 'Sustainable fashion',
          description:
            'Garment manufacturing with organic and recycled textiles and eco-friendly processes.',
        },
        {
          title: 'Corporate uniforms',
          description:
            'Manufacturing of specialized uniforms for companies, hospitals, hotels and industry.',
        },
        {
          title: 'Premium garment manufacturing',
          description:
            'Production of high-quality garments for international brands.',
        },
      ],
      advantages: [
        'Logistics proximity to the United States',
        'Export experience in garment manufacturing',
        'Workforce specialized in textile manufacturing',
        'Integration with regional supply chains',
        'Capacity for flexible production and smaller orders',
      ],
    },
    {
      name: 'Chemicals',
      description:
        'Industrial and specialized chemical products',
      highlights: ['Fertilizers', 'Pesticides', 'Soaps and detergents', 'Other chemicals'],
      opportunities: [
        {
          title: 'Institutional cleaning products',
          description:
            'Manufacturing of detergents, disinfectants and chemicals for hotels, hospitals and industry.',
        },
        {
          title: 'Industrial chemical inputs',
          description:
            'Production of chemicals used by manufacturing, food, textiles and construction.',
        },
        {
          title: 'Agrochemicals and fertilizers',
          description:
            'Formulation and packaging of products for agriculture, plant nutrition and crop protection.',
        },
        {
          title: 'Cosmetics and personal care',
          description:
            'Manufacturing of soaps, creams, shampoos, fragrances and personal hygiene products.',
        },
      ],
      advantages: [
        'Local demand for industrial inputs',
        'Linkages with food, textiles, agribusiness and construction',
        'Potential to replace imports',
        'Strategic location for regional distribution',
        'Experience in cleaning products, soaps and chemical formulations',
      ],
    },
    {
      name: 'Pharmaceuticals',
      description:
        'Pharmaceutical production and generic medicines',
      highlights: ['Pharmaceutical products', 'Medicinal substances', 'Botanical products', 'Pharmaceutical manufacturing'],
      opportunities: [
        {
          title: 'Generic medicines',
          description:
            'Production of low-cost medicines for the domestic and regional market.',
        },
        {
          title: 'OTC medicines',
          description:
            'Manufacturing of over-the-counter products such as painkillers, cold remedies and basic supplements.',
        },
        {
          title: 'Pharmaceutical packaging',
          description:
            'Production of blisters, bottles, labels and specialized packaging for medicines.',
        },
        {
          title: 'Quality control laboratories',
          description:
            'Analysis, certification and testing services for pharmaceutical and cosmetic products.',
        },
      ],
      advantages: [
        'Steady demand for medicines and health products',
        'Export potential to Central America',
        'Nearby, growing regional market',
        'Capacity to produce generics and OTC medicines',
        'Opportunities tied to public procurement, pharmacies and distributors',
      ],
    },
    {
      name: 'ICT and Software',
      description:
        'Software development and information technology services',
      highlights: ['Computer programming', 'ICT', 'Information services', 'Software'],
      opportunities: [
        {
          title: 'Enterprise software development',
          description:
            'Creation of digital solutions for banking, commerce, logistics, health and government.',
        },
        {
          title: 'Cybersecurity',
          description:
            'Digital protection, monitoring, auditing and incident response services.',
        },
        {
          title: 'Cloud services and technical support',
          description:
            'Implementation, maintenance and support of technology infrastructure for companies.',
        },
        {
          title: 'Fintech and digital payments',
          description:
            'Development of platforms for payments, digital wallets, credit, remittances and financial services.',
        },
      ],
      advantages: [
        'Young talent with digital skills',
        'Time zone aligned with the United States',
        'Competitive costs versus other markets',
        'Growing demand for technology services',
        'Potential to export digital services and software',
      ],
    },
    {
      name: 'Business services, contact centers and BPOs',
      description:
        'Outsourcing, call center and business process services',
      highlights: ['Call centers', 'Administrative services', 'BPO', 'Contact centers'],
      opportunities: [
        {
          title: 'Shared services centers',
          description:
            'Running finance, human resources, procurement and administration functions for regional companies.',
        },
        {
          title: 'Bilingual contact centers',
          description:
            'Customer service, sales and technical support for companies in the United States and Canada.',
        },
        {
          title: 'Financial back office',
          description:
            'Accounting, invoicing, reconciliation, financial analysis and administrative processing services.',
        },
        {
          title: 'Technology-focused BPO',
          description:
            'Technical support, ticket management, monitoring and digital assistance for international companies.',
        },
      ],
      advantages: [
        'Bilingual talent for serving the United States',
        'Same or similar time zone as key markets',
        'Competitive labor costs',
        'Experience in contact centers and back office',
        'Capacity to scale regional operations',
      ],
    },
    {
      name: 'Energy',
      description:
        'Renewable energy generation and distribution',
      highlights: ['Hydropower', 'Solar energy', 'Wind energy', 'Biomass'],
      opportunities: [],
      advantages: [],
    },
    {
      name: 'Shared Services Center',
      description:
        'Shared services centers for multinational companies',
      highlights: ['Corporate services', 'Shared finance', 'Shared IT', 'Shared HR'],
      opportunities: [],
      advantages: [],
    },
    {
      name: 'Electrical-Electronic (auto parts)',
      description:
        'Manufacturing of electrical and electronic components for the automotive industry',
      highlights: ['Industrial equipment', 'Machinery repair', 'Industrial equipment', 'Electrical - electronic'],
      opportunities: [
        {
          title: 'Electrical component assembly',
          description:
            'Production and assembly of harnesses, connectors, panels and electrical parts.',
        },
        {
          title: 'Light auto parts',
          description:
            'Manufacturing of parts, accessories and components for vehicles and transport.',
        },
        {
          title: 'Industrial machinery repair',
          description:
            'Installation, maintenance and repair services for electrical and industrial equipment.',
        },
        {
          title: 'Energy efficiency equipment',
          description:
            'Production or assembly of energy-saving solutions for businesses and industry.',
        },
      ],
      advantages: [
        'Potential to join regional manufacturing chains',
        'Proximity to the North American market',
        'Demand for electrical and industrial components',
        'Capacity for equipment assembly and maintenance',
        'Nearshoring opportunities in light processes',
      ],
    },
    {
      name: 'Health Services',
      description:
        'Specialized medical services and health tourism',
      highlights: ['Medical tourism', 'Telemedicine', 'Specialized clinics', 'Home care'],
      opportunities: [],
      advantages: [],
    },
    {
      name: 'Metalworking',
      description:
        'Manufacturing of metal products and machinery',
      highlights: ['Base metals', 'Metalworking', 'Metal products', 'Metal fabrication'],
      opportunities: [
        {
          title: 'Metal structures',
          description:
            'Fabrication of structures for construction, warehouses, industrial buildings and logistics projects.',
        },
        {
          title: 'Industrial components',
          description:
            'Production of metal parts for machinery, agribusiness, manufacturing and maintenance.',
        },
        {
          title: 'Industrial maintenance and repair',
          description:
            'Specialized services for manufacturing plants, equipment, production lines and machinery.',
        },
        {
          title: 'Specialized metal furniture',
          description:
            'Production of shelving, racks, industrial furniture and storage solutions.',
        },
      ],
      advantages: [
        'Demand for metal structures and components',
        'Linkages with construction, logistics and industry',
        'Capacity for industrial maintenance and repair',
        'Workforce with manufacturing experience',
        'Potential to supply local and regional productive sectors',
      ],
    },
    {
      name: 'Tourism',
      description:
        'Sustainable tourism development and cultural tourism',
      highlights: ['Cultural tourism', 'Ecotourism', 'Tour operators', 'Accommodation'],
      opportunities: [
        {
          title: 'Boutique hotels',
          description:
            'Development of distinctive accommodation in cultural, natural or urban destinations.',
        },
        {
          title: 'Experiential tourism',
          description:
            'Culinary, cultural, community-based, adventure and nature tours.',
        },
        {
          title: 'Specialized tourist transport',
          description:
            'Safe mobility services for tourists, groups, events and regional routes.',
        },
        {
          title: 'Tourism booking platforms',
          description:
            'Digital tools for packages, accommodation, tours, payments and destination promotion.',
        },
      ],
      advantages: [
        'Cultural, natural and historical richness',
        'Internationally recognized destinations',
        'Growing tourism revenue',
        'Diverse offering: culture, nature, gastronomy and adventure',
        'Potential to develop specialized tourism infrastructure',
      ],
    },
    {
      name: 'Biotechnology',
      description:
        'Research and development in agricultural and medical biotechnology',
      highlights: ['Agricultural biotech', 'Personalized medicine', 'Biofuels', 'Genetic research'],
      opportunities: [],
      advantages: [],
    },
    {
      name: 'Medical devices and equipment',
      description:
        'Manufacturing of specialized medical devices and equipment',
      highlights: ['Medical devices', 'Diagnostic equipment', 'Surgical instruments', 'Prosthetics'],
      opportunities: [],
      advantages: [],
    },
    {
      name: 'Electronic components and equipment',
      description:
        'Manufacturing of advanced electronic components',
      highlights: ['Semiconductors', 'Integrated circuits', 'Electronic assembly', 'Electronic components'],
      opportunities: [
        {
          title: 'Light electronic assembly',
          description:
            'Assembly of components, boards, sensors and basic electronic devices.',
        },
        {
          title: 'Electronic component distribution',
          description:
            'Import, storage and regional distribution of electronic parts.',
        },
        {
          title: 'Repair and refurbishment',
          description:
            'Repair, maintenance and recovery services for electronic devices.',
        },
        {
          title: 'Electronics for industry and health',
          description:
            'Supply of sensors, controls, devices and components for productive sectors.',
        },
      ],
      advantages: [
        'High domestic demand for imported components',
        'Potential for partial import substitution',
        'Strategic location for regional distribution',
        'Opportunity for light electronic assembly',
        'Linkages with telecommunications, health, industry and automotive',
      ],
    },
    {
      name: 'Information technology for advanced manufacturing',
      description:
        'Technology solutions for Industry 4.0 and smart manufacturing',
      highlights: ['Industrial IoT', 'Automation', 'AI for manufacturing', 'Robotics'],
      opportunities: [],
      advantages: [],
    },
  ],
};

/** Une el texto del idioma activo con las cifras compartidas. */
const merge = (copy: SectorCopy[]): Sector[] =>
  FACTS.map((facts, index) => {
    const text = copy[index];
    const { potentials, ...rest } = facts;

    return {
      ...rest,
      name: text.name,
      description: text.description,
      highlights: text.highlights,
      advantages: text.advantages,
      opportunities: text.opportunities.map((opportunity, i) => ({
        ...opportunity,
        potential: potentials[i],
      })),
    };
  });

export const sectors: Localized<Sector[]> = {
  es: merge(COPY.es),
  en: merge(COPY.en),
};
