import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export interface TableauEmbedProps {
  /** Identificador de la vista en Tableau, ej: "Tablero_IED_ProGuatemala/Historia1" */
  vizName: string;
  /**
   * Ruta de una vista compartida, ej: "shared/F89ZK327W". Cuando se indica se
   * usa en lugar de `vizName` para localizar el tablero; `vizName` queda solo
   * como etiqueta accesible.
   */
  path?: string;
  /** URL base del servidor de Tableau. Por defecto 'https://public.tableau.com/' */
  hostUrl?: string;
  /** URL de la imagen estática de previsualización (fallback sin JavaScript) */
  staticImageUrl?: string;
  /** Relación de aspecto (alto = ancho * aspectRatio) en escritorio */
  aspectRatio?: number;
  /** Altura mínima fija en píxeles para pantallas móviles (<= 768px) */
  minMobileHeight?: number;
  /** Idioma del visor. Por defecto 'es-ES' */
  language?: string;
  /** Mostrar pestañas superiores */
  showTabs?: boolean;
  /** Mostrar barra de herramientas */
  showToolbar?: boolean;
  /** Clases CSS adicionales para el contenedor exterior */
  className?: string;
  /**
   * Parámetros extra de la vista, añadidos tal cual a la URL. Sirven para
   * filtros y parámetros del libro, ej: `{ publish: 'yes' }` -> `&publish=yes`.
   */
  params?: Record<string, string>;
  /** Título accesible del iframe. Por defecto, `vizName`. */
  title?: string;
}

/** Opciones del visor, las mismas que genera el embed oficial de Tableau Public. */
const VIEWER_OPTIONS = [
  [':embed', 'y'],
  [':showVizHome', 'no'],
  [':animate_transition', 'yes'],
  [':display_static_image', 'yes'],
  [':display_spinner', 'yes'],
  [':display_overlay', 'yes'],
  [':display_count', 'yes'],
  [':origin', 'viz_share_link'],
] as const;

const MOBILE_BREAKPOINT = 768;

/**
 * Tablero de Tableau Public embebido por iframe.
 *
 * Se usa el embed por URL en vez de `<object class="tableauViz">` + `viz_v1.js`
 * porque ese script solo procesa los marcadores una vez, al cargarse: en una
 * SPA como esta, un tablero montado después —o uno al que le cambia la vista
 * al cambiar de idioma— nunca se volvía a dibujar. Con el iframe basta con que
 * cambie la URL: React lo remonta (`key={src}`) y Tableau carga el libro nuevo.
 */
export const TableauEmbed: React.FC<TableauEmbedProps> = ({
  vizName,
  path,
  hostUrl = 'https://public.tableau.com/',
  staticImageUrl,
  aspectRatio = 0.65,
  minMobileHeight = 700,
  language = 'es-ES',
  showTabs = false,
  showToolbar = true,
  className = '',
  params = {},
  title,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(minMobileHeight);
  const [isLoading, setIsLoading] = useState(true);

  const src = useMemo(() => {
    const base = hostUrl.endsWith('/') ? hostUrl : `${hostUrl}/`;
    // `path` ya viene con su prefijo ("shared/XXXX"); `vizName` cuelga de /views/.
    const view = path ?? `views/${vizName}`;

    const query = [
      ...VIEWER_OPTIONS.map(([key, value]) => `${key}=${value}`),
      `:tabs=${showTabs ? 'yes' : 'no'}`,
      `:toolbar=${showToolbar ? 'yes' : 'no'}`,
      `:language=${language}`,
      ...Object.entries(params).map(
        ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      ),
    ].join('&');

    return `${base}${view}?${query}`;
  }, [hostUrl, path, vizName, showTabs, showToolbar, language, params]);

  const measure = useCallback(() => {
    const width = containerRef.current?.offsetWidth ?? 0;
    setHeight(width > MOBILE_BREAKPOINT ? Math.round(width * aspectRatio) : minMobileHeight);
  }, [aspectRatio, minMobileHeight]);

  useEffect(() => {
    measure();

    const element = containerRef.current;
    if (typeof ResizeObserver !== 'undefined' && element) {
      const observer = new ResizeObserver(measure);
      observer.observe(element);
      return () => observer.disconnect();
    }

    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  // Cada cambio de vista remonta el iframe: hay que volver a mostrar el spinner.
  useEffect(() => {
    setIsLoading(true);
  }, [src]);

  return (
    <div className={`w-full ${className}`}>
      <div
        ref={containerRef}
        className="tableau-wrapper relative p-2 rounded-2xl border border-gray-200 bg-gray-50 shadow-sm w-full overflow-hidden"
      >
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-50">
            <div
              className="w-10 h-10 rounded-full border-4 border-gray-200 border-t-[#2b2463] animate-spin"
              role="status"
              aria-label="Cargando tablero"
            />
          </div>
        )}

        <iframe
          key={src}
          src={src}
          title={title ?? vizName}
          style={{ height: `${height}px` }}
          className="block w-full max-w-full border-0 rounded-xl bg-white"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        />

        {staticImageUrl && (
          <noscript>
            <img src={staticImageUrl} alt={vizName} style={{ border: 'none', width: '100%' }} />
          </noscript>
        )}
      </div>
    </div>
  );
};
