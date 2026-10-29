import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import ctaStrip from '@/assets/images/recursos/BACKGROUNDS-03.jpg';

/**
 * Banner de suscripcion al boletin, justo antes del footer de Recursos.
 * Sigue el mismo patron visual que los banners de las otras paginas
 * (imagen de fondo + overlay azul marino + contenido centrado).
 */
export default function NewsletterSection() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  // Sin backend de boletin aun: se evita el envio real del formulario.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative overflow-hidden py-16 bg-primary-500 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaStrip})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#11223B]/92 via-[#11223B]/78 to-[#11223B]/55" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-[0.12em] mb-5 text-[#D7E3AA]">
            {t('resources.newsletter.title')}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            {t('resources.newsletter.subtitle')}
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('resources.newsletter.placeholder')}
              aria-label={t('resources.newsletter.placeholder')}
              className="flex-1 px-5 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D7E3AA]"
            />
            <button
              type="submit"
              className="bg-[#D7E3AA] text-gray-900 hover:brightness-105 font-semibold px-8 py-3 rounded-lg transition-all duration-200 whitespace-nowrap"
            >
              {t('resources.newsletter.button')}
            </button>
          </form>
          <p className="text-xs text-white/70 mt-4">
            {t('resources.newsletter.disclaimer')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
