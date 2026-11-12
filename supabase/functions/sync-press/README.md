# sync-press

Sincroniza las notas de prensa del portal del MINECO (Joomla) hacia la tabla
`press_articles`. La página de Prensa lee de esa tabla (hook
`usePressCollections`), así que las nuevas notas aparecen solas sin tocar el
código.

Colecciones que sincroniza (configurables en `index.ts` → `COLLECTIONS`):

- `brujula-de-inversion` → https://www.mineco.gob.gt/brujula-de-inversion
- `el-equipaje-de-la-ruta-del-chip` → https://www.mineco.gob.gt/el-equipaje-de-la-ruta-del-chip

## Qué hace

1. Lee la página índice de cada colección y extrae cada nota (título, slug,
   imagen y fecha).
2. Abre cada artículo y toma su primer párrafo como extracto.
3. Hace `upsert` en `press_articles` (clave `collection_id + slug`) y elimina
   las notas que ya no están publicadas.

## Desplegar

Requiere la tabla creada (migración `..._create_press_articles.sql`) y el CLI de
Supabase enlazado al proyecto (`supabase link`).

```bash
# --no-verify-jwt: la function la invoca el cron, no un usuario con sesión.
supabase functions deploy sync-press --no-verify-jwt
```

`SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY` ya están disponibles como variables
de entorno en las edge functions desplegadas; no hay que configurarlas.

## Probar manualmente

```bash
curl -X POST "https://<PROJECT_REF>.supabase.co/functions/v1/sync-press"
# Devuelve un JSON con el resumen: cuántas notas sincronizó por colección.
```

## Programar (cron diario)

Opción A — Dashboard: Edge Functions → `sync-press` → Schedules → crear un
schedule (p. ej. `0 6 * * *`, diario a las 06:00).

Opción B — SQL (pg_cron + pg_net). Ejecutar una vez en el SQL Editor,
sustituyendo `<PROJECT_REF>` y el service role key:

```sql
select cron.schedule(
  'sync-press-daily',
  '0 6 * * *',
  $$
  select net.http_post(
    url     := 'https://<PROJECT_REF>.supabase.co/functions/v1/sync-press',
    headers := '{"Content-Type":"application/json","Authorization":"Bearer <SERVICE_ROLE_KEY>"}'::jsonb
  );
  $$
);
```

Mientras la tabla esté vacía (antes de la primera corrida), la página muestra
las notas estáticas de `src/data/press.ts` como respaldo.
