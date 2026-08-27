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
  /** Resumen corto, el que se lee en la tarjeta de la cuadricula. */
  description: string;
  /** Texto completo del parque, el que se lee al abrir su galeria. */
  overview: string;
  highlights: string[];
  images: string[];
}

export interface Port {
  name: string;
  load: string;
}
