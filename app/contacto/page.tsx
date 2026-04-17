import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants"

export default function ContactoPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <div className="flex flex-col pt-16 md:pt-20">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="gradient-bg-animated absolute inset-0 bg-gradient-to-br from-[#f9fcff] via-[#e0f2fe] to-[#f9fcff]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#00e0ff] opacity-[0.06] blur-[100px]" />

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
              <Card className="hover:border-primary/20 border-2 border-transparent transition-all">
                <CardContent className="p-6 md:p-8">
                  <form className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
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

                    <div className="grid gap-6 md:grid-cols-2">
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
                      className="from-primary to-accent w-full bg-gradient-to-r text-white shadow-lg transition-all hover:shadow-xl"
                    >
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-primary/20 from-primary/5 to-accent/5 border-2 bg-gradient-to-br">
                <CardContent className="space-y-6 p-6">
                  <h3 className="font-serif text-xl font-bold">Contacto Directo</h3>

                  <div className="space-y-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-primary/5 group flex items-start gap-4 rounded-xl bg-white p-4 transition-colors"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#25D366]">
                        <MessageCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="group-hover:text-primary font-semibold transition-colors">
                          WhatsApp
                        </p>
                        <p className="text-muted-foreground text-sm">Respuesta inmediata</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 rounded-xl bg-white p-4">
                      <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                        <Phone className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Teléfono</p>
                        <p className="text-muted-foreground text-sm">+52 123 456 7890</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-xl bg-white p-4">
                      <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                        <Mail className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground text-sm">contacto@aire-max.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-xl bg-white p-4">
                      <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                        <MapPin className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Ubicación</p>
                        <p className="text-muted-foreground text-sm">Ciudad de México, México</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-xl bg-white p-4">
                      <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                        <Clock className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Horario</p>
                        <p className="text-muted-foreground text-sm">Lun - Vie: 8:00 - 18:00</p>
                        <p className="text-muted-foreground text-sm">Sáb: 9:00 - 14:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-primary/20 border-2 border-transparent transition-all">
                <CardContent className="space-y-4 p-6">
                  <h3 className="text-lg font-semibold">Tiempo de Respuesta</h3>
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
