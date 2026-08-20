import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Book, ChevronDown, ChevronUp, ExternalLink, Globe } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { digitalTools } from '@/data/resources';

export default function DigitalToolsSection() {
  const { t } = useLanguage();
  const tools = useLocalized(digitalTools);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 bg-white border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('resources.tools.title')}
          subtitle={t('resources.tools.subtitle')}
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => setIsExpanded((expanded) => !expanded)}
              aria-expanded={isExpanded}
              className="w-full px-8 py-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white flex items-center justify-between hover:from-blue-700 hover:to-teal-700 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                  <Globe className="w-8 h-8 drop-shadow-lg text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl text-white font-bold tracking-tight">
                    {t('resources.tools.boxTitle')}
                  </h3>
                  <p className="text-white/90 text-base">
                    {t('resources.tools.boxSubtitle')}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-base font-semibold hidden sm:inline">
                  {isExpanded ? t('resources.tools.hide') : t('resources.tools.show')}
                </span>
                {isExpanded ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </div>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="p-8 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {tools.map((tool, index) => (
                        <motion.div
                          key={tool.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-6 border border-blue-200 hover:shadow-xl transition-all duration-500 hover:border-blue-400 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-3">
                                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-3 rounded-2xl shadow-lg">
                                  <Globe className="w-6 h-6 text-white drop-shadow-lg" />
                                </div>
                                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                  {tool.type}
                                </span>
                              </div>
                              <h4 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                                {tool.name}
                              </h4>
                              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                {tool.description}
                              </p>
                              <div className="flex items-center space-x-2">
                                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-green-600 text-xs font-semibold">
                                  {t('resources.tools.available')}
                                </span>
                              </div>
                            </div>
                            <a
                              href={tool.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-4 bg-gradient-to-br from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white p-3.5 rounded-2xl transition-all duration-300 flex-shrink-0 shadow-lg hover:shadow-xl transform hover:scale-110 inline-block"
                              title={t('resources.tools.visit')}
                            >
                              <ExternalLink className="w-5 h-5 drop-shadow-lg" />
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 shadow-lg">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-3 rounded-2xl flex-shrink-0 shadow-lg">
                          <Book className="w-6 h-6 text-white drop-shadow-lg" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2 text-lg">
                            {t('resources.tools.helpTitle')}
                          </h4>
                          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                            {t('resources.tools.helpBody')}
                          </p>
                          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                            {t('resources.tools.helpCta')}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
