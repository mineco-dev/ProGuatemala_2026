import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ctaStrip from '@/assets/images/IMAGENES PAGINA PROGUATEMALA/NOSOTROS/BANNER.jpg';

export default function StrategyDownloadSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-16 bg-primary-500 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaStrip})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E25]/92 via-[#11223B]/78 to-[#166E58]/50" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-[0.12em] mb-6 text-sector-3">
            {t('about.strategy.title')}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {t('about.strategy.subtitle')}
          </p>
          <button className="bg-sector-3 text-white hover:brightness-110 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center mx-auto">
            <Download className="w-5 h-5 mr-2" />
            {t('about.strategy.download')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
