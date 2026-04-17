# Seed script (offline-first)

El script `scripts/seed.ts` queda listo para ejecutarse cuando conectes Supabase.

## Variables requeridas

Usá una de estas dos opciones para URL:

- `SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`

Y además:

- `SUPABASE_SERVICE_ROLE_KEY`

## Ejecución

```bash
node --loader tsx scripts/seed.ts
```

O con `tsx` instalado global/local:

```bash
tsx scripts/seed.ts
```

## Orden de siembra

1. settings
2. brands
3. products
4. plans
5. services
6. orders

## Troubleshooting

- Si falla `Cannot find module @supabase/supabase-js`, instalá la dependencia:

```bash
pnpm add -D @supabase/supabase-js
```

- Si falla por credenciales faltantes, revisá `.env.local` y `.env.example`.
