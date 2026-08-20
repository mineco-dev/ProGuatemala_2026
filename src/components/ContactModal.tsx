import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, Building, Send, CheckCircle } from 'lucide-react';
// Ajusta la ruta de importación de tu cliente de Supabase
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { interestOptions as defaultInterestOptions } from '@/data/contact';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Fuerza un idioma concreto. Por defecto usa el idioma activo de la app. */
  language?: 'es' | 'en';
  interestOptions?: string[];
  onSuccessCallback?: () => void;
}

interface FormDataState {
  name: string;
  email: string;
  phone: string;
  company: string;
  interest: string;
  message: string;
}

const INITIAL_FORM_STATE: FormDataState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  interest: '',
  message: ''
};

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  language,
  interestOptions,
  onSuccessCallback
}) => {
  const { t, language: activeLanguage } = useLanguage();
  const defaultOptions = useLocalized(defaultInterestOptions);
  // `language` solo se conserva para forzar un idioma concreto; por defecto
  // manda el idioma activo de la aplicacion.
  const formLanguage = language ?? activeLanguage;
  const options = interestOptions ?? defaultOptions;
  const [formData, setFormData] = useState<FormDataState>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: submitError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            company: formData.company || null,
            subject: formData.interest,
            message: formData.message,
            language: formLanguage,
            status: 'new'
          }
        ]);

      if (submitError) {
        throw submitError;
      }

      setIsSubmitted(true);
      setFormData(INITIAL_FORM_STATE);

      if (onSuccessCallback) {
        onSuccessCallback();
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(
        t('contact.form.error')
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    // Reseteamos el estado de enviado cuando el modal se cierra totalmente
    setIsSubmitted(false);
    setError(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          {/* Backdrop (Cierre al hacer clic fuera) */}
          <div className="fixed inset-0" onClick={handleClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl w-full relative z-10 max-h-[90vh] overflow-y-auto my-auto text-left"
          >
            {/* Botón de cerrar */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>

            {isSubmitted ? (
              /* Vista de confirmación de éxito */
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('contactModal.successTitle')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('contactModal.successBody')}
                </p>
                <button
                  onClick={handleClose}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  {t('common.close')}
                </button>
              </div>
            ) : (
              /* Formulario principal */
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {t('contact.form.title')}
                </h2>
                <p className="text-gray-600 mb-8">
                  {t('contact.form.subtitle')}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800 text-sm">{error}</p>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={t('contact.form.namePlaceholder')}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={t('contact.form.emailPlaceholder')}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={t('contact.form.phonePlaceholder')}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.company')}
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={t('contact.form.companyPlaceholder')}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.interest')}
                    </label>
                    <select
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      disabled={isSubmitting}
                    >
                      <option value="">{t('contact.form.interestPlaceholder')}</option>
                      {options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder={t('contact.form.messagePlaceholder')}
                      disabled={isSubmitting}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        {t('contact.form.submitting')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t('contact.form.submit')}
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    * Campos obligatorios. Nosotros te contactamos en 24 horas hábiles.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};