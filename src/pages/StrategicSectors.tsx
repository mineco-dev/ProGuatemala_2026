import SectorsCarousel from '@/components/SectorsCarousel';
import {
  CtaSection,
  DashboardSection,
  HeroSection,
  OnePagersSection,
} from './sections/strategicSectors';

export default function StrategicSectors() {
  return (
    <div>
      <HeroSection />
      <SectorsCarousel />
      <OnePagersSection />
      <DashboardSection />
      <CtaSection />
    </div>
  );
}
