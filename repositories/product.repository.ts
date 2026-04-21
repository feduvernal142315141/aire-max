import "server-only"

import { productsData } from "@/data"
import { createSupabaseAdminClient } from "@/lib/supabase/admin"
import type { Product, ProductAdminView } from "@/types"

import { mapProductDomainToRow, mapProductRowToDomain } from "./_mappers"
import { canUseSupabase, throwWriteUnavailable } from "./_runtime"

function cloneProducts() {
  return productsData.map((product) => ({ ...product }))
}

export async function findAll(): Promise<Product[]> {
  if (!canUseSupabase()) {
    return cloneProducts().filter((p) => (p.status ?? "active") === "active")
  }

  const supabase = createSupabaseAdminClient()
  const { data, error } = await supabase
    .from("products")
    .select("*, brands(name)")
    .eq("status", "active")
    .order("created_at", { ascending: false })

  if (error || !data?.length) {
    return cloneProducts().filter((p) => (p.status ?? "active") === "active")
  }

  return data.map((row) => mapProductRowToDomain(row, row.brands?.name ?? undefined))
}

export async function findAllAdmin(): Promise<Product[]> {
  if (!canUseSupabase()) {
    return cloneProducts()
  }

  const supabase = createSupabaseAdminClient()
  const { data, error } = await supabase
    .from("products")
    .select("*, brands(name)")
    .order("created_at", { ascending: false })

  if (error || !data?.length) {
    return cloneProducts()
  }

  return data.map((row) => mapProductRowToDomain(row, row.brands?.name ?? undefined))
}

export async function findById(id: string): Promise<Product | null> {
  if (!canUseSupabase()) {
    return cloneProducts().find((p) => p.id === id) ?? null
  }

  const supabase = createSupabaseAdminClient()
  const { data, error } = await supabase
    .from("products")
    .select("*, brands(name)")
    .eq("id", id)
    .single()

  if (error || !data) return null
  return mapProductRowToDomain(data, data.brands?.name ?? undefined)
}

export async function findBySlug(slug: string): Promise<Product | null> {
  if (!canUseSupabase()) {
    return cloneProducts().find((p) => p.slug === slug) ?? null
  }

  const supabase = createSupabaseAdminClient()
  const { data, error } = await supabase
    .from("products")
    .select("*, brands(name)")
    .eq("slug", slug)
    .single()

  if (error || !data) return null
  return mapProductRowToDomain(data, data.brands?.name ?? undefined)
}

export async function findRelated(product: Product, limit = 4): Promise<Product[]> {
  const products = await findAll()
  return products
    .filter(
      (item) =>
        item.id !== product.id &&
        (item.category === product.category || item.brand === product.brand),
    )
    .slice(0, limit)
}

export async function create(product: ProductAdminView): Promise<Product> {
  if (!canUseSupabase()) throwWriteUnavailable("product.create")

  const supabase = createSupabaseAdminClient()

  const { data: brand, error: brandError } = await supabase
    .from("brands")
    .select("id")
    .eq("name", product.brand)
    .single()

  if (brandError || !brand) throw new Error(`Marca "${product.brand}" no encontrada en DB`)

  const { data, error } = await supabase
    .from("products")
    .insert(mapProductDomainToRow(product, brand.id))
    .select("*, brands(name)")
    .single()

  if (error || !data) throw new Error(error?.message ?? "Error creando producto")
  return mapProductRowToDomain(data, data.brands?.name ?? undefined)
}

export async function update(id: string, patch: Partial<ProductAdminView>): Promise<Product> {
  if (!canUseSupabase()) throwWriteUnavailable("product.update")

  const supabase = createSupabaseAdminClient()

  let brandId: string
  if (patch.brand) {
    const { data: brand } = await supabase
      .from("brands")
      .select("id")
      .eq("name", patch.brand)
      .single()
    brandId = brand?.id ?? ""
  } else {
    const existing = await findById(id)
    if (!existing) throw new Error("Producto no encontrado")
    const { data: brand } = await supabase
      .from("brands")
      .select("id")
      .eq("name", existing.brand)
      .single()
    brandId = brand?.id ?? ""
  }

  const { data, error } = await supabase
    .from("products")
    .update(mapProductDomainToRow(patch as ProductAdminView, brandId))
    .eq("id", id)
    .select("*, brands(name)")
    .single()

  if (error || !data) throw new Error(error?.message ?? "Error actualizando producto")
  return mapProductRowToDomain(data, data.brands?.name ?? undefined)
}

export async function remove(id: string): Promise<void> {
  if (!canUseSupabase()) throwWriteUnavailable("product.remove")

  const supabase = createSupabaseAdminClient()
  const { error } = await supabase.from("products").delete().eq("id", id)

  if (error) throw new Error(error.message)
}
