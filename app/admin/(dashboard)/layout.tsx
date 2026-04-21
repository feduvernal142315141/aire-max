import { redirect } from "next/navigation"

import { createSupabaseServerClient } from "@/lib/supabase/server"
import { createSupabaseAdminClient } from "@/lib/supabase/admin"
import { signOut } from "../login/actions"

export const dynamic = "force-dynamic"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect("/admin/login")

  // Verify admin/staff role
  const adminClient = createSupabaseAdminClient()
  const { data: roleRow } = await adminClient
    .from("user_roles")
    .select("role")
    .eq("user_id", user.id)
    .single()

  if (!roleRow || !["admin", "staff"].includes(roleRow.role)) {
    redirect("/")
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Auth strip — minimal, above the admin shell */}
      <div className="border-border bg-background/95 sticky top-0 z-20 flex h-9 items-center justify-between border-b px-4 backdrop-blur-sm">
        <span className="text-muted-foreground text-[11px]">
          <span className="text-foreground font-medium">{user.email ?? user.id}</span>
          {" · "} administrador
        </span>
        <form action={signOut}>
          <button
            type="submit"
            className="text-muted-foreground hover:text-foreground cursor-pointer text-[11px] transition-colors"
          >
            Cerrar sesión
          </button>
        </form>
      </div>
      <main>{children}</main>
    </div>
  )
}
