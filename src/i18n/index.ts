import { es } from './es';
import { en } from './en';

export type Language = 'es' | 'en';

/** Claves validas de traduccion, derivadas del diccionario en espanol. */
export type TranslationKey = keyof typeof es;

/**
 * Contenido que existe en cada idioma. Se usa para las colecciones de `src/data`
 * (sectores, parques, equipo, ...), donde aplanar todo en claves sueltas seria
 * inmanejable. TypeScript exige que ambos idiomas esten presentes.
 */
export type Localized<T> = Record<Language, T>;

/** Idiomas disponibles, en el orden en que se muestran en el selector. */
export const LANGUAGES: Language[] = ['es', 'en'];

/**
 * `en` se tipa contra las claves de `es` para que TypeScript avise si una
 * traduccion queda sin su contraparte.
 */
export const translations: Localized<Record<TranslationKey, string>> = {
  es,
  en,
};

export { es, en };
