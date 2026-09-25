import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

import { sectors } from '@/data/sectorsData';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';

export default function OnePagersSection() {
  const { t } = useLanguage();
  const allSectors = useLocalized(sectors);

  // Solo los sectores con ficha publicada en el idioma activo.
  const sectorsWithOnePager = allSectors.filter((sector) => sector.pdfUrl);

  if (sectorsWithOnePager.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('sectors.onePagers.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('sectors.onePagers.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectorsWithOnePager.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <motion.a
                key={sector.id}
                href={sector.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-sector-6 hover:shadow-md"
              >
                <div
                  className="h-16 w-16 flex-shrink-0 rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${sector.image})` }}
                />
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2 text-sector-6">
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <h3 className="truncate font-semibold text-gray-900">
                      {sector.name}
                    </h3>
                  </div>
                  <span className="inline-flex items-center text-sm font-medium text-sector-6 group-hover:underline">
                    <Download className="mr-1 h-4 w-4" />
                    {t('sectors.onePagers.download')}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
