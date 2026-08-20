import { Shield } from 'lucide-react';
import LegalDocumentLayout from '@/components/layouts/LegalDocumentLayout';
import { privacyDocument } from '@/data/legal/privacy';
import { PolicyUpdatesSection, PrivacyContactSection } from './sections/privacy';

export default function Privacy() {
  return (
    <LegalDocumentLayout document={privacyDocument} icon={Shield}>
      <PrivacyContactSection />
      <PolicyUpdatesSection />
    </LegalDocumentLayout>
  );
}
