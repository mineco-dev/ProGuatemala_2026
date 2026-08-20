import {
  ApplicationProcessSection,
  CtaSection,
  HeroSection,
  IncentiveProgramsSection,
  LegalFrameworkSection,
  ProtectionsSection,
} from './sections/legalIncentives';

export default function LegalIncentives() {
  return (
    <div className="pt-16">
      <HeroSection />
      <LegalFrameworkSection />
      <IncentiveProgramsSection />
      <ProtectionsSection />
      <ApplicationProcessSection />
      <CtaSection />
    </div>
  );
}
