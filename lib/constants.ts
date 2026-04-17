// Re-exports for backward compatibility during migration
// TODO: Update all imports to use @/data and @/lib/formatters directly, then remove this file
export { whatsappConfig, companyInfo } from "@/data"
export { formatCurrency, getWhatsAppUrl, calculateRecommendedBTU } from "@/lib/formatters"

// Legacy aliases — remove after Phase 4 migration
import { whatsappConfig, companyInfo } from "@/data"
export const WHATSAPP_CONFIG = whatsappConfig
export const WHATSAPP_NUMBER = whatsappConfig.number
export const WHATSAPP_MESSAGE = whatsappConfig.defaultMessage
export const COMPANY_INFO = companyInfo
