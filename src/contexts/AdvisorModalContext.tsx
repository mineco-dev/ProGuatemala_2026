import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import AdvisorModal from '@/components/AdvisorModal';

interface AdvisorModalContextValue {
  open: () => void;
  close: () => void;
}

const AdvisorModalContext = createContext<AdvisorModalContextValue | null>(null);

/**
 * Monta el modal "Habla con un asesor" una sola vez a nivel de app y expone
 * `open`/`close` para que cualquier boton del sitio lo dispare.
 */
export function AdvisorModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo<AdvisorModalContextValue>(
    () => ({ open: () => setIsOpen(true), close: () => setIsOpen(false) }),
    [],
  );

  return (
    <AdvisorModalContext.Provider value={value}>
      {children}
      <AdvisorModal isOpen={isOpen} onClose={value.close} />
    </AdvisorModalContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAdvisorModal = (): AdvisorModalContextValue => {
  const context = useContext(AdvisorModalContext);
  if (!context) {
    throw new Error('useAdvisorModal debe usarse dentro de AdvisorModalProvider');
  }
  return context;
};
