import { motion } from 'framer-motion';
import { useLocalized } from '@/hooks/useLocalized';
import { contactInfo } from '@/data/contact';

export default function ContactInfoSection() {
  const items = useLocalized(contactInfo);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-blue-600 font-medium">{info.content}</p>
                {info.subContent && <p className="text-gray-600 text-sm mt-1">{info.subContent}</p>}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
