import { Handshake, LineChart, RefreshCw } from 'lucide-react';
import type { Localized } from '@/i18n';
import type { Pillar } from '@/types/about';

const STYLES = [
  { icon: Handshake, color: 'from-blue-500/10 to-blue-600/5', iconColor: 'text-blue-600', borderColor: 'hover:border-blue-300' },
  { icon: LineChart, color: 'from-amber-500/10 to-amber-600/5', iconColor: 'text-amber-600', borderColor: 'hover:border-amber-300' },
  { icon: RefreshCw, color: 'from-teal-500/10 to-teal-600/5', iconColor: 'text-teal-600', borderColor: 'hover:border-teal-300' },
] as const;

const COPY: Localized<Array<Pick<Pillar, 'title' | 'description'>>> = {
  es: [
    {
      title: 'Atención al Inversionista',
      description:
        'Asesoría gratuita y orientación integral sobre las mejores oportunidades de negocio en el país.',
    },
    {
      title: 'Inteligencia de Inversión',
      description:
        'Información estratégica, datos actualizados y análisis especializados para la toma de decisiones.',
    },
    {
      title: 'Aftercare',
      description:
        'Acompañamiento continuo para el fortalecimiento, consolidación y reinversión de proyectos ya instalados.',
    },
  ],
  en: [
    {
      title: 'Investor Support',
      description:
        'Free advisory services and end-to-end guidance on the best business opportunities in the country.',
    },
    {
      title: 'Investment Intelligence',
      description:
        'Strategic information, up-to-date data and specialized analysis to support decision-making.',
    },
    {
      title: 'Aftercare',
      description:
        'Ongoing support to strengthen, consolidate and reinvest in projects already established.',
    },
  ],
};

const build = (copy: Array<Pick<Pillar, 'title' | 'description'>>): Pillar[] =>
  copy.map((item, index) => ({ ...STYLES[index], ...item }));

export const pillars: Localized<Pillar[]> = { es: build(COPY.es), en: build(COPY.en) };
