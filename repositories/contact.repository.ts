import "server-only"

import { createSupabaseAdminClient } from "@/lib/supabase/admin"
import type { Database } from "@/lib/supabase/types.generated"
import type { ContactFormData, ContactSubmission, ContactSubmissionStatus } from "@/types"

import { mapContactRowToDomain } from "./_mappers"
import { canUseSupabase } from "./_runtime"

type ContactInsert = Database["public"]["Tables"]["contact_submissions"]["Insert"]
type ContactUpdate = Database["public"]["Tables"]["contact_submissions"]["Update"]

export interface ContactSubmitResult {
  success: boolean
  message: string
}

export async function submitContact(data: ContactFormData): Promise<ContactSubmitResult> {
  if (!canUseSupabase()) {
    await new Promise((resolve) => setTimeout(resolve, 400))
    return { success: true, message: "Mensaje enviado. Nos contactaremos pronto." }
  }

  const supabase = createSupabaseAdminClient()
  const row: ContactInsert = {
    name: data.name,
    email: data.email,
    phone: data.phone ?? null,
    service: data.service ?? null,
    message: data.city ? `${data.message}\n\nCiudad: ${data.city}` : data.message,
  }
  const { error } = await supabase.from("contact_submissions").insert(row)

  if (error) {
    console.error("[contact.repository] submitContact error:", error)
    return { success: false, message: "Error al enviar. Intenta por WhatsApp." }
  }

  return {
    success: true,
    message: "Mensaje enviado correctamente. Te contactamos en menos de 2 horas.",
  }
}

export async function findAllContactSubmissions(): Promise<ContactSubmission[]> {
  if (!canUseSupabase()) return []

  const supabase = createSupabaseAdminClient()
  const { data, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })

  if (error || !data) return []
  return data.map(mapContactRowToDomain)
}

export async function updateContactSubmissionStatus(
  id: string,
  status: ContactSubmissionStatus,
): Promise<void> {
  if (!canUseSupabase()) return

  const supabase = createSupabaseAdminClient()
  const patch: ContactUpdate = { status }
  const { error } = await supabase.from("contact_submissions").update(patch).eq("id", id)

  if (error) throw new Error(error.message)
}
