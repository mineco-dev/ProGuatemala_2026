import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SubmissionSuccessProps {
  onSendAnother: () => void;
}

export default function SubmissionSuccess({ onSendAnother }: SubmissionSuccessProps) {
  const { t } = useLanguage();

  return (
    <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl p-8 shadow-xl text-center max-w-md"
      >
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contact.success.title')}</h2>
        <p className="text-gray-600 mb-6">
          {t('contact.success.body')}
        </p>
        <button
          onClick={onSendAnother}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
        >
          {t('contact.success.again')}
        </button>
      </motion.div>
    </div>
  );
}
