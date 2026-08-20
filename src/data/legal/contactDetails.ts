import type { Language } from '@/i18n';

/** Datos de contacto que se repiten al pie de las paginas legales. */
export const legalContact: Record<Language, { phone: string; hours: string }> = {
  es: {
    phone: 'Teléfono: +502 2422-3333',
    hours: 'Horario: Lunes a Viernes, 8:00 - 17:00 hrs',
  },
  en: {
    phone: 'Phone: +502 2422-3333',
    hours: 'Hours: Monday to Friday, 8:00 AM - 5:00 PM',
  },
};

export const LEGAL_ORG_NAME = 'ProGuatemala';
export const LEGAL_EMAIL = 'info@proguatemala.gob.gt';
