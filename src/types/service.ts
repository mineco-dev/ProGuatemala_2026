import type { LucideIcon } from 'lucide-react';

/** Servicio de ProGuatemala. Se muestra en la pagina Servicios y en Nosotros. */
export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  color: string;
  bgColor: string;
  image?: string;
  features: string[];
  cta: string;
}
