import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

/**
 * Trae la URL de LinkedIn de la noticia más reciente que tenga una asignada.
 * Permite que el embed de la sección de recursos se actualice automáticamente
 * cada vez que se publica una noticia nueva con su enlace de LinkedIn.
 */
export function useLatestLinkedInPost() {
  const [linkedInUrl, setLinkedInUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        const { data, error } = await supabase
          .from('news')
          .select('linkedin_url, published_date')
          .not('linkedin_url', 'is', null)
          .neq('linkedin_url', '')
          .order('published_date', { ascending: false })
          .limit(1)
          .maybeSingle();

        if (error) throw error;
        if (active) setLinkedInUrl(data?.linkedin_url ?? null);
      } catch (error) {
        console.error('Error fetching latest LinkedIn post:', error);
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  return { linkedInUrl, loading };
}
