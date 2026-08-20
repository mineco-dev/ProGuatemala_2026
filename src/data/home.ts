import { Award, Globe, MapPin, TrendingUp, Users } from 'lucide-react';
import type { AdvantageHotspot, HomeAdvantage } from '@/types/home';

export const guatemalaAdvantages: HomeAdvantage[] = [
  {
    id: 'advantage-macroeconomia-robusta',
    icon: TrendingUp,
    titleKey: 'home.advantages.macro.title',
    descriptionKey: 'home.advantages.macro.desc',
    detailKeys: [
      'home.advantages.macro.detail1',
      'home.advantages.macro.detail2',
      'home.advantages.macro.detail3',
      'home.advantages.macro.detail4',
    ],
    statKey: 'home.advantages.macro.stat',
    color: 'bg-support-600',
    bgColor: 'bg-support-50',
  },
  {
    id: 'advantage-ubicacion-estrategica',
    icon: MapPin,
    titleKey: 'home.advantages.location.title',
    descriptionKey: 'home.advantages.location.desc',
    detailKeys: [
      'home.advantages.location.detail1',
      'home.advantages.location.detail2',
      'home.advantages.location.detail3',
      'home.advantages.location.detail4',
    ],
    statKey: 'home.advantages.location.stat',
    color: 'bg-support-600',
    bgColor: 'bg-support-50',
  },
  {
    id: 'advantage-talento-joven-y-calificado',
    icon: Users,
    titleKey: 'home.advantages.talent.title',
    descriptionKey: 'home.advantages.talent.desc',
    detailKeys: [
      'home.advantages.talent.detail1',
      'home.advantages.talent.detail2',
      'home.advantages.talent.detail3',
      'home.advantages.talent.detail4',
    ],
    statKey: 'home.advantages.talent.stat',
    color: 'bg-support-600',
    bgColor: 'bg-support-50',
  },
  {
    id: 'advantage-energia-renovable-y-confiable',
    icon: Globe,
    titleKey: 'home.advantages.energy.title',
    descriptionKey: 'home.advantages.energy.desc',
    detailKeys: [
      'home.advantages.energy.detail1',
      'home.advantages.energy.detail2',
      'home.advantages.energy.detail3',
      'home.advantages.energy.detail4',
    ],
    statKey: 'home.advantages.energy.stat',
    color: 'bg-support-600',
    bgColor: 'bg-support-50',
  },
  {
    id: 'advantage-regimenes-especiales-e-incentivos-fiscales',
    icon: Award,
    titleKey: 'home.advantages.incentives.title',
    descriptionKey: 'home.advantages.incentives.desc',
    detailKeys: [
      'home.advantages.incentives.detail1',
      'home.advantages.incentives.detail2',
      'home.advantages.incentives.detail3',
      'home.advantages.incentives.detail4',
    ],
    statKey: 'home.advantages.incentives.stat',
    color: 'bg-support-700',
    bgColor: 'bg-support-50',
  },
];

/** Puntos activos sobre la imagen "Por que Guatemala" que enlazan a cada ventaja. */
export const competitiveAdvantageHotspots: AdvantageHotspot[] = [
  {
    id: 'escalabilidad',
    labelKey: 'home.hotspots.scalability',
    top: '72%',
    left: '12%',
    targetId: 'advantage-macroeconomia-robusta',
  },
  {
    id: 'conectividad',
    labelKey: 'home.hotspots.connectivity',
    top: '27%',
    left: '31%',
    targetId: 'advantage-ubicacion-estrategica',
  },
  {
    id: 'talento',
    labelKey: 'home.hotspots.talent',
    top: '70%',
    left: '50%',
    targetId: 'advantage-talento-joven-y-calificado',
  },
  {
    id: 'energia-limpia',
    labelKey: 'home.hotspots.cleanEnergy',
    top: '27%',
    left: '68%',
    targetId: 'advantage-energia-renovable-y-confiable',
  },
  {
    id: 'incentivos',
    labelKey: 'home.hotspots.incentives',
    top: '70%',
    left: '87%',
    targetId: 'advantage-regimenes-especiales-e-incentivos-fiscales',
  },
];

export const HOME_VIDEO_URL =
  'https://drive.google.com/file/d/1RDcFVNev2TS-ST8FKWXRl-qmQ9NAHxJd/preview';
