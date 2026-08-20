import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalized } from '@/hooks/useLocalized';
import { comparisonCountries, comparisonRows } from '@/data/whyGuatemala';

export default function ComparisonSection() {
  const { t } = useLanguage();
  const countries = useLocalized(comparisonCountries);
  const rows = useLocalized(comparisonRows);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('why.comparison.title')}
          subtitle={t('why.comparison.subtitle')}
        />

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold tracking-wide">
                    {t('why.comparison.indicator')}
                  </th>
                  <th className="px-6 py-4 text-center font-bold bg-blue-700/30">
                    {t('why.comparison.guatemala')}
                  </th>
                  {countries.map((country) => (
                    <th key={country} className="px-6 py-4 text-center font-semibold tracking-wide">
                      {country}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                {rows.map((row) => (
                  <tr key={row.indicator} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50/30">
                      {row.indicator}
                    </td>
                    <td
                      className={`px-6 py-4 text-center text-emerald-600 font-bold bg-emerald-50/20 ${
                        row.highlight ? 'text-base font-extrabold' : ''
                      }`}
                    >
                      {row.gt}
                    </td>
                    <td className="px-6 py-4 text-center">{row.cr}</td>
                    <td className="px-6 py-4 text-center">{row.sv}</td>
                    <td className="px-6 py-4 text-center">{row.hn}</td>
                    <td className="px-6 py-4 text-center">{row.ni}</td>
                    <td className="px-6 py-4 text-center">{row.do}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-5 bg-gray-50 border-t border-gray-100 text-center space-y-1">
            <p className="text-xs text-gray-500">
              {t('why.comparison.wageNote')}
            </p>
            <p className="text-xs text-gray-400 font-medium">
              {t('why.comparison.source')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
