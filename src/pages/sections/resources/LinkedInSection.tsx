import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLatestLinkedInPost } from '@/hooks/useLatestLinkedInPost';
import {
  buildLinkedInEmbedUrl,
  buildLinkedInPostUrl,
  extractLinkedInActivityId,
} from '@/lib/linkedin';

// Post de respaldo si ninguna noticia tiene enlace de LinkedIn asignado.
const FALLBACK_ACTIVITY_ID = '7501391081742196736';

export default function LinkedInSection() {
  const { t } = useLanguage();
  const { linkedInUrl } = useLatestLinkedInPost();

  const activityId = extractLinkedInActivityId(linkedInUrl) ?? FALLBACK_ACTIVITY_ID;
  const embedUrl = buildLinkedInEmbedUrl(activityId);
  const postUrl = buildLinkedInPostUrl(activityId);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {t('resources.linkedin.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('resources.linkedin.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center"
        >
          <iframe
            key={activityId}
            src={embedUrl}
            title={t('resources.linkedin.title')}
            className="w-full max-w-[550px] rounded-lg border border-gray-200 shadow-sm"
            height={620}
            frameBorder={0}
            allowFullScreen
          />
        </motion.div>

        <div className="text-center mt-6">
          <a
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
          >
            {t('resources.linkedin.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
