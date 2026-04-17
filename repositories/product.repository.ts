import "server-only"

import { productsData } from "@/data"
import type { Product, ProductAdminView } from "@/types"

import { canUseSupabase, throwWriteUnavailable } from "./_runtime"

function cloneProducts() {
  return productsData.map((product) => ({ ...product }))
}

export async function findAll(): Promise<Product[]> {
  if (!canUseSupabase()) {
    return cloneProducts().filter((product) => (product.status ?? "active") === "active")
  }

  // TODO S3: reemplazar fallback por query real a Supabase
  return cloneProducts().filter((product) => (product.status ?? "active") === "active")
}

export async function findAllAdmin(): Promise<Product[]> {
  if (!canUseSupabase()) {
    return cloneProducts()
  }

  // TODO S3: query real admin
  return cloneProducts()
}

export async function findById(id: string): Promise<Product | null> {
  const products = await findAllAdmin()
  return products.find((product) => product.id === id) ?? null
}

export async function findBySlug(slug: string): Promise<Product | null> {
  const products = await findAllAdmin()
  return products.find((product) => product.slug === slug) ?? null
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

export async function create(_product: ProductAdminView): Promise<Product> {
  throwWriteUnavailable("product.create")
}

export async function update(_id: string, _patch: Partial<ProductAdminView>): Promise<Product> {
  throwWriteUnavailable("product.update")
}

export async function remove(_id: string): Promise<void> {
  throwWriteUnavailable("product.remove")
}
