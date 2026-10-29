import SectorsCarousel from '@/components/SectorsCarousel';
import {
  CtaSection,
  DashboardSection,
  HeroSection,
  RutaDelChipSection,
} from './sections/strategicSectors';

export default function StrategicSectors() {
  return (
    <div>
      <HeroSection />
      <div id="sectores-estrategicos" className="scroll-mt-20">
        <SectorsCarousel />
        <DashboardSection />
      </div>
      <RutaDelChipSection />
      <CtaSection />
    </div>
  );
}
