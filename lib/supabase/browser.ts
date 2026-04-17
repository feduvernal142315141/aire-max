"use client"

import { createBrowserClient } from "@supabase/ssr"

import type { Database } from "./types.generated"

export function createSupabaseBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    throw new Error(
      "Faltan NEXT_PUBLIC_SUPABASE_URL y/o NEXT_PUBLIC_SUPABASE_ANON_KEY. Revisá .env.example",
    )
  }

  return createBrowserClient<Database>(url, anonKey)
}
