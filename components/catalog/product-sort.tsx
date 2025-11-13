"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export type SortOption = "relevance" | "price-asc" | "price-desc" | "capacity-asc" | "capacity-desc" | "newest"

interface ProductSortProps {
  value: SortOption
  onChange: (value: SortOption) => void
}

export function ProductSort({ value, onChange }: ProductSortProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Ordenar por" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="relevance">Más relevantes</SelectItem>
        <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
        <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
        <SelectItem value="capacity-asc">Capacidad: menor a mayor</SelectItem>
        <SelectItem value="capacity-desc">Capacidad: mayor a menor</SelectItem>
        <SelectItem value="newest">Más nuevos</SelectItem>
      </SelectContent>
    </Select>
  )
}
