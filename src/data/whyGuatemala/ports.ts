import type { Localized } from '@/i18n';
import type { Port } from '@/types/whyGuatemala';

export const ports: Localized<Port[]> = {
  es: [
    { name: 'Puerto Quetzal (Pacífico)', load: '17.3 Millones TM' },
    { name: 'Puerto Santo Tomás (Atlántico)', load: '8.7 Millones TM' },
    { name: 'Puerto Barrios (Atlántico)', load: '5.6 Millones TM' },
  ],
  en: [
    { name: 'Puerto Quetzal (Pacific)', load: '17.3 million MT' },
    { name: 'Puerto Santo Tomás (Atlantic)', load: '8.7 million MT' },
    { name: 'Puerto Barrios (Atlantic)', load: '5.6 million MT' },
  ],
};
