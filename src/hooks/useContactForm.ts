import { useCallback, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/contexts/LanguageContext';
import type { ContactFormData } from '@/types/contact';

const EMPTY_FORM: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  interest: '',
  message: '',
};

type FormFieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

/**
 * Estado y envio del formulario de contacto hacia la tabla
 * `contact_submissions` de Supabase.
 */
export function useContactForm() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = useCallback((event: React.ChangeEvent<FormFieldElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      setIsSubmitting(true);
      setError(null);

      try {
        const { error: submitError } = await supabase.from('contact_submissions').insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            company: formData.company || null,
            subject: formData.interest,
            message: formData.message,
            language,
            status: 'new',
          },
        ]);

        if (submitError) throw submitError;

        setIsSubmitted(true);
        setFormData(EMPTY_FORM);
      } catch (err) {
        console.error('Error submitting form:', err);
        setError(t('contact.form.error'));
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, language, t],
  );

  const reset = useCallback(() => setIsSubmitted(false), []);

  return {
    formData,
    isSubmitted,
    isSubmitting,
    error,
    handleInputChange,
    handleSubmit,
    reset,
  };
}
