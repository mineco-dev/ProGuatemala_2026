import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { president } from '@/data/about';

export default function PresidentMessageSection() {
  const { t } = useLanguage();
  const person = useLocalized(president);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#f0f8ff] rounded-3xl p-8 md:p-12 shadow-lg border border-blue-100/60 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-4 flex justify-center items-center">
              <div className="relative">
                {/* Halo azul difuminado detras */}
                <div className="absolute inset-0 bg-blue-300 rounded-full blur-2xl opacity-40 transform scale-95" />
                <img
                  src={person.photo}
                  alt={person.position}
                  className="relative w-56 h-56 md:w-64 md:h-64 object-cover object-top rounded-full border-4 border-white shadow-md bg-white"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div>
                <span className="inline-block bg-[#2563eb] text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                  {t('about.president.badge')}
                </span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                  {person.name}
                </h3>
                <p className="text-sm md:text-base font-semibold text-[#2563eb] mt-1">
                  {person.position}
                </p>
              </div>

              <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed pt-1">
                {person.quotes.map((quote) => (
                  <p key={quote}>&ldquo;{quote}&rdquo;</p>
                ))}
                <p className="text-[#1e3a8a] font-bold">&ldquo;{person.closingQuote}&rdquo;</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
