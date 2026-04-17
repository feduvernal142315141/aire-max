// ─── Product Types ───────────────────────────────────────────────────────────
export {
  PRODUCT_CATEGORY,
  PRODUCT_BRAND,
  PRODUCT_CAPACITY,
  PRODUCT_STATUS,
  ENERGY_RATING,
  SORT_OPTION,
} from "./product.types"
export type {
  ProductCategory,
  ProductBrand,
  ProductCapacity,
  ProductStatus,
  EnergyRating,
  SortOption,
  Product,
  ProductAdminView,
  ProductFilterState,
  PriceRange,
  CategoryOption,
  CapacityOption,
} from "./product.types"

// ─── Plan Types ──────────────────────────────────────────────────────────────
export { PLAN_TIER, PLAN_PERIOD } from "./plan.types"
export type { PlanTier, PlanPeriod, MaintenancePlan, InstallationPlan } from "./plan.types"

// ─── Service Types ───────────────────────────────────────────────────────────
export { SERVICE_TYPE } from "./service.types"
export type {
  ServiceType,
  Service,
  InstallationStep,
  MaintenanceSection,
  MaintenanceBenefit,
} from "./service.types"

// ─── Contact Types ───────────────────────────────────────────────────────────
export { SERVICE_INTEREST } from "./contact.types"
export type { ServiceInterest, ContactFormData, ContactInfo } from "./contact.types"

// ─── Company Types ───────────────────────────────────────────────────────────
export type {
  CompanyInfo,
  WhatsAppConfig,
  NavLink,
  FooterLinks,
  TrustBadge,
  CoverageZone,
  CompanyStat,
  CompanyStats,
} from "./company.types"

// ─── Content Types ───────────────────────────────────────────────────────────
export type {
  FAQQuestion,
  FAQCategory,
  Project,
  HomeBenefit,
  HomeService,
  HomePopularProduct,
} from "./content.types"

// ─── Currency & Settings Types ───────────────────────────────────────────────
export { CURRENCY_CODE, SUPPORTED_CURRENCIES } from "./currency.types"
export type { CurrencyCode, CurrencyInfo } from "./currency.types"

export { DEFAULT_SETTINGS } from "./settings.types"
export type { AppSettings } from "./settings.types"

// ─── Additional Domain Types (Supabase) ──────────────────────────────────────
export type { Customer } from "./customer.types"
export type { ContactSubmission, ContactSubmissionStatus } from "./contact-submission.types"
