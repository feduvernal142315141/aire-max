import { useState } from "react";
import { productsData } from "@/data";
import { filterProducts, sortProducts } from "@/services";
import type {
  Product,
  SortOption,
  ProductBrand,
  ProductCategory,
  ProductCapacity,
} from "@/types";

// ─── Filter State ────────────────────────────────────────────────────────────
// UI-facing filter state uses tuple for priceRange (slider-friendly).
// The hook bridges this to ProductFilterState's {min, max} shape for the service.

export interface FilterState {
  brands: ProductBrand[];
  categories: ProductCategory[];
  capacities: ProductCapacity[];
  priceRange: [number, number];
  inverter: boolean | null;
  wifi: boolean | null;
}

const DEFAULT_FILTERS: FilterState = {
  brands: [],
  categories: [],
  capacities: [],
  priceRange: [0, 2000],
  inverter: null,
  wifi: null,
};

type ViewMode = "grid" | "list";

export function useProducts(initialProducts?: Product[]) {
  const allProducts = initialProducts ?? productsData;

  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  // Bridge tuple → {min, max} for the service layer
  const serviceFilters = {
    brands: filters.brands,
    categories: filters.categories,
    capacities: filters.capacities,
    priceRange: { min: filters.priceRange[0], max: filters.priceRange[1] },
    inverter: filters.inverter,
    wifi: filters.wifi,
  };

  // React 19 Compiler handles memoization — no useMemo needed
  const filteredProducts = filterProducts(allProducts, serviceFilters);
  const sortedProducts = sortProducts(filteredProducts, sortBy);

  // Count active filters
  const activeFiltersCount = [
    filters.brands.length > 0,
    filters.categories.length > 0,
    filters.capacities.length > 0,
    filters.priceRange[0] !== 0 || filters.priceRange[1] !== 2000,
    filters.inverter !== null,
    filters.wifi !== null,
  ].filter(Boolean).length;

  const clearFilters = () => setFilters(DEFAULT_FILTERS);

  return {
    // State
    filters,
    sortBy,
    viewMode,

    // Derived
    filteredProducts: sortedProducts,
    activeFiltersCount,
    totalProducts: allProducts.length,

    // Actions
    setFilters,
    setSortBy,
    setViewMode,
    clearFilters,
  };
}
