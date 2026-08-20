import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import FactSheetEs from '@/assets/files/FACT SHEET EN ESPAÑOL.pdf';

export default function FactSheetCard() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="text-center mt-16"
    >
      <div className="rounded-2xl p-8 shadow-xl border border-gray-100 bg-white">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('home.factsheet.title')}</h3>
        <p className="text-gray-600 mb-6">{t('home.factsheet.subtitle')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={FactSheetEs}
            download="FACT SHEET EN ESPAÑOL.pdf"
            className="text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center border-2 hover:brightness-110"
            style={{ background: '#0f5ce1', borderColor: '#0f5ce1' }}
          >
            <Download className="w-5 h-5 mr-2" />
            {t('home.factsheet.download')}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
