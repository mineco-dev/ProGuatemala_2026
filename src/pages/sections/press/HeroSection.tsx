import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import prensaImg from '@/assets/images/IMAGENES PAGINA PROGUATEMALA/PRENSA/PRENSA-01.jpg';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden min-h-[520px] aspect-[8000/3030] flex flex-col justify-center bg-primary-500 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${prensaImg})` }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl text-white lg:text-6xl font-bold mb-6">
            {t('press.hero.title')} <span className="text-yellow-500">{t('press.hero.highlight')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto">
            {t('press.hero.subtitle')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
