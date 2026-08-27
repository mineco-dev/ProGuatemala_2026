import { TableauEmbed } from '@/components/layouts/TableauEmbed';
import { useLanguage } from '@/contexts/LanguageContext';
import { dashboards, tableauLanguage } from '@/data/dashboards';

export default function DashboardSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-2 sm:p-4 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden flex items-center justify-center min-h-[400px]">
          <TableauEmbed
            vizName={dashboards.strategicSectors[language]}
            title={t('sectors.dashboard.name')}
            aspectRatio={0.75}
            minMobileHeight={600}
            language={tableauLanguage(language)}
          />
        </div>
      </div>
    </section>
  );
}
