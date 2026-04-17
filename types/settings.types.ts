import type { CurrencyCode } from "./currency.types"

export interface AppSettings {
  currencyCode: CurrencyCode
  currencyLocale: string
  taxRate: number
  companyName: string
  companyPhone?: string | null
  companyEmail?: string | null
  companyAddress?: string | null
  whatsappNumber?: string | null
  updatedAt: string
}

export const DEFAULT_SETTINGS: AppSettings = {
  currencyCode: "USD",
  currencyLocale: "en-US",
  taxRate: 0,
  companyName: "Aire-Max",
  companyPhone: null,
  companyEmail: null,
  companyAddress: null,
  whatsappNumber: null,
  updatedAt: new Date(0).toISOString(),
}
