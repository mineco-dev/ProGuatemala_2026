import type { Localized } from '@/i18n';
import type { Person } from '@/types/about';
import ministraImg from '@/assets/images/autoridades/Ministra.jpeg';

export const authorities: Localized<Person[]> = {
  es: [
    {
      name: 'Gabriela García',
      position: 'Ministra de Economía',
      bio: 'Experta con más de 25 años de experiencia en desarrollo económico a nivel local y regional. Posee una Maestría en Administración de Proyectos de Desarrollo y una Licenciatura en Relaciones Internacionales de la American University en Washington D.C. Su trayectoria incluye liderazgo en la formulación de programas para fomentar el comercio y atraer inversión extranjera directa, así como roles destacados en organizaciones como USAID.',
      email: 'ministra@mineco.gob.gt',
      image: ministraImg,
    },
  ],
  en: [
    {
      name: 'Gabriela García',
      position: 'Minister of Economy',
      bio: 'An expert with more than 25 years of experience in local and regional economic development. She holds a Master’s degree in Development Project Management and a Bachelor’s degree in International Relations from American University in Washington, D.C. Her career includes leading the design of programs to promote trade and attract foreign direct investment, as well as senior roles at organizations such as USAID.',
      email: 'ministra@mineco.gob.gt',
      image: ministraImg,
    },
  ],
};
