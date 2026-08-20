import { useContactForm } from '@/hooks/useContactForm';
import {
  ContactFormSection,
  ContactInfoSection,
  FaqSection,
  HeroSection,
  SubmissionSuccess,
} from './sections/contact';

export default function Contact() {
  const { isSubmitted, reset, ...formProps } = useContactForm();

  if (isSubmitted) {
    return <SubmissionSuccess onSendAnother={reset} />;
  }

  return (
    <div>
      <HeroSection />
      <ContactInfoSection />
      <ContactFormSection {...formProps} />
      <FaqSection />
    </div>
  );
}
