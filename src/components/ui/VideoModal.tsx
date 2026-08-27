import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  /** URL del archivo de video. */
  src: string;
  /** Fotograma de portada mientras el video no ha cargado. */
  poster?: string;
}

/**
 * Reproductor a pantalla completa para un video suelto.
 *
 * Usa el reproductor nativo del navegador: los videos se sirven como archivos
 * mp4 desde el portal, no desde YouTube, asi que no hace falta un embed. El
 * `key` sobre el `<video>` lo remonta al cambiar de video, que es lo que
 * detiene el anterior y evita que siga sonando de fondo.
 */
export default function VideoModal({
  isOpen,
  onClose,
  title,
  description,
  src,
  poster,
}: VideoModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  // Mientras el modal esta abierto la pagina de atras no debe desplazarse.
  useEffect(() => {
    if (!isOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  if (!isOpen || !src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/90 p-4 sm:p-6 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-gray-950 rounded-2xl shadow-2xl ring-1 ring-white/10 overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label={t('resources.video.close')}
          className="absolute top-3 right-3 z-10 bg-gray-950/60 hover:bg-gray-950/90 text-white rounded-full p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        <video
          key={src}
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="w-full max-h-[75vh] bg-black"
        >
          {t('resources.video.unsupported')}
        </video>

        <div className="p-5 sm:p-6 border-t border-white/10">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          {description && <p className="text-sm text-gray-300 mt-1.5 leading-relaxed">{description}</p>}
        </div>
      </div>
    </div>
  );
}
