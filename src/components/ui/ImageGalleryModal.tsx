import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  /** Linea corta que acompana al titulo, sobre la fotografia. */
  subtitle?: string;
  /** Texto completo que se lee en el panel lateral. */
  description?: string;
  images: string[];
  /** Etiquetas que se muestran como lista al pie del contenido. */
  highlights?: string[];
}

/** Estado del zoom: escala y desplazamiento en pixeles desde el centro. */
interface ZoomState {
  scale: number;
  x: number;
  y: number;
}

const NO_ZOOM: ZoomState = { scale: 1, x: 0, y: 0 };
const MAX_SCALE = 5;
/** Escala a la que salta el clic. */
const CLICK_SCALE = 2.5;
/**
 * Desplazamiento en px por debajo del cual un arrastre sigue contando como
 * clic. Sin este margen, soltar tras desplazar la foto ampliada dispararia el
 * clic y deshariar el zoom en cuanto el raton se moviera un pixel.
 */
const CLICK_SLOP = 4;
const WHEEL_STEP = 1.18;
const BUTTON_STEP = 1.4;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

/**
 * Modal con carrusel de imagenes, panel de texto al costado y zoom con raton.
 *
 * Las fotografias se muestran completas (`object-contain`) sobre fondo oscuro:
 * el material de los parques mezcla vistas aereas, planos y laminas, y
 * recortarlas para llenar el marco dejaba fuera justo lo que se quiere ver. El
 * zoom compensa el detalle que se pierde al no recortar.
 *
 * Es autonomo: maneja indice y zoom, y los reinicia al abrirse o al cambiar de
 * fotografia, por lo que quien lo usa solo decide si esta abierto y con que
 * contenido. En escritorio la foto y el texto van lado a lado para que una
 * descripcion larga no empuje la imagen fuera de la pantalla; en movil se
 * apilan.
 */
export default function ImageGalleryModal({
  isOpen,
  onClose,
  title,
  subtitle,
  description,
  images,
  highlights,
}: ImageGalleryModalProps) {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState<ZoomState>(NO_ZOOM);
  const [isPanning, setIsPanning] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const panOrigin = useRef({ pointerX: 0, pointerY: 0, x: 0, y: 0 });
  /** Si el gesto en curso llego a ser un arrastre; lo consulta el clic. */
  const didPan = useRef(false);

  const total = images.length;
  const isZoomed = zoom.scale > 1;

  /**
   * Cuanto se puede arrastrar la imagen a cada lado: la mitad de lo que
   * sobresale del marco. Se mide sobre el tamano ya ajustado por
   * `object-contain`, no sobre el del marco, para no dejar arrastrar hacia las
   * bandas vacias que quedan a los lados.
   */
  const panLimits = useCallback((scale: number) => {
    const viewport = viewportRef.current;
    const image = imageRef.current;
    if (!viewport) return { x: 0, y: 0 };

    const { clientWidth: frameWidth, clientHeight: frameHeight } = viewport;

    // Antes de que la foto cargue no se conocen sus medidas: se estima con el
    // marco, que es lo mismo que asumir que lo llena por completo.
    if (!image?.naturalWidth || !image.naturalHeight) {
      return { x: (frameWidth * (scale - 1)) / 2, y: (frameHeight * (scale - 1)) / 2 };
    }

    const fit = Math.min(frameWidth / image.naturalWidth, frameHeight / image.naturalHeight);
    const width = image.naturalWidth * fit * scale;
    const height = image.naturalHeight * fit * scale;

    return {
      x: Math.max(0, (width - frameWidth) / 2),
      y: Math.max(0, (height - frameHeight) / 2),
    };
  }, []);

  /**
   * Escala por `factor` dejando quieto el punto que esta bajo el cursor. Sin
   * coordenadas, hace zoom sobre el centro.
   */
  const zoomBy = useCallback(
    (factor: number, clientX?: number, clientY?: number) => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const rect = viewport.getBoundingClientRect();
      const anchorX = clientX === undefined ? 0 : clientX - rect.left - rect.width / 2;
      const anchorY = clientY === undefined ? 0 : clientY - rect.top - rect.height / 2;

      setZoom((previous) => {
        const scale = clamp(previous.scale * factor, 1, MAX_SCALE);
        if (scale === previous.scale) return previous;
        if (scale <= 1) return NO_ZOOM;

        // El punto bajo el cursor debe seguir bajo el cursor tras escalar.
        const ratio = scale / previous.scale;
        const limits = panLimits(scale);

        return {
          scale,
          x: clamp(anchorX - (anchorX - previous.x) * ratio, -limits.x, limits.x),
          y: clamp(anchorY - (anchorY - previous.y) * ratio, -limits.y, limits.y),
        };
      });
    },
    [panLimits],
  );

  const goTo = useCallback(
    (delta: number) => setIndex((current) => (current + delta + total) % total),
    [total],
  );

  useEffect(() => {
    if (isOpen) setIndex(0);
  }, [isOpen, title]);

  // Cada fotografia se ve desde cero: heredar el zoom de la anterior desorienta.
  useEffect(() => {
    setZoom(NO_ZOOM);
  }, [index, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') goTo(-1);
      if (event.key === 'ArrowRight') goTo(1);
      if (event.key === '+' || event.key === '=') zoomBy(BUTTON_STEP);
      if (event.key === '-') zoomBy(1 / BUTTON_STEP);
      if (event.key === '0') setZoom(NO_ZOOM);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose, goTo, zoomBy]);

  // La rueda va como listener nativo no pasivo: React registra `onWheel` en
  // modo pasivo y ahi `preventDefault` no llega a detener el scroll de fondo.
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!isOpen || !viewport) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      zoomBy(event.deltaY < 0 ? WHEEL_STEP : 1 / WHEEL_STEP, event.clientX, event.clientY);
    };

    viewport.addEventListener('wheel', onWheel, { passive: false });
    return () => viewport.removeEventListener('wheel', onWheel);
  }, [isOpen, zoomBy]);

  // Mientras el modal esta abierto la pagina de atras no debe desplazarse.
  useEffect(() => {
    if (!isOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  // La miniatura activa se mantiene a la vista al navegar con el teclado.
  useEffect(() => {
    const active = thumbsRef.current?.children[index] as HTMLElement | undefined;
    active?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [index]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    didPan.current = false;
    if (!isZoomed) return;
    // Los controles estan dentro del visor: pulsarlos no debe iniciar arrastre.
    if ((event.target as HTMLElement).closest('button')) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    panOrigin.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      x: zoom.x,
      y: zoom.y,
    };
    setIsPanning(true);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isPanning) return;
    const origin = panOrigin.current;
    const limits = panLimits(zoom.scale);

    if (
      Math.abs(event.clientX - origin.pointerX) > CLICK_SLOP ||
      Math.abs(event.clientY - origin.pointerY) > CLICK_SLOP
    ) {
      didPan.current = true;
    }

    setZoom((previous) => ({
      ...previous,
      x: clamp(origin.x + (event.clientX - origin.pointerX), -limits.x, limits.x),
      y: clamp(origin.y + (event.clientY - origin.pointerY), -limits.y, limits.y),
    }));
  };

  const endPan = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isPanning) return;
    event.currentTarget.releasePointerCapture(event.pointerId);
    setIsPanning(false);
  };

  /** Un clic sobre la foto alterna entre vista completa y ampliada. */
  const onClick = (event: React.MouseEvent) => {
    // Soltar tras desplazar la foto no es un clic, es el final del arrastre.
    if (didPan.current) return;
    // Los controles estan dentro del visor: pulsarlos no debe hacer zoom.
    if ((event.target as HTMLElement).closest('button')) return;

    if (isZoomed) {
      setZoom(NO_ZOOM);
      return;
    }

    // Aqui la escala es 1, asi que el factor equivale a la escala destino.
    zoomBy(CLICK_SCALE, event.clientX, event.clientY);
  };

  if (!isOpen || total === 0) return null;

  const cursor = isZoomed ? (isPanning ? 'grabbing' : 'grab') : 'zoom-in';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/85 p-4 sm:p-6 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl ring-1 ring-black/5 max-w-[1600px] w-full overflow-hidden flex flex-col lg:flex-row max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3rem)] lg:h-[calc(100vh-3rem)] my-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label={t('gallery.close')}
          className="absolute top-3 right-3 z-30 bg-gray-950/60 hover:bg-gray-950/90 text-white rounded-full p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Columna de fotografias */}
        <div className="flex flex-col bg-gray-950 shrink-0 lg:flex-1 lg:min-w-0">
          <div
            ref={viewportRef}
            className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:flex-1 lg:min-h-0 overflow-hidden group select-none"
            style={{ cursor, touchAction: isZoomed ? 'none' : 'pan-y' }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endPan}
            onPointerCancel={endPan}
            onClick={onClick}
          >
            {/* Copia difuminada de la foto para rellenar las bandas que deja `object-contain`. */}
            <img
              src={images[index]}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-25 pointer-events-none"
            />

            <img
              ref={imageRef}
              key={images[index]}
              src={images[index]}
              alt={`${title} — ${t('gallery.image')} ${index + 1} ${t('gallery.of')} ${total}`}
              draggable={false}
              className="relative w-full h-full object-contain animate-[fadeIn_300ms_ease-out]"
              style={{
                transform: `translate(${zoom.x}px, ${zoom.y}px) scale(${zoom.scale})`,
                transition: isPanning ? 'none' : 'transform 180ms ease-out',
              }}
            />

            {/* El rotulo estorba en cuanto se hace zoom, asi que se retira. */}
            <div
              className={`absolute inset-x-0 bottom-0 pointer-events-none transition-opacity duration-200 ${
                isZoomed ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="h-32 bg-gradient-to-t from-gray-950/90 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-white text-2xl sm:text-3xl font-bold drop-shadow-sm">
                  {title}
                </h3>
                {subtitle && <p className="text-blue-100 text-sm mt-1">{subtitle}</p>}
              </div>
            </div>

            {total > 1 && (
              <>
                <button
                  type="button"
                  aria-label={t('gallery.previous')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/35 text-white rounded-full p-2.5 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  onClick={() => goTo(-1)}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  type="button"
                  aria-label={t('gallery.next')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/35 text-white rounded-full p-2.5 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  onClick={() => goTo(1)}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute top-3 left-3 bg-gray-950/60 text-white text-xs px-3 py-1.5 rounded-full font-semibold tracking-wide backdrop-blur-sm pointer-events-none">
                  {index + 1} / {total}
                </div>
              </>
            )}

            {/* Controles de zoom */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-gray-950/60 rounded-full p-1 backdrop-blur-sm ring-1 ring-white/15">
              <button
                type="button"
                aria-label={t('gallery.zoomOut')}
                disabled={!isZoomed}
                className="text-white rounded-full p-2 transition-colors hover:bg-white/20 disabled:opacity-35 disabled:hover:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={() => zoomBy(1 / BUTTON_STEP)}
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <span className="text-white text-[11px] font-bold tabular-nums w-9 text-center pointer-events-none">
                {Math.round(zoom.scale * 100)}%
              </span>

              <button
                type="button"
                aria-label={t('gallery.zoomIn')}
                disabled={zoom.scale >= MAX_SCALE}
                className="text-white rounded-full p-2 transition-colors hover:bg-white/20 disabled:opacity-35 disabled:hover:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={() => zoomBy(BUTTON_STEP)}
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <button
                type="button"
                aria-label={t('gallery.resetZoom')}
                disabled={!isZoomed}
                className="text-white rounded-full p-2 transition-colors hover:bg-white/20 disabled:opacity-35 disabled:hover:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={() => setZoom(NO_ZOOM)}
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="px-3 pt-2.5 text-center text-[11px] text-gray-400 shrink-0">
            {t('gallery.zoomHint')}
          </p>

          {total > 1 && (
            <div ref={thumbsRef} className="flex gap-2 p-3 overflow-x-auto shrink-0">
              {images.map((image, position) => (
                <button
                  key={image}
                  type="button"
                  aria-label={`${t('gallery.goToImage')} ${position + 1}`}
                  aria-current={position === index}
                  onClick={() => setIndex(position)}
                  className={`relative shrink-0 w-24 h-16 rounded-lg overflow-hidden bg-gray-800 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    position === index
                      ? 'ring-2 ring-white opacity-100'
                      : 'opacity-45 hover:opacity-90'
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Columna de texto */}
        <div className="flex-1 flex flex-col min-h-0 lg:flex-none lg:w-[400px] xl:w-[460px] lg:shrink-0 lg:border-l lg:border-gray-100">
          <div className="p-6 sm:p-8 overflow-y-auto min-h-0">
            {description && (
              <p className="text-gray-700 leading-relaxed text-[15px]">{description}</p>
            )}

            {highlights && highlights.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                  {t('gallery.highlights')}
                </p>
                <ul className="space-y-2">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-gray-800 text-sm">
                      <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-auto p-5 border-t border-gray-100 bg-gray-50/80 flex justify-end shrink-0">
            <button
              type="button"
              className="px-6 py-2.5 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors font-semibold text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
              onClick={onClose}
            >
              {t('common.close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
