import { useCallback } from 'react';

/** Abre un documento en una pestana nueva, ignorando urls vacias. */
export function useDocumentOpener() {
  return useCallback((url: string | null) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }, []);
}
