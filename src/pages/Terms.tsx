import { Scale } from 'lucide-react';
import LegalDocumentLayout from '@/components/layouts/LegalDocumentLayout';
import { termsDocument } from '@/data/legal/terms';
import { ImportantNoticeSection, LastModifiedSection } from './sections/terms';

export default function Terms() {
  return (
    <LegalDocumentLayout document={termsDocument} icon={Scale}>
      <ImportantNoticeSection />
      <LastModifiedSection />
    </LegalDocumentLayout>
  );
}
