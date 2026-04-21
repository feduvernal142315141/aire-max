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
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password) {
    return { error: "Email y contraseña son obligatorios." }
  }

  const supabase = await createSupabaseServerClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    // Vercel → Logs: ver el mensaje real si falla en prod pero no en local
    console.error("[admin login]", error.message, error.code)

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
