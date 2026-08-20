import { FileText, Play } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/** Icono segun el tipo de recurso; los que no son video se tratan como documento. */
export function getResourceTypeIcon(type: string): LucideIcon {
  return type === 'Video' ? Play : FileText;
}

/** Gradiente del contenedor del icono, distinto para video y documento. */
export function resourceIconGradient(type: string): string {
  return type === 'Video'
    ? 'bg-gradient-to-br from-red-400 to-pink-500'
    : 'bg-gradient-to-br from-blue-400 to-indigo-500';
}
