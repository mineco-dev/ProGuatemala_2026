import type { Localized } from '@/i18n';
import type { Statistic } from '@/types/whyGuatemala';

/** Fuente: Banco de Guatemala */
export const statistics: Localized<Statistic[]> = {
  es: [
    {
      label: 'PIB',
      value: 'US$ 123,310',
      suffix: 'millones',
      badge: '+4.3% Crecimiento 2025',
      subtitle: 'PIB Nominal',
    },
    {
      label: 'POBLACIÓN',
      value: '18',
      suffix: 'millones',
      badge: 'de habitantes',
      subtitle: 'Población total',
    },
    {
      label: 'EXPORTACIÓN DE BIENES',
      value: 'US$ 15,595',
      suffix: 'millones',
      badge: '+7.1% vs año anterior',
      subtitle: '2025',
    },
    {
      label: 'EXPORTACIÓN DE SERVICIOS',
      value: 'US$ 4,888.3',
      suffix: 'millones',
      badge: '+4.8% vs año anterior',
      subtitle: '2025',
    },
    {
      label: 'IED',
      value: 'US$ 1,881.7',
      suffix: 'millones',
      badge: '2025',
      subtitle: 'Inversión Extranjera Directa',
    },
  ],
  en: [
    {
      label: 'GDP',
      value: 'US$ 123,310',
      suffix: 'million',
      badge: '+4.3% growth in 2025',
      subtitle: 'Nominal GDP',
    },
    {
      label: 'POPULATION',
      value: '18',
      suffix: 'million',
      badge: 'inhabitants',
      subtitle: 'Total population',
    },
    {
      label: 'GOODS EXPORTS',
      value: 'US$ 15,595',
      suffix: 'million',
      badge: '+7.1% year over year',
      subtitle: '2025',
    },
    {
      label: 'SERVICES EXPORTS',
      value: 'US$ 4,888.3',
      suffix: 'million',
      badge: '+4.8% year over year',
      subtitle: '2025',
    },
    {
      label: 'FDI',
      value: 'US$ 1,881.7',
      suffix: 'million',
      badge: '2025',
      subtitle: 'Foreign Direct Investment',
    },
  ],
};
