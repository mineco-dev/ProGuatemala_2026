import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Download
} from 'lucide-react';
import SectorsCarousel from '../components/SectorsCarousel';
import secotresImg from '../assets/images/portadas/3. SECTORES.jpg';

const StrategicSectors: React.FC = () => {

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
              <Link
                to="/contact"
                className="border border-white text-white hover:bg-white hover:text-sector-6 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                Habla con un especialista sectorial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StrategicSectors;
