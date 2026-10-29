import { motion } from 'framer-motion';
import { Users, Coins, MapPin, Scale, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { advantages } from '@/data/whyGuatemala';
import advantagesBg from '@/assets/images/por-que-guatemala/POR QUE GUATEMALA-03.jpg';

/** Color de marca + icono por tarjeta (orden fijo de los datos). */
const CARD_STYLES: Array<{ accent: string; icon: LucideIcon }> = [
  { accent: '#2BB9DB', icon: Users },  // Talento joven -> cian
  { accent: '#FABE0D', icon: Coins },  // Macroeconomía -> dorado
  { accent: '#D7E3AA', icon: MapPin }, // Ubicación -> verde crema
  { accent: '#BBA4CE', icon: Scale },  // Regímenes -> morado
  { accent: '#3DB08B', icon: Zap },    // Energía -> verde
];

export default function AdvantagesSection() {
  const { t } = useLanguage();
  const items = useLocalized(advantages);

  return (
    <section
      id="advantages-grid"
      className="section-premium scroll-mt-6 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundColor: '#11223B', backgroundImage: `url(${advantagesBg})` }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold uppercase tracking-[0.15em] mb-4"
            style={{ color: '#FABE0D' }}
          >
            {t('why.advantages.title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('why.advantages.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((advantage, index) => {
            const { accent, icon: Icon } = CARD_STYLES[index % CARD_STYLES.length];

            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl border border-dashed p-7 h-full bg-white/[0.02] transition-colors duration-300 hover:bg-white/[0.05]"
                style={{ borderColor: accent }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                    style={{ background: accent }}
                  >
                    <Icon className="w-6 h-6" style={{ color: '#11223B' }} strokeWidth={2} />
                  </div>
                  <h3
                    className="text-sm font-bold uppercase tracking-[0.12em] leading-snug pt-1.5"
                    style={{ color: accent }}
                  >
                    {advantage.title}
                  </h3>
                </div>

                <div className="w-10 h-[3px] rounded-full mb-4" style={{ background: accent }} />

                <p className="text-sm text-gray-300 leading-relaxed">{advantage.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
