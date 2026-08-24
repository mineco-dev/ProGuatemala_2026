import {
  AuthoritiesSection,
  BenefitsSection,
  HeroSection,
  MissionVisionSection,
  ServicesSection,
  StrategyDownloadSection,
  TeamSection,
  ValuesSection,
} from './sections/about';

export default function About() {
  return (
    <div>
      <HeroSection />
      <MissionVisionSection />
      <ValuesSection />
      <ServicesSection />
      <BenefitsSection />
      <AuthoritiesSection />
      <TeamSection />
      <StrategyDownloadSection />
    </div>
  );
}
