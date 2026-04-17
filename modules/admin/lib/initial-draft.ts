import type { ProductAdminView } from "@/types"

/**
 * Genera el estado inicial de un producto nuevo para el drawer de creación.
 * El `id` es temporal (mock) — el backend lo reemplazará al persistir.
 */
export function initialDraft(): ProductAdminView {
  return {
    id: `p-${Math.random().toString(36).slice(2, 8)}`,
    image: "/placeholder.svg",
    name: "",
    brand: "LG",
    category: "split",
    capacity: "12000",
    price: 0,
    originalPrice: undefined,
    stock: 0,
    status: "active",
    rating: 5,
    sku: "",
    features: [],
    inverter: true,
    wifi: false,
    energyRating: "A++",
    description: "",
    tags: [],
    slug: "",
    metaTitle: "",
    metaDescription: "",
  }
}
