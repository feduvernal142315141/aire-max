import type { ContactFormData } from "@/types"

export interface ContactSubmitResult {
  success: boolean
  message: string
}

export async function submitContactForm(data: ContactFormData): Promise<ContactSubmitResult> {
  // Offline fallback — used by contact.repository when Supabase is not configured
  await new Promise((resolve) => setTimeout(resolve, 400))
  console.warn("[contact.service] offline fallback — submission not persisted:", data)
  return {
    success: true,
    message: "Mensaje recibido. Nos pondremos en contacto pronto.",
  }
}
