import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { advantages } from '@/data/whyGuatemala';

export default function AdvantagesSection() {
  const { t } = useLanguage();
  const items = useLocalized(advantages);

  return (
    <section id="advantages-grid" className="section-premium bg-white scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          variant="premium"
          title={t('why.advantages.title')}
          subtitle={t('why.advantages.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card-premium p-10 hover-lift"
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`bg-gradient-to-br ${advantage.color} w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{advantage.description}</p>
                    {advantage.details.length > 0 && (
                      <ul className="space-y-3">
                        {advantage.details.map((detail) => (
                          <li key={detail} className="flex items-center text-gray-700">
                            <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
