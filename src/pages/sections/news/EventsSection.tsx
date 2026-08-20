import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Event } from '@/types/news';

interface EventsSectionProps {
  events: Event[];
}

export default function EventsSection({ events }: EventsSectionProps) {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('news.events.title')}
          subtitle={t('news.events.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => {
            const date = new Date(event.event_date);
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-center mb-4">
                  <div className="bg-blue-600 text-white rounded-lg p-4 inline-block mb-4">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{date.getDate()}</div>
                  <div className="text-sm text-gray-600">
                    {date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">{event.description}</p>
                <div className="text-center text-sm text-gray-500 mb-4">📍 {event.location}</div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors duration-200">
                  {t('news.events.more')}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
