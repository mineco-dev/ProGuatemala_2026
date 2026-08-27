import { motion } from 'framer-motion';
import { TableauEmbed } from '@/components/layouts/TableauEmbed';
import { useLanguage } from '@/contexts/LanguageContext';
import { dashboards, tableauLanguage } from '@/data/dashboards';

export default function InvestmentMapSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('home.map.title')}</h2>
          <p className="text-xl text-gray-600">{t('home.map.subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full"
        >
          <div className="p-6 text-white" style={{ background: '#021049' }}>
            <h3 className="text-xl font-semibold">{t('home.map.boxTitle')}</h3>
            <p className="text-blue-100">{t('home.map.boxSubtitle')}</p>
          </div>
          <div className="p-4 md:p-6 w-full">
            <div className="bg-gray-100 rounded-xl overflow-hidden min-h-[650px] w-full">
              <TableauEmbed
                vizName={dashboards.fdi[language]}
                title={t('home.map.boxTitle')}
                aspectRatio={0.75}
                language={tableauLanguage(language)}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
