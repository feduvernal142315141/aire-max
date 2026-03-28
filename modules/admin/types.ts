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

export type ProductStatus = "active" | "inactive"
export type ProductType = "split" | "cassette" | "piso-techo" | "ventana"
export type StockHealth = "low" | "medium" | "high"

export interface AdminProduct {
  id: string
  image: string
  name: string
  brand: string
  type: ProductType
  btu: string
  price: number
  salePrice?: number
  stock: number
  status: ProductStatus
  rating: number
  sku: string
  inverter: boolean
  wifi: boolean
  energy: "A+++" | "A++" | "A+"
  description: string
  tags: string[]
  slug: string
  metaTitle: string
  metaDescription: string
}

export interface ProductFilters {
  brands: string[]
  types: ProductType[]
  btu: string[]
  status: ProductStatus | "all"
  priceRange: [number, number]
}

export interface AdminOrder {
  id: string
  customer: string
  items: number
  total: number
  status: "Pendiente" | "Procesando" | "Enviado" | "Entregado"
  createdAt: string
}
