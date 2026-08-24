import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MissionVisionSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2 block">
            {t('about.essence.eyebrow')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            {t('about.essence.title')}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t('about.essence.intro.before')}{' '}
            <strong className="text-slate-900 font-semibold">ProGuatemala</strong>{' '}
            {t('about.essence.intro.after')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-900 rounded-2xl p-8 sm:p-10 text-white mb-16 shadow-xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <p className="text-lg sm:text-xl font-medium leading-relaxed text-slate-100 text-center md:text-left">
              &ldquo;{t('about.commitment')}&rdquo;
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50/80 rounded-3xl p-8 sm:p-10 border border-blue-100 shadow-sm relative overflow-hidden group transition-all duration-300 hover:shadow-md hover:border-blue-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-600 w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center shadow-md">
                <Target className="w-7 h-7 text-white" size={28} />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-0.5">
                  {t('about.mission.eyebrow')}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">{t('about.mission.title')}</h3>
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed text-base">{t('about.mission.body')}</p>
          </motion.div>

          {/* Visión - estilos inline para que no los purgue Tailwind */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 sm:p-10 border shadow-sm relative overflow-hidden group transition-all duration-300 hover:shadow-md"
            style={{ backgroundColor: '#eff9f5', borderColor: '#bbf7d0' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center shadow-md"
                style={{ backgroundColor: '#0d785f' }}
              >
                <Eye className="w-7 h-7 !text-white" size={28} style={{ color: '#ffffff' }} />
              </div>
              <div>
                <span
                  className="text-xs font-bold tracking-wider uppercase block mb-0.5"
                  style={{ color: '#0d785f' }}
                >
                  {t('about.vision.eyebrow')}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">{t('about.vision.title')}</h3>
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed text-base">{t('about.vision.body')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
