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
        'El 67.28% de la población está en edad de trabajar y el 26.9% tiene entre 15 y 24 años. El INTECAP brinda formación técnica a las empresas con más de 32 centros, 72 especialidades y 26 laboratorios de alta tecnología, complementado por 14 universidades privadas y 1 pública.',
    },
    {
      title: 'Macroeconomía estable',
      description:
        'Crecimiento económico promedio de 3.5% en los últimos 8 años e inflación moderada y estable de 4.17%. Es la economía más grande de Centroamérica, con las mayores reservas internacionales de la región (US$24.42 mil millones) y el nivel de deuda soberana más bajo (26.6% del PIB).',
    },
    {
      title: 'Ubicación estratégica',
      description:
        'En el corazón logístico de América, con acceso directo a las costas Pacífica y Atlántica (250 millas de costa a costa), 2 aeropuertos internacionales, 9 aeródromos locales y la mayor operación de carga marítima de Centroamérica (37.8%). Puerta de entrada a México y con TLC vigente con Estados Unidos.',
    },
    {
      title: 'Regímenes Especiales e Incentivos Fiscales',
      description:
        'Marco tributario competitivo con certeza jurídica: ISR bajo régimen opcional simplificado (5% sobre los primeros US$3,870.97 y 7% sobre el excedente) o 25% sobre utilidades netas, e IVA del 12%. Respaldado por una amplia red de tratados de libre comercio (DR-CAFTA, México, Chile, Colombia, Corea del Sur, entre otros) y acuerdos de protección de la inversión.',
    },
    {
      title: 'Energía renovable y confiable con costos competitivos',
      description:
        'Guatemala cuenta con la mayor capacidad instalada de generación de energía del Triángulo Norte: 3,699.4 MW, por encima de El Salvador (2,396.4 MW) y Honduras (3,097.6 MW), con un suministro estable y seguro a costos competitivos.',
    },
  ],
  en: [
    {
      title: 'Young, skilled talent',
      description:
        '67.28% of the population is of working age and 26.9% is between 15 and 24 years old. The Technical Training and Productivity Institute (INTECAP) supports companies with over 32 centers, 72 specialties and 26 high-tech laboratories, complemented by 14 private universities and one public university.',
    },
    {
      title: 'Stable macroeconomy',
      description:
        'Average economic growth of 3.5% over the last 8 years and a moderate, stable inflation rate of 4.17%. It is the largest economy in Central America, with the region’s largest international reserves (US$24.42 billion) and the lowest sovereign debt level (26.6% of GDP).',
    },
    {
      title: 'Strategic location',
      description:
        'At the logistics heart of the Americas, with direct access to the Pacific and Atlantic coasts (250 miles from coast to coast), 2 international airports, 9 local airfields and the largest maritime cargo operation in Central America (37.8%). A gateway to Mexico and with a Free Trade Agreement in force with the United States.',
    },
    {
      title: 'Special Regimes and Tax Incentives',
      description:
        'A competitive tax framework with legal certainty: income tax under a simplified optional regime (5% on the first US$3,870.97 and 7% on the excess) or 25% on net profits, and a 12% VAT. Backed by a broad network of free trade agreements (DR-CAFTA, Mexico, Chile, Colombia, South Korea, among others) and investment protection agreements.',
    },
    {
      title: 'Reliable renewable energy at competitive costs',
      description:
        'Guatemala has the largest installed energy-generation capacity in the Northern Triangle: 3,699.4 MW, surpassing El Salvador (2,396.4 MW) and Honduras (3,097.6 MW), with a stable and secure supply at competitive costs.',
    },
  ],
};

const build = (copy: Array<Pick<Advantage, 'title' | 'description'>>): Advantage[] =>
  copy.map((item, index) => ({ ...STYLES[index], ...item, details: [] }));

export const advantages: Localized<Advantage[]> = {
  es: build(COPY.es),
  en: build(COPY.en),
};
