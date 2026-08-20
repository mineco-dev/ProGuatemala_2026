import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { incentivePrograms } from '@/data/legalIncentives';

export default function IncentiveProgramsSection() {
  const { t } = useLanguage();
  const programs = useLocalized(incentivePrograms);
  const [activeIncentive, setActiveIncentive] = useState(0);

  const current = programs[activeIncentive];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('legal.programs.title')}
          subtitle={t('legal.programs.subtitle')}
        />

        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          {programs.map((program, index) => (
            <button
              key={program.name}
              onClick={() => setActiveIncentive(index)}
              className={`px-6 py-4 font-medium transition-colors duration-200 border-b-2 ${
                activeIncentive === index
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-blue-600'
              }`}
            >
              <span className="text-sm sm:text-base">{program.name}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={activeIncentive}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{current.name}</h3>
              <p className="text-gray-600 mb-6">{current.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">{t('legal.programs.requirements')}</h4>
                <ul className="space-y-2">
                  {current.requirements.map((requirement) => (
                    <li key={requirement} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">{t('legal.programs.sectors')}</h4>
                <div className="flex flex-wrap gap-2">
                  {current.sectors.map((sector) => (
                    <span
                      key={sector}
                      className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-support-50 p-8">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-600" />
                {t('legal.programs.benefits')}
              </h4>
              <ul className="space-y-3">
                {current.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-support-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
