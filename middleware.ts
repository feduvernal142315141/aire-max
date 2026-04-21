import { NextResponse, type NextRequest } from "next/server"

/**
 * Middleware minimalista — solo mira cookies de Supabase para decidir redirects.
 *
 * El auth check REAL se hace en `app/admin/(dashboard)/layout.tsx` server-side,
 * que valida con Supabase y verifica el rol. Acá solo hacemos un redirect rápido
 * si visitan /admin sin cookie alguna, para evitar renderizar la página antes.
 *
 * No usamos @supabase/ssr en el middleware para mantener el Edge bundle mínimo
 * y evitar fallos de runtime del Edge.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Solo nos interesa /admin/**
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next()
  }

  // /admin/login es público
  if (pathname.startsWith("/admin/login")) {
    return NextResponse.next()
  }

  // Para el resto de /admin/**, si no hay ninguna cookie de Supabase -> login.
  // Supabase guarda cookies tipo: sb-<project-ref>-auth-token
  const hasSupabaseCookie = request.cookies
    .getAll()
    .some((c) => c.name.startsWith("sb-") && c.name.includes("auth-token"))

  if (!hasSupabaseCookie) {
    const loginUrl = request.nextUrl.clone()
    loginUrl.pathname = "/admin/login"
    return NextResponse.redirect(loginUrl)
  }

  // Tiene cookie → el layout hará el auth check completo (incluyendo rol)
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico)$).*)",
  ],
}
