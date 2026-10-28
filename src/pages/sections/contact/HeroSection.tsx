import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import contactImg from '@/assets/images/IMAGENES PAGINA PROGUATEMALA/CONTACTO/CONTACTO.jpg';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden min-h-[520px] aspect-[8000/3030] flex flex-col justify-center bg-primary-500 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactImg})` }}
        />
      </motion.div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
      </div>
    </section>
  );
}
