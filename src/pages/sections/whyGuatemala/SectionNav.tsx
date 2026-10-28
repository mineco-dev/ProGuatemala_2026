import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import type { TranslationKey } from '@/i18n';
import { smoothScrollTo } from '@/lib/scroll';

/** Secciones navegables de la pagina (orden de aparicion). */
const SECTIONS: Array<{ id: string; label: TranslationKey }> = [
  { id: 'why-estadisticas', label: 'why.nav.stats' },
  { id: 'advantages-grid', label: 'why.nav.advantages' },
  { id: 'stats-grid', label: 'why.nav.map' },
  { id: 'why-parques', label: 'why.nav.parks' },
  { id: 'why-comparativa', label: 'why.nav.comparison' },
];

/**
 * Mini menu flotante y transparente que aparece en la parte superior izquierda.
 *
 * - No es un sidebar: flota sobre el contenido (fixed) sin ocupar layout.
 * - Resalta dinamicamente la seccion visible usando IntersectionObserver.
 * - Se oculta mientras se esta en el hero/CTA (ninguna seccion activa).
 */
export default function SectionNav() {
  const { t } = useLanguage();
  const [active, setActive] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (elements.length === 0) return;

    // Se considera "activa" la seccion cuya parte superior cruza el tercio
    // superior del viewport; la que entra mas recientemente gana.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
          );
          setActive(top.target.id);
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      aria-label={t('why.nav.stats')}
      className="fixed left-4 top-28 z-40 hidden mix-blend-difference lg:block"
    >
      <ul className="flex flex-col text-white">
            {SECTIONS.map((section, index) => {
              const isActive = active === section.id;
              return (
                <li key={section.id}>
                  {index > 0 && (
                    <span className="mx-1 block h-px bg-white opacity-20" aria-hidden />
                  )}
                  <button
                    type="button"
                    onClick={() => smoothScrollTo(section.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`block py-2 pr-2 text-left text-xs tracking-wide transition-all duration-300 ${
                      isActive
                        ? 'font-semibold opacity-100'
                        : 'font-medium opacity-55 hover:opacity-90'
                    }`}
                  >
                    {t(section.label)}
                  </button>
                </li>
              );
            })}
      </ul>
    </motion.nav>
  );
}
