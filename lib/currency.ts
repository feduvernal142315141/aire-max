import { SUPPORTED_CURRENCIES } from "@/types"
import type { CurrencyCode, CurrencyInfo } from "@/types"

/**
 * Formatea un monto según moneda + locale.
 */
export function formatPrice(amount: number, currencyCode: CurrencyCode, locale?: string): string {
  const info = getCurrencyInfo(currencyCode)
  const effectiveLocale = locale ?? info.defaultLocale
  const fractionDigits = getDefaultFractionDigits(currencyCode)

  try {
    return new Intl.NumberFormat(effectiveLocale, {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    }).format(amount)
  } catch {
    return `${info.symbol}${amount.toFixed(fractionDigits)}`
  }
}

export function getCurrencyInfo(code: CurrencyCode): CurrencyInfo {
  const info = SUPPORTED_CURRENCIES.find((item) => item.code === code)
  if (!info) {
    throw new Error(`Moneda no soportada: ${code}`)
  }
  return info
}

function getDefaultFractionDigits(code: CurrencyCode): number {
  if (code === "CLP" || code === "COP") return 0
  return 2
}
