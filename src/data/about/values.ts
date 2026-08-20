import { Award, Lightbulb, Shield, Users } from 'lucide-react';
import type { Localized } from '@/i18n';
import type { Value } from '@/types/about';

const STYLES = [
  { icon: Award, color: 'from-amber-400 to-orange-500', bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50', iconColor: 'text-amber-600', shadowColor: 'shadow-amber-200' },
  { icon: Shield, color: 'from-emerald-400 to-teal-500', bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50', iconColor: 'text-emerald-600', shadowColor: 'shadow-emerald-200' },
  { icon: Users, color: 'from-blue-400 to-indigo-500', bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50', iconColor: 'text-blue-600', shadowColor: 'shadow-blue-200' },
  { icon: Lightbulb, color: 'from-violet-400 to-purple-500', bgColor: 'bg-gradient-to-br from-violet-50 to-purple-50', iconColor: 'text-violet-600', shadowColor: 'shadow-violet-200' },
] as const;

const COPY: Localized<Array<Pick<Value, 'title' | 'description'>>> = {
  es: [
    {
      title: 'Excelencia',
      description: 'Compromiso con los más altos estándares de calidad en todos nuestros servicios',
    },
    {
      title: 'Transparencia',
      description: 'Actuamos con honestidad e integridad en cada interacción con inversionistas',
    },
    {
      title: 'Colaboración',
      description: 'Trabajamos en equipo con instituciones públicas y privadas para el éxito común',
    },
    {
      title: 'Innovación',
      description: 'Buscamos continuamente mejores formas de servir a los inversionistas',
    },
  ],
  en: [
    {
      title: 'Excellence',
      description: 'A commitment to the highest quality standards across all our services',
    },
    {
      title: 'Transparency',
      description: 'We act with honesty and integrity in every interaction with investors',
    },
    {
      title: 'Collaboration',
      description: 'We work alongside public and private institutions toward shared success',
    },
    {
      title: 'Innovation',
      description: 'We continuously look for better ways to serve investors',
    },
  ],
};

const build = (copy: Array<Pick<Value, 'title' | 'description'>>): Value[] =>
  copy.map((item, index) => ({ ...STYLES[index], ...item }));

export const values: Localized<Value[]> = { es: build(COPY.es), en: build(COPY.en) };
