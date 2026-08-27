import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Images } from 'lucide-react';
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {parkList.map((park, index) => (
            <motion.button
              key={park.id}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: Math.min(index, 3) * 0.08 }}
              onClick={() => setActivePark(park)}
              aria-label={`${park.title} — ${t('why.parks.viewGallery')}`}
              className="group relative text-left bg-white rounded-2xl overflow-hidden flex flex-col ring-1 ring-gray-200 shadow-sm transition-all duration-300 hover:shadow-2xl hover:ring-primary-500/30 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            >
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src={park.images[0]}
                  alt={park.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />

                {/* Degradado permanente: da profundidad y sostiene el titulo. */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/15 to-transparent" />

                {/* Contador de fotografias */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/15 text-white text-xs font-semibold px-2.5 py-1.5 rounded-full backdrop-blur-md ring-1 ring-white/20">
                  <Images className="w-3.5 h-3.5" />
                  {park.images.length}{' '}
                  {park.images.length === 1 ? t('why.parks.photo') : t('why.parks.photos')}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-white text-lg font-bold leading-snug drop-shadow-sm">
                    {park.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <p className="text-sm text-gray-600 leading-relaxed">{park.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {park.highlights.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-semibold text-primary-500 bg-primary-50 px-2.5 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <span className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-sm font-bold text-primary-500 transition-colors group-hover:text-primary-400">
                  {t('why.parks.viewGallery')}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ImageGalleryModal
        isOpen={activePark !== null}
        onClose={() => setActivePark(null)}
        title={activePark?.title ?? ''}
        subtitle={activePark?.description}
        description={activePark?.overview}
        images={activePark?.images ?? []}
        highlights={activePark?.highlights}
      />
    </section>
  );
}
