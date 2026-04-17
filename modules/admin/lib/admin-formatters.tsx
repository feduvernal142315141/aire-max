import { Badge } from "@/components/ui/badge"
import type { StockHealth } from "@/modules/admin/types"

/**
 * Clasifica el stock en tres niveles de salud:
 * - `low` si hay 5 o menos unidades
 * - `medium` si hay entre 6 y 15 unidades
 * - `high` si hay más de 15 unidades
 */
export function getStockHealth(stock: number): StockHealth {
  if (stock <= 5) return "low"
  if (stock <= 15) return "medium"
  return "high"
}

/**
 * Renderiza un Badge coloreado según la salud del stock.
 * Usado en la tabla de inventario y en el listado de productos.
 */
export function stockHealthBadge(stock: number) {
  const health = getStockHealth(stock)

  if (health === "low") {
    return <Badge className="bg-red-500/15 text-red-700 border-red-300">🔴 Bajo stock</Badge>
  }

  if (health === "medium") {
    return <Badge className="bg-yellow-500/15 text-yellow-700 border-yellow-300">🟡 Stock medio</Badge>
  }

  return <Badge className="bg-emerald-500/15 text-emerald-700 border-emerald-300">🟢 Disponible</Badge>
}

/**
 * Formatea un número como moneda MXN (es-MX) con 2 decimales máx.
 * Usado en dashboard, tablas y filtros del admin.
 *
 * NOTA: distinto del formatter global en `@/lib/formatters` (que usa otra moneda).
 * Si en el futuro el admin soporta multi-moneda, mover la lógica a `@/lib/formatters`.
 */
export function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 2,
  }).format(value)
}
