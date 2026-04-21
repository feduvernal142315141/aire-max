import type { Metadata } from "next"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contacto | Aire-Max — Solicita Presupuesto Gratis",
  description:
    "Contáctanos para instalación, mantenimiento o reparación de tu aire acondicionado. Respuesta en menos de 24 horas. WhatsApp, teléfono o formulario online.",
  keywords:
    "contacto aire acondicionado, presupuesto HVAC, instalación AC México, servicio técnico climatización",
  openGraph: {
    title: "Contacto | Aire-Max",
    description:
      "Solicita tu presupuesto gratuito. Técnicos certificados disponibles en toda la República Mexicana.",
    type: "website",
  },
}

export default function ContactoPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <div className="flex flex-col pt-16 md:pt-20">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="bg-section absolute inset-0" />
        <div className="bg-primary absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full opacity-[0.06] blur-[100px] dark:opacity-[0.10]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="animate-fade-up mb-16 space-y-6 text-center">
            <Badge className="border-primary/20 text-primary mx-auto w-fit border bg-white/80 backdrop-blur-sm">
              Contacto
            </Badge>
            <h1 className="font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Hablemos de tu <span className="gradient-text">Proyecto</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
              Estamos listos para ayudarte a encontrar la solución perfecta de climatización
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            <div className="space-y-6">
              <Card className="border-border bg-card/80 dark:bg-card/90 overflow-hidden border backdrop-blur-sm">
                <CardContent className="space-y-4 p-6">
                  <h3 className="text-foreground font-serif text-xl font-bold">Contacto Directo</h3>

                  <div className="space-y-2.5">
                    {/* WhatsApp */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group border-border bg-muted/30 dark:bg-muted/20 flex cursor-pointer items-center gap-4 rounded-xl border p-3.5 transition-all duration-200 hover:border-[#25D366]/30 hover:bg-[#25D366]/5 dark:hover:bg-[#25D366]/8"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366] shadow-[0_4px_12px_rgba(37,211,102,0.25)]">
                        <MessageCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-foreground text-sm font-semibold transition-colors group-hover:text-[#1ebe58]">
                          WhatsApp
                        </p>
                        <p className="text-muted-foreground text-xs">Respuesta inmediata</p>
                      </div>
                    </a>

                    {/* Teléfono */}
                    <div className="border-border bg-muted/30 dark:bg-muted/20 flex items-center gap-4 rounded-xl border p-3.5">
                      <div className="bg-primary/10 dark:bg-primary/15 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                        <Phone className="text-primary h-5 w-5 dark:text-sky-400" />
                      </div>
                      <div>
                        <p className="text-foreground text-sm font-semibold">Teléfono</p>
                        <p className="text-muted-foreground text-xs">+52 123 456 7890</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="border-border bg-muted/30 dark:bg-muted/20 flex items-center gap-4 rounded-xl border p-3.5">
                      <div className="bg-primary/10 dark:bg-primary/15 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                        <Mail className="text-primary h-5 w-5 dark:text-sky-400" />
                      </div>
                      <div>
                        <p className="text-foreground text-sm font-semibold">Email</p>
                        <p className="text-muted-foreground text-xs">contacto@aire-max.com</p>
                      </div>
                    </div>

                    {/* Ubicación */}
                    <div className="border-border bg-muted/30 dark:bg-muted/20 flex items-center gap-4 rounded-xl border p-3.5">
                      <div className="bg-primary/10 dark:bg-primary/15 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                        <MapPin className="text-primary h-5 w-5 dark:text-sky-400" />
                      </div>
                      <div>
                        <p className="text-foreground text-sm font-semibold">Ubicación</p>
                        <p className="text-muted-foreground text-xs">Ciudad de México, México</p>
                      </div>
                    </div>

                    {/* Horario */}
                    <div className="border-border bg-muted/30 dark:bg-muted/20 flex items-center gap-4 rounded-xl border p-3.5">
                      <div className="bg-primary/10 dark:bg-primary/15 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                        <Clock className="text-primary h-5 w-5 dark:text-sky-400" />
                      </div>
                      <div>
                        <p className="text-foreground text-sm font-semibold">Horario</p>
                        <p className="text-muted-foreground text-xs">Lun – Vie: 8:00 – 18:00</p>
                        <p className="text-muted-foreground text-xs">Sáb: 9:00 – 14:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card/80 dark:bg-card/90 border backdrop-blur-sm">
                <CardContent className="space-y-3 p-6">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <h3 className="text-foreground text-sm font-semibold">Tiempo de Respuesta</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Respondemos todos los mensajes en menos de 2 horas durante horario laboral. Para
                    emergencias, contáctanos por WhatsApp.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
