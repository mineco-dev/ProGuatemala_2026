import {
  Leaf, Factory, Headphones, Zap, Plane,
  ShoppingBag, Droplet, Shirt, FlaskConical, Battery, Wrench,
  Heart, Cpu
} from 'lucide-react';

import type { Language, Localized } from '@/i18n';
import type { Opportunity, Sector, SectorContact } from '@/types/sector';
import { sectorOnePagers } from '@/data/onePagers';

// Assets de imágenes
import metalmecanicaImg from '@/assets/images/sectores/tarjetas/METALMECÁNICA.jpeg';
import alimentosProcesadosImg from '@/assets/images/sectores/tarjetas/ALIMENTOS PROCESADOS.jpeg';
import bebidasNoAlcoholicas from '@/assets/images/sectores/tarjetas/BEBIDAS NO ALCOHOLICAS.jpeg';
import biotecnologiaImg from '@/assets/images/sectores/tarjetas/BIOTECNOLOGÍA.jpeg';
import centroServiciosCompartidosImg from '@/assets/images/sectores/tarjetas/CENTRO DE SERVICIOS COMPARTIDOS.jpeg';
import componentesElectronicosImg from '@/assets/images/sectores/tarjetas/COMPONENTES Y EQUIPO ELECTRÓNICO.jpeg';
import dispositivosMedicosImg from '@/assets/images/sectores/tarjetas/DISPOSITIVOS Y EQUIPO MÉDICO.jpeg';
import electricoElectronico from '@/assets/images/sectores/tarjetas/ELÉCTRICO – ELECTRÓNICO (AUTOPARTES).jpeg';
import energiaImg from '@/assets/images/sectores/tarjetas/ENERGÍA.jpg';
import farmaceuticosImg from '@/assets/images/sectores/tarjetas/FARMACEÚTICOS.jpeg';
import quimicosImg from '@/assets/images/sectores/tarjetas/QUIMICOS.jpeg';
import serviciosSaludImg from '@/assets/images/sectores/tarjetas/SERVICIOS DE SALUD.jpeg';
import serviciosEmpresarialesImg from '@/assets/images/sectores/tarjetas/SERVICIOS EMPRESARILES, CONTACT CENTERS Y BPOS.jpeg';
import tecnologiaInformacion from '@/assets/images/sectores/tarjetas/Tecnologías de la información para manufactura avanzada.jpg';
import ticsSoftware from '@/assets/images/sectores/tarjetas/TICS Y SOFTWARE.jpeg';
import turismoImg from '@/assets/images/sectores/tarjetas/TURISMO.JPG';
import vestuarioImg from '@/assets/images/sectores/tarjetas/VESTUARIO Y TEXTILES.jpeg';

/**
 * Datos que no dependen del idioma: icono, imagen, cifras, horizonte temporal,
 * prioridad y nivel de potencial de cada oportunidad. El one pager si depende
 * del idioma, asi que se resuelve al unir (ver `sectorOnePagers`).
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
  potentials: Array<Opportunity['potential']>;
  /** RCA por oportunidad (opcional). Si existe, la ficha muestra el RCA. */
  rcas?: string[];
}

const FACTS: SectorFacts[] = [
  {
    id: 'alimentos-procesados',
    icon: ShoppingBag,
    image: alimentosProcesadosImg,
    investment: 'US$1,721.4M',
    employment: '196.6K',
    growth: '5.5%',
    exports: 'US$3,272.0M',
    timeframe: 'short',
    priority: 1,
    potentials: ['Potencial Muy Alto', 'Potencial Alto', 'Potencial Alto', 'Potencial Alto'],
    rcas: ['166.75', '62.77', '37.81', '31.44'],
  },
  {
    id: 'bebidas-no-alcoholicas',
    icon: Droplet,
    image: bebidasNoAlcoholicas,
    investment: 'US$124.4M',
    employment: '7.0K',
    growth: '5%',
    exports: 'US$273.3M',
    timeframe: 'short',
    priority: 2,
    potentials: ['Potencial Muy Alto', 'Potencial Alto', 'Potencial Alto', 'Potencial Alto'],
    rcas: ['31.45', '22.67', '12.38', '8.32'],
  },
  {
    id: 'vestuario-textil',
    icon: Shirt,
    image: vestuarioImg,
    investment: 'US$742.3M',
    employment: '125.3K',
    growth: '3.15%',
    exports: 'US$2,110.0M',
    timeframe: 'short',
    priority: 3,
    potentials: ['Potencial Muy Alto', 'Potencial Alto', 'Potencial Alto', 'Potencial Alto'],
    rcas: ['151.84', '105.26', '74.03', '64.79'],
  },
  {
    id: 'quimicos',
    icon: FlaskConical,
    image: quimicosImg,
    investment: 'US$226.3M',
    employment: '18.3K',
    growth: '5.4%',
    exports: 'US$747.9M',
    timeframe: 'short',
    priority: 4,
    potentials: ['Potencial Muy Alto', 'Potencial Alto', 'Potencial Alto', 'Potencial Medio'],
    rcas: ['62.03', '57.55', '49.8', '33.61'],
  },
  {
    id: 'farmaceuticos',
    icon: Heart,
    image: farmaceuticosImg,
    investment: 'US$158.96M',
    employment: '7.96K',
    growth: '3.2%',
    exports: 'US$436.1M',
    timeframe: 'short',
    priority: 5,
    potentials: ['Potencial Muy Alto', 'Potencial Alto', 'Potencial Alto', 'Potencial Alto'],
    rcas: ['8.34', '2.8', '2.71', '2.34'],
  },
  {
    id: 'tics-software',
    icon: Cpu,
    image: ticsSoftware,
    investment: 'US$502.4M',
    employment: '29.3K',
    growth: '4.3%',
    exports: 'US$544.9M',
    timeframe: 'short',
    priority: 6,
    potentials: ['Potencial Muy Alto', 'Potencial Muy Alto', 'Potencial Alto', 'Potencial Alto'],
  },
  {
    id: 'servicios-empresariales',
    icon: Headphones,
    image: serviciosEmpresarialesImg,
    investment: 'US$777.8M',
    employment: '64.0K',
    growth: '16.0%',
    exports: 'US$869.2M',
    timeframe: 'short',
    priority: 7,
    potentials: ['Potencial Muy Alto', 'Potencial Muy Alto', 'Potencial Alto', 'Potencial Alto'],
  },
  {
    id: 'energia',
    icon: Zap,
    image: energiaImg,
    investment: 'USD$3,100 M',
    employment: '14K',
    growth: '+7.3%',
    exports: '9',
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
    potentials: [],
  },
  {
    id: 'electrico-electronico',
    icon: Battery,
    image: electricoElectronico,
    investment: 'US$178.5M',
    employment: '15.3K',
    growth: '1.2%',
    exports: 'US$60.3M',
    timeframe: 'medium',
    priority: 10,
    potentials: ['Potencial Muy Alto', 'Potencial Alto', 'Potencial Alto', 'Potencial Alto'],
    rcas: ['1.26', '0.3', '0.24', '0.13'],
  },
  {
    id: 'servicios-salud',
    icon: Heart,
    image: serviciosSaludImg,
    investment: 'US$890M',
    employment: '125K',
    growth: '1.2%',
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
    growth: '3.8%',
    exports: 'US$160.7M',
    timeframe: 'medium',
    priority: 12,
    potentials: ['Potencial Muy Alto', 'Potencial Alto', 'Potencial Alto'],
    rcas: ['1.96', '0.81', '0.68'],
  },
  {
    id: 'turismo',
    icon: Plane,
    image: turismoImg,
    investment: 'US$971.9M',
    employment: '162.5K',
    growth: '3.8%',
    exports: 'US$1,809.8M',
    timeframe: 'medium',
    priority: 13,
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
  /** Etiqueta del KPI de crecimiento (localizada). Si falta, usa la global. */
  growthLabel?: string;
  /** Etiqueta del KPI de ingresos (localizada). Si falta, usa la global. */
  revenueLabel?: string;
  /** Etiqueta del KPI de exportaciones (localizada). Si falta, usa la global. */
  exportsLabel?: string;
  /** Fuente del pie de la ficha (localizada). Si falta, usa la global. */
  sourceLabel?: string;
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
      growthLabel: 'CAGR Exportaciones 2014–2025',
      opportunities: [
        {
          title: '200559 · Frijoles preparados o en conserva',
          description:
            'Judías (porotos, alubias, frijoles, fréjoles) «Vigna spp.», «Phaseolus spp.», preparadas o conservadas sin vinagre ni ácido acético, sin congelar (exc. desvainadas).',
        },
        {
          title: '170199 · Azúcar de caña o remolacha y sacarosa',
          description:
            'Azúcar de caña o remolacha y sacarosa químicamente pura, sólidos (exc. los con adición de aromatizante o colorante, así como el azúcar en bruto).',
        },
        {
          title: '210410 · Preparaciones para sopas, potajes o caldos',
          description: 'Preparaciones para sopas, potajes o caldos.',
        },
        {
          title: '170114 · Azúcar de caña en estado sólido',
          description:
            'Azúcar de caña, en estado sólido (excepto los de la caña de azúcar 1701 13), sin adición de aromatizante ni colorante.',
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
      growthLabel: 'CAGR Exportaciones 2014–2025',
      opportunities: [
        {
          title: '200971 · Jugo de manzana',
          description:
            'Jugo de manzana, sin fermentar y sin adición de alcohol, incl. con adición de azúcar u otro edulcorante, de valor Brix <= 20 a 20 °C.',
        },
        {
          title: '200941 · Jugo de piña (ananá)',
          description:
            'Jugo de piña «ananá», sin fermentar y sin adición de alcohol, incl. con adición de azúcar u otro edulcorante, de valor Brix <= 20 a 20 °C.',
        },
        {
          title: '220299 · Bebidas no alcohólicas',
          description:
            'Bebidas no alcohólicas (exc. agua, jugos de frutas o vegetales, leche y cerveza).',
        },
        {
          title: '200989 · Jugo de frutas o verduras',
          description:
            'Jugo de frutas o verduras, no fermentados, con o sin adición de azúcar u otro edulcorante (excepto con adición de alcohol, mezclas, y el jugo de los cítricos, piñas, tomates, uvas —incl. el mosto de uva—, las manzanas y arándanos).',
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
      growthLabel: 'CAGR Ingresos 2015–2024',
      opportunities: [
        {
          title: '540771 · Tejidos de filamentos sintéticos, crudos o blanqueados',
          description:
            'Tejidos de hilados con un contenido de filamentos sintéticos >= 85% en peso, incl. los monofilamentos de título >= 67 decitex y cuya mayor dimensión de la sección transversal sea <= 1 mm, crudos o blanqueados (exc. de filamentos o monofilamentos de poliésteres, de nailon o demás poliamidas, así como de filamentos de poliésteres sin texturar mezclados con filamentos de poliésteres texturados).',
        },
        {
          title: '520411 · Hilo de coser de algodón (>= 85%)',
          description:
            'Hilo de coser de algodón, con un contenido de algodón >= 85% en peso (exc. acondicionado para la venta al por menor).',
        },
        {
          title: '600622 · Tejidos de punto de algodón, teñidos',
          description:
            'Tejidos de punto, de anchura > 30 cm, de algodón, teñidos (exc. tejidos de punto por urdimbre; tejidos con un contenido de hilados de elastómeros o hilos de caucho >= 5% en peso; terciopelo, felpa y tejidos con bucles, de punto; etiquetas, escudos y artículos similares; y tejidos de punto impregnados, recubiertos, revestidos o estratificados).',
        },
        {
          title: '610520 · Camisas y blusas de punto de fibras sintéticas o artificiales',
          description:
            'Camisas, blusas y blusas camiseras, de punto, de fibras sintéticas o artificiales, para mujeres o niñas (exc. «T-shirts» y camisetas).',
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
      growthLabel: 'CAGR Exportaciones 2015–2025',
      opportunities: [
        {
          title: '282890 · Hipocloritos, cloritos e hipobromitos',
          description: 'Hipocloritos, cloritos e hipobromitos (exc. hipocloritos de calcio).',
        },
        {
          title: '360500 · Fósforos (cerillas)',
          description: 'Fósforos «cerillas» (exc. artículos de pirotecnia de la partida 3604).',
        },
        {
          title: '284019 · Tetraborato de disodio (bórax refinado)',
          description: 'Tetraborato de disodio «bórax refinado» (exc. anhidro).',
        },
        {
          title: '291814 · Ácido cítrico',
          description: 'Ácido cítrico.',
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
      revenueLabel: 'Ingresos 2025',
      growthLabel: 'CAGR Exportaciones 2021–2025',
      opportunities: [
        {
          title: '300450 · Medicamentos con vitaminas o provitaminas',
          description:
            'Medicamentos que contengan provitaminas o vitaminas, incl. los concentrados naturales y sus derivados utilizados principalmente como vitaminas, dosificados o en formas o envases para la venta al por menor (exc. los que contengan antibióticos, hormonas, alcaloides o sus derivados). Incluye los de administración transdérmica.',
        },
        {
          title: '300630 · Preparaciones opacificantes y reactivos de diagnóstico',
          description:
            'Preparaciones opacificantes para exámenes radiológicos; reactivos de diagnóstico concebidos para usar en el paciente.',
        },
        {
          title: '300410 · Medicamentos con penicilinas o estreptomicinas',
          description:
            'Medicamentos que contengan penicilinas o derivados con la estructura del ácido penicilánico, o estreptomicinas o sus derivados, dosificados o en formas o envases para la venta al por menor. Incluye los de administración transdérmica.',
        },
        {
          title: '300420 · Medicamentos con antibióticos',
          description:
            'Medicamentos que contengan antibióticos, dosificados o en formas o envases para la venta al por menor (exc. los que contengan penicilinas o derivados con estructura del ácido penicilánico, o estreptomicinas o sus derivados). Incluye los de administración transdérmica.',
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
      growthLabel: 'CAGR Ingresos 2014–2025',
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
      growthLabel: 'CAGR Exportaciones 2020–2025',
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
      exportsLabel: 'Centrales hidroeléctricas estatales',
      sourceLabel: 'Fuente: Instituto Nacional de Electrificación (INDE)',
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
      growthLabel: 'CAGR Ingresos 2013–2024',
      opportunities: [
        {
          title: '854430 · Juegos de cables para medios de transporte',
          description:
            'Juegos de cables para bujías de encendido y demás juegos de cables de los tipos utilizados en los medios de transporte.',
        },
        {
          title: '870790 · Carrocerías para vehículos',
          description: 'Carrocerías para vehículos.',
        },
        {
          title: '842123 · Filtros de aceite o combustible para motores',
          description: 'Filtros de aceite o combustible para motores.',
        },
        {
          title: '870893 · Embragues y sus partes',
          description: 'Embragues y sus partes.',
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
      growthLabel: 'CAGR Ingresos 2013–2024',
      opportunities: [],
      advantages: [],
    },
    {
      name: 'Metalmecánica',
      description:
        'Fabricación de productos metálicos y maquinaria',
      highlights: ['Metales comunes', 'Metalmecánica', 'Productos metálicos', 'Fabricación de metal'],
      growthLabel: 'CAGR Ingresos 2014–2024',
      opportunities: [
        {
          title: '730820 · Torres y castilletes, de hierro o acero',
          description: 'Torres y castilletes, de fundición, hierro o acero.',
        },
        {
          title: '730890 · Construcciones y partes de construcciones, de hierro o acero',
          description:
            'Construcciones y partes de construcciones, de fundición, hierro o acero (exc. puentes y partes de puentes; torres y castilletes; puertas, ventanas y sus marcos, contramarcos y umbrales; material de andamiaje, encofrado, apeo o apuntalamiento).',
        },
        {
          title: '730840 · Material de andamiaje, encofrado, apeo o apuntalamiento',
          description:
            'Material de andamiaje, encofrado, apeo o apuntalamiento (exc. tablestacas compuestas y paneles de encofrado para hormigón vertido in situ que tengan las características de moldes).',
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
      growthLabel: 'CAGR Ingresos 2014–2024',
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
      growthLabel: 'Exports CAGR 2014–2025',
      opportunities: [
        {
          title: '200559 · Beans, prepared or preserved',
          description:
            'Beans (Vigna spp., Phaseolus spp.) prepared or preserved otherwise than by vinegar or acetic acid, not frozen (excl. shelled).',
        },
        {
          title: '170199 · Cane or beet sugar and chemically pure sucrose',
          description:
            'Cane or beet sugar and chemically pure sucrose, in solid form (excl. those containing added flavouring or colouring matter, and raw sugar).',
        },
        {
          title: '210410 · Soups, broths and preparations therefor',
          description: 'Preparations for soups, broths or stocks.',
        },
        {
          title: '170114 · Cane sugar in solid form',
          description:
            'Cane sugar in solid form (other than cane sugar of 1701 13), not containing added flavouring or colouring matter.',
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
      growthLabel: 'Exports CAGR 2014–2025',
      opportunities: [
        {
          title: '200971 · Apple juice',
          description:
            'Apple juice, unfermented and not containing added spirit, whether or not containing added sugar or other sweetening matter, of a Brix value <= 20 at 20°C.',
        },
        {
          title: '200941 · Pineapple juice',
          description:
            'Pineapple juice, unfermented and not containing added spirit, whether or not containing added sugar or other sweetening matter, of a Brix value <= 20 at 20°C.',
        },
        {
          title: '220299 · Non-alcoholic beverages',
          description:
            'Non-alcoholic beverages (excl. water, fruit or vegetable juices, milk and beer).',
        },
        {
          title: '200989 · Fruit or vegetable juice',
          description:
            'Fruit or vegetable juice, unfermented, whether or not containing added sugar or other sweetening matter (excl. containing added spirit, mixtures, and juice of citrus fruit, pineapples, tomatoes, grapes incl. grape must, apples and cranberries).',
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
      growthLabel: 'Income CAGR 2015–2024',
      opportunities: [
        {
          title: '540771 · Synthetic filament woven fabrics, unbleached or bleached',
          description:
            'Woven fabrics containing >= 85% by weight of synthetic filaments, incl. monofilaments of >= 67 decitex with a cross-sectional dimension <= 1 mm, unbleached or bleached (excl. of polyester, nylon or other polyamide filaments or monofilaments, and of non-textured polyester filaments mixed with textured polyester filaments).',
        },
        {
          title: '520411 · Cotton sewing thread (>= 85%)',
          description:
            'Cotton sewing thread containing >= 85% by weight of cotton (excl. put up for retail sale).',
        },
        {
          title: '600622 · Dyed cotton knitted or crocheted fabrics',
          description:
            'Knitted or crocheted fabrics, of a width > 30 cm, of cotton, dyed (excl. warp knit fabrics; fabrics containing >= 5% by weight of elastomeric yarn or rubber thread; pile fabrics, incl. "long pile", and terry fabrics; labels, badges and similar articles; and knitted or crocheted fabrics, impregnated, coated, covered or laminated).',
        },
        {
          title: '610520 · Knitted shirts and blouses of man-made fibres',
          description:
            "Women's or girls' knitted or crocheted blouses, shirts and shirt-blouses of man-made fibres (excl. T-shirts and vests).",
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
      growthLabel: 'Exports CAGR 2015–2025',
      opportunities: [
        {
          title: '282890 · Hypochlorites, chlorites and hypobromites',
          description: 'Hypochlorites, chlorites and hypobromites (excl. calcium hypochlorites).',
        },
        {
          title: '360500 · Matches',
          description: 'Matches (excl. pyrotechnic articles of heading 3604).',
        },
        {
          title: '284019 · Disodium tetraborate (refined borax)',
          description: 'Disodium tetraborate "refined borax" (excl. anhydrous).',
        },
        {
          title: '291814 · Citric acid',
          description: 'Citric acid.',
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
      revenueLabel: '2025 Revenue',
      growthLabel: 'Exports CAGR 2021–2025',
      opportunities: [
        {
          title: '300450 · Medicaments containing vitamins or provitamins',
          description:
            'Medicaments containing provitamins or vitamins, incl. natural concentrates and derivatives used primarily as vitamins, put up in measured doses or in forms or packings for retail sale (excl. containing antibiotics, hormones, alkaloids or their derivatives). Includes those for transdermal administration.',
        },
        {
          title: '300630 · Opacifying preparations and diagnostic reagents',
          description:
            'Opacifying preparations for X-ray examinations; diagnostic reagents designed to be administered to the patient.',
        },
        {
          title: '300410 · Medicaments containing penicillins or streptomycins',
          description:
            'Medicaments containing penicillins or derivatives with a penicillanic acid structure, or streptomycins or their derivatives, put up in measured doses or in forms or packings for retail sale. Includes those for transdermal administration.',
        },
        {
          title: '300420 · Medicaments containing antibiotics',
          description:
            'Medicaments containing antibiotics, put up in measured doses or in forms or packings for retail sale (excl. containing penicillins or derivatives with a penicillanic acid structure, or streptomycins or their derivatives). Includes those for transdermal administration.',
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
      growthLabel: 'Income CAGR 2014–2025',
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
      growthLabel: 'Exports CAGR 2020–2025',
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
      exportsLabel: 'State-owned hydroelectric plants',
      sourceLabel: 'Source: Instituto Nacional de Electrificación (INDE)',
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
      growthLabel: 'Income CAGR 2013–2024',
      opportunities: [
        {
          title: '854430 · Wiring sets for means of transport',
          description:
            'Ignition wiring sets and other wiring sets of a kind used in means of transport.',
        },
        {
          title: '870790 · Vehicle bodies',
          description: 'Bodies for vehicles.',
        },
        {
          title: '842123 · Oil or fuel filters for engines',
          description: 'Oil or fuel filters for internal combustion engines.',
        },
        {
          title: '870893 · Clutches and parts thereof',
          description: 'Clutches and parts thereof.',
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
      growthLabel: 'Income CAGR 2013–2024',
      opportunities: [],
      advantages: [],
    },
    {
      name: 'Metalworking',
      description:
        'Manufacturing of metal products and machinery',
      highlights: ['Base metals', 'Metalworking', 'Metal products', 'Metal fabrication'],
      growthLabel: 'Income CAGR 2014–2024',
      opportunities: [
        {
          title: '730820 · Towers and lattice masts, of iron or steel',
          description: 'Towers and lattice masts, of cast iron, iron or steel.',
        },
        {
          title: '730890 · Structures and parts of structures, of iron or steel',
          description:
            'Structures and parts of structures, of cast iron, iron or steel (excl. bridges and bridge sections; towers and lattice masts; doors, windows and their frames, thresholds; and scaffolding, shuttering, propping or pit-propping equipment).',
        },
        {
          title: '730840 · Scaffolding, shuttering, propping or pit-propping equipment',
          description:
            'Scaffolding, shuttering, propping or pit-propping equipment (excl. composite sheet piling and formwork panels for poured-in-place concrete having the characteristics of moulds).',
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
      growthLabel: 'Income CAGR 2014–2024',
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

/** Personas a cargo de cada sector (mismo dato en ambos idiomas). */
const BEATRIZ: SectorContact = { name: 'Beatriz Sánchez', email: 'mbsanchezp@mineco.gob.gt' };
const GABRIELA: SectorContact = { name: 'Gabriela Maldonado', email: 'agmaldonadop@mineco.gob.gt' };
const INGRID: SectorContact = { name: 'Ingrid Chea', email: 'ilcheam@mineco.gob.gt' };
const PRISCILLA: SectorContact = { name: 'Priscilla Ayapan', email: 'pdayapan@mineco.gob.gt' };

const SECTOR_CONTACTS: Record<string, SectorContact[]> = {
  'alimentos-procesados': [BEATRIZ, GABRIELA],
  'bebidas-no-alcoholicas': [BEATRIZ, GABRIELA],
  quimicos: [BEATRIZ, GABRIELA],
  farmaceuticos: [INGRID, PRISCILLA],
  'vestuario-textil': [INGRID, PRISCILLA],
  'tics-software': [INGRID, PRISCILLA, GABRIELA],
  'servicios-empresariales': [INGRID, PRISCILLA],
  'servicios-compartidos': [INGRID, PRISCILLA],
  'electrico-electronico': [BEATRIZ, GABRIELA],
  'servicios-salud': [INGRID, PRISCILLA],
  metalmecanica: [INGRID, PRISCILLA],
  turismo: [BEATRIZ, PRISCILLA, GABRIELA],
  biotecnologia: [INGRID, PRISCILLA],
  'dispositivos-medicos': [INGRID, PRISCILLA],
  'componentes-electronicos': [BEATRIZ, GABRIELA],
  'ti-manufactura-avanzada': [INGRID, PRISCILLA],
};

/** Une el texto del idioma activo con las cifras compartidas. */
const merge = (copy: SectorCopy[], language: Language): Sector[] =>
  FACTS.map((facts, index) => {
    const text = copy[index];
    const { potentials, rcas, ...rest } = facts;

    return {
      ...rest,
      pdfUrl: sectorOnePagers[facts.id]?.[language],
      name: text.name,
      description: text.description,
      growthLabel: text.growthLabel,
      revenueLabel: text.revenueLabel,
      exportsLabel: text.exportsLabel,
      sourceLabel: text.sourceLabel,
      highlights: text.highlights,
      advantages: text.advantages,
      opportunities: text.opportunities.map((opportunity, i) => ({
        ...opportunity,
        potential: potentials[i],
        rca: rcas?.[i],
      })),
      contacts: SECTOR_CONTACTS[facts.id],
    };
  });

export const sectors: Localized<Sector[]> = {
  es: merge(COPY.es, 'es'),
  en: merge(COPY.en, 'en'),
};
