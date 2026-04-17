// ─── Service Interest ────────────────────────────────────────────────────────
export const SERVICE_INTEREST = {
  VENTA: "venta",
  INSTALACION: "instalacion",
  MANTENIMIENTO: "mantenimiento",
  REPARACION: "reparacion",
  PLAN: "plan",
} as const

export type ServiceInterest = (typeof SERVICE_INTEREST)[keyof typeof SERVICE_INTEREST]

// ─── Contact Form Data ───────────────────────────────────────────────────────
export interface ContactFormData {
  name: string
  phone: string
  email: string
  service: ServiceInterest
  city: string
  message: string
}

// ─── Contact Info ────────────────────────────────────────────────────────────
export interface ContactInfo {
  phone: string
  email: string
  address: string
  hours: string
  whatsappUrl: string
}
