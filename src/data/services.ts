import {
  Award,
  Globe,
  HeartHandshake,
  Lightbulb,
  Plane,
  Shield,
  Target,
  TrendingUp,
} from 'lucide-react';
import type { Localized } from '@/i18n';
import type { Service } from '@/types/service';
import promoInvImage from '@/assets/images/promoinv.png';

const STYLES = [
  { id: 'promocion', icon: Target, color: 'from-blue-500 to-cyan-600', bgColor: 'from-blue-50 to-cyan-50', image: promoInvImage },
  { id: 'softlanding', icon: Plane, color: 'from-emerald-500 to-teal-600', bgColor: 'from-emerald-50 to-teal-50' },
  { id: 'inteligencia', icon: TrendingUp, color: 'from-indigo-500 to-blue-600', bgColor: 'from-indigo-50 to-blue-50' },
  { id: 'aftercare', icon: HeartHandshake, color: 'from-orange-500 to-amber-600', bgColor: 'from-orange-50 to-amber-50' },
] as const;

type ServiceCopy = Pick<Service, 'title' | 'description' | 'features' | 'cta'>;

const COPY: Localized<ServiceCopy[]> = {
  es: [
    {
      title: 'PROMOCIÓN DE INVERSIONES',
      description:
        'Se brinda orientación personalizada en cada etapa del proceso de inversión, incluyendo la organización de reuniones con actores clave del sector público y privado para avanzar en los proyectos de inversión. Se brinda apoyo a las empresas extranjeras en el establecimiento de operaciones, acompañamiento en procedimientos regulatorios, legales y administrativos.',
      features: [
        'Asesoría profesional y gratuita.',
        'Información estratégica para la toma de decisiones según requerimiento del inversionista.',
        'Elaboración y acompañamiento de agendas de negocios con actores clave del sector público y privado.',
        'Servicios especializados de softlanding para facilitar procesos legales y administrativos de establecimiento de empresas extranjeras en el país.',
        'Atención uno a uno, a requerimientos específicos de cada empresa y sector.',
      ],
      cta: 'Explorar oportunidades',
    },
    {
      title: 'Softlanding',
      description:
        'Acompañamos a inversionistas extranjeros durante su proceso de establecimiento en Guatemala, facilitando el cumplimiento de trámites, permisos y licencias necesarios para la operación de sus empresas. Nuestro servicio especializado brinda atención integral, asegurando un proceso ágil y transparente.',
      features: [
        'Asesoría especializada durante el proceso de radicación en el país',
        'Acompañamiento en trámites legales, permisos y licencias',
        'Orientación para el establecimiento y operación de empresas extranjeras',
        'Facilitación de contactos institucionales clave',
      ],
      cta: 'Solicitar acompañamiento',
    },
    {
      title: 'Inteligencia de Inversión',
      description:
        'Identificamos oportunidades de inversión a partir del análisis de datos clave como tendencias de mercado, sectores estratégicos, flujos de inversión extranjera y dinámicas macroeconómicas. Nuestro equipo juega un papel esencial en la detección de empresas con alto potencial de inversión, generando materiales y herramientas informativas que respaldan la toma de decisiones de los inversionistas y fortalecen las gestiones de promoción.',
      features: [
        'Análisis de tendencias de mercado y dinámicas macroeconómicas',
        'Perfiles sectoriales con oportunidades de inversión en industrias estratégicas',
        'Infografías y material visual que resumen datos clave de manera ágil',
        'Información estratégica de país y a nivel departamental que muestran ventajas competitivas',
        'Información especializada a solicitud del inversionista, adaptada a sus necesidades',
      ],
      cta: 'Solicitar análisis',
    },
    {
      title: 'Aftercare',
      description:
        'En ProGuatemala acompañamos a las empresas ya establecidas en el país, brindando asesoría personalizada y gratuita para que su operación sea eficiente y sostenible en el tiempo. Conectamos a las compañías con actores clave del sector público y privado, actualizamos información sobre regulaciones y facilitamos procesos de expansión y reinversión en Guatemala.',
      features: [
        'Asesoría y acompañamiento continuo para empresas ya establecidas',
        'Vinculación con actores estratégicos del sector público y privado, para resolución de problemas',
        'Actualización en regulaciones y normativas relevantes',
        'Identificación y resolución de retos operativos',
        'Apoyo en procesos administrativos y de expansión',
        'Facilitación de contactos para reinversión y crecimiento en Guatemala',
      ],
      cta: 'Solicitar apoyo',
    },
  ],
  en: [
    {
      title: 'INVESTMENT PROMOTION',
      description:
        'We provide tailored guidance at every stage of the investment process, including arranging meetings with key public and private sector stakeholders to move investment projects forward. We support foreign companies in setting up operations and guide them through regulatory, legal and administrative procedures.',
      features: [
        'Professional advisory services, free of charge.',
        'Strategic information for decision-making, tailored to what the investor needs.',
        'Preparation and facilitation of business agendas with key public and private sector stakeholders.',
        'Specialized softlanding services to ease the legal and administrative steps of establishing foreign companies in the country.',
        'One-to-one support for the specific needs of each company and sector.',
      ],
      cta: 'Explore opportunities',
    },
    {
      title: 'Softlanding',
      description:
        'We accompany foreign investors as they establish themselves in Guatemala, making it easier to complete the procedures, permits and licenses their operations require. Our specialized service provides end-to-end support to keep the process fast and transparent.',
      features: [
        'Specialized advisory support throughout the setup process in the country',
        'Guidance through legal procedures, permits and licenses',
        'Support for establishing and operating foreign companies',
        'Introductions to key institutional contacts',
      ],
      cta: 'Request support',
    },
    {
      title: 'Investment Intelligence',
      description:
        'We identify investment opportunities by analyzing key data such as market trends, strategic sectors, foreign investment flows and macroeconomic dynamics. Our team plays an essential role in spotting companies with high investment potential, producing materials and information tools that support investor decision-making and strengthen promotion efforts.',
      features: [
        'Analysis of market trends and macroeconomic dynamics',
        'Sector profiles covering investment opportunities in strategic industries',
        'Infographics and visual materials that summarize key data at a glance',
        'Strategic country- and department-level information showing competitive advantages',
        'Specialized information on request, tailored to the investor’s needs',
      ],
      cta: 'Request analysis',
    },
    {
      title: 'Aftercare',
      description:
        'At ProGuatemala we support companies already established in the country, providing free personalized advice so their operations stay efficient and sustainable over time. We connect companies with key public and private sector stakeholders, keep them updated on regulations, and facilitate expansion and reinvestment in Guatemala.',
      features: [
        'Ongoing advice and support for companies already established',
        'Connections with strategic public and private sector stakeholders to resolve issues',
        'Updates on relevant regulations and standards',
        'Identification and resolution of operational challenges',
        'Support with administrative and expansion processes',
        'Introductions for reinvestment and growth in Guatemala',
      ],
      cta: 'Request support',
    },
  ],
};

const buildServices = (copy: ServiceCopy[]): Service[] =>
  copy.map((item, index) => ({ ...STYLES[index], ...item }));

export const services: Localized<Service[]> = {
  es: buildServices(COPY.es),
  en: buildServices(COPY.en),
};

/**
 * Ventajas transversales de los servicios, tal como se muestran en /services.
 * `iconColor` acompana a `bgColor`: el icono va sobre un fondo claro, asi que
 * necesita un tono -700 para ser legible.
 */
const BENEFIT_STYLES = [
  { icon: Award, bgColor: 'bg-emerald-100', iconColor: 'text-emerald-700' },
  { icon: Globe, bgColor: 'bg-blue-100', iconColor: 'text-blue-700' },
  { icon: Lightbulb, bgColor: 'bg-purple-100', iconColor: 'text-purple-700' },
  { icon: Shield, bgColor: 'bg-orange-100', iconColor: 'text-orange-700' },
] as const;

interface ServiceBenefit {
  icon: (typeof BENEFIT_STYLES)[number]['icon'];
  bgColor: string;
  iconColor: string;
  title: string;
  description: string;
}

const BENEFIT_COPY: Localized<Array<Pick<ServiceBenefit, 'title' | 'description'>>> = {
  es: [
    { title: 'Gratuito', description: 'Todos nuestros servicios son completamente gratuitos para los inversionistas' },
    { title: 'Multilingüe', description: 'Atención en español, inglés y otros idiomas según la necesidad' },
    { title: 'Especializado', description: 'Conocimiento profundo de sectores y regulaciones locales' },
    { title: 'Institucional', description: 'Respaldo oficial del Gobierno de Guatemala en todo momento' },
  ],
  en: [
    { title: 'Free of charge', description: 'All of our services are completely free for investors' },
    { title: 'Multilingual', description: 'Support in Spanish, English and other languages as needed' },
    { title: 'Specialized', description: 'In-depth knowledge of local sectors and regulations' },
    { title: 'Institutional', description: 'Official backing from the Government of Guatemala at every step' },
  ],
};

const buildBenefits = (
  copy: Array<Pick<ServiceBenefit, 'title' | 'description'>>,
): ServiceBenefit[] => copy.map((item, index) => ({ ...BENEFIT_STYLES[index], ...item }));

export const serviceBenefits: Localized<ServiceBenefit[]> = {
  es: buildBenefits(BENEFIT_COPY.es),
  en: buildBenefits(BENEFIT_COPY.en),
};
