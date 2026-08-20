import React, { useEffect, useRef, useId } from 'react';

// Tipado global para evitar errores de TypeScript con window.tableau
declare global {
  interface Window {
    tableau?: {
      vizManager?: {
        refresh: () => void;
      };
    };
  }
}

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
  /** URL de la imagen estática de previsualización (para fallback y noscript) */
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
  /** Parámetros adicionales clave-valor (ej: { filter: 'publish=yes' }) */
  params?: Record<string, string>;
}

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
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Genera un ID único para evitar colisiones si hay múltiples tableros en la misma página
  const rawId = useId();
  const vizId = `viz_${rawId.replace(/:/g, '')}`;

  const encodedHostUrl = encodeURIComponent(hostUrl.endsWith('/') ? hostUrl : `${hostUrl}/`);

  useEffect(() => {
    const divElement = containerRef.current;
    if (!divElement) return;

    const vizElement = divElement.getElementsByTagName('object')[0] as HTMLElement | undefined;

    if (vizElement && divElement.offsetWidth) {
      const width = divElement.offsetWidth;
      vizElement.style.width = '100%';
      const calculatedHeight = width > 768 ? width * aspectRatio : minMobileHeight;
      vizElement.style.height = `${calculatedHeight}px`;
      vizElement.style.display = 'block';
    }

    // Carga de script de Tableau evitando duplicación
    const existingScript = document.querySelector('script[src*="viz_v1.js"]');

    if (!existingScript) {
      const scriptElement = document.createElement('script');
      scriptElement.src = `${hostUrl.endsWith('/') ? hostUrl : hostUrl + '/'}javascripts/api/viz_v1.js`;
      scriptElement.async = true;

      if (vizElement && vizElement.parentNode) {
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
      }
    } else {
      if (window.tableau?.vizManager) {
        window.tableau.vizManager.refresh();
      }
    }
  }, [vizName, path, aspectRatio, minMobileHeight, hostUrl]);

  return (
    <div className={`w-full ${className}`}>
      <div className="tableau-wrapper p-2 rounded-2xl border bg-light shadow-sm w-full">
        <div 
          ref={containerRef}
          className="tableauPlaceholder w-full" 
          id={vizId}
          style={{ position: 'relative', width: '100%' }}
        >
          {staticImageUrl && (
            <noscript>
              <a href="#!">
                <img 
                  alt={vizName} 
                  src={staticImageUrl} 
                  style={{ border: 'none' }} 
                />
              </a>
            </noscript>
          )}

          <object className="tableauViz" style={{ display: 'none', width: '100%' }}>
            <param name="host_url" value={encodedHostUrl} />
            <param name="embed_code_version" value="3" />
            <param name="site_root" value="" />
            {path ? (
              <param name="path" value={path} />
            ) : (
              <param name="name" value={vizName} />
            )}
            <param name="tabs" value={showTabs ? 'yes' : 'no'} />
            <param name="toolbar" value={showToolbar ? 'yes' : 'no'} />
            {staticImageUrl && <param name="static_image" value={staticImageUrl} />}
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="language" value={language} />

            {/* Renderizado dinámico de parámetros arbitrarios */}
            {Object.entries(params).map(([key, value]) => (
              <param key={key} name={key} value={value} />
            ))}
          </object>
        </div>
      </div>
    </div>
  );
};