import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { services } from '@/data/services';

export default function ServiceTabsSection() {
  const { t } = useLanguage();
  const items = useLocalized(services);
  const [activeTab, setActiveTab] = useState(0);

  const current = items[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section className="section-premium bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center mb-16 bg-white rounded-2xl p-2 shadow-lg">
          {items.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-3 px-6 py-4 font-semibold transition-all duration-300 rounded-xl transform hover:scale-105 ${
                  activeTab === index
                    ? 'bg-support-500 text-white shadow-lg scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="hidden sm:inline">{service.title}</span>
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {current.image && (
            <div className="card-premium overflow-hidden mb-8 bg-white">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-64 md:h-96 object-contain"
              />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="card-premium p-10">
              <div className="flex items-center space-x-6 mb-8">
                <CurrentIcon className="w-16 h-16 text-white bg-support-500 p-4 rounded-2xl shadow-lg" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{current.title}</h2>
                </div>
              </div>

              <div className="space-y-6 mb-10">
                <p className="text-gray-700 leading-relaxed text-lg">{current.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-200"
                >
                  {t('services.contactAdvisor')}
                </Link>
              </div>
            </div>

            <div className={`card-premium p-10 bg-gradient-to-br ${current.bgColor}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <div
                  className={`bg-gradient-to-br ${current.color} w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg`}
                >
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                {t('services.includes')}
              </h3>
              <div className="space-y-4">
                {current.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-support-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
