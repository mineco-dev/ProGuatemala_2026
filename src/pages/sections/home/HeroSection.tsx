import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle } from 'lucide-react';
import { ContactModal } from '@/components/ContactModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { HOME_VIDEO_URL } from '@/data/home';
import { onePagers } from '@/data/onePagers';

export default function HeroSection() {
  const { t, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative text-white py-20 lg:py-32" style={{ background: '#0f5ce1' }}>
      <div className="absolute inset-0 bg-black opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('home.hero.title')}{' '}
              <span style={{ color: '#B7FFFF' }}>{t('home.hero.highlight')}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">{t('home.hero.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={onePagers.welcomePackage[language]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                style={{ background: '#FFFFFF' }}
              >
                <Download className="w-5 h-5 mr-2" />
                {t('home.hero.download')}
              </a>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="border border-white text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center cursor-pointer"
                style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.color = '#021049';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('home.hero.contact')}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20">
              <div className="aspect-video bg-black/20 rounded-2xl mb-6 relative overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={HOME_VIDEO_URL}
                  title="ProGuatemala Video Institucional"
                  frameBorder="0"
                  allow="autoplay"
                  allowFullScreen
                  className="rounded-2xl"
                />
              </div>
              <p className="text-sm text-blue-100 text-center">{t('home.hero.videoCaption')}</p>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        language={language}
      />
    </section>
  );
}
