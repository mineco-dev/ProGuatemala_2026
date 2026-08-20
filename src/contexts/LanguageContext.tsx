import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { translations, type Language, type TranslationKey } from '@/i18n';

export type { Language, TranslationKey };

const STORAGE_KEY = 'proguatemala.language';
const DEFAULT_LANGUAGE: Language = 'es';

const isLanguage = (value: unknown): value is Language => value === 'es' || value === 'en';

/** Lee el idioma guardado; si no hay, intenta el del navegador y cae en espanol. */
function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLanguage(stored)) return stored;

  return window.navigator.language?.toLowerCase().startsWith('en') ? 'en' : DEFAULT_LANGUAGE;
}

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  /** Devuelve la traduccion de `key`, o la propia clave si no existe. */
  t: (key: TranslationKey | (string & {})) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  // Persiste la eleccion y mantiene <html lang> y el titulo en sincronia, que es
  // lo que leen los lectores de pantalla y los buscadores.
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.title = translations[language]['meta.title'];
  }, [language]);

  const t = useCallback(
    (key: TranslationKey | (string & {})): string =>
      translations[language][key as TranslationKey] ?? key,
    [language],
  );

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
