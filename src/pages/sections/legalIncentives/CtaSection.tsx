import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CtaSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            {t('legal.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            {t('legal.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              {t('legal.cta.download')}
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center">
              {t('legal.cta.consult')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
