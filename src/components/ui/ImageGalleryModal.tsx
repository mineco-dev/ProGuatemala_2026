import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  images: string[];
  /** Etiquetas que se muestran como chips al pie del contenido. */
  highlights?: string[];
}

/**
 * Modal con carrusel de imagenes. Es autonomo: maneja su propio indice y lo
 * reinicia cada vez que se abre, por lo que quien lo usa solo decide si esta
 * abierto y con que contenido.
 */
export default function ImageGalleryModal({
  isOpen,
  onClose,
  title,
  description,
  images,
  highlights,
}: ImageGalleryModalProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const goTo = useCallback(
    (delta: number) => setIndex((current) => (current + delta + total) % total),
    [total],
  );

  useEffect(() => {
    if (isOpen) setIndex(0);
  }, [isOpen, title]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') goTo(-1);
      if (event.key === 'ArrowRight') goTo(1);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose, goTo]);

  if (!isOpen || total === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden flex flex-col max-h-[90vh] my-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-[16/10] bg-gray-900 overflow-hidden group max-h-[60vh] shrink-0">
          <img
            src={images[index]}
            alt={`${title} - Imagen ${index + 1}`}
            className="w-full h-full object-cover transition-all duration-300"
          />

          <button
            type="button"
            aria-label="Cerrar modal"
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2.5 transition-colors z-20"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>

          {total > 1 && (
            <>
              <button
                type="button"
                aria-label="Imagen anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2.5 transition-colors z-10"
                onClick={() => goTo(-1)}
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              <button
                type="button"
                aria-label="Siguiente imagen"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2.5 transition-colors z-10"
                onClick={() => goTo(1)}
              >
                <ChevronRight className="w-7 h-7" />
              </button>

              <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-3.5 py-1.5 rounded-full font-medium backdrop-blur-sm z-10">
                {index + 1} / {total}
              </div>
            </>
          )}
        </div>

        <div className="p-6 overflow-y-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
          {description && <p className="text-gray-700 mb-4">{description}</p>}

          {highlights && highlights.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="bg-support-50 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t bg-gray-50 flex justify-end shrink-0">
          <button
            className="px-5 py-2.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors font-medium"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
