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
    <div className={`flex items-center ${className}`}>
      <img src={mineco} alt="Ministerio de Economia de Guatemala" className={imgClassName} />
      <img src={pro} alt="ProGuatemala" className={imgClassName} />
    </div>
  );
};

export default BrandLogos;
