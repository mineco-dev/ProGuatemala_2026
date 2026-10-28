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
      className="group flex flex-col bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden bg-gray-200">
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
            <Newspaper className="w-12 h-12 text-gray-300" />
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
    <>
      {PRESS_COLLECTIONS.map((collection) => (
        <section key={collection.id} className="relative overflow-hidden py-20 text-white">
          {/* Cada coleccion tiene su propio fondo tematico. */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${collection.background})` }}
          />
          <div className="absolute inset-0 bg-[#0A1A33]/35" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              {collection.logo ? (
                <img
                  src={collection.logo}
                  alt={collection.title[language]}
                  className="h-16 md:h-20 w-auto mx-auto mb-6 object-contain"
                />
              ) : (
                <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-[0.12em] mb-4 text-yellow-500">
                  {collection.title[language]}
                </h2>
              )}
              <p className="text-lg text-white/85">{collection.description[language]}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collection.articles.slice(0, VISIBLE_ARTICLES).map((article, index) => (
                <PressArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href={collection.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#11223B] hover:bg-[#1B3A5C] border border-white/20 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-colors duration-200"
              >
                {t('press.viewMore')}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
