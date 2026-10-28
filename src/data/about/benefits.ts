import { Award, Globe, Lightbulb, Shield } from 'lucide-react';
import type { Localized } from '@/i18n';
import type { Benefit } from '@/types/about';

const STYLES = [
  // Tiles solidos con la paleta oficial; icono en navy de marca para contraste.
  { icon: Award, hexColor: '#11223B', hexBg: '#FABE0D', hexBorder: '#FABE0D' }, // Dorado de marca
  { icon: Globe, hexColor: '#11223B', hexBg: '#2BB9DB', hexBorder: '#2BB9DB' }, // Cian de marca
  { icon: Lightbulb, hexColor: '#11223B', hexBg: '#3DB08B', hexBorder: '#3DB08B' }, // Verde de marca
  { icon: Shield, hexColor: '#11223B', hexBg: '#BBA4CE', hexBorder: '#BBA4CE' }, // Morado de marca
] as const;

const COPY: Localized<Array<Pick<Benefit, 'title' | 'description'>>> = {
  es: [
    {
      title: 'Gratuito',
      description: 'Todos nuestros servicios son completamente gratuitos para los inversionistas',
    },
    {
      title: 'Multilingüe',
      description: 'Atención en español e inglés según la necesidad',
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
      description: 'Support in Spanish and English as needed',
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
