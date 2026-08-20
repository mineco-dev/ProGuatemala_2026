import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NewsletterSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t('resources.newsletter.title')}</h2>
          <p className="text-xl mb-8 text-white/90">
            {t('resources.newsletter.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('resources.newsletter.placeholder')}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
              {t('resources.newsletter.submit')}
            </button>
          </div>
          <p className="text-blue-100 text-xs mt-4">
            {t('resources.newsletter.note')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
