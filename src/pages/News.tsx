import LoadingState from '@/components/ui/LoadingState';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNewsAndEvents } from '@/hooks/useNewsAndEvents';
import {
  EventsSection,
  FeaturedNewsSection,
  HeroSection,
  NewsGridSection,
  NewsletterSection,
} from './sections/news';

export default function News() {
  const { t } = useLanguage();
  const { newsItems, featuredNews, events, loading } = useNewsAndEvents();

  if (loading) {
    return <LoadingState message={t('news.loading')} />;
  }

  return (
    <div className="pt-16">
      <HeroSection />
      <FeaturedNewsSection news={featuredNews} />
      <NewsGridSection items={newsItems} />
      <EventsSection events={events} />
      <NewsletterSection />
    </div>
  );
}
