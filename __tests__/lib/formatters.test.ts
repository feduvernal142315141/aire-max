import { vi } from "vitest"

vi.mock("@/data", () => ({
  whatsappConfig: { number: "1234567890", defaultMessage: "Hola" },
}))

import {
  formatCurrency,
  calculateRecommendedBTU,
  formatBTU,
  getWhatsAppUrl,
} from "@/lib/formatters"

// Build expected values using the same Intl.NumberFormat the implementation uses,
// so tests are resilient to ICU / locale differences across Node/jsdom versions.
const currencyFmt = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})
const numberFmt = new Intl.NumberFormat("es-ES")

describe("formatCurrency", () => {
  it("formats an integer amount as USD currency", () => {
    expect(formatCurrency(1000)).toBe(currencyFmt.format(1000))
  })

  it("formats zero", () => {
    expect(formatCurrency(0)).toBe(currencyFmt.format(0))
  })

  it("formats a large number", () => {
    expect(formatCurrency(50000)).toBe(currencyFmt.format(50000))
  })

  it("returns a string", () => {
    expect(typeof formatCurrency(1000)).toBe("string")
  })

  it("includes currency code or symbol", () => {
    const result = formatCurrency(1000)
    expect(result).toMatch(/USD|US\$|\$/)
  })
})

describe("calculateRecommendedBTU", () => {
  it("returns 9000 BTU for 10 m²", () => {
    expect(calculateRecommendedBTU(10)).toBe(9000)
  })

  it("returns 12000 BTU for 20 m²", () => {
    expect(calculateRecommendedBTU(20)).toBe(12000)
  })

  it("returns 18000 BTU for 30 m²", () => {
    expect(calculateRecommendedBTU(30)).toBe(18000)
  })

  it("returns 60000 BTU for 100 m²", () => {
    expect(calculateRecommendedBTU(100)).toBe(60000)
  })

  it("returns smallest standard BTU that covers the area", () => {
    // 15 m² * 600 = 9000 BTU → exactly 9000
    expect(calculateRecommendedBTU(15)).toBe(9000)
    // 16 m² * 600 = 9600 → next is 12000
    expect(calculateRecommendedBTU(16)).toBe(12000)
  })
})

describe("formatBTU", () => {
  it("formats a BTU number with BTU suffix", () => {
    const result = formatBTU(12000)
    expect(result).toContain("BTU")
    expect(result).toBe(numberFmt.format(12000) + " BTU")
  })

  it("formats a string BTU value", () => {
    const result = formatBTU("9000")
    expect(result).toContain("BTU")
    expect(result).toBe(numberFmt.format(9000) + " BTU")
  })

  it("formats large BTU values", () => {
    expect(formatBTU(60000)).toBe(numberFmt.format(60000) + " BTU")
  })
})

describe("getWhatsAppUrl", () => {
  it("returns a string containing wa.me", () => {
    const url = getWhatsAppUrl()
    expect(typeof url).toBe("string")
    expect(url).toContain("wa.me")
  })

  it("includes the phone number from config", () => {
    const url = getWhatsAppUrl()
    expect(url).toContain("1234567890")
  })

  it("includes a custom message when provided", () => {
    const url = getWhatsAppUrl("Custom message")
    expect(url).toContain("wa.me")
    expect(url).toContain(encodeURIComponent("Custom message"))
  })
})
