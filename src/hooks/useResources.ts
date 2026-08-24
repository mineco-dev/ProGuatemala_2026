import { useCallback, useEffect, useMemo, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  ENGLISH_CHIP_DOCUMENT_IDS,
  chipDocuments,
  resourceCategories,
} from '@/data/resources';
import type { Language } from '@/i18n';
import type { Resource, ResourceCategoryWithCount } from '@/types/resource';

/** Convierte los PDFs estaticos de la Ruta del Chip al mismo shape que los de Supabase. */
function chipDocumentsAsResources(language: Language, description: string): Resource[] {
  const publishedDate = new Date().toISOString();

  return chipDocuments[language].map((doc) => ({
    id: `chip-${doc.id}`,
    title: doc.name,
    description,
    category: 'ruta_chip',
    type: 'PDF',
    file_url: doc.link,
    size: 'PDF',
    downloads: 0,
    published_date: publishedDate,
    is_featured: false,
    language: ENGLISH_CHIP_DOCUMENT_IDS.has(doc.id) ? 'EN' : 'ES',
  }));
}

/**
 * Carga el catalogo de recursos (documentos estaticos + tabla `resources` de
 * Supabase) y expone el estado de busqueda y filtrado por categoria.
 */
export function useResources() {
  const { language, t } = useLanguage();
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchResources = useCallback(async () => {
    // Los PDF de la Ruta del Chip son estaticos y no dependen de Supabase, asi
    // que se muestran aunque la consulta falle; de lo contrario el catalogo
    // quedaria vacio con un "no se encontraron recursos" enganoso.
    const staticResources = chipDocumentsAsResources(language, t('resources.chip.description'));

    try {
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .order('published_date', { ascending: false });

      if (error) throw error;

      setResources([...staticResources, ...(data ?? [])]);
    } catch (error) {
      console.error('Error fetching resources:', error);
      setResources(staticResources);
    } finally {
      setLoading(false);
    }
  }, [language, t]);

  useEffect(() => {
    void fetchResources();
  }, [fetchResources]);

  const filteredResources = useMemo(() => {
    const term = searchTerm.toLowerCase();

    return resources.filter((resource) => {
      const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
      const matchesSearch =
        resource.title.toLowerCase().includes(term) ||
        resource.description.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [resources, selectedCategory, searchTerm]);

  const featuredResources = useMemo(
    () => resources.filter((resource) => resource.is_featured),
    [resources],
  );

  const categoriesWithCounts = useMemo<ResourceCategoryWithCount[]>(() => {
    const counts = new Map<string, number>();
    for (const resource of resources) {
      counts.set(resource.category, (counts.get(resource.category) ?? 0) + 1);
    }

    return resourceCategories[language].map((category) => ({
      ...category,
      count: category.id === 'all' ? resources.length : (counts.get(category.id) ?? 0),
    }));
  }, [resources, language]);

  return {
    loading,
    filteredResources,
    featuredResources,
    categoriesWithCounts,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
  };
}
