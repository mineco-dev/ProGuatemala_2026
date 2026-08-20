import type { LucideIcon } from 'lucide-react';

export interface LegalFrameworkItem {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

export interface IncentiveProgram {
  name: string;
  description: string;
  requirements: string[];
  benefits: string[];
  sectors: string[];
}

export interface InvestorProtection {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ApplicationStep {
  step: number;
  title: string;
  description: string;
  /** Duracion estimada de la etapa. */
  time: string;
}
