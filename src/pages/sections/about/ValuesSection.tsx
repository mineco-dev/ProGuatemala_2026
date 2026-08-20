import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { values, valueThemes } from '@/data/about';

export default function ValuesSection() {
  const { t } = useLanguage();
  const items = useLocalized(values);

  return (
    <section className="pt-12 pb-2 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{t('about.values.title')}</h2>
          <p className="text-lg text-slate-600">{t('about.values.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((value, index) => {
            const Icon = value.icon;
            const theme = valueThemes[index % valueThemes.length];

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${theme.cardBg} ${theme.shadowColor} rounded-3xl p-8 text-center border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-start group`}
                style={theme.styleCard}
              >
                <div
                  className={`${theme.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md shrink-0 transition-transform duration-300 group-hover:scale-105`}
                  style={theme.styleIcon}
                >
                  <Icon className="w-8 h-8 text-white" size={32} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
