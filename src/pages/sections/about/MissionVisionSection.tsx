import { motion } from 'framer-motion';
import { Lightbulb, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MissionVisionSection() {
  const { t } = useLanguage();

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundColor: '#11223B',
        backgroundImage:
          'repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 14px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-[0.12em] text-white mb-6">
            {t('about.essence.title')}
          </h2>
          <p className="text-lg text-white/85 leading-relaxed">
            {t('about.essence.intro.before')}{' '}
            <strong className="text-white font-semibold">ProGuatemala</strong>{' '}
            {t('about.essence.intro.after')}
          </p>
        </motion.div>

        {/* Cita destacada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-8 sm:p-10 text-white mb-10 shadow-xl text-center"
          style={{ background: '#3DB08B' }}
        >
          <p className="text-lg sm:text-xl font-medium italic leading-relaxed">
            &ldquo;{t('about.commitment')}&rdquo;
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Misión — tarjeta verde */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 sm:p-10 shadow-lg transition-all duration-300 hover:shadow-2xl"
            style={{ background: '#3DB08B' }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div
                className="w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center shadow-md"
                style={{ background: '#11223B' }}
              >
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider text-white">
                {t('about.mission.title')}
              </h3>
            </div>
            <p className="text-white/90 leading-relaxed text-sm sm:text-base">
              {t('about.mission.body')}
            </p>
          </motion.div>

          {/* Visión — tarjeta blanca */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 sm:p-10 shadow-lg bg-white transition-all duration-300 hover:shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-5">
              <div
                className="w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center shadow-md"
                style={{ background: '#11223B' }}
              >
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider" style={{ color: '#11223B' }}>
                {t('about.vision.title')}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {t('about.vision.body')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
