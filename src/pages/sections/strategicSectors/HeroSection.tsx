import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import sectoresImg from '@/assets/images/portadas/3. SECTORES.jpg';
import { onePagers } from '@/data/onePagers';

const scrollToFilters = () => {
  document.getElementById('horizonte-temporal')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

export default function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="relative h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-sector-6 via-sector-1 to-sector-3"
        >
          <div className="absolute inset-0 bg-black/30" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${sectoresImg})` }}
          />
          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                {t('sectors.hero.title')}{' '}
                <span className="text-yellow-500">{t('sectors.hero.highlight')}</span>
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8"
              >
                {t('sectors.hero.subtitle')}
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button
                  onClick={scrollToFilters}
                  className="bg-sector-4 hover:brightness-110 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
                >
                  {t('sectors.hero.explore')}
                </button>
                <a
                  href={onePagers.strategy[language]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white hover:bg-white hover:text-sector-6 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center"
                >
                  {t('sectors.hero.download')}
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
