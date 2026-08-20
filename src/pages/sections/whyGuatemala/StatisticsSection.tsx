import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { statistics } from '@/data/whyGuatemala';

export default function StatisticsSection() {
  const { t } = useLanguage();
  const items = useLocalized(statistics);

  return (
    <section className="section-premium bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          variant="premium"
          title={t('why.stats.title')}
          subtitle={t('why.stats.subtitle')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-4 bg-gray-50/50">
          {items.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center justify-between min-h-[340px] hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-[#2563eb] w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm shadow-blue-200">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>

              <div className="flex-1 flex flex-col justify-center w-full">
                <h4 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider mb-3 px-2">
                  {stat.label}
                </h4>
                <div className="text-3xl font-bold text-gray-900 tracking-tight leading-tight whitespace-pre-line">
                  {stat.value}
                </div>
                <div className="text-3xl font-bold text-[#b5944a] tracking-tight mt-0.5 mb-4">
                  {stat.suffix}
                </div>
              </div>

              <div className="w-full mt-auto flex flex-col items-center gap-2">
                {stat.badge && (
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50/80 border border-emerald-100/50 px-3 py-1 rounded-full inline-block">
                    {stat.badge}
                  </span>
                )}
                <p className="text-[11px] text-gray-400 font-medium tracking-normal min-h-[16px]">
                  {stat.subtitle || '\u00A0'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-6 text-center">{t('why.stats.source')}</p>
      </div>
    </section>
  );
}
