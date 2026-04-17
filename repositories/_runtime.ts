import "server-only"

import { isSupabaseConfigured } from "@/lib/supabase/env"

export function canUseSupabase() {
  return isSupabaseConfigured()
}

export function throwWriteUnavailable(operation: string): never {
  throw new Error(
    `[repositories] ${operation} requiere Supabase configurado. ` +
      "Pendiente conexión cloud (opción 3 offline-first).",
  )
}
