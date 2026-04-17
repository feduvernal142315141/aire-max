import {
  BarChart3,
  Box,
  LayoutDashboard,
  Megaphone,
  Package,
  Settings,
  ShoppingCart,
  Tags,
  Users,
} from "lucide-react"

import type { AdminSection, ProductFilters } from "@/modules/admin/types"
import type { EnergyRating, PriceRange, ProductCategory } from "@/types"

/** Clave de localStorage para persistir filtros del listado de productos. */
export const FILTERS_KEY = "admin-products-filters-v1"

/** Tope superior del slider de precio del filtro (MXN). */
export const PRICE_RANGE_MAX = 2500

/** Rango de precio por defecto (0 – PRICE_RANGE_MAX). */
export const PRICE_RANGE_DEFAULT: PriceRange = { min: 0, max: PRICE_RANGE_MAX }

/** Filtros por defecto del listado de productos del admin. */
export const defaultFilters: ProductFilters = {
  brands: [],
  categories: [],
  capacities: [],
  status: "all",
  priceRange: PRICE_RANGE_DEFAULT,
}

/** Categorías disponibles para seleccionar en el drawer y en los chips de filtro. */
export const CATEGORY_OPTIONS: ProductCategory[] = [
  "split",
  "cassette",
  "piso-techo",
  "ventana",
  "portatil",
]

/** Ratings energéticos que se pueden asignar a un producto. */
export const ENERGY_OPTIONS: EnergyRating[] = ["A+++", "A++", "A+", "A"]

/** Tipo de cada ítem de navegación del sidebar admin. */
export interface AdminNavItem {
  id: AdminSection
  label: string
  icon: typeof LayoutDashboard
}

/** Ítems del sidebar, en el orden de aparición. */
export const navItems: AdminNavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "productos", label: "Productos", icon: Box },
  { id: "categorias", label: "Categorías", icon: Tags },
  { id: "inventario", label: "Inventario", icon: Package },
  { id: "ordenes", label: "Órdenes", icon: ShoppingCart },
  { id: "clientes", label: "Clientes", icon: Users },
  { id: "promociones", label: "Promociones", icon: Megaphone },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "configuracion", label: "Configuración", icon: Settings },
]

// Re-export puente: `initialDraft` vive en `./initial-draft` pero se consume también
// como constante desde este módulo (contrato consumido por `use-admin-products.ts`).
export { initialDraft } from "./initial-draft"
