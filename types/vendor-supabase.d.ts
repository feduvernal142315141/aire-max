// STUB file — borrar cuando instales:
// pnpm add @supabase/ssr @supabase/supabase-js

declare module "@supabase/ssr" {
  export type CookieOptions = {
    [key: string]: unknown
  }

  export type Cookie = {
    name: string
    value: string
    options?: CookieOptions
  }

  export interface SupabaseClientStub<_T = unknown> {
    auth: {
      getUser: () => Promise<{ data: { user: { id: string } | null }; error: unknown }>
      getSession: () => Promise<{ data: { session: unknown }; error: unknown }>
      signOut: () => Promise<{ error: unknown }>
    }
    from: (table: string) => {
      select: (columns?: string) => unknown
      insert: (row: unknown) => unknown
      update: (row: unknown) => unknown
      delete: () => unknown
      upsert: (row: unknown, options?: { onConflict?: string }) => unknown
      eq: (column: string, value: unknown) => unknown
    }
  }

  export function createServerClient<T = unknown>(
    url: string,
    key: string,
    options: {
      cookies: {
        getAll: () => Cookie[]
        setAll: (cookies: Cookie[]) => void
      }
    },
  ): SupabaseClientStub<T>

  export function createBrowserClient<T = unknown>(url: string, key: string): SupabaseClientStub<T>
}

declare module "@supabase/supabase-js" {
  export function createClient<_T = unknown>(
    url: string,
    key: string,
    options?: { auth?: { persistSession?: boolean; autoRefreshToken?: boolean } },
  ): unknown
}
