import { motion } from 'framer-motion';
import { TrendingUp, Users, Package, Globe, Landmark } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { statistics } from '@/data/whyGuatemala';

/** Color de marca + icono por tarjeta (orden fijo: PIB, Población, Export. bienes, Export. servicios, IED). */
const CARD_STYLES: Array<{ accent: string; icon: LucideIcon }> = [
  { accent: '#FABE0D', icon: TrendingUp }, // dorado
  { accent: '#D7E3AA', icon: Users },      // verde crema
  { accent: '#2BB9DB', icon: Package },    // cian
  { accent: '#3DB08B', icon: Globe },      // verde
  { accent: '#BBA4CE', icon: Landmark },   // morado
];

export default function StatisticsSection() {
  const { t } = useLanguage();
  const items = useLocalized(statistics);

  return (
    <section
      id="why-estadisticas"
      className="section-premium bg-gradient-to-b from-gray-50 to-gray-100 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-[0.12em] mb-4"
            style={{ color: '#11223B' }}
          >
            {t('why.stats.title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t('why.stats.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((stat, index) => {
            const { accent, icon: Icon } = CARD_STYLES[index % CARD_STYLES.length];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col min-h-[320px] rounded-2xl overflow-hidden shadow-xl"
                style={{ background: '#11223B' }}
              >
                {/* Cuerpo */}
                <div className="flex-1 flex flex-col items-center text-center px-4 pt-7 pb-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md"
                    style={{ background: accent }}
                  >
                    <Icon className="w-7 h-7" style={{ color: '#11223B' }} strokeWidth={2} />
                  </div>

                  <h4
                    className="text-[11px] font-bold uppercase tracking-wider leading-tight"
                    style={{ color: accent }}
                  >
                    {stat.label}
                  </h4>

                  <div className="mt-auto pt-6">
                    <div className="text-2xl lg:text-[1.65rem] font-extrabold text-white leading-none whitespace-pre-line">
                      {stat.value}
                    </div>
                    <div
                      className="text-2xl lg:text-[1.65rem] font-extrabold leading-none mt-1"
                      style={{ color: accent }}
                    >
                      {stat.suffix}
                    </div>
                  </div>
                </div>

                {/* Franja de color con el dato destacado */}
                {stat.badge && (
                  <div className="px-3 py-2 text-center" style={{ background: accent }}>
                    <span className="text-[11px] font-bold" style={{ color: '#11223B' }}>
                      {stat.badge}
                    </span>
                  </div>
                )}

                {/* Pie con la aclaración */}
                <div className="px-3 py-2.5 text-center">
                  <span className="text-[10px] font-medium text-gray-400">
                    {stat.subtitle || ' '}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-sm text-gray-500 mt-8 text-center">{t('why.stats.source')}</p>
      </div>
    </section>
  );
}
