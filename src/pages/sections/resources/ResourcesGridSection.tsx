import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download, Eye, Play } from 'lucide-react';
import VideoModal from '@/components/ui/VideoModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDocumentOpener } from '@/hooks/useDocumentOpener';
import { getResourceTypeIcon, resourceIconGradient } from './resourceHelpers';
import type { Resource } from '@/types/resource';

interface ResourcesGridSectionProps {
  resources: Resource[];
}

/**
 * Alto fijo de cada tarjeta. Es la unica fuente de la altura del panel: si
 * cambia el diseno de la tarjeta, se ajusta aqui y la fila sigue cuadrando.
 */
const CARD_HEIGHT_REM = 19.5;

/**
 * El catalogo se acota a una fila exacta: asi ocupa poco y queda claro de un
 * vistazo que es un panel con su propia barra, no el final del listado. El
 * resto se recorre dentro del panel. El tope en `vh` solo entra en pantallas
 * muy bajas, donde ni una fila completa cabe.
 */
const PANEL_MAX_HEIGHT = `min(${CARD_HEIGHT_REM}rem, 85vh)`;

export default function ResourcesGridSection({ resources }: ResourcesGridSectionProps) {
  const { t } = useLanguage();
  const openDocument = useDocumentOpener();
  const [activeVideo, setActiveVideo] = useState<Resource | null>(null);

  const panelRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [hasMoreBelow, setHasMoreBelow] = useState(false);

  /**
   * Con una sola fila a la vista el corte cae justo en el borde de la tarjeta,
   * asi que sin una senal no se distingue de un listado terminado: el degradado
   * del pie solo se pinta mientras quede contenido por debajo.
   */
  const syncScrollHint = useCallback(() => {
    const panel = panelRef.current;
    if (!panel) return;
    // 1px de margen: el navegador redondea `scrollTop` en pantallas HiDPI.
    setHasMoreBelow(panel.scrollTop + panel.clientHeight < panel.scrollHeight - 1);
  }, []);

  // La rejilla cambia de alto al filtrar y de ancho al cambiar de columnas.
  useEffect(() => {
    syncScrollHint();

    const grid = gridRef.current;
    if (typeof ResizeObserver === 'undefined' || !grid) return;

    const observer = new ResizeObserver(syncScrollHint);
    observer.observe(grid);
    return () => observer.disconnect();
  }, [syncScrollHint, resources]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {resources.length > 0 && (
          <div className="relative rounded-2xl border border-gray-200 bg-white/50 p-3 sm:p-4">
            {/* `tabIndex` para que el area tambien se pueda recorrer con teclado. */}
            <div
              ref={panelRef}
              role="region"
              aria-label={t('resources.catalog.label')}
              tabIndex={0}
              style={{ maxHeight: PANEL_MAX_HEIGHT }}
              onScroll={syncScrollHint}
              className="overflow-y-auto overscroll-contain rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, index) => {
                  const Icon = getResourceTypeIcon(resource.type);
                  const isVideo = resource.type === 'Video';
                  return (
                    <motion.div
                      key={resource.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      style={{ height: `${CARD_HEIGHT_REM}rem` }}
                      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col justify-between overflow-hidden"
                    >
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <div className={`p-2.5 rounded-xl shadow-md ${resourceIconGradient(resource.type)}`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          {resource.is_featured && (
                            <span className="bg-support-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                              {t('resources.badge.featured')}
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 tracking-tight">
                          {resource.title}
                        </h3>
                        <p className="text-gray-700 text-sm mb-3 line-clamp-2 leading-relaxed">
                          {resource.description}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <div className="flex items-center space-x-2">
                            <span className="bg-gray-100 px-2 py-1 rounded-md font-medium">
                              {resource.type}
                            </span>
                            {resource.size && (
                              <span className="bg-gray-100 px-2 py-1 rounded-md font-medium">
                                {resource.size}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center">
                            <div className="bg-blue-100 p-1 rounded-md mr-1">
                              <Calendar className="w-3 h-3 text-blue-600" />
                            </div>
                            <span className="font-medium">
                              {new Date(resource.published_date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                          <span className="bg-blue-100 text-blue-800 px-2.5 py-1 rounded-md font-semibold text-xs">
                            {resource.language}
                          </span>
                          <div className="flex space-x-2">
                            {isVideo ? (
                              <button
                                onClick={() => setActiveVideo(resource)}
                                className="bg-support-500 hover:bg-support-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center"
                              >
                                <Play className="w-4 h-4 mr-1.5" />
                                {t('resources.play')}
                              </button>
                            ) : (
                              <>
                                <button
                                  onClick={() => openDocument(resource.file_url)}
                                  className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors duration-200"
                                  title={t('resources.view')}
                                >
                                  <Eye className="w-4 h-4 text-gray-700" />
                                </button>
                                <button
                                  onClick={() => openDocument(resource.file_url)}
                                  className="bg-support-500 hover:bg-support-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center"
                                >
                                  <Download className="w-4 h-4 mr-1.5" />
                                  {t('resources.download')}
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {hasMoreBelow && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 h-12 rounded-b-xl bg-gradient-to-t from-white to-transparent"
              />
            )}
          </div>
        )}

        <VideoModal
          isOpen={activeVideo !== null}
          onClose={() => setActiveVideo(null)}
          title={activeVideo?.title ?? ''}
          description={activeVideo?.description}
          src={activeVideo?.file_url ?? ''}
          poster={activeVideo?.poster}
        />

        {resources.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 mt-6">
            <div className="text-gray-400 text-6xl mb-4">📄</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{t('resources.empty.title')}</h3>
            <p className="text-gray-600">{t('resources.empty.subtitle')}</p>
          </div>
        )}
      </div>
    </section>
  );
}
