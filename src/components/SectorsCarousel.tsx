import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Download, TrendingUp, Users,
  Filter, ChevronLeft, ChevronRight, DollarSign
} from 'lucide-react';

import { Sector } from '../types/sector';
import { SectorModal } from './SectorModal';
import { sectors } from '@/data/sectorsData';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized'; // Importación de la data separada

type SectorsCarouselProps = {
  showFilters?: boolean;
  showTitle?: boolean;
  showAllLink?: boolean;
  allLinkLabel?: string;
};

const SectorsCarousel: React.FC<SectorsCarouselProps> = ({
  showFilters = true,
  showTitle = true,
}) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'all' | 'short' | 'medium' | 'long'>('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Estado centralizado para el Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);

  const { t } = useLanguage();
  const allSectors = useLocalized(sectors);

  const timeframes = [
    { id: 'all', name: t('carousel.all'), count: 17, color: 'bg-sector-6' },
    { id: 'short', name: t('carousel.short'), count: 8, color: 'bg-sector-3' },
    { id: 'medium', name: t('carousel.medium'), count: 5, color: 'bg-sector-1' },
    { id: 'long', name: t('carousel.long'), count: 4, color: 'bg-sector-2' }
  ];

  const filteredSectors = selectedTimeframe === 'all'
    ? allSectors
    : allSectors.filter(sector => sector.timeframe === selectedTimeframe);

  const sectorsPerSlide = 3;
  const totalSlides = Math.ceil(filteredSectors.length / sectorsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSectors = () => {
    const startIndex = currentSlide * sectorsPerSlide;
    return filteredSectors.slice(startIndex, startIndex + sectorsPerSlide);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedTimeframe]);

  const handleOpenModal = (sector: Sector) => {
    setSelectedSector(sector);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSector(null);
  };

  return (
    <div className="font-montserrat relative">
      {/* Filtros por horizonte temporal */}
      {showFilters && (
        <section id="horizonte-temporal" className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <div className="flex items-center justify-center mb-4">
                <Filter className="w-6 h-6 text-sector-6 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Filtrar por Horizonte Temporal</h2>
              </div>
              <p className="text-gray-600 font-normal">
                Selecciona el plazo de implementación para ver los sectores correspondientes
              </p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {timeframes.map((tf) => (
                <button
                  key={tf.id}
                  onClick={() => setSelectedTimeframe(tf.id as never)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedTimeframe === tf.id
                      ? `${tf.color} text-white shadow-lg`
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span>{tf.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      selectedTimeframe === tf.id
                        ? 'bg-white bg-opacity-20 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tf.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Grid / Carrusel de sectores */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showTitle && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t(`carousel.title.${selectedTimeframe}`)}
              </h2>
              <p className="text-xl text-gray-600 font-normal">
                {filteredSectors.length} {t('carousel.count')}
              </p>
            </motion.div>
          )}

          {totalSlides > 1 && (
            <div className="flex justify-center items-center mb-8 space-x-4">
              <button
                onClick={prevSlide}
                className="bg-sector-6 hover:brightness-110 text-white p-3 rounded-full transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      currentSlide === index ? 'bg-sector-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="bg-sector-6 hover:brightness-110 text-white p-3 rounded-full transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {getCurrentSectors().map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={sector.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden relative flex-shrink-0">
                    <img
                      src={sector.image}
                      alt={sector.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-sector-6-soft p-2 rounded-lg flex-shrink-0">
                        <Icon className="w-6 h-6 text-sector-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{sector.name}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4 font-normal">{sector.description}</p>
                    
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <DollarSign className="w-4 h-4 text-sector-3 mx-auto mb-1" />
                        <div className="text-sm font-bold text-gray-900">{sector.investment}</div>
                        <div className="text-xs text-gray-600">Ingreso</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <Users className="w-4 h-4 text-sector-6 mx-auto mb-1" />
                        <div className="text-sm font-bold text-gray-900">{sector.employment}</div>
                        <div className="text-xs text-gray-600">Empleos</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <TrendingUp className="w-4 h-4 text-sector-3 mx-auto mb-1" />
                        <div className="text-sm font-bold text-gray-900">{sector.growth}</div>
                        <div className="text-xs text-gray-600">Crecimiento</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1">
                        {sector.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                          <span
                            key={highlightIndex}
                            className="bg-sector-1-soft text-sector-2 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                        {sector.highlights.length > 2 && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                            +{sector.highlights.length - 2} más
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mt-auto pt-2">
                      <button
                        onClick={() => handleOpenModal(sector)}
                        className="bg-sector-6 hover:brightness-110 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center text-sm text-center"
                      >
                        Conoce más
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>

                      {sector.pdfUrl ? (
                        <a
                          href={sector.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-sector-6 text-sector-6 bg-sector-6-soft hover:brightness-110 font-semibold px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center text-sm text-center"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Ficha
                        </a>
                      ) : (
                        <button
                          disabled
                          className="border border-gray-300 text-gray-400 bg-gray-100 font-semibold px-4 py-2 rounded-lg flex items-center justify-center text-sm text-center cursor-not-allowed"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Ficha
                        </button>
                      )}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredSectors.length > sectorsPerSlide && (
            <div className="text-center mt-12">
              <div className="text-gray-600 mb-4 font-normal">
                Mostrando {getCurrentSectors().length} de {filteredSectors.length} sectores
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Modal de Sectores */}
      <SectorModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        sector={selectedSector}
      />
    </div>
  );
};

export default SectorsCarousel;