import { useLanguage } from '@/contexts/LanguageContext';
import { onePagers } from '@/data/onePagers';
import factSheetBanner from '@/assets/images/IMAGENES PAGINA PROGUATEMALA/INICIO/BACKGROUNDS-01.jpg';

export default function FactSheetSection() {
  const { language } = useLanguage();

  return (
    <section className="relative">
      {/* Banner oficial tal cual: folleto, texto, botón y degradado vienen horneados en la imagen */}
      <img
        src={factSheetBanner}
        alt="¿Quieres conocer más detalles? Descarga nuestro fact sheet completo"
        className="block w-full h-auto"
      />

      {/* Zona clickeable transparente alineada con el botón dibujado en la imagen */}
      <a
        href={onePagers.welcomePackage[language]}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Descargar fact sheet"
        className="absolute cursor-pointer"
        style={{ left: '46%', top: '63.5%', width: '12.6%', height: '20%' }}
      />
    </section>
  );
}
