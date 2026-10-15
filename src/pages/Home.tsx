import {
  AdvantagesSection,
  CtaSection,
  FactSheetSection,
  HeroSection,
  InvestmentMapSection,
} from './sections/home';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <AdvantagesSection />
      <FactSheetSection />
      <InvestmentMapSection />
      <CtaSection />
    </div>
  );
}
