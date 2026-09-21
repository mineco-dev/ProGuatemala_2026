import { LinkedInSection } from './sections/resources';
import { CollectionsSection, HeroSection } from './sections/press';

export default function Press() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CollectionsSection />
      <LinkedInSection />
    </div>
  );
}
