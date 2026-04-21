"use server"

import { submitContact } from "@/repositories/contact.repository"
import type { ContactFormData } from "@/types"

export interface ContactActionState {
  success?: boolean
  message?: string
  error?: string
}

export async function submitContactAction(
  _prev: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const data: ContactFormData = {
    name: (formData.get("name") as string)?.trim(),
    phone: (formData.get("phone") as string)?.trim(),
    email: (formData.get("email") as string)?.trim(),
    service: formData.get("service") as ContactFormData["service"],
    city: (formData.get("city") as string)?.trim(),
    message: (formData.get("message") as string)?.trim(),
  }

  if (!data.name || !data.email || !data.message) {
    return { error: "Nombre, email y mensaje son obligatorios." }
  }

  try {
    const result = await submitContact(data)
    if (result.success) {
      return { success: true, message: result.message }
    }
    return { error: result.message }
  } catch (err) {
    console.error("[submitContactAction]", err)
    return { error: "Error inesperado. Por favor intenta por WhatsApp." }
  }
}
