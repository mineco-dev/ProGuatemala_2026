import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl text-white lg:text-6xl font-bold mb-6">
            {t('news.hero.title')} <span className="text-yellow-500">{t('news.hero.highlight')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto">
            {t('news.hero.subtitle')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
