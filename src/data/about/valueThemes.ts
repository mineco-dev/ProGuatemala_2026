import type { ValueTheme } from '@/types/about';

/** Paleta oficial por tarjeta de valor. El estilo inline es la fuente de verdad (evita la purga de Tailwind). */
export const valueThemes: ValueTheme[] = [
  {
    // 1. EXCELENCIA — dorado
    cardBg: 'border',
    iconBg: '',
    shadowColor: 'hover:shadow-lg',
    styleCard: { backgroundColor: '#FFF9E6', borderColor: '#FEEFBA' },
    styleIcon: { background: '#FABE0D' },
  },
  {
    // 2. TRANSPARENCIA — cian
    cardBg: 'border',
    iconBg: '',
    shadowColor: 'hover:shadow-lg',
    styleCard: { backgroundColor: '#E9F7FB', borderColor: '#97DCEE' },
    styleIcon: { background: '#2BB9DB' },
  },
  {
    // 3. COLABORACIÓN — verde
    cardBg: 'border',
    iconBg: '',
    shadowColor: 'hover:shadow-lg',
    styleCard: { backgroundColor: '#ECF8F3', borderColor: '#A4E1CC' },
    styleIcon: { background: '#3DB08B' },
  },
  {
    // 4. INNOVACIÓN — morado
    cardBg: 'border',
    iconBg: '',
    shadowColor: 'hover:shadow-lg',
    styleCard: { backgroundColor: '#F6F3F9', borderColor: '#DBCFE6' },
    styleIcon: { background: '#BBA4CE' },
  },
];
