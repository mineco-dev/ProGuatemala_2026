import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LEGAL_EMAIL, LEGAL_ORG_NAME, legalContact } from '@/data/legal/contactDetails';

export default function ImportantNoticeSection() {
  const { language } = useLanguage();
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
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 p-3 rounded-xl flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {isEs ? 'Aviso Importante' : 'Important Notice'}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {isEs
                  ? 'Al utilizar este sitio web, usted reconoce que ha leído, entendido y acepta estar sujeto a estos Términos de Uso, así como a nuestra Política de Privacidad. Si tiene alguna pregunta sobre estos términos, por favor contáctenos antes de utilizar el sitio.'
                  : 'By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use, as well as our Privacy Policy. If you have any questions about these terms, please contact us before using the site.'}
              </p>
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold">{LEGAL_ORG_NAME}</p>
                <p>Email: {LEGAL_EMAIL}</p>
                <p>{legalContact[language].phone}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
