# Repositories

Capa de persistencia que aísla al resto de la app del SDK de Supabase.

## Reglas

- Components y services **no** importan `lib/supabase/*` directo.
- Solo repositories tocan persistence.
- Los repos devuelven tipos de dominio (camelCase), no filas crudas de DB.
- Los mappers convierten entre `snake_case` (DB) y `camelCase` (dominio).

## Estado actual

Este scaffold funciona en modo offline-first:

- Sin credenciales Supabase → usa fallback de `data/*.data.ts` para lecturas.
- Con credenciales y SDK instalado → se conectará por repos (pendiente wiring final S1/S3).

Las mutaciones (create/update/delete) requieren conexión real y por ahora devuelven
error claro si no hay entorno configurado.
