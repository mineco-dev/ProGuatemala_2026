import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { TableauEmbed } from '@/components/layouts/TableauEmbed';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { ports } from '@/data/whyGuatemala';
import InfrastructureMap from './InfrastructureMap';

export default function MapSection() {
  const { t } = useLanguage();
  const portList = useLocalized(ports);

  return (
    <section id="stats-grid" className="py-16 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('why.map.title')}
          subtitle={t('why.map.subtitle')}
        />

        <div className="grid grid-cols-1 gap-8">
          {/* Tableau Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-6 sm:p-8 bg-[#0B1B3D] text-white">
                <h3 className="text-xl sm:text-2xl font-bold">{t('why.map.boxTitle')}</h3>
                <p className="text-sm sm:text-base text-blue-200 mt-1">
                  {t('why.map.boxSubtitle')}
                </p>
              </div>
              <div className="p-4 sm:p-6 bg-slate-50/50">
                <TableauEmbed
                  vizName="EstadsticasdepartamentosatractivosFinalizado/PolosdeDesarrolloEconmicoPotencialProductivoRegional"
                  aspectRatio={0.65}
                  language="en-US"
                  staticImageUrl="https://public.tableau.com/static/images/Es/EstadsticasdepartamentosatractivosFinalizado/PolosdeDesarrolloEconmicoPotencialProductivoRegional/1.png"
                  params={{ filter: 'publish=yes' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Conectividad Marítima */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8"
          >
            <div className="bg-support-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
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
                    className="text-gray-700 bg-white p-4 rounded-xl border border-gray-150/50 shadow-sm"
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
