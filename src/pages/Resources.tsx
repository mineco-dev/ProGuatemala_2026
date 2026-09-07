import LoadingState from '@/components/ui/LoadingState';
import { useLanguage } from '@/contexts/LanguageContext';
import { useResources } from '@/hooks/useResources';
import { RUTA_CHIP_CATEGORY } from '@/data/resources';
import {
  FeaturedResourcesSection,
  HeroSection,
  LinkedInSection,
  NewsletterSection,
  ResourceFiltersSection,
  ResourcesGridSection,
} from './sections/resources';

const CATALOG_ANCHOR = 'catalogo-recursos';

const scrollToCatalog = () => {
  document.getElementById(CATALOG_ANCHOR)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Resources() {
  const { t } = useLanguage();
  const {
    loading,
    filteredResources,
    featuredResources,
    categoriesWithCounts,
    subcategoriesWithCounts,
    selectedCategory,
    setSelectedCategory,
    selectedSubcategory,
    setSelectedSubcategory,
    searchTerm,
    setSearchTerm,
  } = useResources();

  if (loading) {
    return <LoadingState message={t('resources.loading')} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        onExplore={scrollToCatalog}
        onShowGuides={() => {
          setSelectedCategory('guides');
          scrollToCatalog();
        }}
      />

      <FeaturedResourcesSection resources={featuredResources} />

      <ResourceFiltersSection
        categories={categoriesWithCounts}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        subcategories={
          selectedCategory === RUTA_CHIP_CATEGORY ? subcategoriesWithCounts : undefined
        }
        selectedSubcategory={selectedSubcategory}
        onSelectSubcategory={setSelectedSubcategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <ResourcesGridSection resources={filteredResources} />

      <LinkedInSection />

      <NewsletterSection />
    </div>
  );
}
