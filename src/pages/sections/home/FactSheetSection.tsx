import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { onePagers } from '@/data/onePagers';
import brochure from '@/assets/images/home/factsheet-brochure.jpg';

export default function FactSheetSection() {
  const { t, language } = useLanguage();

  return (
    <section
      className="relative py-16 lg:py-20 overflow-hidden"
      style={{
        backgroundColor: '#123a7a',
        backgroundImage:
          'repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 14px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <img
              src={brochure}
              alt={t('home.factsheet.title')}
              className="w-full max-w-md rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white"
          >
            <p
              className="font-bold uppercase tracking-[0.15em] text-base md:text-lg mb-1"
              style={{ color: '#FFDB60' }}
            >
              {t('home.factsheet.eyebrow')}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide mb-5">
              {t('home.factsheet.heading')}
            </h2>
            <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-8 max-w-lg">
              {t('home.factsheet.subtitle')}
            </p>
            <a
              href={onePagers.welcomePackage[language]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-900 font-semibold px-7 py-4 rounded-lg transition-transform duration-200 hover:scale-[1.03]"
              style={{ background: '#FFFFFF' }}
            >
              <Download className="w-5 h-5 mr-2 flex-shrink-0" />
              {t('home.hero.download')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
