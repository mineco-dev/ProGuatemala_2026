import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Event, NewsItem } from '@/types/news';

/**
 * Carga noticias y eventos desde Supabase y separa la noticia destacada
 * del resto del listado.
 */
export function useNewsAndEvents() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [featuredNews, setFeaturedNews] = useState<NewsItem | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchNewsAndEvents = useCallback(async () => {
    try {
      const { data: newsData, error: newsError } = await supabase
        .from('news')
        .select('*')
        .order('published_date', { ascending: false });

      if (newsError) throw newsError;

      if (newsData) {
        setFeaturedNews(newsData.find((item) => item.is_featured) ?? null);
        setNewsItems(newsData.filter((item) => !item.is_featured));
      }

      const { data: eventsData, error: eventsError } = await supabase
        .from('events')
        .select('*')
        .order('event_date', { ascending: true });

      if (eventsError) throw eventsError;

      if (eventsData) {
        setEvents(eventsData);
      }
    } catch (error) {
      console.error('Error fetching news and events:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchNewsAndEvents();
  }, [fetchNewsAndEvents]);

  return { newsItems, featuredNews, events, loading };
}
