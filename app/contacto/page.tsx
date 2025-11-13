"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants"

export default function ContactoPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <div className="flex flex-col pt-16 md:pt-20">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f9fcff] via-[#e0f2fe] to-[#f9fcff] gradient-bg-animated" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00e0ff] opacity-[0.06] blur-[100px] rounded-full" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-6 animate-fade-up">
            <Badge className="w-fit mx-auto bg-white/80 backdrop-blur-sm border border-primary/20 text-primary">
              Contacto
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
              Hablemos de tu <span className="gradient-text">Proyecto</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos listos para ayudarte a encontrar la solución perfecta de climatización
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              <Card className="border-2 border-transparent hover:border-primary/20 transition-all">
                <CardContent className="p-6 md:p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre completo</Label>
                        <Input id="name" placeholder="Juan Pérez" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono / WhatsApp</Label>
                        <Input id="phone" type="tel" placeholder="+52 123 456 7890" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input id="email" type="email" placeholder="correo@ejemplo.com" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="service">Servicio de interés</Label>
                        <Select>
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Selecciona un servicio" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="venta">Venta de Equipos</SelectItem>
                            <SelectItem value="instalacion">Instalación</SelectItem>
                            <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                            <SelectItem value="reparacion">Reparación</SelectItem>
                            <SelectItem value="plan">Plan de Mantenimiento</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">Ciudad</Label>
                        <Input id="city" placeholder="Ciudad de México" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea
                        id="message"
                        placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl transition-all"
                    >
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-serif font-bold">Contacto Directo</h3>

                  <div className="space-y-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-primary/5 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#25D366] flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold group-hover:text-primary transition-colors">WhatsApp</p>
                        <p className="text-sm text-muted-foreground">Respuesta inmediata</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Teléfono</p>
                        <p className="text-sm text-muted-foreground">+52 123 456 7890</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm text-muted-foreground">contacto@aire-max.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Ubicación</p>
                        <p className="text-sm text-muted-foreground">Ciudad de México, México</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Horario</p>
                        <p className="text-sm text-muted-foreground">Lun - Vie: 8:00 - 18:00</p>
                        <p className="text-sm text-muted-foreground">Sáb: 9:00 - 14:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-transparent hover:border-primary/20 transition-all">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Tiempo de Respuesta</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Respondemos todos los mensajes en menos de 2 horas durante horario laboral. Para emergencias,
                    contáctanos por WhatsApp.
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
