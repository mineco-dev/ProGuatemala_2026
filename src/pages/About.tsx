import {
  AuthoritiesSection,
  BenefitsSection,
  HeroSection,
  MissionVisionSection,
  ServicesSection,
  StrategyDownloadSection,
  TeamSection,
} from './sections/about';

export default function About() {
  return (
    <div>
      <HeroSection />
      <MissionVisionSection />
      <ServicesSection />
      <BenefitsSection />
      <AuthoritiesSection />
      <TeamSection />
      <StrategyDownloadSection />
    </div>
  );
}
