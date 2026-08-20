import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { applicationSteps } from '@/data/legalIncentives';

export default function ApplicationProcessSection() {
  const { t } = useLanguage();
  const steps = useLocalized(applicationSteps);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('legal.process.title')}
          subtitle={t('legal.process.subtitle')}
        />

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-6 bg-white rounded-xl p-6 shadow-md"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="flex items-center text-support-500 font-medium">
                  <Clock className="w-4 h-4 mr-2" />
                  {item.time}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
