import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PolicyUpdatesSection() {
  const { language } = useLanguage();
  const isEs = language === 'es';

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-support-50 border border-yellow-200 rounded-xl p-6"
        >
          <h4 className="font-bold text-gray-900 mb-2">
            {isEs ? 'Actualizaciones de esta Política' : 'Policy Updates'}
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            {isEs
              ? 'ProGuatemala se reserva el derecho de actualizar esta Política de Privacidad periódicamente. Le notificaremos sobre cambios significativos mediante un aviso destacado en nuestro sitio web o por correo electrónico. Le recomendamos revisar esta política regularmente para mantenerse informado sobre cómo protegemos su información.'
              : 'ProGuatemala reserves the right to update this Privacy Policy periodically. We will notify you of significant changes through a prominent notice on our website or by email. We recommend reviewing this policy regularly to stay informed about how we protect your information.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
