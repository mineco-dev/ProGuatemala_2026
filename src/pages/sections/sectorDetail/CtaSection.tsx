import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CtaSectionProps {
  sectorName: string;
}

export default function CtaSection({ sectorName }: CtaSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-r from-sector-6 to-sector-3 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('sectorDetail.cta.title.before')} {sectorName}?
          </h2>
          <p className="text-xl mb-8 text-white/80">
            {t('sectorDetail.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sector-6 hover:brightness-95 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              {t('sectorDetail.cta.download')}
            </button>
            <Link
              to="/contact"
              className="border border-white text-white hover:bg-white hover:text-sector-6 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('sectorDetail.cta.specialist')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
