import { motion } from 'framer-motion';
import { TableauEmbed } from '@/components/layouts/TableauEmbed';
import { useLanguage } from '@/contexts/LanguageContext';
import { dashboards, tableauLanguage } from '@/data/dashboards';

export default function DashboardSection() {
  const { t, language } = useLanguage();

  return (
    <section
      className="py-16"
      style={{ background: 'linear-gradient(135deg, #C7B6D9 0%, #BBA4CE 50%, #A98FC4 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.15em] text-white mb-3 drop-shadow-sm">
            {t('sectors.dashboard.title')}
          </h2>
          <p className="text-lg text-white/90">{t('sectors.dashboard.subtitle')}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-black/5"
        >
          <div className="p-4 sm:p-6 bg-white">
            <TableauEmbed
              vizName={dashboards.strategicSectors[language]}
              title={t('sectors.dashboard.name')}
              aspectRatio={0.75}
              minMobileHeight={600}
              language={tableauLanguage(language)}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
