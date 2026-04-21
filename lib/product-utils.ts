import type { Product, ProductFilterState, SortOption } from "@/types"

// Pure functions — safe to use in both Server and Client Components

export function filterProducts(products: Product[], filters: ProductFilterState): Product[] {
  return products.filter((product) => {
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) return false
    if (filters.categories.length > 0 && !filters.categories.includes(product.category))
      return false
    if (filters.capacities.length > 0 && !filters.capacities.includes(product.capacity))
      return false
    if (product.price < filters.priceRange.min || product.price > filters.priceRange.max)
      return false
    if (filters.inverter !== null && product.inverter !== filters.inverter) return false
    if (filters.wifi !== null && product.wifi !== filters.wifi) return false
    return true
  })
}

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
