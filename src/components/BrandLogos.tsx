import React from 'react';
// Logos oficiales (MINECO + ProGuatemala). El Ministerio de Economia va SIEMPRE
// a la izquierda de ProGuatemala. Version a color para fondos claros y version
// blanca para fondos oscuros.
import minecoColor from '@/assets/images/logos/LOGO MINECO Y PROGUATEMALA-03.png';
import minecoWhite from '@/assets/images/logos/LOGO MINECO Y PROGUATEMALA-04.png';
import proColor from '@/assets/images/logos/LOGO MINECO Y PROGUATEMALA-01.png';
import proWhite from '@/assets/images/logos/LOGO MINECO Y PROGUATEMALA-02.png';

interface BrandLogosProps {
  /** 'color' para fondos claros, 'white' para fondos oscuros. */
  variant?: 'color' | 'white';
  /** Clases aplicadas a cada <img> (controla la altura). */
  imgClassName?: string;
  /** Clases del contenedor flex (p. ej. el gap entre logos). */
  className?: string;
}

const BrandLogos: React.FC<BrandLogosProps> = ({
  variant = 'color',
  imgClassName = 'h-10 w-auto',
  className = 'gap-3',
}) => {
  const mineco = variant === 'white' ? minecoWhite : minecoColor;
  const pro = variant === 'white' ? proWhite : proColor;

  return (
    // Cada <img> va envuelta en un <span> para que NO sea hijo directo del flex.
    // Firefox a veces usa el ancho intrinseco real del PNG (miles de px) como
    // tamano del item flex, inflando el logo y amontonando el resto del appbar.
    // Con el wrapper, el flex mide el span y la img escala por su altura.
    <div className={`flex items-center ${className}`}>
      <span className="inline-flex shrink-0">
        <img src={mineco} alt="Ministerio de Economia de Guatemala" className={`block ${imgClassName}`} />
      </span>
      <span className="inline-flex shrink-0">
        <img src={pro} alt="ProGuatemala" className={`block ${imgClassName}`} />
      </span>
    </div>
  );
};

export default BrandLogos;
