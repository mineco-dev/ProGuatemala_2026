import type { Localized } from '@/i18n';
import type { ComparisonRow } from '@/types/whyGuatemala';

/** Fuente: Banco de Guatemala y Consejos de Salarios Mínimos Regionales */
export const comparisonRows: Localized<ComparisonRow[]> = {
  es: [
    {
      indicator: 'PIB 2025 (USD miles de millones)',
      gt: '$ 123.31',
      cr: '$ 102.90',
      sv: '$ 36.71',
      hn: '$ 39.62',
      ni: '$ 22.24',
      do: '$ 123.50',
      highlight: true,
    },
    {
      indicator: 'Población a 2025 (millones)',
      gt: '18.0',
      cr: '5.13',
      sv: '6.338',
      hn: '10.83',
      ni: '7.15',
      do: '11.43',
    },
    {
      indicator: 'Salario mínimo 2025 (USD/mes)*',
      gt: '$518.00',
      cr: '$726.00',
      sv: '$408.80',
      hn: '$357.00',
      ni: '$228.50',
      do: '$480.51',
    },
  ],
  en: [
    {
      indicator: '2025 GDP (USD billions)',
      gt: '$ 123.31',
      cr: '$ 102.90',
      sv: '$ 36.71',
      hn: '$ 39.62',
      ni: '$ 22.24',
      do: '$ 123.50',
      highlight: true,
    },
    {
      indicator: 'Population as of 2025 (millions)',
      gt: '18.0',
      cr: '5.13',
      sv: '6.338',
      hn: '10.83',
      ni: '7.15',
      do: '11.43',
    },
    {
      indicator: '2025 minimum wage (USD/month)*',
      gt: '$518.00',
      cr: '$726.00',
      sv: '$408.80',
      hn: '$357.00',
      ni: '$228.50',
      do: '$480.51',
    },
  ],
};

export const comparisonCountries: Localized<string[]> = {
  es: ['Costa Rica', 'El Salvador', 'Honduras', 'Nicaragua', 'República Dominicana'],
  en: ['Costa Rica', 'El Salvador', 'Honduras', 'Nicaragua', 'Dominican Republic'],
};
