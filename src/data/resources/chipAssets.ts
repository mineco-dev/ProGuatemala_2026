/**
 * Origen desde el que se sirven los archivos de la Ruta del Chip: los PDF, los
 * videos y sus miniaturas cuelgan todos de la misma carpeta del portal del
 * Ministerio de Economia. Es la misma ruta que usa el micrositio en Vue
 * (`ruta-del-chip`), de donde salen los nombres de archivo.
 *
 * Para servirlos desde este mismo sitio basta con dejar `BASE` vacio y copiar
 * los archivos a `public/images/ruta_del_chip/`; las rutas relativas
 * resultantes son las mismas que usa mineco.gob.gt.
 */
const BASE = 'https://www.mineco.gob.gt';

/**
 * URL publica de un archivo de `images/ruta_del_chip/`. Acepta subcarpetas
 * ("miniaturas/01_VV_RDC.jpg") y codifica cada tramo por separado, porque los
 * nombres traen espacios pero las barras deben quedar intactas.
 */
export const chipAssetUrl = (file: string): string =>
  `${BASE}/images/ruta_del_chip/${file.split('/').map(encodeURIComponent).join('/')}`;
