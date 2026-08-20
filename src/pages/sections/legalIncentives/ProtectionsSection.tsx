import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { protections } from '@/data/legalIncentives';

export default function ProtectionsSection() {
  const { t } = useLanguage();
  const items = useLocalized(protections);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('legal.protections.title')}
          subtitle={t('legal.protections.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((protection, index) => {
            const Icon = protection.icon;
            return (
              <motion.div
                key={protection.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-teal-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{protection.title}</h3>
                <p className="text-gray-600 text-sm">{protection.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
