import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

const ADMIN_PUBLIC_PATHS = ["/admin/login"]

export async function middleware(request: NextRequest) {
  // Safety net — never let the middleware crash the whole site
  try {
    return await handleAuth(request)
  } catch {
    return NextResponse.next({ request })
  }
}

async function handleAuth(request: NextRequest) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // If env vars are missing, let the page-level auth handle it
  if (!url || !anonKey) {
    return NextResponse.next({ request })
  }

  // supabaseResponse must be used consistently — Supabase official pattern
  let supabaseResponse = NextResponse.next({ request })

  // No Database generic here — middleware only needs auth, not typed DB queries
  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
        supabaseResponse = NextResponse.next({ request })
        cookiesToSet.forEach(({ name, value, options }) => {
          supabaseResponse.cookies.set(name, value, options)
        })
      },
    },
  })

  // IMPORTANT: do not run any logic between createServerClient and getUser
  const authClient = supabase.auth as unknown as {
    getUser: () => Promise<{ data: { user: { id: string } | null } }>
  }
  const {
    data: { user },
  } = await authClient.getUser()

  const { pathname } = request.nextUrl

  // Protect /admin/** — redirect unauthenticated visitors to login
  if (pathname.startsWith("/admin") && !ADMIN_PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    if (!user) {
      const loginUrl = request.nextUrl.clone()
      loginUrl.pathname = "/admin/login"
      return NextResponse.redirect(loginUrl)
    }
  }

  // If already logged in and visiting /admin/login, redirect to dashboard
  if (pathname.startsWith("/admin/login") && user) {
    const dashUrl = request.nextUrl.clone()
    dashUrl.pathname = "/admin"
    return NextResponse.redirect(dashUrl)
  }

  // IMPORTANT: return supabaseResponse (not a new NextResponse) so cookies propagate
  return supabaseResponse
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico)$).*)",
  ],
}
