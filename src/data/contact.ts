import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import type { Localized } from '@/i18n';
import type { ContactInfoItem, FaqItem } from '@/types/contact';

const INFO_ICONS = [Mail, Phone, MapPin, Clock] as const;

type InfoCopy = Pick<ContactInfoItem, 'title' | 'content' | 'subContent'>;

const INFO_COPY: Localized<InfoCopy[]> = {
  es: [
    { title: 'Correo Electrónico', content: 'proguatemala@mineco.gob.gt' },
    { title: 'Teléfono', content: '+502 2412-0200 ext 3500' },
    {
      title: 'Dirección',
      content: '8a. Avenida 10-43 Zona 1',
      subContent: 'Ciudad de Guatemala, Guatemala',
    },
    {
      title: 'Horario de Atención',
      content: 'Lunes a Viernes: 8:00 - 17:00',
      subContent: 'Sábado: 8:00 - 12:00',
    },
  ],
  en: [
    { title: 'Email', content: 'proguatemala@mineco.gob.gt' },
    { title: 'Phone', content: '+502 2412-0200 ext. 3500' },
    {
      title: 'Address',
      content: '8a. Avenida 10-43 Zona 1',
      subContent: 'Guatemala City, Guatemala',
    },
    {
      title: 'Office Hours',
      content: 'Monday to Friday: 8:00 AM - 5:00 PM',
      subContent: 'Saturday: 8:00 AM - 12:00 PM',
    },
  ],
};

export const contactInfo: Localized<ContactInfoItem[]> = {
  es: INFO_COPY.es.map((item, i) => ({ icon: INFO_ICONS[i], ...item })),
  en: INFO_COPY.en.map((item, i) => ({ icon: INFO_ICONS[i], ...item })),
};

/** Opciones del selector "Sector de interes" del formulario. */
export const interestOptions: Localized<string[]> = {
  es: [
    'Agroindustria',
    'Manufactura Liviana',
    'Servicios Globales',
    'Energías Renovables',
    'Turismo Sostenible',
    'Otro',
  ],
  en: [
    'Agribusiness',
    'Light Manufacturing',
    'Global Services',
    'Renewable Energy',
    'Sustainable Tourism',
    'Other',
  ],
};

export const faqs: Localized<FaqItem[]> = {
  es: [
    {
      question: '¿Cuánto tiempo toma recibir una respuesta?',
      answer:
        'Garantizamos respuesta en 24 horas hábiles. Para consultas urgentes, puedes llamarnos directamente.',
    },
    {
      question: '¿Los servicios de ProGuatemala tienen costo?',
      answer:
        'No, todos nuestros servicios de promoción y facilitación de inversiones son completamente gratuitos.',
    },
    {
      question: '¿Pueden ayudarme si aún estoy evaluando Guatemala?',
      answer:
        'Por supuesto. Proporcionamos información y análisis para ayudarte en tu proceso de evaluación.',
    },
    {
      question: '¿Atienden en inglés u otros idiomas?',
      answer:
        'Sí, nuestro equipo brinda atención en español, inglés y otros idiomas según la necesidad.',
    },
  ],
  en: [
    {
      question: 'How long does it take to get a reply?',
      answer:
        'We guarantee a response within 24 business hours. For urgent enquiries, you can call us directly.',
    },
    {
      question: 'Do ProGuatemala services have a cost?',
      answer:
        'No — all of our investment promotion and facilitation services are completely free of charge.',
    },
    {
      question: 'Can you help me if I am still evaluating Guatemala?',
      answer:
        'Absolutely. We provide information and analysis to support you throughout your evaluation process.',
    },
    {
      question: 'Do you provide support in English or other languages?',
      answer:
        'Yes, our team provides support in Spanish, English and other languages as needed.',
    },
  ],
};

export const OFFICE_MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.2847!2d-90.5131!3d14.6349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM4JzA1LjYiTiA5MMKwMzAnNDcuMiJX!5e0!3m2!1sen!2sgt!4v1234567890';

export const LINKEDIN_URL = 'https://www.linkedin.com/company/proguatemala/';
