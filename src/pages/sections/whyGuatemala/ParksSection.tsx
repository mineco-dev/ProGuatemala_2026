import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ImageGalleryModal from '@/components/ui/ImageGalleryModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { parks } from '@/data/whyGuatemala';
import type { Park } from '@/types/whyGuatemala';

export default function ParksSection() {
  const { t } = useLanguage();
  const parkList = useLocalized(parks);
  const [activePark, setActivePark] = useState<Park | null>(null);

  return (
    <section
      id="why-parques"
      className="py-16 scroll-mt-20"
      style={{ background: '#11223B' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.12em] text-white mb-3">
            {t('why.parks.title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t('why.parks.subtitle')}</p>
        </div>

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
              className="group text-left rounded-2xl border p-4 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#11223B]"
              style={{ borderColor: '#FABE0D', background: 'rgba(255,255,255,0.02)' }}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/20 mb-4">
                <img
                  src={park.images[0]}
                  alt={park.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
              </div>

              <h3 className="text-white text-lg font-bold leading-snug mb-3">{park.title}</h3>

              <div className="h-px w-full mb-4" style={{ background: 'rgba(250,190,13,0.45)' }} />

              <p className="text-sm text-gray-300 leading-relaxed">{park.description}</p>

              <span className="mt-5 pt-4 border-t border-white/10 flex items-center gap-1.5 text-sm font-medium text-gray-300 transition-colors group-hover:text-white">
                {t('why.parks.viewGallery')}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
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
