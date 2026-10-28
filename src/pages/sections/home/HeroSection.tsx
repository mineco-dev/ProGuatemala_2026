import { useLanguage } from '@/contexts/LanguageContext';
import { useAdvisorModal } from '@/contexts/AdvisorModalContext';
import { onePagers } from '@/data/onePagers';
import heroBanner from '@/assets/images/IMAGENES PAGINA PROGUATEMALA/INICIO/INICIO-01.jpg';

export default function HeroSection() {
  const { language } = useLanguage();
  const { open: openAdvisorModal } = useAdvisorModal();

  return (
    <section className="relative">
      {/* Banner oficial tal cual: titular, botones y degradado vienen horneados en la imagen */}
      <img
        src={heroBanner}
        alt="El momento de invertir en Guatemala es ahora"
        className="block w-full h-auto"
      />

      {/* Zonas clickeables transparentes alineadas con los botones dibujados en la imagen */}
      <a
        href={onePagers.welcomePackage[language]}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Descargar Guía del Inversionista"
        className="absolute cursor-pointer"
        style={{ left: '22.5%', top: '74.5%', width: '14.5%', height: '11.5%' }}
      />
      <button
        type="button"
        onClick={openAdvisorModal}
        aria-label="Habla con un asesor"
        className="absolute cursor-pointer border-0 bg-transparent p-0"
        style={{ left: '37.6%', top: '74.5%', width: '11.6%', height: '11.5%' }}
      />
    </section>
  );
}
