import type { PriceRange, ProductBrand, ProductCategory, ProductStatus } from "@/types"

export type AdminSection =
  | "dashboard"
  | "productos"
  | "categorias"
  | "inventario"
  | "ordenes"
  | "clientes"
  | "promociones"
  | "analytics"
  | "configuracion"

// Re-export para evitar imports cruzados desde @/types en consumidores admin.
export type { ProductStatus } from "@/types"

// Salud de stock — cálculo derivado, propio del admin.
export type StockHealth = "low" | "medium" | "high"

export interface ProductFilters {
  brands: ProductBrand[]
  categories: ProductCategory[]
  capacities: string[]
  status: ProductStatus | "all"
  priceRange: PriceRange
}

export interface AdminOrder {
  id: string
  customer: string
  items: number
  total: number
  status: "Pendiente" | "Procesando" | "Enviado" | "Entregado"
  createdAt: string
}
