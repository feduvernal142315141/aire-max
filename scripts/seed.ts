#!/usr/bin/env node

import {
  brandsData,
  companyInfo,
  installationPlansData,
  maintenancePlansData,
  ordersData,
  productsData,
  servicesData,
} from "@/data"

type SupabaseLike = {
  from: (table: string) => {
    upsert: (rows: unknown, options?: { onConflict?: string }) => Promise<{ error: unknown }>
    select: (columns?: string) => {
      in: (column: string, values: string[]) => Promise<{ data: unknown; error: unknown }>
      eq: (
        column: string,
        value: string,
      ) => {
        maybeSingle: () => Promise<{ data: unknown; error: unknown }>
      }
    }
  }
}

type SupabaseModule = {
  createClient: (
    url: string,
    key: string,
    options?: { auth?: { persistSession?: boolean } },
  ) => SupabaseLike
}

function fail(message: string): never {
  throw new Error(`[seed] ${message}`)
}

async function createClient(): Promise<SupabaseLike> {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceKey) {
    fail("Faltan SUPABASE_URL/NEXT_PUBLIC_SUPABASE_URL y/o SUPABASE_SERVICE_ROLE_KEY")
  }

  try {
    const moduleName = "@supabase/supabase-js"
    const imported: unknown = await import(moduleName)

    if (!isSupabaseModule(imported)) {
      fail("El módulo @supabase/supabase-js no expone createClient")
    }

    const client = imported.createClient(url, serviceKey, {
      auth: { persistSession: false },
    })
    return client
  } catch {
    fail("Instalá @supabase/supabase-js para ejecutar el seed: pnpm add -D @supabase/supabase-js")
  }
}

function isSupabaseModule(value: unknown): value is SupabaseModule {
  return typeof value === "object" && value !== null && "createClient" in value
}

function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
}

async function seed() {
  const sb = await createClient()

  const settingsRow = {
    id: true,
    currency_code: "USD",
    currency_locale: "en-US",
    tax_rate: 0,
    company_name: companyInfo.name,
    company_phone: companyInfo.phone,
    company_email: companyInfo.email,
    company_address: companyInfo.address,
  }

  await sb.from("settings").upsert(settingsRow, { onConflict: "id" })

  const brandsRows = brandsData.map((name) => ({ name, slug: slugify(name) }))
  await sb.from("brands").upsert(brandsRows, { onConflict: "slug" })

  const brandsRes = await sb.from("brands").select("id,name").in("name", brandsData)
  if (brandsRes.error) fail(`No se pudieron leer brands: ${String(brandsRes.error)}`)

  const brandsMap = new Map<string, string>()
  if (Array.isArray(brandsRes.data)) {
    for (const row of brandsRes.data as Array<{ id: string; name: string }>) {
      brandsMap.set(row.name, row.id)
    }
  }

  const productsRows = productsData.map((p) => {
    const brandId = brandsMap.get(p.brand)
    if (!brandId) fail(`No se encontró brand_id para ${p.brand}`)
    return {
      id: p.id,
      name: p.name,
      brand_id: brandId,
      category: p.category,
      capacity: p.capacity,
      energy_rating: p.energyRating,
      price: p.price,
      original_price: p.originalPrice ?? null,
      image_url: p.image,
      features: p.features,
      inverter: p.inverter,
      wifi: p.wifi,
      popular: p.popular ?? false,
      nuevo: p.nuevo ?? false,
      oferta: p.oferta ?? false,
      description: p.description,
      stock: p.stock ?? null,
      status: p.status ?? "active",
      rating: p.rating ?? null,
      sku: p.sku ?? null,
      tags: p.tags ?? null,
      slug: p.slug ?? null,
      meta_title: p.metaTitle ?? null,
      meta_description: p.metaDescription ?? null,
    }
  })
  await sb.from("products").upsert(productsRows, { onConflict: "id" })

  const maintenanceRows = maintenancePlansData.map((p) => ({
    id: p.id,
    kind: "maintenance",
    name: p.name,
    price: p.price,
    period: p.period,
    description: p.description,
    features: p.features,
    popular: p.popular ?? false,
    visits_per_year: String(p.visitsPerYear),
  }))

  const installationRows = installationPlansData.map((p) => ({
    id: p.id,
    kind: "installation",
    name: p.title,
    price: Number.parseFloat(p.price.replace(/[^\d.]/g, "") || "0"),
    period: "visita",
    description: p.description,
    features: p.features,
    popular: p.popular ?? false,
    visits_per_year: null,
  }))

  await sb.from("plans").upsert([...maintenanceRows, ...installationRows], { onConflict: "id" })

  const servicesRows = servicesData.map((s) => ({
    id: s.id,
    slug: s.id,
    title: s.name,
    description: s.description,
    icon: s.icon,
    price_from: null,
    features: s.features,
  }))
  await sb.from("services").upsert(servicesRows, { onConflict: "id" })

  const ordersRows = ordersData.map((o) => ({
    id: o.id,
    customer_name: o.customer,
    status: o.status,
    total: o.total,
    items_count: o.items,
    created_at: `${o.createdAt}T00:00:00.000Z`,
  }))
  await sb.from("orders").upsert(ordersRows, { onConflict: "id" })

  process.stdout.write("[seed] ✅ Seed finalizado\n")
}

seed().catch((error) => {
  process.stderr.write(`[seed] ❌ ${String(error)}\n`)
  process.exit(1)
})
