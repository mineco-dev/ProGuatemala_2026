export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image_url: string;
  published_date: string;
  author: string;
  category: string;
  read_time: string;
  is_featured: boolean;
  linkedin_url?: string | null;
}

export interface Event {
  id: string;
  title: string;
  event_date: string;
  location: string;
  description: string;
}
