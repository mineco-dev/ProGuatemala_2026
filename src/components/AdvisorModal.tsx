import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContactForm } from '@/hooks/useContactForm';
import ContactForm from '@/pages/sections/contact/ContactForm';

interface AdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Contenido interno del modal. Se monta solo cuando el modal esta abierto, asi
 * que `useContactForm` arranca limpio en cada apertura (sin arrastrar el estado
 * de exito o los datos de un envio anterior).
 */
function AdvisorModalContent({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();
  const { isSubmitted, reset, ...form } = useContactForm();

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contact.success.title')}</h2>
        <p className="text-gray-600 mb-6">{t('contact.success.body')}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            {t('contact.success.again')}
          </button>
          <button
            onClick={onClose}
            className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            {t('advisorModal.close')}
          </button>
        </div>
      </div>
    );
  }

  return <ContactForm {...form} />;
}

/**
 * Modal global con el formulario "Nosotros te contactamos". Se abre desde los
 * botones "Habla con un asesor" repartidos por el sitio (ver AdvisorModalContext).
 */
export default function AdvisorModal({ isOpen, onClose }: AdvisorModalProps) {
  // Cierre con Escape y bloqueo del scroll de fondo mientras esta abierto.
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />

          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-gray-500 shadow-sm hover:bg-white hover:text-gray-800 transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>

            <AdvisorModalContent onClose={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
