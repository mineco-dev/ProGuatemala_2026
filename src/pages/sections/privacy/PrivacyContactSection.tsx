import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LEGAL_EMAIL, LEGAL_ORG_NAME, legalContact } from '@/data/legal/contactDetails';

export default function PrivacyContactSection() {
  const { language } = useLanguage();
  const contact = legalContact[language];
  const isEs = language === 'es';

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100"
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {isEs ? '¿Preguntas sobre Privacidad?' : 'Privacy Questions?'}
            </h3>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              {isEs
                ? 'Si tiene preguntas sobre esta Política de Privacidad o desea ejercer sus derechos de protección de datos, contáctenos:'
                : 'If you have questions about this Privacy Policy or wish to exercise your data protection rights, contact us:'}
            </p>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">{LEGAL_ORG_NAME}</p>
              <p>Email: {LEGAL_EMAIL}</p>
              <p>{contact.phone}</p>
              <p>{contact.hours}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
