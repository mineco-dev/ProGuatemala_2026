import {
  AdvantagesSection,
  ComparisonSection,
  CtaSection,
  HeroSection,
  MapSection,
  ParksSection,
  StatisticsSection,
} from './sections/whyGuatemala';

export default function WhyGuatemala() {
  return (
    <div>
      <HeroSection />
      <StatisticsSection />
      <AdvantagesSection />
      <MapSection />
      <ParksSection />
      <ComparisonSection />
      <CtaSection />
    </div>
  );
}
