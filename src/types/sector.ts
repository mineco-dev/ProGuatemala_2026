import React from 'react';

export interface Opportunity {
  title: string;
  description: string;
  potential:
    | 'Potencial Muy Alto'
    | 'Potencial Alto'
    | 'Potencial Medio-Alto'
    | 'Potencial Medio';
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
  employment?: string;
  growth: string;
  exports?: string; // Exportaciones
  imports?: string; // Importaciones
  timeframe: 'short' | 'medium' | 'long';
  priority: number;
  pdfUrl?: string;
  opportunities?: Opportunity[];
  advantages?: string[];
}