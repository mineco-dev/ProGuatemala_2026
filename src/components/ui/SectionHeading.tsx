import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** "premium" usa el titulo grande con sombra; "default" el titulo estandar de seccion. */
  variant?: 'default' | 'premium';
  /** Invierte los colores para secciones con fondo oscuro. */
  light?: boolean;
  className?: string;
}

/**
 * Encabezado animado que comparten todas las secciones de contenido.
 * Evita repetir el mismo bloque motion.div + h2 + p en cada pagina.
 */
export default function SectionHeading({
  title,
  subtitle,
  variant = 'default',
  light = false,
  className = 'mb-12',
}: SectionHeadingProps) {
  const titleClasses =
    variant === 'premium'
      ? 'text-4xl md:text-5xl font-bold mb-6 text-shadow-premium'
      : 'text-3xl md:text-4xl font-bold mb-4';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: variant === 'premium' ? 0.8 : 0.6 }}
      className={`text-center ${className}`}
    >
      <h2 className={`${titleClasses} ${light ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
      {subtitle && (
        <p className={`text-xl leading-relaxed ${light ? 'text-white/90' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
