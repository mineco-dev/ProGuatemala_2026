import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import SectorsCarousel from '../components/SectorsCarousel';
import secotresImg from '../assets/images/portadas/3. SECTORES.jpg';
import { ContactModal } from '../components/ContactModal';

const StrategicSectors: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Inicialización del script de Tableau
  useEffect(() => {
    const id = 'viz1778621141469'; // ID del segundo tablero
    const aspectRatio = 0.75;
    const divElement = document.getElementById(id);

    if (divElement) {
      const vizElement = divElement.getElementsByTagName('object')[0] as HTMLElement;

      if (vizElement) {
        // 1. Establecer dimensiones antes de cargar el script
        vizElement.style.width = '100%';
        const width = divElement.offsetWidth;
        vizElement.style.height = (width > 768 ? width * aspectRatio : 600) + 'px';

        // 2. Cargar el script de Tableau si no existe o refrescar si ya se cargó
        if (!document.querySelector('script[src*="viz_v1.js"]')) {
          const scriptElement = document.createElement('script');
          scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
          scriptElement.async = true;
          vizElement.parentNode?.insertBefore(scriptElement, vizElement);
        } else {
          // @ts-expect-error
          if (window.tableau && window.tableau.vizManager) {
            // @ts-expect-error
            window.tableau.vizManager.refresh();
          }
        }
      }
    }
  }, []);

  const scrollToFilters = () => {
    const element = document.getElementById('horizonte-temporal');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownload = () => {
    window.open(
      'https://mineco.gob.gt/files/proguatemala/es/Atraccion_Inversiones-Espanol.pdf',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-sector-6 via-sector-1 to-sector-3"
          >
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${secotresImg})` }}></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                >
                  Sectores <span className="text-yellow-500">Estratégicos</span>
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8"
                >
                  Descubre las oportunidades de inversión priorizadas según la estrategia nacional,
                  organizadas por horizontes temporales de implementación
                </motion.p>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button 
                    onClick={scrollToFilters}
                    className="bg-sector-4 hover:brightness-110 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
                  >
                    Explorar por plazo
                  </button>
                  <button 
                    onClick={handleDownload}
                    className="border border-white text-white hover:bg-white hover:text-sector-6 font-semibold px-8 py-4 rounded-lg transition-all duration-200"
                  >
                    Descargar estrategia sectorial
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectorsCarousel />

      {/* Segundo Tablero de Tableau */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-2 sm:p-4 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden flex items-center justify-center min-h-[400px]">
            <div className="tableauPlaceholder w-full" id="viz1778621141469" style={{ position: 'relative' }}>
              <object className="tableauViz" style={{ display: 'none' }}>
                <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
                <param name="path" value="shared/F89ZK327W" />
                <param name="toolbar" value="yes" />
                <param name="language" value="es-ES" />
              </object>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sector-6 to-sector-3 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Interesado en algún sector específico?
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Nuestros especialistas pueden proporcionarte información detallada sobre cada uno de los sectores priorizados,
              análisis de mercado y conectarte con las oportunidades más relevantes según tu horizonte de inversión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-sector-6 hover:brightness-95 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Descargar estrategia sectorial completa
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="border border-white text-white hover:bg-white hover:text-sector-6 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                Habla con un especialista sectorial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>

              <ContactModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                language="es"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StrategicSectors;