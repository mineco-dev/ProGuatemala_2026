import { Users, TrendingUp, Globe, Shield } from 'lucide-react';
import type { Localized } from '@/i18n';
import type { Advantage } from '@/types/whyGuatemala';

/** Los estilos son iguales en ambos idiomas; solo cambian titulo y descripcion. */
const STYLES = [
  { icon: Users, color: 'from-emerald-500 to-teal-600', bgColor: 'from-emerald-50 to-teal-50' },
  { icon: TrendingUp, color: 'from-blue-500 to-cyan-600', bgColor: 'from-blue-50 to-cyan-50' },
  { icon: Globe, color: 'from-orange-500 to-amber-600', bgColor: 'from-orange-50 to-amber-50' },
  { icon: Shield, color: 'from-indigo-500 to-blue-600', bgColor: 'from-indigo-50 to-blue-50' },
  { icon: TrendingUp, color: 'from-green-500 to-emerald-600', bgColor: 'from-green-50 to-emerald-50' },
] as const;

const COPY: Localized<Array<Pick<Advantage, 'title' | 'description'>>> = {
  es: [
    {
      title: 'Talento joven y calificado',
      description:
        'Guatemala destaca por su fuerza laboral y por un entorno propicio para la continua capacitación del talento joven.',
    },
    {
      title: 'Macroeconomía estable',
      description: 'El entorno macroeconómico del país permite una planificación de largo plazo.',
    },
    {
      title: 'Ubicación estratégica',
      description:
        'Aliado estratégico global, ubicado en el corazón logístico de América que conecta con los principales mercados internacionales.',
    },
    {
      title: 'Regímenes Especiales e Incentivos Fiscales',
      description:
        'Guatemala presenta un marco de incentivos atractivo y sólido para la inversión, así como certeza jurídica al inversionista mediante leyes y mecanismos claros.',
    },
    {
      title: 'Energía renovable y confiable con costos competitivos',
      description: 'Suministro de energía estable y seguro a un costo accesible.',
    },
  ],
  en: [
    {
      title: 'Young, skilled talent',
      description:
        'Guatemala stands out for its workforce and for an environment that supports the ongoing training of young talent.',
    },
    {
      title: 'Stable macroeconomy',
      description: "The country's macroeconomic environment allows for long-term planning.",
    },
    {
      title: 'Strategic location',
      description:
        'A global strategic partner, located at the logistics heart of the Americas and connected to the main international markets.',
    },
    {
      title: 'Special Regimes and Tax Incentives',
      description:
        'Guatemala offers an attractive, solid incentive framework for investment, along with legal certainty for investors through clear laws and mechanisms.',
    },
    {
      title: 'Reliable renewable energy at competitive costs',
      description: 'A stable, secure energy supply at an affordable cost.',
    },
  ],
};

const build = (copy: Array<Pick<Advantage, 'title' | 'description'>>): Advantage[] =>
  copy.map((item, index) => ({ ...STYLES[index], ...item, details: [] }));

export const advantages: Localized<Advantage[]> = {
  es: build(COPY.es),
  en: build(COPY.en),
};
