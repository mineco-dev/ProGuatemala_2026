import { motion } from 'framer-motion';
import { Mail, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { team } from '@/data/about';

export default function TeamSection() {
  const { t } = useLanguage();
  const members = useLocalized(team);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <h2
            className="text-3xl md:text-4xl font-bold uppercase tracking-[0.12em] mb-4"
            style={{ color: '#3DB08B' }}
          >
            {t('about.team.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t('about.team.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Avatar: foto si existe, de lo contrario circulo solido neutro */}
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 shadow-md bg-slate-600 flex items-center justify-center shrink-0">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-9 h-9 text-white/70" />
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="font-semibold mb-4" style={{ color: '#3DB08B' }}>
                {member.position}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 text-justify">{member.bio}</p>

              {member.email && (
                <div className="flex items-center gap-2 mt-auto pt-2">
                  <div className="p-2 rounded-lg shrink-0" style={{ background: '#11223B' }}>
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-sm font-medium hover:underline break-all"
                    style={{ color: '#3DB08B' }}
                  >
                    {member.email}
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
