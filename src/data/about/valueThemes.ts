import type { ValueTheme } from '@/types/about';

/** Paleta de cada tarjeta de valor. Los estilos inline son respaldo ante la purga de Tailwind. */
export const valueThemes: ValueTheme[] = [
{
  // 1. EXCELENCIA - NARANJA / ÁMBAR
  cardBg: 'bg-amber-50/90 border-amber-200/70',
  iconBg: 'bg-gradient-to-br from-amber-400 to-orange-500',
  shadowColor: 'hover:shadow-amber-100',
  styleCard: { backgroundColor: '#fffdf2', borderColor: '#fef3c7' },
  styleIcon: { background: 'linear-gradient(135deg, #fbbf24, #f97316)' }
},
{
  // 2. TRANSPARENCIA - VERDE PRONUNCIADO
  cardBg: 'bg-emerald-50/90 border-emerald-200/70',
  iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
  shadowColor: 'hover:shadow-emerald-100',
  styleCard: { backgroundColor: '#f0fdf4', borderColor: '#a7f3d0' },
  styleIcon: { background: 'linear-gradient(135deg, #10b981, #0d785f)' }
},
{
  // 3. COLABORACIÓN - AZUL
  cardBg: 'bg-blue-50/90 border-blue-200/70',
  iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
  shadowColor: 'hover:shadow-blue-100',
  styleCard: { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' },
  styleIcon: { background: 'linear-gradient(135deg, #3b82f6, #4f46e5)' }
},
{
  // 4. INNOVACIÓN - MORADO
  cardBg: 'bg-purple-50/90 border-purple-200/70',
  iconBg: 'bg-gradient-to-br from-purple-500 to-violet-600',
  shadowColor: 'hover:shadow-purple-100',
  styleCard: { backgroundColor: '#faf5ff', borderColor: '#e9d5ff' },
  styleIcon: { background: 'linear-gradient(135deg, #a855f7, #7c3aed)' }
}
];
