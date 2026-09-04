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
import istmo2 from '@/assets/images/centros_productivos_empresariales/istmo/pdi 1.png';
import istmo3 from '@/assets/images/centros_productivos_empresariales/istmo/PDI2.png';
import istmo4 from '@/assets/images/centros_productivos_empresariales/istmo/Ingreso Fulles PDI.jpg';
import istmo5 from '@/assets/images/centros_productivos_empresariales/istmo/Central de transf. 2.png';
import istmo6 from '@/assets/images/centros_productivos_empresariales/istmo/TH.png';
import istmo7 from '@/assets/images/centros_productivos_empresariales/istmo/Picture2.png';
import istmo8 from '@/assets/images/centros_productivos_empresariales/istmo/PHOTO-2025-07-07-12-48-05.jpg';
import istmo9 from '@/assets/images/centros_productivos_empresariales/istmo/PHOTO-2025-10-01-09-02-40.jpg';
import istmo10 from '@/assets/images/centros_productivos_empresariales/istmo/PHOTO-2026-07-23-12-59-17.jpg';

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
  'puerta-istmo': [
    istmo1,
    istmo2,
    istmo3,
    istmo4,
    istmo5,
    istmo6,
    istmo7,
    istmo8,
    istmo9,
    istmo10,
  ],
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

type ParkCopy = Pick<Park, 'id' | 'title' | 'description' | 'overview' | 'highlights'>;

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
      overview:
        'Interoceánica es el primer y único parque industrial en operación activa del corredor Atlántico de Guatemala. Su ubicación en el centro del país permite la conexión directa entre los dos puertos más importantes: Santo Tomás de Castilla y Puerto Quetzal, consolidándose como un punto logístico clave para el comercio nacional e internacional.',
      highlights: ['Ubicación estratégica', 'Infraestructura moderna', 'Acceso a rutas principales'],
    },
    {
      id: 'michatoya',
      title: 'Michatoya Pacífico',
      description: 'Centro productivo con acceso a corredores del Pacífico.',
      overview:
        'Michatoya Pacífico es el parque industrial más grande y moderno de Centroamérica, con más de 1,600 hectáreas. Su objetivo es impulsar la transformación productiva del país con la integración de áreas industriales, logísticas, comerciales y residenciales. Ofrece más de 3 millones de metros cuadrados bajo el régimen de Zona de Desarrollo Económico Especial Pública (ZDEEP).',
      highlights: ['Cercanía a puertos', 'Servicios integrados', 'Zonas de carga'],
    },
    {
      id: 'puerta-istmo',
      title: 'Puerta del Istmo',
      description: 'Hub empresarial con servicios para manufactura y distribución.',
      // TODO: pendiente el texto completo que proporcione el parque.
      overview:
        'Puerta del Istmo es un hub empresarial con servicios para manufactura y distribución, con conectividad regional, espacios flexibles y seguridad las 24 horas.',
      highlights: ['Conectividad regional', 'Espacios flexibles', 'Seguridad 24/7'],
    },
    {
      id: 'synergy',
      title: 'Synergy Industrial Park',
      description: 'Parque industrial con ecosistema empresarial consolidado.',
      overview:
        'Synergy Industrial Park, con el respaldo de Grupo Pantaleon y Spectrum, combina infraestructura de clase mundial, ubicación estratégica y sostenibilidad para desarrollar soluciones industriales que impulsen la competitividad y el crecimiento con certeza en Guatemala.',
      highlights: ['Servicios corporativos', 'Energía confiable', 'Accesos controlados'],
    },
    {
      id: 'zona-libre-quetzal',
      title: 'Zona Libre Quetzal',
      description: 'Zona con incentivos y enfoque en comercio exterior.',
      overview:
        'Zona Libre Quetzal (ZLQ) es un parque logístico e industrial ubicado estratégicamente a 4 kilómetros de Puerto Quetzal. Cuenta con una delegación aduanera in situ y brinda beneficios fiscales y extra aduanales altamente competitivos. Representa una oportunidad estratégica para empresas dedicadas a la importación, exportación, transformación y prestación de servicios.',
      highlights: ['Régimen especial', 'Logística integrada', 'Proximidad a puerto'],
    },
  ],
  en: [
    {
      id: 'interoceanica',
      title: 'Interoceánica',
      description:
        'Interoceanic industrial park with key logistics connectivity between the two oceans.',
      overview:
        'Interoceánica is the first and only industrial park in active operation along Guatemala’s Atlantic corridor. Its location at the center of the country allows a direct connection between the two most important ports, Santo Tomás de Castilla and Puerto Quetzal, establishing it as a key logistics point for domestic and international trade.',
      highlights: ['Strategic location', 'Modern infrastructure', 'Access to main routes'],
    },
    {
      id: 'michatoya',
      title: 'Michatoya Pacífico',
      description: 'Production hub with access to the Pacific corridors.',
      overview:
        'Michatoya Pacífico is the largest and most modern industrial park in Central America, spanning more than 1,600 hectares. Its purpose is to drive the country’s productive transformation by integrating industrial, logistics, commercial and residential areas. It offers more than 3 million square meters under the Public Special Economic Development Zone (ZDEEP) regime.',
      highlights: ['Close to ports', 'Integrated services', 'Loading areas'],
    },
    {
      id: 'puerta-istmo',
      title: 'Puerta del Istmo',
      description:
        'Business hub (Gateway to the Isthmus) with services for manufacturing and distribution.',
      // TODO: pendiente el texto completo que proporcione el parque.
      overview:
        'Puerta del Istmo (Gateway to the Isthmus) is a business hub with services for manufacturing and distribution, offering regional connectivity, flexible spaces and 24/7 security.',
      highlights: ['Regional connectivity', 'Flexible spaces', '24/7 security'],
    },
    {
      id: 'synergy',
      title: 'Synergy Industrial Park',
      description: 'Industrial park with a well-established business ecosystem.',
      overview:
        'Synergy Industrial Park, backed by Grupo Pantaleon and Spectrum, combines world-class infrastructure, a strategic location and sustainability to develop industrial solutions that drive competitiveness and growth with certainty in Guatemala.',
      highlights: ['Corporate services', 'Reliable energy', 'Controlled access'],
    },
    {
      id: 'zona-libre-quetzal',
      title: 'Zona Libre Quetzal',
      description:
        'Free zone (Quetzal Free Zone) with incentives and a focus on foreign trade.',
      overview:
        'Zona Libre Quetzal (ZLQ) is a logistics and industrial park strategically located 4 kilometers from Puerto Quetzal. It has an on-site customs office and provides highly competitive tax and non-customs benefits. It represents a strategic opportunity for companies engaged in importing, exporting, processing and providing services.',
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
