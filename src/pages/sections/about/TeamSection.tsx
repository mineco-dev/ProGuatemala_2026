import { motion } from 'framer-motion';
import { Mail, User } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { team } from '@/data/about';

export default function TeamSection() {
  const { t } = useLanguage();
  const members = useLocalized(team);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('about.team.title')}
          subtitle={t('about.team.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{member.position}</p>
              <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-600 hover:text-blue-700 text-xs font-medium hover:underline"
                  >
                    {member.email}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
