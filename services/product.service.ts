import { productsData, categoriesData, capacitiesData, brandsData } from "@/data"
import type {
  Product,
  ProductFilterState,
  SortOption,
  CategoryOption,
  CapacityOption,
  ProductBrand,
} from "@/types"

// ─── Product Queries ─────────────────────────────────────────────────────────

export async function getProducts(): Promise<Product[]> {
  return productsData
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return productsData.find((p) => p.id === id)
}

export async function getRelatedProducts(product: Product, limit = 4): Promise<Product[]> {
  return productsData
    .filter(
      (p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand),
    )
    .slice(0, limit)
}

export async function getPopularProducts(limit = 3): Promise<Product[]> {
  return productsData.filter((p) => p.popular).slice(0, limit)
}

// ─── Filtering ───────────────────────────────────────────────────────────────

export function filterProducts(products: Product[], filters: ProductFilterState): Product[] {
  return products.filter((product) => {
    // Brand filter
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
      return false
    }

    // Category filter
    if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
      return false
    }

    // Capacity filter
    if (filters.capacities.length > 0 && !filters.capacities.includes(product.capacity)) {
      return false
    }

    // Price range filter
    if (product.price < filters.priceRange.min || product.price > filters.priceRange.max) {
      return false
    }

    // Inverter filter
    if (filters.inverter !== null && product.inverter !== filters.inverter) {
      return false
    }

    // WiFi filter
    if (filters.wifi !== null && product.wifi !== filters.wifi) {
      return false
    }

    return true
  })
}

// ─── Sorting ─────────────────────────────────────────────────────────────────

export function sortProducts(products: Product[], sortBy: SortOption): Product[] {
  const sorted = [...products]

  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price)
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price)
    case "capacity-asc":
      return sorted.sort((a, b) => Number(a.capacity) - Number(b.capacity))
    case "capacity-desc":
      return sorted.sort((a, b) => Number(b.capacity) - Number(a.capacity))
    case "newest":
      return sorted.sort((a, b) => {
        if (a.nuevo && !b.nuevo) return -1
        if (!a.nuevo && b.nuevo) return 1
        return 0
      })
    case "relevance":
    default:
      return sorted.sort((a, b) => {
        if (a.popular && !b.popular) return -1
        if (!a.popular && b.popular) return 1
        return 0
      })
  }
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
