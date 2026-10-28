import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { pillars, services } from '@/data/about';

export default function ServicesSection() {
  const { t } = useLanguage();
  const items = useLocalized(services);
  const pillarItems = useLocalized(pillars);
  const [activeTab, setActiveTab] = useState(0);

  const currentService = items[activeTab];
  const CurrentIcon = currentService?.icon;

  return (
    <section className="section-premium bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold uppercase tracking-[0.12em]"
            style={{ color: '#3DB08B' }}
          >
            {t('about.services.title')}
          </h2>
        </div>

        {/* Pilares de atencion: contexto previo a las pestanas de servicios. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {pillarItems.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${pillar.borderColor} flex flex-col justify-between`}
              >
                <div>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: '#3DB08B' }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3
                    className="text-base font-bold uppercase tracking-wider mb-3"
                    style={{ color: '#11223B' }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navegacion: scroll horizontal en movil, centrada en escritorio */}
        <div
          className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar mb-10 rounded-2xl p-2.5 shadow-xl gap-1 sm:gap-2"
          style={{ background: '#11223B' }}
        >
          {items.map((service, index) => {
            const isActive = activeTab === index;

            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`relative px-5 py-3 font-semibold text-sm sm:text-base rounded-xl transition-colors duration-200 whitespace-nowrap select-none shrink-0 ${
                  isActive ? 'text-[#11223B]' : 'text-white/80 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 rounded-xl shadow-md"
                    style={{ background: '#FABE0D' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Panel izquierdo: imagen + detalle del servicio */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                {currentService.image && (
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={currentService.image}
                      alt={currentService.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-4 mb-5">
                    {CurrentIcon && (
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-md"
                        style={{ background: '#FABE0D' }}
                      >
                        <CurrentIcon className="w-7 h-7" style={{ color: '#11223B' }} />
                      </div>
                    )}
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: '#11223B' }}>
                      {currentService.title}
                    </h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-base">
                    {currentService.description}
                  </p>
                </div>
              </div>

              {/* Panel derecho: ¿Qué incluye? */}
              <div className="rounded-2xl p-8 sm:p-10 shadow-lg" style={{ background: '#11223B' }}>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-md shrink-0"
                    style={{ background: '#FABE0D' }}
                  >
                    <Target className="w-6 h-6" style={{ color: '#11223B' }} />
                  </div>
                  {t('services.includes')}
                </h3>

                <div className="space-y-3.5">
                  {currentService.features.map((feature) => (
                    <div
                      key={feature}
                      className="p-4 bg-white rounded-xl shadow-sm transition-transform duration-200 hover:translate-x-1"
                    >
                      <span className="font-medium leading-relaxed text-sm sm:text-base" style={{ color: '#11223B' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
