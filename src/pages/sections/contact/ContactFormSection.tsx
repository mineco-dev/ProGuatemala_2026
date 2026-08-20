import ContactForm from './ContactForm';
import OfficeInfoPanel from './OfficeInfoPanel';
import type { useContactForm } from '@/hooks/useContactForm';

type ContactFormSectionProps = Pick<
  ReturnType<typeof useContactForm>,
  'formData' | 'isSubmitting' | 'error' | 'handleInputChange' | 'handleSubmit'
>;

export default function ContactFormSection(props: ContactFormSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm {...props} />
          <OfficeInfoPanel />
        </div>
      </div>
    </section>
  );
}
