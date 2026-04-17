import { whatsappConfig } from "@/data"

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function getWhatsAppUrl(message?: string): string {
  const { number, defaultMessage } = whatsappConfig
  const finalMessage = message ?? defaultMessage
  return `https://wa.me/${number}?text=${encodeURIComponent(finalMessage)}`
}

export function calculateRecommendedBTU(areaM2: number): number {
  const btu = areaM2 * 600
  const standardBTUs = [9000, 12000, 18000, 24000, 36000, 48000, 60000]
  return standardBTUs.find((standard) => standard >= btu) ?? 60000
}

export function formatBTU(btu: string | number): string {
  return new Intl.NumberFormat("es-ES").format(Number(btu)) + " BTU"
}
