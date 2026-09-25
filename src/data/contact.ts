import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import type { Localized } from '@/i18n';
import type { ContactInfoItem, FaqItem } from '@/types/contact';

const INFO_ICONS = [Mail, Phone, MapPin, Clock] as const;

type InfoCopy = Pick<ContactInfoItem, 'title' | 'content' | 'subContent'>;

const INFO_COPY: Localized<InfoCopy[]> = {
  es: [
    { title: 'Correo Electrónico', content: 'proguatemala@mineco.gob.gt' },
    { title: 'Teléfono', content: '+502 2412-0200 ext 3500' },
    {
      title: 'Dirección',
      content: '8a. Avenida 10-43 Zona 1',
      subContent: 'Ciudad de Guatemala, Guatemala',
    },
    {
      title: 'Horario de Atención',
      content: 'Lunes a Viernes: 8:00 - 16:00',
      subContent: 'Sábado y Domingo: Cerrado',
    },
  ],
  en: [
    { title: 'Email', content: 'proguatemala@mineco.gob.gt' },
    { title: 'Phone', content: '+502 2412-0200 ext. 3500' },
    {
      title: 'Address',
      content: '8a. Avenida 10-43 Zona 1',
      subContent: 'Guatemala City, Guatemala',
    },
    {
      title: 'Office Hours',
      content: 'Monday to Friday: 8:00 AM - 4:00 PM',
      subContent: 'Saturday & Sunday: Closed',
    },
  ],
};

export const contactInfo: Localized<ContactInfoItem[]> = {
  es: INFO_COPY.es.map((item, i) => ({ icon: INFO_ICONS[i], ...item })),
  en: INFO_COPY.en.map((item, i) => ({ icon: INFO_ICONS[i], ...item })),
};

/** Opciones del selector "Sector de interes" del formulario. */
export const interestOptions: Localized<string[]> = {
  es: [
    'Agroindustria',
    'Manufactura Liviana',
    'Servicios Globales',
    'Energías Renovables',
    'Turismo Sostenible',
    'Otro',
  ],
  en: [
    'Agribusiness',
    'Light Manufacturing',
    'Global Services',
    'Renewable Energy',
    'Sustainable Tourism',
    'Other',
  ],
};

export const faqs: Localized<FaqItem[]> = {
  es: [
    {
      question: '¿Cuál es el rol y el mandato institucional de ProGuatemala?',
      answer:
        'ProGuatemala es la Agencia Nacional de Atracción de Inversión de Guatemala, adscrita al Ministerio de Economía. Lidera los esfuerzos del país para atraer, facilitar y retener la inversión extranjera directa (IED), posicionando a Guatemala como un destino atractivo y competitivo para los inversionistas extranjeros.',
    },
    {
      question: '¿A quién está dirigido el acompañamiento de ProGuatemala?',
      answer:
        'El acompañamiento de ProGuatemala está dirigido a empresas e inversionistas extranjeros interesados en establecer o expandir operaciones en Guatemala.',
    },
    {
      question: '¿Los servicios de ProGuatemala son gratuitos y confidenciales?',
      answer:
        'Sí. Los servicios de ProGuatemala son gratuitos para el inversionista. El acompañamiento se brinda de manera confidencial y personalizada.',
    },
    {
      question:
        '¿Puede ProGuatemala brindarme apoyo mientras aún evalúo a Guatemala como destino de inversión?',
      answer:
        'Sí. ProGuatemala acompaña a las empresas a lo largo de todo el ciclo de inversión, desde la exploración inicial del mercado hasta la expansión y consolidación de sus operaciones.',
    },
    {
      question:
        '¿Qué tipo de información o análisis proporciona la Unidad de Inteligencia de Inversión?',
      answer:
        'La Unidad de Inteligencia de Inversión provee información y análisis especializados para respaldar la toma de decisiones y la planificación estratégica de las empresas. Sus servicios incluyen indicadores macroeconómicos actualizados, perfiles sectoriales, análisis de industrias y atención a solicitudes específicas de información, conforme a los requerimientos particulares de cada proyecto.',
    },
    {
      question:
        '¿Ofrece ProGuatemala acompañamiento en la selección de ubicación para mi proyecto de inversión?',
      answer:
        'Sí. ProGuatemala brinda orientación personalizada durante el proceso de selección de la ubicación, apoyando la identificación del lugar más adecuado según las necesidades operativas y prioridades estratégicas de cada proyecto. Esto incluye la presentación de alternativas como parques industriales, regímenes económicos especiales y terrenos de propiedad privada; información sobre conectividad logística y acceso a puertos y fronteras; así como la coordinación de visitas de campo y agendas especializadas con actores relevantes de distintos sectores.',
    },
    {
      question: '¿Qué apoyo brinda ProGuatemala durante el proceso de establecimiento?',
      answer:
        'Durante la fase de implementación, ProGuatemala actúa como facilitador institucional para respaldar el establecimiento de los proyectos de inversión. Esto incluye orientación sobre los permisos, licencias y procedimientos regulatorios aplicables según la naturaleza de cada operación, así como la vinculación con instituciones gubernamentales, proveedores de servicios y otros actores nacionales relevantes.',
    },
    {
      question:
        '¿El acompañamiento de ProGuatemala concluye una vez establecido mi proyecto de inversión, o continúa posteriormente?',
      answer:
        'Continúa. Una vez establecidas las operaciones, ProGuatemala brinda seguimiento continuo mediante servicios especializados de aftercare, que incluyen la atención a necesidades operativas, la facilitación de la comunicación con actores públicos y privados, y la vinculación con socios estratégicos. Este acompañamiento busca contribuir a la retención, expansión y éxito sostenido de la inversión.',
    },
    {
      question:
        '¿Coordina ProGuatemala con otras instituciones gubernamentales para facilitar mi proyecto de inversión?',
      answer:
        'Sí. Una de las acciones estratégicas de ProGuatemala es promover la coordinación interinstitucional para apoyar a los inversionistas y contribuir al fortalecimiento del clima de negocios del país.',
    },
    {
      question:
        '¿ProGuatemala gestiona o emite permisos y licencias para establecer una inversión?',
      answer:
        'No. ProGuatemala no sustituye a las instituciones responsables de emitir permisos, licencias o autorizaciones. Sin embargo, brinda orientación general sobre los procedimientos aplicables y facilita la vinculación con las autoridades competentes para apoyar al inversionista durante el proceso de establecimiento.',
    },
  ],
  en: [
    {
      question: "What is ProGuatemala's role and institutional mandate?",
      answer:
        "ProGuatemala is Guatemala's National Investment Promotion Agency, operating under the Ministry of Economy. It leads the country's efforts to attract, facilitate, and retain foreign direct investment (FDI), positioning Guatemala as an attractive and competitive destination for international investors.",
    },
    {
      question: "Who can benefit from ProGuatemala's support?",
      answer:
        "ProGuatemala's support is available to foreign companies and investors seeking to establish or expand operations in Guatemala.",
    },
    {
      question: "Are ProGuatemala's services free of charge and confidential?",
      answer:
        "Yes. ProGuatemala's services are free of charge for the investor. Support is provided confidentially and on a personalized basis.",
    },
    {
      question:
        'Can ProGuatemala assist me while I am still evaluating Guatemala as an investment destination?',
      answer:
        "Yes. ProGuatemala's mission is to support companies throughout every stage of the investment lifecycle, from initial market exploration to the expansion and consolidation of established operations.",
    },
    {
      question: 'What information or analysis does the Investment Intelligence Unit provide?',
      answer:
        'The Investment Intelligence Unit delivers specialized data and analysis to support corporate decision-making and strategic planning. Services include up-to-date macroeconomic indicators, sector profiles, industry analysis, and tailored responses to specific information requests, based on the specific requirements of each project.',
    },
    {
      question: 'Does ProGuatemala provide support with site selection for my investment project?',
      answer:
        "Yes. ProGuatemala offers personalized guidance throughout the site-selection process, helping identify the location best suited to each project's operational requirements and strategic priorities. This includes presenting options such as industrial parks, special economic zones and regimes, and privately owned land; providing information on logistics connectivity and access to ports and border crossings; and coordinating site visits and specialized agendas with relevant public- and private-sector stakeholders.",
    },
    {
      question: 'What support does ProGuatemala provide during the establishment process?',
      answer:
        'During the implementation phase, ProGuatemala serves as an institutional facilitator to support the establishment of investment projects. This includes guidance on the permits, licenses, and regulatory procedures applicable to each type of operation, as well as facilitating engagement with government institutions, service providers, and other relevant national stakeholders.',
    },
    {
      question:
        "Does ProGuatemala's support conclude once my investment project is established, or does it continue afterwards?",
      answer:
        'It continues. Once operations are established, ProGuatemala provides ongoing support through specialized aftercare services, including addressing operational needs, facilitating communication with public and private sector stakeholders, and connecting investors with strategic partners. This continued engagement is intended to support the long-term retention, expansion, and success of the investment.',
    },
    {
      question:
        'Does ProGuatemala coordinate with other government institutions to facilitate my investment project?',
      answer:
        "Yes. One of ProGuatemala's strategic priorities is to promote interinstitutional coordination to support investors and strengthen the country's business climate.",
    },
    {
      question:
        'Does ProGuatemala process or issue permits and licenses required to establish an investment?',
      answer:
        'No. ProGuatemala does not replace the institutions responsible for issuing permits, licenses, or authorizations. However, it provides general guidance on applicable procedures and facilitates engagement with the relevant authorities to support investors throughout the establishment process.',
    },
  ],
};

export const OFFICE_MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.2847!2d-90.5131!3d14.6349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM4JzA1LjYiTiA5MMKwMzAnNDcuMiJX!5e0!3m2!1sen!2sgt!4v1234567890';

export const LINKEDIN_URL = 'https://www.linkedin.com/company/proguatemala/';

/** Correo oficial de ProGuatemala y su enlace mailto para los botones de contacto. */
export const CONTACT_EMAIL = 'proguatemala@mineco.gob.gt';
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
