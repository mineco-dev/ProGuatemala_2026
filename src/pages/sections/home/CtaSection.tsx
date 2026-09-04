import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT_MAILTO } from '@/data/contact';

export default function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 text-white" style={{ background: '#021049' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('home.cta.title')}</h2>
          <p className="text-xl mb-8 text-white">{t('home.cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CONTACT_MAILTO}
              className="text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center cursor-pointer"
              style={{ background: '#FFDB60' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#FFE68A')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#FFDB60')}
            >
              <Mail className="w-5 h-5 mr-2" />
              {t('home.cta.info')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
