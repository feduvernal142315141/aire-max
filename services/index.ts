// ─── Product Service ─────────────────────────────────────────────────────────
export {
  getProducts,
  getProductById,
  getRelatedProducts,
  getPopularProducts,
  filterProducts,
  sortProducts,
  getCategories,
  getCapacities,
  getBrands,
} from "./product.service"

// ─── Plan Service ────────────────────────────────────────────────────────────
export { getMaintenancePlans, getMaintenancePlanById, getInstallationPlans } from "./plan.service"

// ─── Contact Service ─────────────────────────────────────────────────────────
export { submitContactForm } from "./contact.service"
export type { ContactSubmitResult } from "./contact.service"

// ─── API Client ──────────────────────────────────────────────────────────────
export { apiClient } from "./api-client"
