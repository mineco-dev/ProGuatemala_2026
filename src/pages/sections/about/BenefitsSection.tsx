import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { benefits } from '@/data/about';

export default function BenefitsSection() {
  const { t } = useLanguage();
  const items = useLocalized(benefits);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('services.benefits.title')}
          subtitle={t('services.benefits.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 flex flex-col items-center"
              >
                {/* Estilos inline: inmunes a la herencia y a la purga de CSS */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 border shadow-sm shrink-0"
                  style={{ backgroundColor: benefit.hexBg, borderColor: benefit.hexBorder }}
                >
                  <Icon
                    size={32}
                    className="w-8 h-8 shrink-0"
                    style={{ color: benefit.hexColor, stroke: benefit.hexColor }}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
