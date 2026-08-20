import type { CSSProperties } from 'react';
import type { LucideIcon } from 'lucide-react';

export type { Service } from './service';

/** Paleta de una tarjeta de valor. Los `style*` son respaldo ante la purga de Tailwind. */
export interface ValueTheme {
  cardBg: string;
  iconBg: string;
  shadowColor: string;
  styleCard: CSSProperties;
  styleIcon: CSSProperties;
}

export interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  iconColor: string;
  shadowColor: string;
}

/** Autoridad o integrante del equipo. `image` es opcional: sin ella se usa un avatar generico. */
export interface Person {
  name: string;
  position: string;
  bio: string;
  email?: string;
  image?: string;
}

export interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  iconColor: string;
  borderColor: string;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  hexColor: string;
  hexBg: string;
  hexBorder: string;
}
