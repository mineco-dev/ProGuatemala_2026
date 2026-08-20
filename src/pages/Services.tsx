import {
  BenefitsSection,
  CtaSection,
  HeroSection,
  ServiceTabsSection,
} from './sections/services';

export default function Services() {
  return (
    <div>
      <HeroSection />
      <ServiceTabsSection />
      <BenefitsSection />
      <CtaSection />
    </div>
  );
}
