import type { LucideIcon } from 'lucide-react';

export interface Statistic {
  label: string;
  value: string;
  suffix?: string;
  badge?: string;
  subtitle?: string;
}

export interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  /** Clases tailwind del gradiente del icono, p.ej. "from-emerald-500 to-teal-600" */
  color: string;
  /** Clases tailwind del gradiente de fondo de la tarjeta */
  bgColor: string;
}

export interface Park {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  images: string[];
}

export interface Port {
  name: string;
  load: string;
}

export interface ComparisonRow {
  indicator: string;
  gt: string;
  cr: string;
  sv: string;
  hn: string;
  ni: string;
  do: string;
  highlight?: boolean;
}
