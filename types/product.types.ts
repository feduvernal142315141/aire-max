// ─── Product Category ────────────────────────────────────────────────────────
export const PRODUCT_CATEGORY = {
  SPLIT: "split",
  CASSETTE: "cassette",
  PISO_TECHO: "piso-techo",
  VENTANA: "ventana",
  PORTATIL: "portatil",
} as const;

export type ProductCategory =
  (typeof PRODUCT_CATEGORY)[keyof typeof PRODUCT_CATEGORY];

// ─── Product Brand ───────────────────────────────────────────────────────────
export const PRODUCT_BRAND = {
  LG: "LG",
  SAMSUNG: "Samsung",
  DAIKIN: "Daikin",
  MITSUBISHI: "Mitsubishi",
  CARRIER: "Carrier",
  PANASONIC: "Panasonic",
} as const;

export type ProductBrand =
  (typeof PRODUCT_BRAND)[keyof typeof PRODUCT_BRAND];

// ─── Product Capacity ────────────────────────────────────────────────────────
export const PRODUCT_CAPACITY = {
  BTU_9000: "9000",
  BTU_12000: "12000",
  BTU_18000: "18000",
  BTU_24000: "24000",
  BTU_36000: "36000",
  BTU_48000: "48000",
} as const;

export type ProductCapacity =
  (typeof PRODUCT_CAPACITY)[keyof typeof PRODUCT_CAPACITY];

// ─── Energy Rating ───────────────────────────────────────────────────────────
export const ENERGY_RATING = {
  A_TRIPLE_PLUS: "A+++",
  A_DOUBLE_PLUS: "A++",
  A_PLUS: "A+",
  A: "A",
} as const;

export type EnergyRating =
  (typeof ENERGY_RATING)[keyof typeof ENERGY_RATING];

// ─── Sort Option ─────────────────────────────────────────────────────────────
export const SORT_OPTION = {
  RELEVANCE: "relevance",
  PRICE_ASC: "price-asc",
  PRICE_DESC: "price-desc",
  CAPACITY_ASC: "capacity-asc",
  CAPACITY_DESC: "capacity-desc",
  NEWEST: "newest",
} as const;

export type SortOption =
  (typeof SORT_OPTION)[keyof typeof SORT_OPTION];

// ─── Product ─────────────────────────────────────────────────────────────────
export interface Product {
  id: string;
  name: string;
  brand: ProductBrand;
  category: ProductCategory;
  capacity: ProductCapacity;
  energyRating: EnergyRating;
  price: number;
  originalPrice?: number;
  image: string;
  features: string[];
  inverter: boolean;
  wifi: boolean;
  popular?: boolean;
  nuevo?: boolean;
  oferta?: boolean;
  description: string;
}

// ─── Filter State ────────────────────────────────────────────────────────────
export interface ProductFilterState {
  brands: ProductBrand[];
  categories: ProductCategory[];
  capacities: ProductCapacity[];
  priceRange: PriceRange;
  inverter: boolean | null;
  wifi: boolean | null;
}

export interface PriceRange {
  min: number;
  max: number;
}

// ─── Select Options ──────────────────────────────────────────────────────────
export interface CategoryOption {
  value: ProductCategory;
  label: string;
}

export interface CapacityOption {
  value: ProductCapacity;
  label: string;
}
