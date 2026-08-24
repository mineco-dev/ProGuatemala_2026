import { useCallback, useMemo, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { baseMap, mapLayers } from '@/data/whyGuatemala/infrastructureMaps';

/**
 * Mapa de Guatemala con capas superponibles. El mapa base siempre esta
 * visible y cada icono agrega o quita su capa encima; se pueden combinar
 * varias a la vez.
 *
 * Las capas pesan ~100 KB cada una, asi que solo se descargan las que el
 * usuario pide. Una vez cargadas se conservan montadas con opacidad 0 para
 * que volver a activarlas sea instantaneo, y se precargan al pasar el raton
 * o al enfocar su boton.
 */
export default function InfrastructureMap() {
  const { t } = useLanguage();
  const [activeIds, setActiveIds] = useState<string[]>([]);
  const [requested, setRequested] = useState<string[]>([]);

  /** Marca una capa para descarga sin necesariamente activarla. */
  const request = useCallback((id: string) => {
    setRequested((previous) => (previous.includes(id) ? previous : [...previous, id]));
  }, []);

  const toggle = useCallback(
    (id: string) => {
      request(id);
      setActiveIds((previous) =>
        previous.includes(id) ? previous.filter((item) => item !== id) : [...previous, id],
      );
    },
    [request],
  );

  /** Capas ya descargadas, en orden de dibujo (ver `stack` en MapLayer). */
  const stackedLayers = useMemo(
    () =>
      mapLayers
        .filter((layer) => requested.includes(layer.id))
        .sort((a, b) => a.stack - b.stack),
    [requested],
  );

  return (
    <div>
      <p className="text-sm text-gray-600 text-center mb-3">{t('why.map.infra.hint')}</p>

      <div
        role="group"
        aria-label={t('why.map.infra.title')}
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-2"
      >
        {mapLayers.map((layer) => {
          const isActive = activeIds.includes(layer.id);

          return (
            <button
              key={layer.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => toggle(layer.id)}
              onMouseEnter={() => request(layer.id)}
              onFocus={() => request(layer.id)}
              className={`flex flex-col items-center gap-1.5 w-[86px] sm:w-24 px-2 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                isActive
                  ? 'bg-white border-blue-500 shadow-md ring-1 ring-blue-500'
                  : 'bg-white/60 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-sm'
              }`}
            >
              <img
                src={layer.icon}
                alt=""
                aria-hidden="true"
                width={40}
                height={40}
                className={`w-10 h-10 object-contain transition-opacity duration-200 ${
                  isActive ? 'opacity-100' : 'opacity-60'
                }`}
              />
              <span
                className={`text-[11px] sm:text-xs font-semibold leading-tight text-center ${
                  isActive ? 'text-blue-700' : 'text-gray-600'
                }`}
              >
                {t(layer.labelKey)}
              </span>
            </button>
          );
        })}
      </div>

      <div className="h-4 flex justify-center items-end">
        {activeIds.length > 0 && (
          <button
            type="button"
            onClick={() => setActiveIds([])}
            className="text-xs font-semibold text-gray-600 hover:text-blue-700 underline underline-offset-4 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            {t('why.map.infra.clear')}
          </button>
        )}
      </div>

      {/*
        Los PNG del mapa son cuadrados (3544x3544) con bandas transparentes
        arriba (~9.7%) y abajo (~9.7%, el limite lo marcan las etiquetas de
        ZDEEP y Zonas Francas). Recortamos esas bandas con overflow-hidden y
        margenes negativos en porcentaje —relativos al ancho, igual que el
        lado del cuadrado— para que el mapa no arrastre espacio muerto ni se
        desalineen las capas.
      */}
      <div className="w-full max-w-5xl mx-auto overflow-hidden">
        <div className="relative w-full aspect-square -mt-[7%] -mb-[8%]">
          <img
            src={baseMap}
            alt={t('why.map.infra.baseAlt')}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-contain"
          />

          {stackedLayers.map((layer) => (
            <img
              key={layer.id}
              src={layer.overlay}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                activeIds.includes(layer.id) ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
