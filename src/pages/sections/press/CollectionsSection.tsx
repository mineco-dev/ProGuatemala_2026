import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, ExternalLink, Newspaper } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PRESS_COLLECTIONS } from '@/data/press';
import type { PressArticle } from '@/types/press';

/** Cantidad de notas visibles por coleccion; el resto se ve con "Ver mas". */
const VISIBLE_ARTICLES = 3;

function PressArticleCard({ article, index }: { article: PressArticle; index: number }) {
  const { t, language } = useLanguage();
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(article.image) && !imageFailed;

  // El titulo y el extracto se conservan en su idioma original (espanol),
  // la fecha si se formatea segun el idioma activo.
  const formattedDate = article.date
    ? new Date(`${article.date}T00:00:00`).toLocaleDateString(language === 'en' ? 'en-US' : 'es-GT', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-900 to-teal-700">
        {showImage ? (
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Newspaper className="w-12 h-12 text-white/70" />
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        {formattedDate && (
          <div className="flex items-center text-xs text-gray-500 mb-3">
            <Calendar className="w-3 h-3 mr-1" />
            {formattedDate}
          </div>
        )}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-3">{article.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{article.excerpt}</p>
        <span className="text-blue-600 group-hover:text-blue-700 font-medium text-sm flex items-center">
          {t('press.readArticle')}
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </span>
      </div>
    </motion.a>
  );
}

export default function CollectionsSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {PRESS_COLLECTIONS.map((collection) => (
          <div key={collection.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {collection.title[language]}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">{collection.description[language]}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collection.articles.slice(0, VISIBLE_ARTICLES).map((article, index) => (
                <PressArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href={collection.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
              >
                {t('press.viewMore')}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
