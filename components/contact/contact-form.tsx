"use client"

import { useActionState } from "react"
import { CheckCircle, Loader2, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { submitContactAction, type ContactActionState } from "@/app/actions/contact"

const initialState: ContactActionState = {}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactAction, initialState)

  if (state.success) {
    return (
      <Card className="border-border bg-card/80 dark:bg-card/90 border backdrop-blur-sm">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-12 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">¡Mensaje enviado!</h3>
            <p className="text-muted-foreground mt-1">{state.message}</p>
          </div>
          <Button variant="outline" onClick={() => window.location.reload()} className="mt-2">
            Enviar otro mensaje
          </Button>
        </CardContent>
      </Card>
    )
  }

  const inputClass =
    "rounded-xl border-border bg-background focus-visible:ring-primary/30 focus-visible:border-primary/50 dark:bg-muted/20"
  const labelClass = "text-xs font-semibold uppercase tracking-widest text-muted-foreground"

  return (
    <Card className="border-border bg-card/80 dark:bg-card/90 border backdrop-blur-sm">
      <CardContent className="p-6 md:p-8">
        <form action={formAction} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name" className={labelClass}>
                Nombre completo
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Juan Pérez"
                required
                className={inputClass}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone" className={labelClass}>
                Teléfono / WhatsApp
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+52 123 456 7890"
                className={inputClass}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email" className={labelClass}>
              Correo electrónico
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="correo@ejemplo.com"
              required
              className={inputClass}
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="service" className={labelClass}>
                Servicio de interés
              </Label>
              <Select name="service">
                <SelectTrigger id="service" className={`cursor-pointer ${inputClass}`}>
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="cursor-pointer" value="venta">
                    Venta de Equipos
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="instalacion">
                    Instalación
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="mantenimiento">
                    Mantenimiento
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="reparacion">
                    Reparación
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="plan">
                    Plan de Mantenimiento
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="city" className={labelClass}>
                Ciudad
              </Label>
              <Input id="city" name="city" placeholder="Ciudad de México" className={inputClass} />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message" className={labelClass}>
              Mensaje
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Cuéntanos sobre tu proyecto o necesidad..."
              rows={5}
              className={`resize-none ${inputClass}`}
              required
            />
          </div>

          {state.error && (
            <div className="border-destructive/20 bg-destructive/8 text-destructive flex items-center gap-2 rounded-xl border px-4 py-3 text-sm dark:border-red-800/40 dark:bg-red-900/20 dark:text-red-400">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {state.error}
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            disabled={isPending}
            className="from-primary w-full rounded-xl bg-gradient-to-r to-sky-500 text-white shadow-[0_6px_20px_rgba(7,156,251,0.28)] transition-all hover:shadow-[0_8px_28px_rgba(7,156,251,0.4)] hover:brightness-105 disabled:opacity-60 dark:from-sky-500 dark:to-cyan-400"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar Mensaje"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
