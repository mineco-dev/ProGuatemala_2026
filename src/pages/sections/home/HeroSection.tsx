import { motion } from 'framer-motion';
import { Download, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAdvisorModal } from '@/contexts/AdvisorModalContext';
import { onePagers } from '@/data/onePagers';
import heroBg from '@/assets/images/home/hero-bg.jpg';

export default function HeroSection() {
  const { t, language } = useLanguage();
  const { open: openAdvisorModal } = useAdvisorModal();

  return (
    <section
      className="relative text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})`, backgroundColor: '#021049' }}
    >
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            'linear-gradient(90deg, rgba(2,16,73,0.95) 0%, rgba(2,16,73,0.85) 45%, rgba(2,16,73,0.45) 100%)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className="font-bold uppercase tracking-wide text-sm md:text-base px-4 py-1.5 rounded-md text-gray-900"
              style={{ background: '#FFDB60' }}
            >
              {t('home.hero.badge')}
            </span>
            <span className="font-bold uppercase tracking-wide text-lg md:text-xl">
              {t('home.hero.line1')}
            </span>
          </div>

          <h1 className="font-extrabold leading-none mb-2">
            <span
              className="block text-5xl md:text-6xl lg:text-7xl tracking-[0.08em]"
              style={{ color: '#2BAEEA' }}
            >
              {t('home.hero.country')}
            </span>
            <span className="block text-2xl md:text-3xl uppercase tracking-[0.2em] mt-1">
              {t('home.hero.line2')}
            </span>
          </h1>

          <p className="text-base md:text-lg mb-8 mt-6 text-gray-100 leading-relaxed max-w-md">
            {t('home.hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={onePagers.welcomePackage[language]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 font-semibold px-7 py-4 rounded-lg transition-transform duration-200 hover:scale-[1.03] flex items-center justify-center"
              style={{ background: '#FFFFFF' }}
            >
              <Download className="w-5 h-5 mr-2 flex-shrink-0" />
              {t('home.hero.download')}
            </a>

            <button
              type="button"
              onClick={openAdvisorModal}
              className="border border-white/70 text-white font-semibold px-7 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center cursor-pointer bg-white/5 backdrop-blur-sm hover:bg-white hover:text-[#021049]"
            >
              <MessageCircle className="w-5 h-5 mr-2 flex-shrink-0" />
              {t('home.hero.contact')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
