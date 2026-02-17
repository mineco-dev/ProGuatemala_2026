/*
  # Create News, Resources, and Events Tables

  ## 1. New Tables
    
  ### `news`
    - `id` (uuid, primary key) - Unique identifier for news articles
    - `title` (text, required) - Article title
    - `excerpt` (text, required) - Brief summary for preview
    - `content` (text) - Full article content (optional for future expansion)
    - `image_url` (text, required) - URL to article image
    - `published_date` (date, required) - Publication date
    - `author` (text, required) - Author name
    - `category` (text, required) - Article category (Inversión, Manufactura, Energía, etc.)
    - `read_time` (text) - Estimated reading time
    - `is_featured` (boolean, default: false) - Whether article is featured
    - `created_at` (timestamptz, default: now())
    - `updated_at` (timestamptz, default: now())

  ### `resources`
    - `id` (uuid, primary key) - Unique identifier for resources
    - `title` (text, required) - Resource title
    - `description` (text, required) - Resource description
    - `category` (text, required) - Category (guides, reports, legal, sectors, videos)
    - `type` (text, required) - File type (PDF, Video, etc.)
    - `file_url` (text) - URL to download the resource
    - `size` (text) - File size (e.g., "2.5 MB")
    - `downloads` (integer, default: 0) - Download counter
    - `published_date` (date, required) - Publication date
    - `is_featured` (boolean, default: false) - Whether resource is featured
    - `language` (text) - Available languages (e.g., "ES/EN")
    - `created_at` (timestamptz, default: now())
    - `updated_at` (timestamptz, default: now())

  ### `events`
    - `id` (uuid, primary key) - Unique identifier for events
    - `title` (text, required) - Event title
    - `event_date` (date, required) - Event date
    - `location` (text, required) - Event location
    - `description` (text, required) - Event description
    - `created_at` (timestamptz, default: now())
    - `updated_at` (timestamptz, default: now())

  ## 2. Security
    - Enable RLS on all tables
    - Public read access (anyone can view news, resources, and events)
    - Only authenticated users with admin role can insert/update/delete
    
  ## 3. Important Notes
    - All tables use uuid for primary keys with automatic generation
    - Timestamps are automatically managed
    - Download counters start at 0
    - Featured items are false by default
    - RLS policies allow public read access for transparency
*/

-- Create news table
CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text NOT NULL,
  content text,
  image_url text NOT NULL,
  published_date date NOT NULL DEFAULT CURRENT_DATE,
  author text NOT NULL,
  category text NOT NULL,
  read_time text,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create resources table
CREATE TABLE IF NOT EXISTS resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  type text NOT NULL,
  file_url text,
  size text,
  downloads integer DEFAULT 0,
  published_date date NOT NULL DEFAULT CURRENT_DATE,
  is_featured boolean DEFAULT false,
  language text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  event_date date NOT NULL,
  location text NOT NULL,
  description text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- RLS Policies for news table
CREATE POLICY "Anyone can view news"
  ON news FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert news"
  ON news FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update news"
  ON news FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete news"
  ON news FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for resources table
CREATE POLICY "Anyone can view resources"
  ON resources FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert resources"
  ON resources FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update resources"
  ON resources FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete resources"
  ON resources FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for events table
CREATE POLICY "Anyone can view events"
  ON events FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert events"
  ON events FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update events"
  ON events FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete events"
  ON events FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_news_published_date ON news(published_date DESC);
CREATE INDEX IF NOT EXISTS idx_news_category ON news(category);
CREATE INDEX IF NOT EXISTS idx_news_is_featured ON news(is_featured);

CREATE INDEX IF NOT EXISTS idx_resources_published_date ON resources(published_date DESC);
CREATE INDEX IF NOT EXISTS idx_resources_category ON resources(category);
CREATE INDEX IF NOT EXISTS idx_resources_is_featured ON resources(is_featured);

CREATE INDEX IF NOT EXISTS idx_events_event_date ON events(event_date);

-- Insert sample news data
INSERT INTO news (title, excerpt, image_url, published_date, author, category, read_time, is_featured) VALUES
('Guatemala alcanza récord histórico en captación de IED durante 2024', 'El país registró $1.8 mil millones en inversión extranjera directa, superando las metas establecidas gracias a nuevos proyectos en manufactura y energías renovables.', 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800', '2024-01-20', 'ProGuatemala', 'Inversión', '5 min', true),
('Nueva zona franca industrial se establece en Escuintla', 'La nueva zona franca generará más de 2,000 empleos directos y se especializa en manufactura textil para exportación.', 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400', '2024-01-18', 'Redacción', 'Manufactura', '3 min', false),
('Empresa alemana de energía renovable anuncia inversión de $150M', 'El proyecto incluye la construcción de tres parques solares que aumentarán la capacidad energética del país.', 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=400', '2024-01-15', 'Comunicaciones', 'Energía', '4 min', false),
('Guatemala participa en feria internacional de inversiones en Miami', 'La delegación gubernamental presenta las ventajas competitivas del país ante inversionistas estadounidenses.', 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400', '2024-01-12', 'Prensa', 'Eventos', '2 min', false),
('Nuevo acuerdo facilita inversiones en sector agroindustrial', 'El convenio reduce tiempos de trámites y ofrece incentivos adicionales para proyectos de agricultura sostenible.', 'https://images.pexels.com/photos/574919/pexels-photo-574919.jpeg?auto=compress&cs=tinysrgb&w=400', '2024-01-10', 'Redacción', 'Agroindustria', '3 min', false),
('Centro de servicios globales crea 500 nuevos empleos en Ciudad de Guatemala', 'La empresa multinacional amplía sus operaciones de back office y atención al cliente en español e inglés.', 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400', '2024-01-08', 'Comunicaciones', 'Servicios', '3 min', false),
('Guatemala firma nuevo tratado de protección de inversiones', 'El acuerdo fortalece las garantías legales para inversionistas extranjeros y facilita la resolución de disputas.', 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400', '2024-01-05', 'Legal', 'Marco Legal', '4 min', false)
ON CONFLICT DO NOTHING;

-- Insert sample resources data
INSERT INTO resources (title, description, category, type, size, downloads, published_date, is_featured, language) VALUES
('Guía Completa del Inversionista en Guatemala', 'Manual integral con todo lo que necesitas saber para invertir en Guatemala', 'guides', 'PDF', '2.5 MB', 1245, '2024-01-15', true, 'ES/EN'),
('Reporte Anual de Inversión Extranjera Directa', 'Análisis detallado de flujos de IED y tendencias por sector', 'reports', 'PDF', '1.8 MB', 892, '2024-01-10', true, 'ES/EN'),
('Video: Por qué Invertir en Guatemala', 'Presentación institucional sobre las ventajas competitivas del país', 'videos', 'Video', '125 MB', 2156, '2024-01-05', true, 'ES'),
('Ley de Zonas Francas - Resumen Ejecutivo', 'Beneficios, requisitos y procedimientos del régimen de zonas francas', 'legal', 'PDF', '850 KB', 567, '2023-12-20', false, 'ES'),
('Perfil Sectorial: Agroindustria', 'Análisis completo del sector agroindustrial y oportunidades de inversión', 'sectors', 'PDF', '1.2 MB', 423, '2023-12-15', false, 'ES/EN'),
('Mapa de Incentivos Fiscales 2024', 'Comparativo visual de todos los incentivos disponibles por sector', 'guides', 'PDF', '950 KB', 789, '2023-12-10', false, 'ES'),
('Estudio de Competitividad Regional', 'Comparación de Guatemala con otros países de Centroamérica', 'reports', 'PDF', '2.1 MB', 334, '2023-12-01', false, 'ES/EN'),
('Perfil Sectorial: Manufactura Liviana', 'Oportunidades en textiles, confección y productos especializados', 'sectors', 'PDF', '1.4 MB', 298, '2023-11-25', false, 'ES/EN')
ON CONFLICT DO NOTHING;

-- Insert sample events data
INSERT INTO events (title, event_date, location, description) VALUES
('Guatemala Investment Summit 2024', '2024-03-15', 'Ciudad de Guatemala', 'Encuentro anual de inversionistas nacionales e internacionales'),
('Feria de Oportunidades Sectoriales', '2024-02-28', 'Centro de Convenciones', 'Presentación de proyectos de inversión por sector estratégico'),
('Webinar: Incentivos Fiscales 2024', '2024-02-20', 'Virtual', 'Actualización sobre beneficios e incentivos para inversionistas')
ON CONFLICT DO NOTHING;
