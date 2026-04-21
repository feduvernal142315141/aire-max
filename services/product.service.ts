import "server-only"

import { categoriesData, capacitiesData, brandsData } from "@/data"
import * as productRepo from "@/repositories/product.repository"
import type { Product, CategoryOption, CapacityOption, ProductBrand } from "@/types"

export { filterProducts, sortProducts } from "@/lib/product-utils"

// ─── Product Queries ─────────────────────────────────────────────────────────

export async function getProducts(): Promise<Product[]> {
  return productRepo.findAll()
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return (await productRepo.findById(id)) ?? undefined
}

export async function getRelatedProducts(product: Product, limit = 4): Promise<Product[]> {
  return productRepo.findRelated(product, limit)
}

export async function getPopularProducts(limit = 3): Promise<Product[]> {
  const products = await productRepo.findAll()
  return products.filter((p) => p.popular).slice(0, limit)
}

// ─── Options ─────────────────────────────────────────────────────────────────

export function getCategories(): CategoryOption[] {
  return categoriesData
}

export function getCapacities(): CapacityOption[] {
  return capacitiesData
}

export function getBrands(): ProductBrand[] {
  return brandsData
}
