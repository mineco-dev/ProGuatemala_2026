import { Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { ResourceCategoryWithCount } from '@/types/resource';

interface ResourceFiltersSectionProps {
  categories: ResourceCategoryWithCount[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  /** Subfiltro de la categoria activa; vacio cuando la categoria no lo ofrece. */
  subcategories?: ResourceCategoryWithCount[];
  selectedSubcategory?: string;
  onSelectSubcategory?: (subcategoryId: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function ResourceFiltersSection({
  categories,
  selectedCategory,
  onSelectCategory,
  subcategories,
  selectedSubcategory,
  onSelectSubcategory,
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

        {/* Subfiltro: solo aparece cuando la categoria activa lo ofrece, en una
            fila propia y con pastillas mas discretas para que se lea como una
            division dentro de la categoria y no como otra categoria mas. */}
        {subcategories && subcategories.length > 0 && onSelectSubcategory && (
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-200/60 justify-center lg:justify-end">
            <span className="text-sm font-medium text-gray-500 mr-1">
              {t('resources.subfilter.label')}
            </span>
            {subcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                onClick={() => onSelectSubcategory(subcategory.id)}
                aria-pressed={selectedSubcategory === subcategory.id}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  selectedSubcategory === subcategory.id
                    ? 'bg-blue-100 text-blue-800 border-blue-300'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-blue-50'
                }`}
              >
                {subcategory.name} ({subcategory.count})
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
