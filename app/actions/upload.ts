"use server"

import { createSupabaseAdminClient } from "@/lib/supabase/admin"

const BUCKET = "products"
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif"]
const MAX_SIZE_MB = 5

export async function uploadProductImage(
  formData: FormData,
): Promise<{ url?: string; error?: string }> {
  const file = formData.get("file") as File | null

  if (!file || file.size === 0) return { error: "No se proporcionó archivo" }
  if (!ALLOWED_TYPES.includes(file.type))
    return { error: "Formato no permitido. Usa JPEG, PNG, WebP o AVIF." }
  if (file.size > MAX_SIZE_MB * 1024 * 1024) return { error: `El archivo supera ${MAX_SIZE_MB} MB` }

  const ext = file.name.split(".").pop() ?? "jpg"
  const slug = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`

  const supabase = createSupabaseAdminClient()

  const { error: uploadError } = await supabase.storage
    .from(BUCKET)
    .upload(slug, file, { contentType: file.type, upsert: false })

  if (uploadError) return { error: uploadError.message }

  const {
    data: { publicUrl },
  } = supabase.storage.from(BUCKET).getPublicUrl(slug)

  return { url: publicUrl }
}
