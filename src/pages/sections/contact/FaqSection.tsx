import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { faqs } from '@/data/contact';

export default function FaqSection() {
  const { t } = useLanguage();
  const items = useLocalized(faqs);

  return (
    <section id="preguntas-frecuentes" className="py-16 bg-[#11223B] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="space-y-6">
          {items.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/15 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
              <p className="text-white/70 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
