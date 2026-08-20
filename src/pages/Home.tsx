import {
  AdvantagesSection,
  CtaSection,
  HeroSection,
  InvestmentMapSection,
} from './sections/home';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <AdvantagesSection />
      <InvestmentMapSection />
      <CtaSection />
    </div>
  );
}
