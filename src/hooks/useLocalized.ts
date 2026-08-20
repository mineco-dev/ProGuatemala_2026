import { useLanguage } from '@/contexts/LanguageContext';
import type { Localized } from '@/i18n';

/**
 * Devuelve la variante del contenido que corresponde al idioma activo.
 *
 *   const parks = useLocalized(parksByLanguage);
 */
export function useLocalized<T>(data: Localized<T>): T {
  const { language } = useLanguage();
  return data[language];
}
