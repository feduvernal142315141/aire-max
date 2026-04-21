"use client"

import { useActionState } from "react"
import { Loader2, Snowflake } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

import { signIn } from "./actions"

const initialState = { error: undefined }

export default function AdminLoginPage() {
  const [state, formAction, isPending] = useActionState(signIn, initialState)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="bg-primary/20 ring-primary/30 flex h-12 w-12 items-center justify-center rounded-2xl ring-1">
            <Snowflake className="text-primary h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Aire-Max Admin</h1>
            <p className="text-sm text-slate-400">Acceso restringido al personal autorizado</p>
          </div>
        </div>

        <Card className="border-slate-700 bg-slate-800/60 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg text-white">Iniciar sesión</CardTitle>
            <CardDescription className="text-slate-400">
              Ingresa tus credenciales de administrador
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email exacto de Authentication → Users"
                  required
                  autoComplete="email"
                  className="focus-visible:ring-primary/50 border-slate-600 bg-slate-700/50 text-white placeholder:text-slate-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-300">
                  Contraseña
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                  className="focus-visible:ring-primary/50 border-slate-600 bg-slate-700/50 text-white placeholder:text-slate-500"
                />
              </div>

              {state?.error && (
                <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400">
                  {state.error}
                </p>
              )}

              <Button
                type="submit"
                disabled={isPending}
                className="bg-primary hover:bg-primary/90 w-full text-white"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Iniciando sesión...
                  </>
                ) : (
                  "Ingresar al panel"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
