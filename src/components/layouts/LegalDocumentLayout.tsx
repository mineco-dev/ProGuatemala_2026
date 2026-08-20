import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { LocalizedLegalDocument } from '@/types/legalDocument';

interface LegalDocumentLayoutProps {
  document: LocalizedLegalDocument;
  /** Icono que encabeza el hero (Shield para privacidad, Scale para terminos). */
  icon: LucideIcon;
  /** Bloques finales propios de cada documento (contacto, avisos, ...). */
  children?: ReactNode;
}

/**
 * Estructura comun de las paginas legales: hero, introduccion y el listado de
 * apartados. Cada pagina aporta sus propios bloques de cierre via `children`.
 */
export default function LegalDocumentLayout({
  document,
  icon: Icon,
  children,
}: LegalDocumentLayoutProps) {
  const { language } = useLanguage();
  const { title, subtitle, intro, sections } = document[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative text-white py-20" style={{ background: '#021049' }}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mb-6">
              <Icon className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">{subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100"
          >
            <p className="text-lg text-gray-700 leading-relaxed">{intro}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => {
              const SectionIcon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-4 rounded-xl flex-shrink-0">
                      <SectionIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                      <div className="space-y-3">
                        {section.content.map((paragraph) => (
                          <p key={paragraph} className="text-gray-700 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {children}
    </div>
  );
}
