import { Award, Globe, Lightbulb, Shield } from 'lucide-react';
import type { Localized } from '@/i18n';
import type { Benefit } from '@/types/about';

const STYLES = [
  { icon: Award, hexColor: '#059669', hexBg: '#ecfdf5', hexBorder: '#a7f3d0' }, // Verde Emerald
  { icon: Globe, hexColor: '#2563eb', hexBg: '#eff6ff', hexBorder: '#bfdbfe' }, // Azul
  { icon: Lightbulb, hexColor: '#9333ea', hexBg: '#faf5ff', hexBorder: '#e9d5ff' }, // Morado
  { icon: Shield, hexColor: '#ea580c', hexBg: '#fff7ed', hexBorder: '#fed7aa' }, // Naranja
] as const;

const COPY: Localized<Array<Pick<Benefit, 'title' | 'description'>>> = {
  es: [
    {
      title: 'Gratuito',
      description: 'Todos nuestros servicios son completamente gratuitos para los inversionistas',
    },
    {
      title: 'Multilingüe',
      description: 'Atención en español, inglés y otros idiomas según la necesidad',
    },
    {
      title: 'Especializado',
      description: 'Conocimiento profundo de sectores y regulaciones locales',
    },
    {
      title: 'Institucional',
      description: 'Respaldo oficial del Gobierno de Guatemala en todo momento',
    },
  ],
  en: [
    {
      title: 'Free of charge',
      description: 'All of our services are completely free for investors',
    },
    {
      title: 'Multilingual',
      description: 'Support in Spanish, English and other languages as needed',
    },
    {
      title: 'Specialized',
      description: 'In-depth knowledge of local sectors and regulations',
    },
    {
      title: 'Institutional',
      description: 'Official backing from the Government of Guatemala at every step',
    },
  ],
};

const build = (copy: Array<Pick<Benefit, 'title' | 'description'>>): Benefit[] =>
  copy.map((item, index) => ({ ...STYLES[index], ...item }));

export const benefits: Localized<Benefit[]> = { es: build(COPY.es), en: build(COPY.en) };
