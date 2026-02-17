# ProGuatemala 2026

Frontend Vite + React + TypeScript con Supabase para datos y formularios.

**Requisitos**
1. Node.js y npm (Node 18+ recomendado)
1. Un proyecto de Supabase (hosted o local con Supabase CLI)

**Instalación**
1. `npm install`

**Variables de entorno**
Crea un archivo `.env.local` en la raíz del proyecto:
```env
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

Estos valores se obtienen desde la configuración de API de tu proyecto Supabase. La app lanza un error al iniciar si faltan.

**Configuración de Supabase**
Este proyecto espera las siguientes tablas y políticas, definidas en las migraciones SQL:
1. `supabase/migrations/20260211204325_create_contact_submissions.sql`
1. `supabase/migrations/20260211234631_create_news_resources_events_tables.sql`

Elige una de estas opciones.

**Opción A: Supabase Hosted**
1. Crea un proyecto en Supabase.
1. Abre el editor SQL y ejecuta las migraciones anteriores en orden.
1. Copia la URL del proyecto y la anon key en `.env.local`.

**Opción B: Supabase Local (CLI)**
1. Instala la Supabase CLI.
1. Inicializa y levanta Supabase local:
   `supabase init`  
   `supabase start`
1. Aplica migraciones y datos de ejemplo:
   `supabase db reset`
1. Usa la URL y la anon key locales que imprime la CLI en `.env.local`.

**Ejecución**
1. `npm run dev`

**Build**
1. `npm run build`
1. `npm run preview`
