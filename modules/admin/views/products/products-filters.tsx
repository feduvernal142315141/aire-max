"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { tupleToRange } from "@/lib/range"
import { formatCurrency } from "@/modules/admin/lib/admin-formatters"
import { CATEGORY_OPTIONS, PRICE_RANGE_MAX } from "@/modules/admin/lib/admin-constants"
import type { ProductFilters } from "@/modules/admin/types"
import type {
  Product,
  ProductBrand,
  ProductCapacity,
  ProductCategory,
  ProductStatus,
} from "@/types"

export interface ProductsFiltersProps {
  filters: ProductFilters
  setFilters: (fn: (prev: ProductFilters) => ProductFilters) => void
  search: string
  setSearch: (s: string) => void
  brands: ProductBrand[]
  capacities: ProductCapacity[]
  products: Product[]
  toggleFilterArray: <K extends "brands" | "categories" | "capacities">(
    key: K,
    value: ProductFilters[K][number],
  ) => void
}

export function ProductsFilters({
  filters,
  setFilters,
  search,
  setSearch,
  brands,
  capacities,
  products,
  toggleFilterArray,
}: ProductsFiltersProps) {
  return (
    <>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        <div className="space-y-2 xl:col-span-2">
          <Label>Búsqueda inteligente</Label>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            list="admin-search-suggestions"
            placeholder='Ej: "LG 12000 inverter"'
            className="rounded-xl"
          />
          <datalist id="admin-search-suggestions">
            {products.map((p) => (
              <option
                key={p.id}
                value={`${p.brand} ${p.capacity} ${p.category} ${p.inverter ? "inverter" : ""}`}
              />
            ))}
          </datalist>
        </div>

        <div className="space-y-2">
          <Label>Marca</Label>
          <div className="flex flex-wrap gap-2 rounded-xl border p-2">
            {brands.map((brand) => (
              <Button
                key={brand}
                type="button"
                size="sm"
                variant={filters.brands.includes(brand) ? "default" : "outline"}
                className="rounded-full"
                onClick={() => toggleFilterArray("brands", brand)}
              >
                {brand}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Tipo</Label>
          <div className="flex flex-wrap gap-2 rounded-xl border p-2">
            {CATEGORY_OPTIONS.map((category: ProductCategory) => (
              <Button
                key={category}
                type="button"
                size="sm"
                variant={filters.categories.includes(category) ? "default" : "outline"}
                className="rounded-full"
                onClick={() => toggleFilterArray("categories", category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Estado</Label>
          <Select
            value={filters.status}
            onValueChange={(value) =>
              setFilters((prev) => ({ ...prev, status: value as ProductStatus | "all" }))
            }
          >
            <SelectTrigger className="rounded-xl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="active">Activos</SelectItem>
              <SelectItem value="inactive">Inactivos</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>BTU</Label>
        <div className="flex flex-wrap gap-2 rounded-xl border p-2">
          {capacities.map((value) => (
            <Button
              key={value}
              type="button"
              size="sm"
              variant={filters.capacities.includes(value) ? "default" : "outline"}
              className="rounded-full"
              onClick={() => toggleFilterArray("capacities", value)}
            >
              {value}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label>
          Precio ({formatCurrency(filters.priceRange.min)} -{" "}
          {formatCurrency(filters.priceRange.max)})
        </Label>
        <Slider
          min={0}
          max={PRICE_RANGE_MAX}
          step={50}
          value={[filters.priceRange.min, filters.priceRange.max]}
          onValueChange={(values) =>
            setFilters((prev) => ({ ...prev, priceRange: tupleToRange(values) }))
          }
        />
      </div>
    </>
  )
}
