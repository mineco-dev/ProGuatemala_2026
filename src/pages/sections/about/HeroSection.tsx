import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Sparkles, Target, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { TranslationKey } from '@/i18n';
import aboutImg from '@/assets/images/portadas/4. ACERCA DE PROGUATEMALA.png';

const HIGHLIGHTS: Array<{ icon: LucideIcon; titleKey: TranslationKey; descKey: TranslationKey }> = [
  { icon: Compass, titleKey: 'about.hero.card1.title', descKey: 'about.hero.card1.desc' },
  { icon: Sparkles, titleKey: 'about.hero.card2.title', descKey: 'about.hero.card2.desc' },
  { icon: ShieldCheck, titleKey: 'about.hero.card3.title', descKey: 'about.hero.card3.desc' },
];

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 py-20 lg:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: `url(${aboutImg})` }}
      />

      {/* Tinte azul/teal muy tenue para conservar luminosidad de la foto */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/35 via-blue-800/25 to-teal-800/25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
        >
          {t('about.hero.title')}{' '}
          <span className="text-[#fcd34d] drop-shadow-md">{t('about.hero.highlight')}</span>
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
              className="p-6 rounded-2xl bg-slate-900/35 backdrop-blur-md border border-white/20 shadow-xl hover:bg-slate-900/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-300/20 border border-amber-300/40 flex items-center justify-center mb-4 text-amber-300">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{t(titleKey)}</h3>
              <p className="text-slate-100 text-sm leading-relaxed">{t(descKey)}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
            <Users className="w-5 h-5 text-white" />
            <span>{t('about.hero.team')}</span>
          </button>

          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/50 hover:bg-slate-900/70 backdrop-blur-md border border-white/30 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
            <Target className="w-5 h-5 text-amber-300" />
            <span>{t('about.hero.mission')}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
