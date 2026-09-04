import { motion } from 'framer-motion';
import { BarChart3, Download, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT_MAILTO } from '@/data/contact';
import type { SectorDetailContent } from '@/types/sectorDetail';

interface HeroSectionProps {
  sector: SectorDetailContent;
  onShowDashboard: () => void;
}

export default function HeroSection({ sector, onShowDashboard }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 bg-gradient-to-br from-sector-6 via-sector-1 to-sector-3 text-white">
      <div className="absolute inset-0 bg-black opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{sector.name}</h1>
            <p className="text-xl text-white/80 mb-8">{sector.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-sector-4 hover:brightness-110 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                {t('sectorDetail.downloadSheet')}
              </button>
              <button
                className="bg-white/90 text-sector-6 hover:bg-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                onClick={onShowDashboard}
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                {t('sectorDetail.dashboard')}
              </button>
              <a
                href={CONTACT_MAILTO}
                className="border border-white text-white hover:bg-white hover:text-sector-6 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('sectorDetail.specialist')}
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={sector.image}
                alt={sector.name}
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
