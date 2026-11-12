import {
  AuthoritiesSection,
  BenefitsSection,
  HeroSection,
  ServicesSection,
  StrategyDownloadSection,
  TeamSection,
} from './sections/about';

export default function About() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <AuthoritiesSection />
      <TeamSection />
      <StrategyDownloadSection />
    </div>
  );
}
