import type { MapLayer } from '@/types/infrastructureMap';

import baseMapImage from '@/assets/images/maps/sections/MAPA_MAPA BASE.png';

import puertosMap from '@/assets/images/maps/sections/MAPA_Puertos.png';
import aeropuertosMap from '@/assets/images/maps/sections/MAPA_Aeropuertos.png';
import aerodromosMap from '@/assets/images/maps/sections/MAPA_Aerodomos.png';
import carreterasMap from '@/assets/images/maps/sections/MAPA_Carreteras.png';
import carreterasCaMap from '@/assets/images/maps/sections/MAPA_Carreteras CA.png';
import fronterasMap from '@/assets/images/maps/sections/MAPA_Fronteras.png';
import zonasFrancasMap from '@/assets/images/maps/sections/MAPA_Zonas Francas.png';
import zdeepMap from '@/assets/images/maps/sections/MAPA_ZDEEP.png';

import puertosIcon from '@/assets/images/maps/icons/PUERTOS ICONOS.png';
import aeropuertosIcon from '@/assets/images/maps/icons/AEROPUERTO ICONO.png';
import aerodromosIcon from '@/assets/images/maps/icons/AERODOMO ICONO.png';
import carreterasIcon from '@/assets/images/maps/icons/CARRETERAS ICONO.png';
import fronterasIcon from '@/assets/images/maps/icons/FRONTERAS ICONO.png';
import zonasFrancasIcon from '@/assets/images/maps/icons/ZONAS FRANCAS ICONO.png';
import zdeepIcon from '@/assets/images/maps/icons/ZDEEP ICONO.png';

/** Mapa estatico de fondo. Siempre visible, con o sin capas activas. */
export const baseMap = baseMapImage;

/**
 * Capas superponibles del mapa de infraestructura. El orden del arreglo es el
 * de los botones; `stack` define el orden de dibujo (ver `MapLayer`):
 * carreteras abajo, areas en medio, puntos arriba.
 *
 * Nota: `carreteras` y `carreteras-ca` comparten icono porque en
 * `assets/images/maps/icons` solo hay uno para carreteras.
 */
export const mapLayers: MapLayer[] = [
  {
    id: 'puertos',
    labelKey: 'why.map.layer.puertos',
    overlay: puertosMap,
    icon: puertosIcon,
    stack: 30,
  },
  {
    id: 'aeropuertos',
    labelKey: 'why.map.layer.aeropuertos',
    overlay: aeropuertosMap,
    icon: aeropuertosIcon,
    stack: 31,
  },
  {
    id: 'aerodromos',
    labelKey: 'why.map.layer.aerodromos',
    overlay: aerodromosMap,
    icon: aerodromosIcon,
    stack: 32,
  },
  {
    id: 'carreteras',
    labelKey: 'why.map.layer.carreteras',
    overlay: carreterasMap,
    icon: carreterasIcon,
    stack: 10,
  },
  {
    id: 'carreteras-ca',
    labelKey: 'why.map.layer.carreterasCa',
    overlay: carreterasCaMap,
    icon: carreterasIcon,
    stack: 11,
  },
  {
    id: 'fronteras',
    labelKey: 'why.map.layer.fronteras',
    overlay: fronterasMap,
    icon: fronterasIcon,
    stack: 33,
  },
  {
    id: 'zonas-francas',
    labelKey: 'why.map.layer.zonasFrancas',
    overlay: zonasFrancasMap,
    icon: zonasFrancasIcon,
    stack: 20,
  },
  {
    id: 'zdeep',
    labelKey: 'why.map.layer.zdeep',
    overlay: zdeepMap,
    icon: zdeepIcon,
    stack: 21,
  },
];
