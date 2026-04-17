# Supabase setup (offline-first)

Esta carpeta deja la base lista para conectar cuando tengas el proyecto creado.

## Estructura

- `migrations/001_initial_schema.sql` — tablas, enums y triggers base
- `migrations/002_rls_policies.sql` — RLS + policies
- `migrations/003_indexes_and_functions.sql` — índices + búsqueda full-text
- `seed.sql` — bootstrap mínimo (`settings` + `brands`)

## Aplicar migraciones (cuando conectes)

### Con Supabase CLI

```bash
supabase link --project-ref <tu-ref>
supabase db push
```

### Sin CLI (dashboard)

Podés pegar cada SQL en el SQL Editor en este orden:

1. 001_initial_schema.sql
2. 002_rls_policies.sql
3. 003_indexes_and_functions.sql
4. seed.sql

## Generar tipos reales

Cuando ya esté conectado:

```bash
supabase gen types typescript --linked > lib/supabase/types.generated.ts
```

El archivo actual `lib/supabase/types.generated.ts` es un stub para compilar offline.
