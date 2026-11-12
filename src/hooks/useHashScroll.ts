import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { smoothScrollTo } from '@/lib/scroll';

/**
 * Hace scroll animado hacia la subseccion indicada por el ancla de la URL.
 *
 * Al entrar a una pagina con un hash (p. ej. `/strategic-sectors#ruta-del-chip`
 * desde el menu de otra pagina), se espera a que la seccion se renderice y se
 * desplaza hasta ella. Usarlo en cualquier pagina con subsecciones navegables:
 *
 *   export default function StrategicSectors() {
 *     useHashScroll();
 *     // ...
 *   }
 *
 * @param delay milisegundos de espera antes del scroll, para dar tiempo a que
 *              el contenido destino este en el DOM.
 */
export function useHashScroll(delay = 150): void {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const timer = setTimeout(() => smoothScrollTo(id), delay);
    return () => clearTimeout(timer);
  }, [hash, delay]);
}
