// WhatsApp Configuration
export const WHATSAPP_CONFIG = {
  number: "1234567890", // Replace with actual WhatsApp number
  defaultMessage: "Hola, me gustaría obtener más información sobre sus servicios de climatización.",
}

export const WHATSAPP_NUMBER = WHATSAPP_CONFIG.number
export const WHATSAPP_MESSAGE = WHATSAPP_CONFIG.defaultMessage

// Company Information
export const COMPANY_INFO = {
  name: "Aire-Max",
  tagline: "Expertos en Climatización",
  phone: "+1 (234) 567-8900",
  email: "info@aire-max.com",
  address: "Av. Principal 123, Ciudad, País",
  hours: "Lun - Vie: 8:00 - 18:00 | Sáb: 9:00 - 14:00",
  yearsExperience: 15,
  unitsInstalled: 5000,
}

// Product Types
export const PRODUCT_TYPES = [
  { value: "split", label: "Split" },
  { value: "ventana", label: "Ventana" },
  { value: "inverter", label: "Inverter" },
  { value: "portatil", label: "Portátil" },
  { value: "cassette", label: "Cassette" },
  { value: "piso-techo", label: "Piso-Techo" },
  { value: "comercial", label: "Comercial" },
  { value: "industrial", label: "Industrial" },
] as const

// BTU Options
export const BTU_OPTIONS = [
  { value: "9000", label: "9,000 BTU" },
  { value: "12000", label: "12,000 BTU" },
  { value: "18000", label: "18,000 BTU" },
  { value: "24000", label: "24,000 BTU" },
  { value: "36000", label: "36,000 BTU" },
  { value: "48000", label: "48,000 BTU" },
  { value: "60000", label: "60,000 BTU+" },
] as const

// Popular Brands
export const BRANDS = [
  "LG",
  "Samsung",
  "Daikin",
  "Carrier",
  "Mitsubishi",
  "Panasonic",
  "Fujitsu",
  "Trane",
  "York",
  "Lennox",
] as const

// Service Types
export const SERVICE_TYPES = [
  { id: "instalacion", name: "Instalación", icon: "wrench" },
  { id: "mantenimiento", name: "Mantenimiento", icon: "settings" },
  { id: "reparacion", name: "Reparación", icon: "tool" },
] as const

// Maintenance Plans
export const MAINTENANCE_PLANS = [
  {
    id: "basico",
    name: "Plan Básico",
    visits: 1,
    price: 99,
    features: ["Limpieza de filtros", "Revisión general", "Informe de estado"],
  },
  {
    id: "estandar",
    name: "Plan Estándar",
    visits: 2,
    price: 179,
    features: ["Todo lo del Plan Básico", "Limpieza de serpentín", "Revisión eléctrica", "10% descuento en repuestos"],
  },
  {
    id: "premium",
    name: "Plan Premium",
    visits: 4,
    price: 329,
    features: [
      "Todo lo del Plan Estándar",
      "Revisión de gas refrigerante",
      "Atención prioritaria 24/7",
      "20% descuento en repuestos",
      "Garantía extendida",
    ],
  },
] as const

// Helper function to generate WhatsApp URL
export function getWhatsAppUrl(message?: string): string {
  const finalMessage = message || WHATSAPP_CONFIG.defaultMessage
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(finalMessage)}`
}

// Helper function to format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// Helper function to calculate recommended BTU based on area
export function calculateRecommendedBTU(areaM2: number): number {
  // Basic calculation: ~600 BTU per m²
  const btu = areaM2 * 600

  // Round to nearest standard BTU
  const standardBTUs = [9000, 12000, 18000, 24000, 36000, 48000, 60000]
  return standardBTUs.find((standard) => standard >= btu) || 60000
}
