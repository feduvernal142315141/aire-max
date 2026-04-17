import "server-only"

import { createClient } from "@supabase/supabase-js"

import { getSupabaseEnv, getSupabaseServiceKey } from "./env"
import type { Database } from "./types.generated"

/**
 * Admin client (service role).
 * NUNCA usar en cliente.
 */
export function createSupabaseAdminClient() {
  const { url } = getSupabaseEnv()
  const serviceKey = getSupabaseServiceKey()

  return createClient<Database>(url, serviceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}
