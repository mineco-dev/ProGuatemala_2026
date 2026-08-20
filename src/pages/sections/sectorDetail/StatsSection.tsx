import { motion } from 'framer-motion';
import { DollarSign, Globe, TrendingUp, Users } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import type { SectorStats } from '@/types/sectorDetail';

interface StatsSectionProps {
  stats: SectorStats;
}

export default function StatsSection({ stats }: StatsSectionProps) {
  const { t } = useLanguage();

  // sector-3 (#01ECC1) es un menta claro: el icono debe ir oscuro. Los demas
  // tonos de la paleta son oscuros y admiten el icono en blanco.
  const cards = [
    {
      icon: DollarSign,
      label: t('sectorDetail.stats.investment'),
      value: stats.investment,
      color: 'bg-sector-3',
      iconColor: 'text-gray-900',
    },
    {
      icon: Users,
      label: t('sectorDetail.stats.employment'),
      value: stats.employment,
      color: 'bg-sector-6',
      iconColor: 'text-white',
    },
    {
      icon: TrendingUp,
      label: t('sectorDetail.stats.growth'),
      value: stats.growth,
      color: 'bg-sector-3',
      iconColor: 'text-gray-900',
    },
    {
      icon: Globe,
      label: t('sectorDetail.stats.exports'),
      value: stats.exports,
      color: 'bg-sector-2',
      iconColor: 'text-white',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('sectorDetail.stats.title')} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gray-50 rounded-2xl p-6"
              >
                <div
                  className={`w-16 h-16 ${card.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className={`w-8 h-8 ${card.iconColor}`} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{card.value}</div>
                <div className="text-sm text-gray-600">{card.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
