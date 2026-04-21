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
    return { error: "Credenciales incorrectas. Verificá email y contraseña." }
  }

  redirect("/admin")
}

export async function signOut(): Promise<void> {
  const supabase = await createSupabaseServerClient()
  await supabase.auth.signOut()
  redirect("/admin/login")
}
