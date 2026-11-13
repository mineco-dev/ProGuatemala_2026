import { Factory, Globe, Receipt, Rocket, Scale, Users } from 'lucide-react';
import type { AdvantageHotspot, HomeAdvantage } from '@/types/home';

export const guatemalaAdvantages: HomeAdvantage[] = [
  {
    id: 'guia-iniciar-operaciones',
    icon: Rocket,
    iconBg: '#FABE0D',
    titleKey: 'home.advantages.operations.title',
    detailKeys: [
      'home.advantages.operations.detail1',
      'home.advantages.operations.detail2',
      'home.advantages.operations.detail3',
    ],
    docUrl: '#',
  },
  {
    id: 'guia-marco-legal',
    icon: Scale,
    iconBg: '#D7E3AA',
    titleKey: 'home.advantages.legal.title',
    detailKeys: [
      'home.advantages.legal.detail1',
      'home.advantages.legal.detail2',
      'home.advantages.legal.detail3',
    ],
    docUrl: '#',
  },
  {
    id: 'guia-regimenes-especiales',
    icon: Factory,
    iconBg: '#2BB9DB',
    titleKey: 'home.advantages.regimes.title',
    detailKeys: [
      'home.advantages.regimes.detail1',
      'home.advantages.regimes.detail2',
      'home.advantages.regimes.detail3',
    ],
    docUrl: '#',
  },
  {
    id: 'guia-aspectos-laborales',
    icon: Users,
    iconBg: '#3DB08B',
    titleKey: 'home.advantages.labor.title',
    detailKeys: [
      'home.advantages.labor.detail1',
      'home.advantages.labor.detail2',
      'home.advantages.labor.detail3',
    ],
    docUrl: '#',
  },
  {
    id: 'guia-acuerdos-comerciales',
    icon: Globe,
    iconBg: '#BBA4CE',
    titleKey: 'home.advantages.trade.title',
    detailKeys: [
      'home.advantages.trade.detail1',
      'home.advantages.trade.detail2',
      'home.advantages.trade.detail3',
    ],
    docUrl: '#',
  },
  {
    id: 'guia-obligaciones-tributarias',
    icon: Receipt,
    iconBg: '#97DCEE',
    titleKey: 'home.advantages.tax.title',
    detailKeys: [
      'home.advantages.tax.detail1',
      'home.advantages.tax.detail2',
      'home.advantages.tax.detail3',
    ],
    docUrl: '#',
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
