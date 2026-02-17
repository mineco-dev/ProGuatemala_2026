import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, X, Settings, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const GDPRBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false
  });
  const { t, language } = useLanguage();

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('gdpr-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setPreferences(allPreferences);
    localStorage.setItem('gdpr-consent', JSON.stringify(allPreferences));
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('gdpr-consent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const minimalPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    setPreferences(minimalPreferences);
    localStorage.setItem('gdpr-consent', JSON.stringify(minimalPreferences));
    setIsVisible(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {!showSettings ? (
            // Main GDPR Notice
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-start space-x-4 flex-1">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {t('gdpr.title')}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t('gdpr.description')}
                  </p>
                  <div className="mt-2">
                    <button
                      onClick={() => setShowSettings(true)}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium underline"
                    >
                      {t('gdpr.details')}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
                >
                  {t('gdpr.reject-all')}
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium flex items-center justify-center"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  {t('gdpr.configure')}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  {t('gdpr.accept-all')}
                </button>
              </div>
            </div>
          ) : (
            // Cookie Settings Panel
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t('gdpr.settings-title')}
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Necessary Cookies */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{t('gdpr.necessary')}</h4>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      {t('gdpr.always-active')}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {t('gdpr.necessary.desc')}
                  </p>
                  <div className="text-xs text-gray-500 whitespace-pre-line">
                    {t('gdpr.necessary.items')}
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{t('gdpr.analytics')}</h4>
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                        preferences.analytics ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                        preferences.analytics ? 'translate-x-6' : 'translate-x-0.5'
                      }`} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {t('gdpr.analytics.desc')}
                  </p>
                  <div className="text-xs text-gray-500 whitespace-pre-line">
                    {t('gdpr.analytics.items')}
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{t('gdpr.marketing')}</h4>
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                        preferences.marketing ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                        preferences.marketing ? 'translate-x-6' : 'translate-x-0.5'
                      }`} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {t('gdpr.marketing.desc')}
                  </p>
                  <div className="text-xs text-gray-500 whitespace-pre-line">
                    {t('gdpr.marketing.items')}
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{t('gdpr.functional')}</h4>
                    <button
                      onClick={() => togglePreference('functional')}
                      className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                        preferences.functional ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                        preferences.functional ? 'translate-x-6' : 'translate-x-0.5'
                      }`} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {t('gdpr.functional.desc')}
                  </p>
                  <div className="text-xs text-gray-500 whitespace-pre-line">
                    {t('gdpr.functional.items')}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end pt-4 border-t border-gray-200">
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
                >
                  {t('gdpr.reject-all')}
                </button>
                <button
                  onClick={handleAcceptSelected}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center"
                >
                  <Check className="w-4 h-4 mr-2" />
                  {t('gdpr.save-preferences')}
                </button>
              </div>

              <div className="text-xs text-gray-500 pt-2 border-t border-gray-200">
                <p>
                  {t('gdpr.privacy-notice')}{' '}
                  <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                    {t('gdpr.privacy-policy')}
                  </a>{' '}
                  {language === 'es' ? 'y nuestros' : 'and our'}{' '}
                  <a href="/terms" className="text-blue-600 hover:text-blue-700 underline">
                    {t('gdpr.terms')}
                  </a>.
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GDPRBar;