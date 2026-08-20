import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';

interface ValueChainSectionProps {
  steps: string[];
}

export default function ValueChainSection({ steps }: ValueChainSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('sectorDetail.valueChain.title')}
          subtitle={t('sectorDetail.valueChain.subtitle')}
        />

        <div className="flex flex-wrap justify-center items-center gap-4">
          {steps.map((step, index) => (
            <Fragment key={step}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-sector-1-soft text-sector-2 px-6 py-3 rounded-lg font-medium text-center min-w-[160px]"
              >
                {step}
              </motion.div>
              {index < steps.length - 1 && (
                <ArrowLeft className="w-6 h-6 text-gray-400 transform rotate-180" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
