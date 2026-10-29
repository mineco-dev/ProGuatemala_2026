import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, DollarSign, Users, TrendingUp,
  Globe, Download, Mail
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

  // Indicadores clave con los colores de marca (cian, verde, crema, dorado)
  const kpis = [
    {
      icon: DollarSign,
      label: sector.revenueLabel ?? t('sectorModal.revenue'),
      value: sector.investment,
      card: 'bg-accent-500',
      chip: 'bg-white/25',
      iconColor: 'text-white',
      labelColor: 'text-white/80',
      valueColor: 'text-white',
    },
    {
      icon: Users,
      label: t('sectorModal.jobs'),
      value: sector.employment,
      card: 'bg-green-500',
      chip: 'bg-white/25',
      iconColor: 'text-white',
      labelColor: 'text-white/80',
      valueColor: 'text-white',
    },
    {
      icon: TrendingUp,
      label: sector.growthLabel ?? t('sectorModal.growth'),
      value: sector.growth,
      card: 'bg-cream-300',
      chip: 'bg-primary-500/10',
      iconColor: 'text-primary-500',
      labelColor: 'text-primary-500/70',
      valueColor: 'text-primary-600',
    },
    {
      icon: Globe,
      label: sector.exportsLabel ?? t('sectorModal.exports'),
      value: sector.exports || 'N/A',
      card: 'bg-yellow-500',
      chip: 'bg-primary-500/10',
      iconColor: 'text-primary-600',
      labelColor: 'text-primary-600/80',
      valueColor: 'text-primary-700',
    },
  ];

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
            {/* Encabezado - Azul marino de marca */}
            <div className="flex justify-between items-center px-6 py-5 bg-primary-500 sticky top-0 z-10">
              <div className="flex items-center space-x-3">
                <div className="bg-accent-500 p-2 rounded-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {sector.name}
                  </h3>
                  <p className="text-xs text-white/60 font-semibold capitalize">
                    Horizonte: {
                      sector.timeframe === 'short' ? 'Corto Plazo' :
                      sector.timeframe === 'medium' ? 'Mediano Plazo' : 'Largo Plazo'
                    }
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cuerpo del Modal */}
            <div className="p-6 overflow-y-auto space-y-8 flex-grow bg-white">

              {/* Indicadores Clave - Tarjetas con colores de marca */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {kpis.map((kpi, idx) => {
                  const KpiIcon = kpi.icon;
                  return (
                    <div
                      key={idx}
                      className={`${kpi.card} p-4 rounded-xl text-center shadow-sm`}
                    >
                      <div className={`${kpi.chip} w-9 h-9 rounded-lg flex items-center justify-center mx-auto mb-2`}>
                        <KpiIcon className={`w-5 h-5 ${kpi.iconColor}`} />
                      </div>
                      <span className={`text-xs ${kpi.labelColor} font-medium block mb-1`}>{kpi.label}</span>
                      <span className={`text-lg font-extrabold ${kpi.valueColor} block leading-tight`}>{kpi.value}</span>
                    </div>
                  );
                })}
              </div>

              {/* Oportunidades de Inversión - Tarjetas azul marino */}
              {sector.opportunities && sector.opportunities.length > 0 && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sector.opportunities.map((opp, idx) => (
                      <div key={idx} className="bg-primary-500 p-5 rounded-xl flex flex-col">
                        <div className="flex justify-between items-start gap-2 mb-2">
                          <h5 className="font-bold text-white text-base leading-snug">{opp.title}</h5>
                          {(opp.rca || opp.potential) && (
                            <span
                              className={`text-xs px-3 py-1 rounded-full font-bold whitespace-nowrap shadow-sm ${
                                opp.rca || opp.potential === 'Potencial Muy Alto'
                                  ? 'bg-accent-500 text-white'
                                  : 'bg-yellow-500 text-primary-600'
                              }`}
                            >
                              {opp.rca ? `RCA: ${opp.rca}` : opp.potential}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-white/70 font-medium leading-relaxed">
                          {opp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ventajas Competitivas */}
              {sector.advantages && sector.advantages.length > 0 && (
                <div>
                  <h4 className="text-lg font-bold text-primary-500 mb-4">{t('sectorModal.advantages')}</h4>
                  <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                      {sector.advantages.map((advantage, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <span className="w-4 h-4 rounded-full border-2 border-accent-500 flex-shrink-0" />
                          <span className="text-sm font-semibold text-gray-800">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Contacto del sector */}
              {sector.contacts && sector.contacts.length > 0 && (
                <div>
                  <h4 className="text-lg font-bold text-primary-500 mb-4">{t('sectorModal.contact')}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sector.contacts.map((contact) => (
                      <a
                        key={contact.email}
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-accent-500 transition-colors"
                      >
                        <span className="w-9 h-9 rounded-full bg-accent-500/10 text-accent-600 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-4 h-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-primary-500">{contact.name}</span>
                          <span className="block text-xs text-accent-600 truncate">{contact.email}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Pie del Modal */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-between items-center">
              <span className="text-xs text-gray-600 font-semibold">{sector.sourceLabel ?? t('sectorModal.official')}</span>
              {sector.pdfUrl && (
                <a
                  href={sector.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors flex items-center"
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
