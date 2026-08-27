import { useCallback, useEffect, useMemo, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  ENGLISH_CHIP_DOCUMENT_IDS,
  ENGLISH_CHIP_STUDY_IDS,
  RUTA_CHIP_CATEGORY,
  chipDocuments,
  chipStudies,
  chipSubcategories,
  chipVideos,
  resourceCategories,
} from '@/data/resources';
import type { Language } from '@/i18n';
import type { Resource, ResourceCategoryWithCount } from '@/types/resource';

/** Convierte los PDFs estaticos de la Ruta del Chip al mismo shape que los de Supabase. */
function chipDocumentsAsResources(
  language: Language,
  description: string,
  publishedDate: string,
): Resource[] {
  return chipDocuments[language].map((doc) => ({
    id: `chip-${doc.id}`,
    title: doc.name,
    description,
    category: RUTA_CHIP_CATEGORY,
    subcategory: 'descargables',
    type: 'PDF',
    file_url: doc.link,
    size: null,
    downloads: 0,
    published_date: publishedDate,
    is_featured: false,
    language: ENGLISH_CHIP_DOCUMENT_IDS.has(doc.id) ? 'EN' : 'ES',
  }));
}

/**
 * Convierte los estudios preliminares al mismo shape. Comparten categoria con
 * los descargables y se separan por `subcategory`, que es lo que lee el
 * subfiltro.
 */
function chipStudiesAsResources(
  language: Language,
  description: string,
  publishedDate: string,
): Resource[] {
  return chipStudies[language].map((study) => ({
    id: `chip-study-${study.id}`,
    title: study.name,
    description,
    category: RUTA_CHIP_CATEGORY,
    subcategory: 'preliminares',
    type: 'PDF',
    file_url: study.link,
    size: null,
    downloads: 0,
    published_date: publishedDate,
    is_featured: false,
    language: ENGLISH_CHIP_STUDY_IDS.has(study.id) ? 'EN' : 'ES',
  }));
}

/**
 * Convierte los videos de la Ruta del Chip al mismo shape. Van a la categoria
 * `videos` —no a `ruta_chip`— porque es el filtro por el que se buscan; el
 * `type` es lo que hace que la tarjeta los trate como video y los reproduzca
 * en vez de abrirlos como documento.
 */
function chipVideosAsResources(language: Language, publishedDate: string): Resource[] {
  return chipVideos[language].map((video) => ({
    id: `chip-video-${video.id}`,
    title: video.name,
    description: video.description,
    category: 'videos',
    type: 'Video',
    file_url: video.link,
    size: null,
    downloads: 0,
    published_date: publishedDate,
    is_featured: false,
    // Estan hablados en espanol aunque se listen con titulo en ingles.
    language: 'ES',
    poster: video.poster,
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
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  /** Cambiar de categoria descarta el subfiltro de la anterior. */
  const selectCategory = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory('all');
  }, []);

  const fetchResources = useCallback(async () => {
    // Los PDF y videos de la Ruta del Chip son estaticos y no dependen de
    // Supabase, asi que se muestran aunque la consulta falle; de lo contrario
    // el catalogo quedaria vacio con un "no se encontraron recursos" enganoso.
    const publishedDate = new Date().toISOString();
    const staticResources = [
      ...chipDocumentsAsResources(language, t('resources.chip.description'), publishedDate),
      ...chipStudiesAsResources(language, t('resources.chipStudy.description'), publishedDate),
      ...chipVideosAsResources(language, publishedDate),
    ];

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
      // El subfiltro solo acota dentro de la categoria que lo ofrece.
      const matchesSubcategory =
        selectedCategory !== RUTA_CHIP_CATEGORY ||
        selectedSubcategory === 'all' ||
        resource.subcategory === selectedSubcategory;
      const matchesSearch =
        resource.title.toLowerCase().includes(term) ||
        resource.description.toLowerCase().includes(term);
      return matchesCategory && matchesSubcategory && matchesSearch;
    });
  }, [resources, selectedCategory, selectedSubcategory, searchTerm]);

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

  const subcategoriesWithCounts = useMemo<ResourceCategoryWithCount[]>(() => {
    const chipResources = resources.filter(
      (resource) => resource.category === RUTA_CHIP_CATEGORY,
    );

    return chipSubcategories[language].map((subcategory) => ({
      ...subcategory,
      count:
        subcategory.id === 'all'
          ? chipResources.length
          : chipResources.filter((resource) => resource.subcategory === subcategory.id).length,
    }));
  }, [resources, language]);

  return {
    loading,
    filteredResources,
    featuredResources,
    categoriesWithCounts,
    subcategoriesWithCounts,
    selectedCategory,
    setSelectedCategory: selectCategory,
    selectedSubcategory,
    setSelectedSubcategory,
    searchTerm,
    setSearchTerm,
  };
}
