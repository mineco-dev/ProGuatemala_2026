import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, DollarSign, Users, TrendingUp,
  Globe, Sparkles, CheckCircle2, Download
} from 'lucide-react';
import type { Sector } from '@/types/sector';
import { useLanguage } from '@/contexts/LanguageContext';

interface SectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  sector: Sector | null;
}

export const SectorModal: React.FC<SectorModalProps> = ({ isOpen, onClose, sector }) => {
  const { t } = useLanguage();

  if (!sector) return null;

  const Icon = sector.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden relative font-montserrat"
          >
            {/* Encabezado */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50 sticky top-0 z-10">
              <div className="flex items-center space-x-3">
                <div className="bg-sector-6-soft p-2 rounded-lg">
                  <Icon className="w-6 h-6 text-sector-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                    {sector.name}
                  </h3>
                  <p className="text-xs text-gray-600 font-semibold capitalize">
                    Horizonte: {
                      sector.timeframe === 'short' ? 'Corto Plazo' :
                      sector.timeframe === 'medium' ? 'Mediano Plazo' : 'Largo Plazo'
                    }
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cuerpo del Modal */}
            <div className="p-6 overflow-y-auto space-y-8 flex-grow">
              
              {/* Indicadores Clave con Fondos Sólidos y Texto Blanco */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-3">
                  Indicadores Clave
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Ingresos - Azul Sólido */}
                    <div className="bg-blue-600 border border-blue-700 p-4 rounded-xl text-center shadow-sm">
                        <DollarSign className="w-5 h-5 text-white mx-auto mb-1" />
                        <span className="text-xs text-white/80 font-medium block mb-1">{t('sectorModal.revenue')}</span>
                        <span className="text-lg font-extrabold text-white block">{sector.investment}</span>
                    </div>

                    {/* Empleos - Esmeralda Sólido */}
                    <div className="bg-emerald-600 border border-emerald-700 p-4 rounded-xl text-center shadow-sm">
                        <Users className="w-5 h-5 text-white mx-auto mb-1" />
                        <span className="text-xs text-white/80 font-medium block mb-1">{t('sectorModal.jobs')}</span>
                        <span className="text-lg font-extrabold text-white block">{sector.employment}</span>
                    </div>

                    {/* Crecimiento - Índigo Sólido */}
                    <div className="bg-indigo-600 border border-indigo-700 p-4 rounded-xl text-center shadow-sm">
                        <TrendingUp className="w-5 h-5 text-white mx-auto mb-1" />
                        <span className="text-xs text-white/80 font-medium block mb-1">{t('sectorModal.growth')}</span>
                        <span className="text-lg font-extrabold text-white block">{sector.growth}</span>
                    </div>

                    {/* Exportaciones - Ámbar Sólido */}
                    <div className="bg-amber-600 border border-amber-700 p-4 rounded-xl text-center shadow-sm">
                        <Globe className="w-5 h-5 text-white mx-auto mb-1" />
                        <span className="text-xs text-white/80 font-medium block mb-1">{t('sectorModal.exports')}</span>
                        <span className="text-lg font-extrabold text-white block">{sector.exports || 'N/A'}</span>
                    </div>
                </div>
              </div>

              {/* Oportunidades de Inversión */}
              {sector.opportunities && sector.opportunities.length > 0 && (
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <h4 className="text-lg font-bold text-gray-900">{t('sectorModal.opportunities')}</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sector.opportunities.map((opp, idx) => (
                      <div key={idx} className="bg-gray-50 border border-gray-200 p-4 rounded-xl flex flex-col justify-between hover:border-sector-6 transition-colors">
                        <div>
                          <div className="flex justify-between items-start gap-2 mb-2">
                            <h5 className="font-bold text-gray-900 text-base">{opp.title}</h5>
                            <span
                                className={`text-xs px-3 py-1 rounded-full font-bold whitespace-nowrap shadow-sm text-white ${
                                opp.potential === 'Potencial Muy Alto'
                                    ? 'bg-emerald-700'
                                    : 'bg-blue-700'
                                }`}
                            >
                                {opp.potential}
                            </span>
                           </div>
                          <p className="text-sm text-gray-700 font-medium leading-relaxed">
                            {opp.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ventajas Competitivas */}
              {sector.advantages && sector.advantages.length > 0 && (
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">{t('sectorModal.advantages')}</h4>
                  <div className="bg-emerald-50/70 border border-emerald-200 p-5 rounded-xl">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {sector.advantages.map((advantage, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold text-gray-800">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

            </div>

            {/* Pie del Modal */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-between items-center">
              <span className="text-xs text-gray-600 font-semibold">{t('sectorModal.official')}</span>
              {sector.pdfUrl && (
                <a
                  href={sector.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sector-6 hover:brightness-110 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors flex items-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Descargar Ficha Completa
                </a>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SectorModal;