import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Sparkles, Target, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { TranslationKey } from '@/i18n';
import aboutImg from '@/assets/images/IMAGENES PAGINA PROGUATEMALA/NOSOTROS/NOSOTROS-01.jpg';

const HIGHLIGHTS: Array<{ icon: LucideIcon; titleKey: TranslationKey; descKey: TranslationKey }> = [
  { icon: Compass, titleKey: 'about.hero.card1.title', descKey: 'about.hero.card1.desc' },
  { icon: Sparkles, titleKey: 'about.hero.card2.title', descKey: 'about.hero.card2.desc' },
  { icon: ShieldCheck, titleKey: 'about.hero.card3.title', descKey: 'about.hero.card3.desc' },
];

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden min-h-[520px] aspect-[8000/3030] flex flex-col justify-center bg-primary-500">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: `url(${aboutImg})` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
        >
          {t('about.hero.title')}{' '}
          <span className="text-[#FCD755] drop-shadow-md">{t('about.hero.highlight')}</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto mb-12 font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        >
          {t('about.hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto mb-12 text-left"
        >
          {HIGHLIGHTS.map(({ icon: Icon, titleKey, descKey }) => (
            <div
              key={titleKey}
              className="p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: '#3DB08B' }}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">{t(titleKey)}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t(descKey)}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-xl shadow-xl transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: '#3DB08B' }}
          >
            <Users className="w-5 h-5 text-white" />
            <span>{t('about.hero.team')}</span>
          </button>

          <button
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:brightness-125 hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: '#11223B' }}
          >
            <Target className="w-5 h-5" style={{ color: '#3DB08B' }} />
            <span>{t('about.hero.mission')}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
