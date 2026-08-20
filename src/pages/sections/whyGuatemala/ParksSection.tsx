import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageGalleryModal from '@/components/ui/ImageGalleryModal';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { parks } from '@/data/whyGuatemala';
import type { Park } from '@/types/whyGuatemala';

export default function ParksSection() {
  const { t } = useLanguage();
  const parkList = useLocalized(parks);
  const [activePark, setActivePark] = useState<Park | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('why.parks.title')}
          subtitle={t('why.parks.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {parkList.map((park) => (
            <motion.button
              key={park.id}
              type="button"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => setActivePark(park)}
              className="group text-left bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src={park.images[0]}
                  alt={park.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                    {park.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{park.description}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ImageGalleryModal
        isOpen={activePark !== null}
        onClose={() => setActivePark(null)}
        title={activePark?.title ?? ''}
        description={activePark?.description}
        images={activePark?.images ?? []}
        highlights={activePark?.highlights}
      />
    </section>
  );
}
