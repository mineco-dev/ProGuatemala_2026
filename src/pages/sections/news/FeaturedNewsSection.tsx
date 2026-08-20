import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { NewsItem } from '@/types/news';

interface FeaturedNewsSectionProps {
  news: NewsItem | null;
}

export default function FeaturedNewsSection({ news }: FeaturedNewsSectionProps) {
  const { t } = useLanguage();

  if (!news) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img src={news.image_url} alt={news.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-support-50">
                    {news.category}
                  </span>
                  <span className="bg-support-50 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {t('news.featured')}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{news.title}</h2>
                <p className="text-gray-600 text-lg mb-6">{news.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(news.published_date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {news.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {news.read_time}
                    </div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center">
                    {t('news.readMore')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
