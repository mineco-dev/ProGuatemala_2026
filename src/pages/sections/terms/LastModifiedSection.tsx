import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LastModifiedSection() {
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
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center"
        >
          <p className="text-gray-600 text-sm">
            {isEs
              ? 'Estos Términos de Uso fueron actualizados por última vez en Febrero de 2024. ProGuatemala se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.'
              : 'These Terms of Use were last updated in February 2024. ProGuatemala reserves the right to modify these terms at any time. Changes will take effect immediately upon posting on the website.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
