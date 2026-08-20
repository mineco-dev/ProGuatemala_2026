import {
  AuthoritiesSection,
  BenefitsSection,
  HeroSection,
  MissionVisionSection,
  PresidentMessageSection,
  ServicesSection,
  StrategyDownloadSection,
  TeamSection,
  ValuesSection,
} from './sections/about';

export default function About() {
  return (
    <div>
      <HeroSection />
      <PresidentMessageSection />
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
