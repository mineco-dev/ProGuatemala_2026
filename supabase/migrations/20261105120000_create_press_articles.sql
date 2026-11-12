/*
  # Create Press Articles Table

  ## Context
  Las notas de prensa ("Brújula de Inversión" y "El Equipaje de la Ruta del
  Chip") se publican en el portal del MINECO (Joomla). Antes vivían
  hardcodeadas en `src/data/press.ts`, por lo que no se actualizaban al
  publicarse nuevas notas. Esta tabla las almacena y la edge function
  `sync-press` la mantiene al día leyendo el portal periódicamente.

  ## 1. New Table — `press_articles`
    - `id` (uuid, pk)
    - `collection_id` (text) - Colección a la que pertenece
      ('brujula-de-inversion' | 'el-equipaje-de-la-ruta-del-chip')
    - `slug` (text) - Slug del artículo en mineco.gob.gt; identificador estable
    - `title` (text) - Título (idioma original, español)
    - `excerpt` (text) - Primer párrafo del artículo (opcional)
    - `url` (text) - URL absoluta del artículo
    - `image_url` (text) - Imagen destacada (opcional)
    - `published_date` (date) - Fecha de publicación (opcional)
    - `position` (integer) - Orden en el portal (0 = más reciente)
    - `created_at`, `updated_at` (timestamptz)
    - UNIQUE(collection_id, slug) → objetivo del upsert del sincronizador

  ## 2. Security
    - RLS habilitado
    - Lectura pública (anon + authenticated)
    - Escritura solo autenticada; la edge function usa el service role, que
      omite RLS, así que puede sincronizar sin una política adicional.
*/

CREATE TABLE IF NOT EXISTS press_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  collection_id text NOT NULL,
  slug text NOT NULL,
  title text NOT NULL,
  excerpt text,
  url text NOT NULL,
  image_url text,
  published_date date,
  position integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE (collection_id, slug)
);

ALTER TABLE press_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view press articles"
  ON press_articles FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert press articles"
  ON press_articles FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update press articles"
  ON press_articles FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete press articles"
  ON press_articles FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_press_articles_collection_date
  ON press_articles (collection_id, published_date DESC);
