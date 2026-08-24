import type { Localized } from '@/i18n';

interface PresidentContent {
  name: string;
  formalName: string;
  position: string;
  shortPosition: string;
  photo: string;
  quotes: string[];
  closingQuote: string;
  /**
   * Version corta del mensaje para la tarjeta de autoridades, donde la altura
   * debe coincidir con las demas tarjetas. Son frases tomadas literalmente de
   * `quotes` y `closingQuote`.
   */
  shortQuote: string;
  bio: string;
}

const PHOTO =
  'https://raw.githubusercontent.com/RedCiudadana/RecursosProGuatemala/refs/heads/main/equipo/PRESIDENTE%20BERNARDO%20AREVALO%20RETRATO%20OFICIAL%20.jpg';

/**
 * Datos del Presidente de la Republica. Se usan tanto en el mensaje
 * institucional como en la seccion de autoridades.
 */
export const president: Localized<PresidentContent> = {
  es: {
    name: 'Bernardo Arévalo de León',
    formalName: 'Dr. Bernardo Arévalo de León',
    position: 'Presidente de la República de Guatemala',
    shortPosition: 'Presidente de la República',
    photo: PHOTO,
    quotes: [
      'Guatemala es una tierra de oportunidades sin precedentes. Nuestro compromiso es crear un ambiente propicio para la inversión extranjera, basado en la transparencia, el estado de derecho y la seguridad jurídica.',
      'Los invito a descubrir las ventajas competitivas de nuestro país: una ubicación estratégica, una fuerza laboral talentosa y joven, y un mercado dinámico con acceso preferencial a las economías más importantes del mundo.',
    ],
    closingQuote:
      'Guatemala les da la bienvenida. Juntos construiremos un futuro de prosperidad compartida.',
    shortQuote:
      'Nuestro compromiso es crear un ambiente propicio para la inversión extranjera, basado en la transparencia, el estado de derecho y la seguridad jurídica. Guatemala les da la bienvenida.',
    bio: 'Lidera la visión del país para posicionar a Guatemala como destino de inversión preferido en Centroamérica, promoviendo el desarrollo económico sostenible y la generación de empleo de calidad.',
  },
  en: {
    name: 'Bernardo Arévalo de León',
    formalName: 'Dr. Bernardo Arévalo de León',
    position: 'President of the Republic of Guatemala',
    shortPosition: 'President of the Republic',
    photo: PHOTO,
    quotes: [
      'Guatemala is a land of unprecedented opportunity. Our commitment is to create an environment that welcomes foreign investment, grounded in transparency, the rule of law and legal certainty.',
      "I invite you to discover our country's competitive advantages: a strategic location, a young and talented workforce, and a dynamic market with preferential access to the world's largest economies.",
    ],
    closingQuote:
      'Guatemala welcomes you. Together we will build a future of shared prosperity.',
    shortQuote:
      'Our commitment is to create an environment that welcomes foreign investment, grounded in transparency, the rule of law and legal certainty. Guatemala welcomes you.',
    bio: "Leads the country's vision to position Guatemala as the preferred investment destination in Central America, promoting sustainable economic development and the creation of quality jobs.",
  },
};
