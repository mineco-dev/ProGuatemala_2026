import { Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { ResourceCategoryWithCount } from '@/types/resource';

interface ResourceFiltersSectionProps {
  categories: ResourceCategoryWithCount[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function ResourceFiltersSection({
  categories,
  selectedCategory,
  onSelectCategory,
  searchTerm,
  onSearchChange,
}: ResourceFiltersSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="catalogo-recursos" className="py-8 bg-gray-50 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="relative flex-1 max-w-md w-full">
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t('resources.search')}
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
