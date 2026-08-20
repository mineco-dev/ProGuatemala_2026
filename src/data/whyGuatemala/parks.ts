import type { Localized } from '@/i18n';
import type { Park } from '@/types/whyGuatemala';

import interoceanica1 from '@/assets/images/centros_productivos_empresariales/interoceanica/Interoceanica.jpg';
import interoceanica2 from '@/assets/images/centros_productivos_empresariales/interoceanica/1.jpeg';
import interoceanica3 from '@/assets/images/centros_productivos_empresariales/interoceanica/2.jpeg';
import interoceanica4 from '@/assets/images/centros_productivos_empresariales/interoceanica/DJI_0944.JPG';
import interoceanica5 from '@/assets/images/centros_productivos_empresariales/interoceanica/DJI_0945.JPG';
import interoceanica6 from '@/assets/images/centros_productivos_empresariales/interoceanica/DJI_0946.JPG';
import interoceanica7 from '@/assets/images/centros_productivos_empresariales/interoceanica/DJI_0949.JPG';

import michatoya1 from '@/assets/images/centros_productivos_empresariales/michatoya/Michatoya Pacífico.jpg';
import michatoya2 from '@/assets/images/centros_productivos_empresariales/michatoya/BODEGAS ALTA.jpg';
import michatoya3 from '@/assets/images/centros_productivos_empresariales/michatoya/MICHATOYA PACIFICO 1.jpg';
import michatoya4 from '@/assets/images/centros_productivos_empresariales/michatoya/MICHATOYA PACIFICO 2.jpg';
import michatoya5 from '@/assets/images/centros_productivos_empresariales/michatoya/MICHATOYA PACIFICO 3.jpg';
import michatoya6 from '@/assets/images/centros_productivos_empresariales/michatoya/MICHATOYA PACIFICO 4.jpg';
import michatoya7 from '@/assets/images/centros_productivos_empresariales/michatoya/MICHATOYA PACIFICO 5.jpg';
import michatoya8 from '@/assets/images/centros_productivos_empresariales/michatoya/MICHATOYA PACIFICO 6.jpg';
import michatoya9 from '@/assets/images/centros_productivos_empresariales/michatoya/MICHATOYA PACIFICO 7.jpg';
import michatoya10 from '@/assets/images/centros_productivos_empresariales/michatoya/MICHATOYA PACIFICO 8.jpg';
import michatoya11 from '@/assets/images/centros_productivos_empresariales/michatoya/MICHATOYA PACIFICO 9.jpg';
import michatoya12 from '@/assets/images/centros_productivos_empresariales/michatoya/MICHATOYA PACIFICO 10.jpg';

import istmo1 from '@/assets/images/centros_productivos_empresariales/istmo/Puertas del Istmo.png';

import synergy1 from '@/assets/images/centros_productivos_empresariales/synergy/Synergy Industrial Park.jpg';
import synergy2 from '@/assets/images/centros_productivos_empresariales/synergy/SYNERGY_Industrial Park.pptx.png';
import synergy3 from '@/assets/images/centros_productivos_empresariales/synergy/SYNERGY_Industrial Park.pptx2.png';
import synergy4 from '@/assets/images/centros_productivos_empresariales/synergy/SYNERGY_Industrial Park.pptx3.png';
import synergy5 from '@/assets/images/centros_productivos_empresariales/synergy/SYNERGY_Industrial Park.pptx4.png';
import synergy6 from '@/assets/images/centros_productivos_empresariales/synergy/SYNERGY_Industrial Park.pptx5.png';
import synergy7 from '@/assets/images/centros_productivos_empresariales/synergy/SYNERGY_Industrial Park.pptx6.png';
import synergy8 from '@/assets/images/centros_productivos_empresariales/synergy/SYNERGY_Industrial Park.pptx7.png';
import synergy9 from '@/assets/images/centros_productivos_empresariales/synergy/SYNERGY_Industrial Park.pptx8.png';
import synergy10 from '@/assets/images/centros_productivos_empresariales/synergy/SYNERGY_Industrial Park.pptx9.png';

import quetzal1 from '@/assets/images/centros_productivos_empresariales/quetzal/Zona Libre Quetzal.jpg';
import quetzal2 from '@/assets/images/centros_productivos_empresariales/quetzal/ZLQ general .jpg';
import quetzal3 from '@/assets/images/centros_productivos_empresariales/quetzal/Fachasa MT2 .jpg';
import quetzal4 from '@/assets/images/centros_productivos_empresariales/quetzal/Garita y administracion .jpg';
import quetzal5 from '@/assets/images/centros_productivos_empresariales/quetzal/logo_zonalibrequetzal-scaled.png';
import quetzal6 from '@/assets/images/centros_productivos_empresariales/quetzal/ZLQ vista áerea.jpg';

/** Las fotografias son las mismas en ambos idiomas; solo cambia el texto. */
const IMAGES: Record<string, string[]> = {
  interoceanica: [
    interoceanica1,
    interoceanica2,
    interoceanica3,
    interoceanica4,
    interoceanica5,
    interoceanica6,
    interoceanica7,
  ],
  michatoya: [
    michatoya1,
    michatoya2,
    michatoya3,
    michatoya4,
    michatoya5,
    michatoya6,
    michatoya7,
    michatoya8,
    michatoya9,
    michatoya10,
    michatoya11,
    michatoya12,
  ],
  // TODO: solo hay una fotografia disponible de este parque.
  'puerta-istmo': [istmo1],
  synergy: [
    synergy1,
    synergy2,
    synergy3,
    synergy4,
    synergy5,
    synergy6,
    synergy7,
    synergy8,
    synergy9,
    synergy10,
  ],
  'zona-libre-quetzal': [quetzal1, quetzal2, quetzal3, quetzal4, quetzal5, quetzal6],
};

type ParkCopy = Pick<Park, 'id' | 'title' | 'description' | 'highlights'>;

/**
 * Los nombres de los parques son marcas registradas: se mantienen en espanol y
 * la version inglesa anade la glosa dentro de la descripcion.
 */
const COPY: Localized<ParkCopy[]> = {
  es: [
    {
      id: 'interoceanica',
      title: 'Interoceánica',
      description: 'Parque industrial con conectividad logística clave entre océanos.',
      highlights: ['Ubicación estratégica', 'Infraestructura moderna', 'Acceso a rutas principales'],
    },
    {
      id: 'michatoya',
      title: 'Michatoya Pacífico',
      description: 'Centro productivo con acceso a corredores del Pacífico.',
      highlights: ['Cercanía a puertos', 'Servicios integrados', 'Zonas de carga'],
    },
    {
      id: 'puerta-istmo',
      title: 'Puerta del Istmo',
      description: 'Hub empresarial con servicios para manufactura y distribución.',
      highlights: ['Conectividad regional', 'Espacios flexibles', 'Seguridad 24/7'],
    },
    {
      id: 'synergy',
      title: 'Synergy Industrial Park',
      description: 'Parque industrial con ecosistema empresarial consolidado.',
      highlights: ['Servicios corporativos', 'Energía confiable', 'Accesos controlados'],
    },
    {
      id: 'zona-libre-quetzal',
      title: 'Zona Libre Quetzal',
      description: 'Zona con incentivos y enfoque en comercio exterior.',
      highlights: ['Régimen especial', 'Logística integrada', 'Proximidad a puerto'],
    },
  ],
  en: [
    {
      id: 'interoceanica',
      title: 'Interoceánica',
      description:
        'Interoceanic industrial park with key logistics connectivity between the two oceans.',
      highlights: ['Strategic location', 'Modern infrastructure', 'Access to main routes'],
    },
    {
      id: 'michatoya',
      title: 'Michatoya Pacífico',
      description: 'Production hub with access to the Pacific corridors.',
      highlights: ['Close to ports', 'Integrated services', 'Loading areas'],
    },
    {
      id: 'puerta-istmo',
      title: 'Puerta del Istmo',
      description:
        'Business hub (Gateway to the Isthmus) with services for manufacturing and distribution.',
      highlights: ['Regional connectivity', 'Flexible spaces', '24/7 security'],
    },
    {
      id: 'synergy',
      title: 'Synergy Industrial Park',
      description: 'Industrial park with a well-established business ecosystem.',
      highlights: ['Corporate services', 'Reliable energy', 'Controlled access'],
    },
    {
      id: 'zona-libre-quetzal',
      title: 'Zona Libre Quetzal',
      description:
        'Free zone (Quetzal Free Zone) with incentives and a focus on foreign trade.',
      highlights: ['Special regime', 'Integrated logistics', 'Close to the port'],
    },
  ],
};

const withImages = (copy: ParkCopy[]): Park[] =>
  copy.map((park) => ({ ...park, images: IMAGES[park.id] }));

export const parks: Localized<Park[]> = {
  es: withImages(COPY.es),
  en: withImages(COPY.en),
};
