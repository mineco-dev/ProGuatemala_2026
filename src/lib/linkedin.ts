/**
 * Extrae el ID de actividad de una URL de LinkedIn en cualquiera de sus formatos:
 *  - .../posts/...-activity-7501391081742196736-dGvd?...
 *  - .../feed/update/urn:li:activity:7501391081742196736
 *  - urn:li:share:7501391081742196736
 * Devuelve null si no encuentra un ID válido.
 */
export function extractLinkedInActivityId(url: string | null | undefined): string | null {
  if (!url) return null;
  const match = url.match(/(?:activity|share|ugcPost)[:-](\d+)/i);
  return match ? match[1] : null;
}

export function buildLinkedInEmbedUrl(activityId: string): string {
  return `https://www.linkedin.com/embed/feed/update/urn:li:activity:${activityId}`;
}

export function buildLinkedInPostUrl(activityId: string): string {
  return `https://www.linkedin.com/feed/update/urn:li:activity:${activityId}`;
}
