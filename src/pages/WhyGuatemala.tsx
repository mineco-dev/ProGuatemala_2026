import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { smoothScrollTo } from '@/lib/scroll';
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
  const { hash } = useLocation();

  // Al entrar con un ancla (p. ej. /why-guatemala#why-parques desde el menu),
  // se espera a que la seccion se renderice y se hace el scroll animado.
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const timer = setTimeout(() => smoothScrollTo(id), 150);
    return () => clearTimeout(timer);
  }, [hash]);

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
