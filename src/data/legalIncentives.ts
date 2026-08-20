import { Building, DollarSign, Factory, FileText, Globe, Scale, Shield } from 'lucide-react';
import type { Localized } from '@/i18n';
import type {
  ApplicationStep,
  IncentiveProgram,
  InvestorProtection,
  LegalFrameworkItem,
} from '@/types/legalIncentives';

const FRAMEWORK_ICONS = [Shield, Building, Factory, Globe] as const;

type FrameworkCopy = Pick<LegalFrameworkItem, 'title' | 'description' | 'benefits'>;

const FRAMEWORK_COPY: Localized<FrameworkCopy[]> = {
  es: [
    {
      title: 'Ley de Inversión Extranjera',
      description:
        'Marco legal que garantiza la protección y promoción de la inversión extranjera',
      benefits: [
        'Trato nacional para inversionistas extranjeros',
        'Libre transferencia de capitales y utilidades',
        'Protección contra expropiación',
        'Acceso a arbitraje internacional',
      ],
    },
    {
      title: 'Zonas Francas',
      description: 'Régimen especial para empresas orientadas a la exportación',
      benefits: [
        'Exención del ISR por 10 años',
        'Exención de aranceles de importación',
        'Exención del IVA en compras locales',
        'Facilidades administrativas',
      ],
    },
    {
      title: 'Régimen de Maquila',
      description: 'Incentivos para industrias de manufactura y ensamblaje',
      benefits: [
        'Suspensión de derechos arancelarios',
        'Exención del IVA en importaciones',
        'Facilidades para exportación',
        'Simplificación de trámites',
      ],
    },
    {
      title: 'Acuerdos Comerciales',
      description: 'Red de tratados que facilitan el comercio internacional',
      benefits: [
        'DR-CAFTA con Estados Unidos',
        'Acuerdo de Asociación con la UE',
        'Tratados bilaterales en América',
        'OMC y otros organismos multilaterales',
      ],
    },
  ],
  en: [
    {
      title: 'Ley de Inversión Extranjera (Foreign Investment Law)',
      description: 'Legal framework that guarantees the protection and promotion of foreign investment',
      benefits: [
        'National treatment for foreign investors',
        'Free transfer of capital and profits',
        'Protection against expropriation',
        'Access to international arbitration',
      ],
    },
    {
      title: 'Zonas Francas (Free Trade Zones)',
      description: 'Special regime for export-oriented companies',
      benefits: [
        '10-year exemption from income tax (ISR)',
        'Exemption from import duties',
        'VAT exemption on local purchases',
        'Streamlined administrative procedures',
      ],
    },
    {
      title: 'Régimen de Maquila (Maquila Regime)',
      description: 'Incentives for manufacturing and assembly industries',
      benefits: [
        'Suspension of customs duties',
        'VAT exemption on imports',
        'Export facilitation',
        'Simplified procedures',
      ],
    },
    {
      title: 'Trade Agreements',
      description: 'A network of treaties that facilitate international trade',
      benefits: [
        'DR-CAFTA with the United States',
        'Association Agreement with the EU',
        'Bilateral treaties across the Americas',
        'WTO and other multilateral bodies',
      ],
    },
  ],
};

export const legalFramework: Localized<LegalFrameworkItem[]> = {
  es: FRAMEWORK_COPY.es.map((item, i) => ({ icon: FRAMEWORK_ICONS[i], ...item })),
  en: FRAMEWORK_COPY.en.map((item, i) => ({ icon: FRAMEWORK_ICONS[i], ...item })),
};

export const incentivePrograms: Localized<IncentiveProgram[]> = {
  es: [
    {
      name: 'Zonas de Desarrollo Económico Especial (ZDEEP)',
      description: 'Régimen integral para grandes proyectos de inversión',
      requirements: ['Inversión mínima de $5M', 'Generación de 100 empleos', 'Compromiso de 10 años'],
      benefits: [
        'Exención del ISR por 10 años, renovable por 10 años más',
        'Exención de aranceles e IVA en importaciones',
        'Procedimientos administrativos simplificados',
        'Estabilidad jurídica garantizada',
      ],
      sectors: ['Manufactura', 'Agroindustria', 'Servicios', 'Energía', 'Turismo'],
    },
    {
      name: 'Ley de Energías Renovables',
      description: 'Incentivos específicos para proyectos de energía limpia',
      requirements: [
        'Proyecto de energía renovable',
        'Capacidad mínima según tecnología',
        'Estudio de impacto ambiental',
      ],
      benefits: [
        'Exención del ISR por 10 años',
        'Exención de aranceles para equipo',
        'Depreciación acelerada',
        'Contratos de largo plazo garantizados',
      ],
      sectors: ['Hidroeléctrica', 'Solar', 'Eólica', 'Geotérmica', 'Biomasa'],
    },
    {
      name: 'Ley de Alianzas Público-Privadas',
      description: 'Marco para proyectos de infraestructura con participación privada',
      requirements: [
        'Proyecto de interés público',
        'Viabilidad técnica y financiera',
        'Proceso de licitación',
      ],
      benefits: [
        'Contratos de largo plazo (hasta 40 años)',
        'Garantías gubernamentales',
        'Resolución de disputas especializada',
        'Estabilidad regulatoria',
      ],
      sectors: ['Transporte', 'Energía', 'Telecomunicaciones', 'Agua', 'Salud'],
    },
  ],
  en: [
    {
      name: 'Zonas de Desarrollo Económico Especial (ZDEEP — Special Economic Development Zones)',
      description: 'Comprehensive regime for large-scale investment projects',
      requirements: [
        'Minimum investment of $5M',
        'Creation of 100 jobs',
        '10-year commitment',
      ],
      benefits: [
        '10-year income tax (ISR) exemption, renewable for another 10 years',
        'Exemption from duties and VAT on imports',
        'Simplified administrative procedures',
        'Guaranteed legal stability',
      ],
      sectors: ['Manufacturing', 'Agribusiness', 'Services', 'Energy', 'Tourism'],
    },
    {
      name: 'Ley de Energías Renovables (Renewable Energy Law)',
      description: 'Specific incentives for clean energy projects',
      requirements: [
        'Renewable energy project',
        'Minimum capacity depending on technology',
        'Environmental impact assessment',
      ],
      benefits: [
        '10-year income tax (ISR) exemption',
        'Exemption from duties on equipment',
        'Accelerated depreciation',
        'Guaranteed long-term contracts',
      ],
      sectors: ['Hydropower', 'Solar', 'Wind', 'Geothermal', 'Biomass'],
    },
    {
      name: 'Ley de Alianzas Público-Privadas (Public-Private Partnership Law)',
      description: 'Framework for infrastructure projects with private participation',
      requirements: [
        'Project of public interest',
        'Technical and financial feasibility',
        'Competitive tender process',
      ],
      benefits: [
        'Long-term contracts (up to 40 years)',
        'Government guarantees',
        'Specialized dispute resolution',
        'Regulatory stability',
      ],
      sectors: ['Transport', 'Energy', 'Telecommunications', 'Water', 'Health'],
    },
  ],
};

const PROTECTION_ICONS = [Scale, Shield, FileText, DollarSign] as const;

type ProtectionCopy = Pick<InvestorProtection, 'title' | 'description'>;

const PROTECTION_COPY: Localized<ProtectionCopy[]> = {
  es: [
    {
      title: 'Arbitraje Internacional',
      description: 'Acceso a mecanismos internacionales de resolución de disputas',
    },
    {
      title: 'Tratados Bilaterales',
      description: 'Protección adicional a través de acuerdos internacionales',
    },
    {
      title: 'Estabilidad Jurídica',
      description: 'Garantías contra cambios retroactivos en la legislación',
    },
    {
      title: 'Libre Transferencia',
      description: 'Derecho a transferir capitales y utilidades sin restricciones',
    },
  ],
  en: [
    {
      title: 'International Arbitration',
      description: 'Access to international dispute resolution mechanisms',
    },
    {
      title: 'Bilateral Treaties',
      description: 'Additional protection through international agreements',
    },
    {
      title: 'Legal Stability',
      description: 'Guarantees against retroactive changes in legislation',
    },
    {
      title: 'Free Transfer',
      description: 'The right to transfer capital and profits without restrictions',
    },
  ],
};

export const protections: Localized<InvestorProtection[]> = {
  es: PROTECTION_COPY.es.map((item, i) => ({ icon: PROTECTION_ICONS[i], ...item })),
  en: PROTECTION_COPY.en.map((item, i) => ({ icon: PROTECTION_ICONS[i], ...item })),
};

/** Etapas del proceso de aplicacion a los regimenes de incentivos. */
export const applicationSteps: Localized<ApplicationStep[]> = {
  es: [
    {
      step: 1,
      title: 'Evaluación Inicial',
      description: 'Análisis de elegibilidad y selección del régimen más conveniente',
      time: '1-2 semanas',
    },
    {
      step: 2,
      title: 'Preparación de Documentos',
      description: 'Recopilación y preparación de toda la documentación requerida',
      time: '2-4 semanas',
    },
    {
      step: 3,
      title: 'Presentación de Solicitud',
      description: 'Presentación formal ante la autoridad competente',
      time: '1 semana',
    },
    {
      step: 4,
      title: 'Revisión y Aprobación',
      description: 'Proceso de evaluación y aprobación por parte de las autoridades',
      time: '4-8 semanas',
    },
    {
      step: 5,
      title: 'Inicio de Beneficios',
      description: 'Activación de incentivos y inicio de operaciones bajo el régimen',
      time: 'Inmediato',
    },
  ],
  en: [
    {
      step: 1,
      title: 'Initial Assessment',
      description: 'Eligibility analysis and selection of the most suitable regime',
      time: '1-2 weeks',
    },
    {
      step: 2,
      title: 'Document Preparation',
      description: 'Gathering and preparing all required documentation',
      time: '2-4 weeks',
    },
    {
      step: 3,
      title: 'Application Submission',
      description: 'Formal submission to the competent authority',
      time: '1 week',
    },
    {
      step: 4,
      title: 'Review and Approval',
      description: 'Evaluation and approval process by the authorities',
      time: '4-8 weeks',
    },
    {
      step: 5,
      title: 'Benefits Begin',
      description: 'Incentives are activated and operations start under the regime',
      time: 'Immediate',
    },
  ],
};
