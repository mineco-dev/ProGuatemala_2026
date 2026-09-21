/**
 * Desplazamiento animado hacia un elemento por su id.
 *
 * Usa requestAnimationFrame con easing para que la animacion se vea siempre,
 * sin depender del `scroll-behavior` del navegador (que algunos hacen instantaneo).
 *
 * @param id       id del elemento destino.
 * @param offset   pixeles que se dejan libres arriba (para el header fijo).
 * @param duration duracion en milisegundos (rapido pero visible por defecto).
 */
export function smoothScrollTo(id: string, offset = 80, duration = 700): void {
  const target = document.getElementById(id);
  if (!target) return;

  const startY = window.scrollY;
  const endY = target.getBoundingClientRect().top + startY - offset;
  const distance = endY - startY;
  let startTime: number | null = null;

  // Aceleracion y desaceleracion suaves para que se aprecie el recorrido.
  const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

  const step = (timestamp: number) => {
    if (startTime === null) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutQuad(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}
