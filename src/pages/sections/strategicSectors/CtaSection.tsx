import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT_MAILTO } from '@/data/contact';
import ctaStrip from '@/assets/images/IMAGENES PAGINA PROGUATEMALA/SECTORES/BACKGROUNDS-05.jpg';

export default function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-16 bg-primary-500 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaStrip})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E1A3B]/92 via-[#11223B]/78 to-[#3A2E5E]/50" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-[0.12em] mb-6 text-[#BBA4CE]">
            {t('sectors.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-white/80">
            {t('sectors.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#BBA4CE] text-[#11223B] hover:brightness-110 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              {t('sectors.cta.download')}
            </button>
            <a
              href={CONTACT_MAILTO}
              className="border border-white text-white hover:bg-white hover:text-sector-6 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center"
            >
              {t('sectors.cta.specialist')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
