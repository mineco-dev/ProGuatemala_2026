import { motion } from 'framer-motion';
import { Calendar, Download, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDocumentOpener } from '@/hooks/useDocumentOpener';
import { getResourceTypeIcon, resourceIconGradient } from './resourceHelpers';
import type { Resource } from '@/types/resource';

interface ResourcesGridSectionProps {
  resources: Resource[];
}

export default function ResourcesGridSection({ resources }: ResourcesGridSectionProps) {
  const { t } = useLanguage();
  const openDocument = useDocumentOpener();

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            const Icon = getResourceTypeIcon(resource.type);
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-xl shadow-md ${resourceIconGradient(resource.type)}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {resource.is_featured && (
                      <span className="bg-support-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        {t('resources.badge.featured')}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 tracking-tight">
                    {resource.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {resource.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="bg-gray-100 px-2 py-1 rounded-md font-medium">
                        {resource.type}
                      </span>
                      <span className="bg-gray-100 px-2 py-1 rounded-md font-medium">
                        {resource.size}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-1 rounded-md mr-1">
                        <Calendar className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="font-medium">
                        {new Date(resource.published_date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <span className="bg-blue-100 text-blue-800 px-2.5 py-1 rounded-md font-semibold text-xs">
                      {resource.language}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => openDocument(resource.file_url)}
                        className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors duration-200"
                        title={t('resources.view')}
                      >
                        <Eye className="w-4 h-4 text-gray-700" />
                      </button>
                      <button
                        onClick={() => openDocument(resource.file_url)}
                        className="bg-support-500 hover:bg-support-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 inline-flex items-center"
                      >
                        <Download className="w-4 h-4 mr-1.5" />
                        {t('resources.download')}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {resources.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 mt-6">
            <div className="text-gray-400 text-6xl mb-4">📄</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{t('resources.empty.title')}</h3>
            <p className="text-gray-600">{t('resources.empty.subtitle')}</p>
          </div>
        )}
      </div>
    </section>
  );
}
