import React from 'react';

export interface Opportunity {
  title: string;
  description: string;
  potential?:
    | 'Potencial Muy Alto'
    | 'Potencial Alto'
    | 'Potencial Medio-Alto'
    | 'Potencial Medio';
  /** Ventaja Comparativa Revelada (RCA). Si existe, la ficha la muestra en vez de `potential`. */
  rca?: string;
}

export interface SectorContact {
  name: string;
  email: string;
}

export interface Sector {
  id: string;
  name: string;
  icon: React.ElementType;
  image: string;
  description: string;
  highlights: string[];
  // Opcionales: 'componentes-electronicos' aun no tiene estas cifras y la UI
  // simplemente deja el dato en blanco.
  investment?: string; // Ingresos
  /** Etiqueta del KPI de ingresos por sector (p. ej. "Ingresos 2025"). Si falta, usa la global. */
  revenueLabel?: string;
  employment?: string;
  growth: string;
  /** Etiqueta del KPI de crecimiento por sector (p. ej. "CAGR Ingresos 2015–2024"). Si falta, usa la etiqueta global. */
  growthLabel?: string;
  exports?: string; // Exportaciones
  /** Etiqueta del KPI de exportaciones por sector (p. ej. "Centrales hidroeléctricas estatales"). Si falta, usa la global. */
  exportsLabel?: string;
  /** Fuente mostrada en el pie de la ficha (p. ej. "Fuente: INDE"). Si falta, usa la global. */
  sourceLabel?: string;
  imports?: string; // Importaciones
  timeframe: 'short' | 'medium' | 'long';
  priority: number;
  pdfUrl?: string;
  opportunities?: Opportunity[];
  advantages?: string[];
  /** Personas a cargo del sector (contacto al pie de la ficha). */
  contacts?: SectorContact[];
}