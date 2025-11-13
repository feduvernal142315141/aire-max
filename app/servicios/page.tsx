import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Wrench,
  Snowflake,
  ThermometerSun,
  Shield,
  Clock,
  CheckCircle2,
  ArrowRight,
  Phone,
  Calendar,
  Users,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function ServiciosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="mx-auto w-fit">Servicios Profesionales</Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-balance">
              Soluciones Completas en Climatización
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Desde la instalación hasta el mantenimiento, te acompañamos en cada etapa para garantizar tu confort
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: "Instalación Profesional",
                description:
                  "Instalación certificada con garantía. Cumplimos todas las normas de seguridad y eficiencia energética.",
                features: [
                  "Instalación en 24-48 horas",
                  "Técnicos certificados",
                  "Garantía de instalación",
                  "Limpieza del área incluida",
                ],
                link: "/servicios/instalacion",
                color: "from-primary to-primary/80",
              },
              {
                icon: ThermometerSun,
                title: "Mantenimiento",
                description: "Planes de mantenimiento preventivo y correctivo para alargar la vida útil de tu equipo.",
                features: [
                  "Planes mensuales y anuales",
                  "Revisión completa del sistema",
                  "Limpieza profunda",
                  "Descuentos por contrato",
                ],
                link: "/servicios/mantenimiento",
                color: "from-accent to-accent/80",
              },
              {
                icon: Snowflake,
                title: "Reparación",
                description: "Servicio técnico especializado para todo tipo de aires acondicionados y marcas.",
                features: [
                  "Diagnóstico gratuito",
                  "Respuesta en 24 horas",
                  "Repuestos originales",
                  "Garantía en reparaciones",
                ],
                link: "/servicios/reparacion",
                color: "from-primary/70 to-accent/70",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all">
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform mb-4`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href={service.link}>
                      Más información
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">¿Por qué elegirnos?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Más de 15 años de experiencia nos respaldan
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Técnicos Certificados",
                description: "Personal capacitado con certificaciones oficiales",
              },
              {
                icon: Shield,
                title: "Garantía Extendida",
                description: "Hasta 5 años en equipos e instalación",
              },
              {
                icon: Clock,
                title: "Respuesta Rápida",
                description: "Atención en menos de 24 horas",
              },
              {
                icon: Award,
                title: "Calidad Garantizada",
                description: "Cumplimos estándares internacionales",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6 space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
            <CardContent className="py-12 md:py-16 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance">
                ¿Necesitas un servicio técnico?
              </h2>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto text-pretty">
                Agenda tu cita ahora y recibe atención personalizada
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="text-lg" asChild>
                  <Link href="/contacto">
                    <Phone className="mr-2 h-5 w-5" />
                    Llamar Ahora
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg bg-white/10 hover:bg-white/20 border-white/20"
                  asChild
                >
                  <Link href="/cotizacion">
                    <Calendar className="mr-2 h-5 w-5" />
                    Agendar Servicio
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
