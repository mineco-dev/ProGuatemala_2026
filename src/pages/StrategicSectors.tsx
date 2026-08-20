import SectorsCarousel from '@/components/SectorsCarousel';
import { CtaSection, DashboardSection, HeroSection } from './sections/strategicSectors';

export default function StrategicSectors() {
  return (
    <div>
      <HeroSection />
      <SectorsCarousel />
      <DashboardSection />
      <CtaSection />
    </div>
  );
}
