import type { PriceRange } from "@/types"

// El Slider de Radix devuelve [min, max]; el modelo canónico es {min, max}.
// Estos helpers convierten en el sitio de uso para no contaminar el tipo.

export type PriceTuple = readonly [number, number]

export function tupleToRange(tuple: PriceTuple | number[]): PriceRange {
  return { min: tuple[0] ?? 0, max: tuple[1] ?? 0 }
}

export function rangeToTuple(range: PriceRange): [number, number] {
  return [range.min, range.max]
}
