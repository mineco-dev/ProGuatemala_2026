import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { ContactModal } from '@/components/ContactModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { onePagers } from '@/data/onePagers';

export default function CtaSection() {
  const { t, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-r from-[#1464df] to-[#058490] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            {t('why.cta.title')}
          </h2>

          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed font-normal">
            {t('why.cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={onePagers.welcomePackage[language]}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-[#1464df] hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center shadow-md text-base"
            >
              <Download className="w-5 h-5 mr-2.5 stroke-[2.5]" />
              {t('why.cta.download')}
            </a>

            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto border border-white/70 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center text-base"
              >
                {t('why.cta.advisor')}
                <ArrowRight className="w-5 h-5 ml-2.5 stroke-[2]" />
              </button>

              <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                language={language}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
