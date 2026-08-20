import { motion } from 'framer-motion';
import { Building, Mail, Phone, Send, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { interestOptions } from '@/data/contact';
import type { useContactForm } from '@/hooks/useContactForm';

type ContactFormProps = Pick<
  ReturnType<typeof useContactForm>,
  'formData' | 'isSubmitting' | 'error' | 'handleInputChange' | 'handleSubmit'
>;

const inputClasses =
  'w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent';

export default function ContactForm({
  formData,
  isSubmitting,
  error,
  handleInputChange,
  handleSubmit,
}: ContactFormProps) {
  const { t } = useLanguage();
  const options = useLocalized(interestOptions);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-8 shadow-xl"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('contact.form.title')}</h2>
      <p className="text-gray-600 mb-8">{t('contact.form.subtitle')}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}

        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.name')}
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className={inputClasses}
              placeholder={t('contact.form.namePlaceholder')}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.email')}
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className={inputClasses}
              placeholder={t('contact.form.emailPlaceholder')}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.phone')}
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={inputClasses}
              placeholder={t('contact.form.phonePlaceholder')}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.company')}
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              id="contact-company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className={inputClasses}
              placeholder={t('contact.form.companyPlaceholder')}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-interest" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.interest')}
          </label>
          <select
            id="contact-interest"
            name="interest"
            required
            value={formData.interest}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isSubmitting}
          >
            <option value="">{t('contact.form.interestPlaceholder')}</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.message')}
          </label>
          <textarea
            id="contact-message"
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
          {t('contact.form.required')}
        </p>
      </form>
    </motion.div>
  );
}
