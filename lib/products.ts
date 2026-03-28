// Re-exports for backward compatibility during migration
// TODO: Update all imports to use @/data directly, then remove this file
export type {
  Product,
  ProductBrand,
  ProductCategory,
  ProductCapacity,
  EnergyRating,
} from "@/types";
export {
  productsData as products,
  brandsData as brands,
  categoriesData as categories,
  capacitiesData as capacities,
} from "@/data";
