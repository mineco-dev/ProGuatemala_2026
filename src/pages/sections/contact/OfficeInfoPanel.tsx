import { motion } from 'framer-motion';
import { Calendar, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { TranslationKey } from '@/i18n';
import { LINKEDIN_URL, OFFICE_MAP_EMBED_URL } from '@/data/contact';

const SCHEDULE: Array<{ dayKey: TranslationKey; hoursKey: TranslationKey; closed: boolean }> = [
  { dayKey: 'contact.hours.weekdays', hoursKey: 'contact.hours.weekdaysValue', closed: false },
  { dayKey: 'contact.hours.saturday', hoursKey: 'contact.hours.saturdayValue', closed: false },
  { dayKey: 'contact.hours.sunday', hoursKey: 'contact.hours.sundayValue', closed: true },
];

/** Columna derecha del bloque de contacto: mapa, acciones rapidas y horarios. */
export default function OfficeInfoPanel() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.location.title')}</h3>
        <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center mb-6 relative overflow-hidden">
          <iframe
            title={t('contact.location.mapTitle')}
            src={OFFICE_MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="text-center text-gray-600">
            <p className="font-medium text-gray-900">{t('contact.location.zone')}</p>
            <p className="text-gray-600">{t('contact.location.zoneDesc')}</p>
          </div>
          <div>
            <p className="font-medium text-gray-900">{t('contact.location.access')}</p>
            <p className="text-gray-600">{t('contact.location.accessDesc')}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.actions.title')}</h3>
        <div className="space-y-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
            <Calendar className="w-5 h-5 mr-3" />
            {t('contact.actions.meeting')}
          </button>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">{t('contact.actions.social')}</h4>
            <div className="flex space-x-3 justify-center">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('contact.actions.linkedin')}
                className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{t('contact.hours.title')}</h3>
        <div className="space-y-2 text-sm">
          {SCHEDULE.map((entry) => (
            <div key={entry.dayKey} className="flex justify-between">
              <span className="text-gray-600">{t(entry.dayKey)}</span>
              <span className={`font-medium ${entry.closed ? 'text-gray-500' : ''}`}>
                {t(entry.hoursKey)}
              </span>
            </div>
          ))}
          <div className="mt-4 p-3 bg-blue-100 rounded-lg">
            <p className="text-xs text-gray-700">
              💡 <strong>{t('contact.hours.emergencyLabel')}</strong> {t('contact.hours.emergency')}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
