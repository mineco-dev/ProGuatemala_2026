/// <reference types="vite/client" />

// Vite solo declara las extensiones en minuscula. Varias imagenes del proyecto
// vienen de camara/drone con la extension en mayuscula, asi que las declaramos aqui.
declare module '*.JPG' {
  const src: string;
  export default src;
}

declare module '*.JPEG' {
  const src: string;
  export default src;
}

declare module '*.PNG' {
  const src: string;
  export default src;
}
