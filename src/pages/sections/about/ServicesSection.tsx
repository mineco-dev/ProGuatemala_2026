import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { services } from '@/data/about';

export default function ServicesSection() {
  const { t } = useLanguage();
  const items = useLocalized(services);
  const [activeTab, setActiveTab] = useState(0);

  const currentService = items[activeTab];
  const CurrentIcon = currentService?.icon;

  return (
    <section className="section-premium bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navegacion: scroll horizontal en movil, centrada en escritorio */}
        <div className="flex items-center pt-4 pb-5 justify-start md:justify-center overflow-x-auto no-scrollbar mb-12 bg-white/80 backdrop-blur-md rounded-2xl p-2 shadow-xl border border-gray-100 gap-1 sm:gap-2">
          {items.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeTab === index;

            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`relative flex items-center space-x-2.5 px-5 py-3.5 font-semibold text-sm sm:text-base rounded-xl transition-all duration-200 whitespace-nowrap select-none shrink-0 ${
                  isActive ? 'text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/70'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-support-500 rounded-xl shadow-md"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                <Icon
                  className={`w-5 h-5 relative z-10 transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-gray-500'
                  }`}
                />
                <span className="relative z-10">{service.title}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.99 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <div className="card-premium p-8 sm:p-10 bg-white flex flex-col justify-between shadow-lg rounded-2xl border border-gray-100">
                <div>
                  <div className="flex items-center space-x-5 mb-8">
                    {CurrentIcon && (
                      <div className="bg-support-500 p-4 rounded-2xl shadow-lg shrink-0">
                        <CurrentIcon className="w-10 h-10 text-white" />
                      </div>
                    )}
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                        {currentService.title}
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-6 mb-10">
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                      {currentService.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-premium p-8 sm:p-10 !bg-sky-100/70 border border-sky-200/80 shadow-lg rounded-2xl flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div
                      className={`bg-gradient-to-br ${currentService.color} w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-md shrink-0`}
                    >
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    {t('services.includes')}
                  </h3>

                  <div className="space-y-3.5">
                    {currentService.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start space-x-4 p-4 bg-white/90 hover:bg-white rounded-xl hover:shadow-sm hover:translate-x-1.5 transition-all duration-200 border border-sky-200/50"
                      >
                        <CheckCircle className="w-5 h-5 text-sky-600 mt-0.5 shrink-0" />
                        <span className="text-gray-800 font-medium leading-relaxed text-sm sm:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
