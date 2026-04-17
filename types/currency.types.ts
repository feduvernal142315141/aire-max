// ─── Currency ─────────────────────────────────────────────────────────────────
export const CURRENCY_CODE = {
  USD: "USD",
  EUR: "EUR",
  MXN: "MXN",
  ARS: "ARS",
  CLP: "CLP",
  COP: "COP",
  BRL: "BRL",
  PEN: "PEN",
  UYU: "UYU",
  GBP: "GBP",
} as const

export type CurrencyCode = (typeof CURRENCY_CODE)[keyof typeof CURRENCY_CODE]

export interface CurrencyInfo {
  code: CurrencyCode
  label: string
  symbol: string
  defaultLocale: string
}

export const SUPPORTED_CURRENCIES: readonly CurrencyInfo[] = [
  { code: "USD", label: "Dólar estadounidense", symbol: "$", defaultLocale: "en-US" },
  { code: "EUR", label: "Euro", symbol: "€", defaultLocale: "es-ES" },
  { code: "MXN", label: "Peso mexicano", symbol: "$", defaultLocale: "es-MX" },
  { code: "ARS", label: "Peso argentino", symbol: "$", defaultLocale: "es-AR" },
  { code: "CLP", label: "Peso chileno", symbol: "$", defaultLocale: "es-CL" },
  { code: "COP", label: "Peso colombiano", symbol: "$", defaultLocale: "es-CO" },
  { code: "BRL", label: "Real brasileño", symbol: "R$", defaultLocale: "pt-BR" },
  { code: "PEN", label: "Sol peruano", symbol: "S/", defaultLocale: "es-PE" },
  { code: "UYU", label: "Peso uruguayo", symbol: "$", defaultLocale: "es-UY" },
  { code: "GBP", label: "Libra esterlina", symbol: "£", defaultLocale: "en-GB" },
] as const
