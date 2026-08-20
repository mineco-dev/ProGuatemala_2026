import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import type { TranslationKey } from '@/i18n';
import type { KeyOpportunity, OpportunityPotential } from '@/types/sectorDetail';

const POTENTIAL_BADGE: Record<OpportunityPotential, string> = {
  'Muy Alto': 'bg-sector-3-soft text-sector-3',
  Alto: 'bg-sector-1-soft text-sector-2',
  Medio: 'bg-sector-4-soft text-gray-900',
};

/** El nivel se guarda en espanol en los datos; aqui se traduce para mostrarlo. */
const POTENTIAL_LABEL: Record<OpportunityPotential, TranslationKey> = {
  'Muy Alto': 'sectorDetail.potential.veryHigh',
  Alto: 'sectorDetail.potential.high',
  Medio: 'sectorDetail.potential.medium',
};

interface OpportunitiesSectionProps {
  opportunities: KeyOpportunity[];
}

export default function OpportunitiesSection({ opportunities }: OpportunitiesSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('sectorDetail.opportunities.title')} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{opportunity.title}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    POTENTIAL_BADGE[opportunity.potential]
                  }`}
                >
                  {t(POTENTIAL_LABEL[opportunity.potential])}
                </span>
              </div>
              <p className="text-gray-600">{opportunity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
