import { redirect } from "next/navigation"

import { createSupabaseServerClient } from "@/lib/supabase/server"

export const dynamic = "force-dynamic"

export default async function AdminLoginLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Si ya tiene sesión activa, mándalo al dashboard
  if (user) redirect("/admin")

  return <>{children}</>
}
