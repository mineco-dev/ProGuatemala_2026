import React from 'react';

export interface Opportunity {
  title: string;
  description: string;
  potential: 'Potencial Muy Alto' | 'Potencial Alto' | 'Potencial Medio';
}

export interface Sector {
  id: string;
  name: string;
  icon: React.ElementType;
  image: string;
  description: string;
  highlights: string[];
  investment: string; // Ingresos
  employment: string;
  growth: string;
  exports?: string; // Exportaciones
  timeframe: 'short' | 'medium' | 'long';
  priority: number;
  pdfUrl?: string;
  opportunities?: Opportunity[];
  advantages?: string[];
}