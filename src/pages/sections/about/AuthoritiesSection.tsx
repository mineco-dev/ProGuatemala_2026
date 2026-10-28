import { motion } from 'framer-motion';
import { Mail, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { authorities, president } from '@/data/about';

export default function AuthoritiesSection() {
  const { t } = useLanguage();
  const people = useLocalized(authorities);
  const head = useLocalized(president);

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage:
          'repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 14px), linear-gradient(135deg, #3DB08B 0%, #2E9070 55%, #257457 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.12em] text-white mb-4">
            {t('about.authorities.title')}
          </h2>
          <p className="text-xl leading-relaxed text-white/90">
            {t('about.authorities.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Presidente: misma tarjeta que las demas autoridades, con la version
              corta del mensaje para que las alturas coincidan. */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-lg">
                <img
                  src={head.photo}
                  alt={head.formalName}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{head.formalName}</h3>
              <p className="text-blue-600 font-semibold mb-4">{head.shortPosition}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{head.bio}</p>
              <p className="text-gray-600 italic leading-relaxed border-t border-gray-100 pt-4">
                &ldquo;{head.shortQuote}&rdquo;
              </p>
            </div>
          </motion.div>

          {people.map((authority, index) => (
            <motion.div
              key={authority.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg overflow-hidden border-1 border-white bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shrink-0">
                  {authority.image ? (
                    <img
                      src={authority.image}
                      alt={authority.name}
                      className="w-full h-full object-cover object-left"
                    />
                  ) : (
                    <User className="w-16 h-16 text-white" />
                  )}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{authority.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{authority.position}</p>
                <p className="text-gray-700 leading-relaxed mb-4">{authority.bio}</p>

                {authority.email && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${authority.email}`} className="hover:text-blue-600">
                      {authority.email}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
