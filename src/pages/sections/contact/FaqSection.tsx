import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { faqs } from '@/data/contact';

export default function FaqSection() {
  const { t } = useLanguage();
  const items = useLocalized(faqs);
  // Solo una pregunta abierta a la vez: al abrir otra se cierra la anterior.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="preguntas-frecuentes" className="py-16 bg-[#11223B] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-[0.12em] mb-4 text-[#D7E3AA]">
            {t('contact.faq.title')}
          </h2>
          <p className="text-xl text-white/85 leading-relaxed">{t('contact.faq.subtitle')}</p>
        </motion.div>

        {/* 2 columnas en desktop; items-start para que cada tarjeta crezca de forma independiente */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                className="bg-white/5 border border-white/15 rounded-2xl overflow-hidden transition-colors hover:border-white/25"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-4 text-left p-6"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 mt-0.5 text-[#2BB9DB] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/70 leading-relaxed px-6 pb-6">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
