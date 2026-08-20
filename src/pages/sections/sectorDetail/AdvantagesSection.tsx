import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { CaseStudy } from '@/types/sectorDetail';

interface AdvantagesSectionProps {
  sectorName: string;
  advantages: string[];
  caseStudies: CaseStudy[];
}

export default function AdvantagesSection({
  sectorName,
  advantages,
  caseStudies,
}: AdvantagesSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('sectorDetail.advantages.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('sectorDetail.advantages.subtitle.before')} {sectorName.toLowerCase()}?
            </p>
            <ul className="space-y-4">
              {advantages.map((advantage) => (
                <li key={advantage} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-sector-3 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{advantage}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('sectorDetail.caseStudies.title')}</h3>
            <div className="space-y-6">
              {caseStudies.map((study) => (
                <div key={study.company} className="border-l-4 border-sector-6 pl-4">
                  <div className="flex items-start space-x-4 mb-3">
                    <img
                      src={study.logo}
                      alt={`${study.company} logo`}
                      className="w-12 h-12 rounded-lg object-cover border border-gray-200 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900">{study.company}</h4>
                        <span className="text-sm bg-sector-1-soft text-sector-2 px-2 py-1 rounded">
                          {study.investment}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{study.sector}</p>
                      <p className="text-gray-700">{study.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
