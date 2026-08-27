import { motion } from 'framer-motion';
import { TableauEmbed } from '@/components/layouts/TableauEmbed';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { dashboards, tableauLanguage } from '@/data/dashboards';

export default function ComparisonSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('why.comparison.title')}
          subtitle={t('why.comparison.subtitle')}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="p-4 sm:p-6 bg-slate-50/50">
            <TableauEmbed
              vizName={dashboards.regionalComparison[language]}
              title={t('why.comparison.title')}
              aspectRatio={0.7725}
              minMobileHeight={877}
              language={tableauLanguage(language)}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
