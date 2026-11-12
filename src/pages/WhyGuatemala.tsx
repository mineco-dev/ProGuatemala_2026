import { useHashScroll } from '@/hooks/useHashScroll';
import {
  AdvantagesSection,
  ComparisonSection,
  CtaSection,
  HeroSection,
  MapSection,
  ParksSection,
  SectionNav,
  StatisticsSection,
} from './sections/whyGuatemala';

export default function WhyGuatemala() {
  useHashScroll();

  return (
    <div>
      <SectionNav />
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
