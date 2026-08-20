export type OpportunityPotential = 'Muy Alto' | 'Alto' | 'Medio';

export interface KeyOpportunity {
  title: string;
  description: string;
  potential: OpportunityPotential;
}

export interface CaseStudy {
  company: string;
  sector: string;
  investment: string;
  description: string;
  logo: string;
}

export interface SectorStats {
  investment: string;
  employment: string;
  growth: string;
  exports: string;
}

/** Contenido de la pagina de detalle de un sector estrategico. */
export interface SectorDetailContent {
  name: string;
  description: string;
  image: string;
  stats: SectorStats;
  keyOpportunities: KeyOpportunity[];
  valueChain: string[];
  advantages: string[];
  caseStudies: CaseStudy[];
}
