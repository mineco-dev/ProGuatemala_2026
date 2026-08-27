import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDocumentOpener } from '@/hooks/useDocumentOpener';
import { getResourceTypeIcon, resourceIconGradient } from './resourceHelpers';
import type { Resource } from '@/types/resource';

interface FeaturedResourcesSectionProps {
  resources: Resource[];
}

export default function FeaturedResourcesSection({ resources }: FeaturedResourcesSectionProps) {
  const { t } = useLanguage();
  const openDocument = useDocumentOpener();

  if (resources.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('resources.featured.title')}
          subtitle={t('resources.featured.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const Icon = getResourceTypeIcon(resource.type);
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30 border border-blue-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-4 rounded-2xl shadow-lg transform hover:rotate-6 transition-transform duration-300 ${resourceIconGradient(
                        resource.type,
                      )}`}
                    >
                      <Icon className="w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                    <span className="bg-support-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {t('resources.badge.featured')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight leading-tight">
                    {resource.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-base leading-relaxed">
                    {resource.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="bg-gray-100 px-2 py-1 rounded-md font-medium">
                        {resource.type}
                      </span>
                      {resource.size && (
                        <span className="bg-gray-100 px-2 py-1 rounded-md font-medium">
                          {resource.size}
                        </span>
                      )}
                      <span className="bg-gray-100 px-2 py-1 rounded-md font-medium">
                        {resource.language}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="bg-green-100 p-1.5 rounded-md mr-2">
                        <Download className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-medium">
                        {resource.downloads?.toLocaleString() || 0} {t('resources.downloads')}
                      </span>
                    </div>
                    <button
                      onClick={() => openDocument(resource.file_url)}
                      className="bg-support-500 hover:bg-support-600 text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 flex items-center shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {t('resources.download')}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
