import type { TranslationKey } from '@/i18n';

/**
 * Una capa superponible del mapa interactivo de infraestructura.
 *
 * Cada capa es un PNG transparente del mismo tamano que el mapa base
 * (3544 x 3544), de modo que al apilarlas coinciden pixel a pixel.
 */
export interface MapLayer {
  id: string;
  /** Clave de traduccion del nombre de la capa. */
  labelKey: TranslationKey;
  /** Capa transparente que se dibuja encima del mapa base. */
  overlay: string;
  /** Icono del boton que la activa. */
  icon: string;
  /**
   * Orden de apilado: menor se dibuja mas abajo. Es independiente del orden
   * de los botones para que las lineas y areas nunca tapen los puntos,
   * sin importar en que orden las active el usuario.
   */
  stack: number;
}
