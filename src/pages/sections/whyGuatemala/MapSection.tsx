import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { TableauEmbed } from '@/components/layouts/TableauEmbed';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { ports } from '@/data/whyGuatemala';
import { dashboards, tableauLanguage } from '@/data/dashboards';
import InfrastructureMap from './InfrastructureMap';

export default function MapSection() {
  const { t, language } = useLanguage();
  const portList = useLocalized(ports);

  return (
    <section
      id="stats-grid"
      className="py-16"
      style={{ background: 'linear-gradient(135deg, #FCD755 0%, #FABE0D 55%, #EFA81E 100%)' }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.15em] text-white mb-3 drop-shadow-sm">
            {t('why.map.title')}
          </h2>
          <p className="text-lg text-white/90">{t('why.map.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Tablero Tableau */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-black/5">
              <div className="p-6 sm:p-8 bg-[#11223B] text-white">
                <h3 className="text-xl sm:text-2xl font-bold">{t('why.map.boxTitle')}</h3>
                <p className="text-sm sm:text-base text-blue-200 mt-1">
                  {t('why.map.boxSubtitle')}
                </p>
              </div>
              <div className="p-4 sm:p-6 bg-slate-50/50">
                <TableauEmbed
                  vizName={dashboards.departmentStats[language]}
                  title={t('why.map.boxTitle')}
                  // 1657x878, la proporcion real del tablero publicado.
                  aspectRatio={0.53}
                  language={tableauLanguage(language)}
                  params={{ publish: 'yes' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Mapa dinámico de infraestructura + conectividad marítima */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="bg-white border border-black/5 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {t('why.map.infra.title')}
              </h3>

              <InfrastructureMap />

              <h4 className="text-lg font-bold text-gray-900 mt-1 mb-4 text-center">
                {t('why.map.maritime')}
              </h4>

              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {portList.map((port) => (
                  <li
                    key={port.name}
                    className="text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-150/50 shadow-sm"
                  >
                    <div className="flex items-center mb-1.5">
                      <MapPin className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">{port.name}</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-6 font-medium">
                      {t('why.map.load')}:{' '}
                      <span className="text-emerald-600 font-bold">{port.load}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
