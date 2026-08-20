import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const HERO_BG =
  "bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920')]";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="relative h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700"
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className={`absolute inset-0 ${HERO_BG} bg-cover bg-center opacity-20`} />
          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                <span className="text-white">{t('contact.hero.title')}</span>
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-8"
              >
                {t('contact.hero.subtitle')}
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="bg-support-500 hover:bg-support-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
                  {t('contact.hero.advisor')}
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200">
                  {t('contact.hero.meeting')}
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
