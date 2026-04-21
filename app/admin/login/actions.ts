"use server"

import { redirect } from "next/navigation"

import { createSupabaseServerClient } from "@/lib/supabase/server"

export interface AuthActionResult {
  error?: string
}

export async function signIn(
  _prev: AuthActionResult,
  formData: FormData,
): Promise<AuthActionResult> {
  const email = (formData.get("email") as string)?.trim()
  const password = (formData.get("password") as string)?.trim()

  if (!email || !password) {
    return { error: "Email y contraseña son obligatorios." }
  }

  const supabase = await createSupabaseServerClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    console.error("[admin login]", error.message, error.code)

    const msg = error.message.toLowerCase()
    if (
      msg.includes("api key") ||
      msg.includes("invalid jwt") ||
      msg.includes("jwt") ||
      error.code === "bad_jwt"
    ) {
      return {
        error:
          "La clave anon de Supabase en Vercel no coincide con el proyecto. Revisá NEXT_PUBLIC_SUPABASE_ANON_KEY (debe ser la anon/public de Settings → API, no el service_role). El catálogo puede verse igual porque usa SUPABASE_SERVICE_ROLE_KEY.",
      }
    }

    if (error.message.includes("Email not confirmed") || error.code === "email_not_confirmed") {
      return {
        error:
          "Tenés que confirmar el email antes de entrar. Revisá Supabase → Authentication → Users y confirmá el usuario o desactivá “Confirm email” en Auth settings.",
      }
    }

    return { error: "Credenciales incorrectas. Verificá email y contraseña." }
  }

  redirect("/admin")
}

export async function signOut(): Promise<void> {
  const supabase = await createSupabaseServerClient()
  await supabase.auth.signOut()
  redirect("/admin/login")
}
