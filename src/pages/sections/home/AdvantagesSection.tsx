import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { guatemalaAdvantages } from '@/data/home';
import advantagesBg from '@/assets/images/home/advantages-bg.jpg';

/** Separa el primer termino del titulo para darle el acento dorado del diseno. */
function splitTitle(title: string): [string, string] {
  const [first, ...rest] = title.split(' ');
  return [first, rest.join(' ')];
}

export default function AdvantagesSection() {
  const { t } = useLanguage();

  return (
    <section
      className="relative py-20 bg-gray-100 bg-no-repeat bg-right bg-contain"
      style={{ backgroundImage: `url(${advantagesBg})` }}
    >
      <div className="absolute inset-0 bg-gray-100/40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight" style={{ color: '#2BB9DB' }}>
            {t('home.advantages.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('home.advantages.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {guatemalaAdvantages.map((advantage, index) => {
            const [firstWord, restWords] = splitTitle(t(advantage.titleKey));

            return (
              <motion.div
                key={advantage.id}
                id={advantage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="scroll-mt-24 rounded-2xl p-7 border border-dashed border-white/25 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                style={{ background: '#11223B' }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md mb-6"
                  style={{ background: advantage.iconBg }}
                >
                  <img src={advantage.iconImg} alt="" className="w-9 h-9" />
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
                  <span style={{ color: advantage.iconBg }}>{firstWord}</span>{' '}
                  <span className="text-gray-300">{restWords}</span>
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  {t(advantage.descriptionKey)}
                </p>

                <ul className="space-y-2.5">
                  {advantage.detailKeys.map((detailKey) => (
                    <li key={detailKey} className="flex items-start">
                      <span
                        className="w-1.5 h-1.5 rounded-full mr-3 mt-1.5 flex-shrink-0"
                        style={{ background: '#97DCEE' }}
                      />
                      <span className="text-gray-200 text-sm leading-relaxed">{t(detailKey)}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
