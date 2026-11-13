import type { LucideIcon } from 'lucide-react';
import type { TranslationKey } from '@/i18n';

/**
 * Cada recuadro de "Por que Guatemala" guarda claves de traduccion, no textos:
 * el texto se resuelve en tiempo de render con el idioma activo.
 */
export interface HomeAdvantage {
  /** Ancla usada por los hotspots del mapa (`#id`). */
  id: string;
  /** Icono (lucide-react) del recuadro. */
  icon: LucideIcon;
  /**
   * Color de fondo (hex) del recuadro del icono. Va como estilo inline y no
   * como clase Tailwind: el sistema de marca redibuja todas las utilidades de
   * color sobre la paleta `--support-*` con `!important` (ver `index.css`), asi
   * que `bg-emerald-400` y `bg-yellow-400` colapsarian al mismo cian.
   */
  iconBg: string;
  titleKey: TranslationKey;
  detailKeys: TranslationKey[];
  /**
   * Documento descargable al que apunta el boton "Conoce mas". Placeholder
   * (`#`) hasta que se publiquen los PDF actualizados de cada tema.
   */
  docUrl: string;
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
