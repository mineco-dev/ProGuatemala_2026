import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { guatemalaAdvantages } from '@/data/home';
import AdvantagesHotspotMap from './AdvantagesHotspotMap';
import FactSheetCard from './FactSheetCard';

/** Cuanto tiempo permanece resaltada una tarjeta tras hacer clic en su hotspot. */
const HIGHLIGHT_MS = 1000;

export default function AdvantagesSection() {
  const { t } = useLanguage();
  const [highlightedAdvantage, setHighlightedAdvantage] = useState<string | null>(null);

  const handleHotspotClick = useCallback((targetId: string) => {
    setHighlightedAdvantage(targetId);
    window.setTimeout(() => {
      setHighlightedAdvantage((current) => (current === targetId ? null : current));
    }, HIGHLIGHT_MS);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {t('home.advantages.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('home.advantages.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('home.advantages.subtitle')}
          </p>
          <AdvantagesHotspotMap onHotspotClick={handleHotspotClick} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guatemalaAdvantages.map((advantage, index) => {
            const Icon = advantage.icon;
            const isHighlighted = highlightedAdvantage === advantage.id;

            return (
              <motion.div
                key={advantage.id}
                id={advantage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative scroll-mt-24 rounded-2xl p-8 border border-white/50 backdrop-blur-sm group overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${advantage.bgColor} ${
                  isHighlighted
                    ? 'shadow-[0_0_0_4px_rgba(15,92,225,0.18),0_0_38px_rgba(15,92,225,0.35)]'
                    : 'shadow-xl hover:shadow-2xl'
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div
                    className={`w-full h-full ${advantage.color} rounded-full blur-2xl transform translate-x-8 -translate-y-8`}
                  />
                </div>

                <div className="relative flex items-start justify-between mb-6">
                  <div
                    className={`${advantage.color} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}
                  >
                    <Icon className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-support-700">{t(advantage.statKey)}</div>
                    <div className="text-xs text-gray-500 font-medium">
                      {t('home.advantages.featured')}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                    {t(advantage.titleKey)}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-base">
                    {t(advantage.descriptionKey)}
                  </p>

                  <ul className="space-y-3">
                    {advantage.detailKeys.map((detailKey) => (
                      <li key={detailKey} className="flex items-start">
                        <div className="w-2 h-2 bg-support-500 rounded-full mr-3 mt-2 flex-shrink-0 shadow-sm" />
                        <span className="text-gray-700 text-sm font-medium leading-relaxed">
                          {t(detailKey)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute inset-0 bg-support-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" />
              </motion.div>
            );
          })}
        </div>

        <FactSheetCard />
      </div>
    </section>
  );
}
