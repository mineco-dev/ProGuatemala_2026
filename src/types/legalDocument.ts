import type { LucideIcon } from 'lucide-react';
import type { Language } from '@/i18n';

export interface LegalDocumentSection {
  icon: LucideIcon;
  title: string;
  /** Parrafos del apartado; las lineas que empiezan con "•" son vinetas. */
  content: string[];
}

/** Version en un idioma de un documento legal (privacidad, terminos, ...). */
export interface LegalDocumentContent {
  title: string;
  /** Linea bajo el titulo, p.ej. "Ultima actualizacion: Febrero 2024." */
  subtitle: string;
  intro: string;
  sections: LegalDocumentSection[];
}

export type LocalizedLegalDocument = Record<Language, LegalDocumentContent>;
