import type { LucideIcon } from 'lucide-react';
import type { TranslationKey } from '@/i18n';

/**
 * Las ventajas guardan claves de traduccion, no textos: el texto se resuelve
 * en tiempo de render con el idioma activo.
 */
export interface HomeAdvantage {
  /** Ancla usada por los hotspots del mapa (`#id`). */
  id: string;
  icon: LucideIcon;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  detailKeys: TranslationKey[];
  statKey: TranslationKey;
  color: string;
  bgColor: string;
}

export interface AdvantageHotspot {
  id: string;
  labelKey: TranslationKey;
  /** Posicion porcentual sobre la imagen del mapa. */
  top: string;
  left: string;
  /** Id de la HomeAdvantage que resalta al hacer clic. */
  targetId: string;
}
