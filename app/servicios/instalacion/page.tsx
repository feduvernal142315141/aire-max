import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Phone, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function InstalacionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="from-primary/5 via-background to-accent/5 bg-gradient-to-br py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <Badge className="w-fit">Instalación Profesional</Badge>
              <h1 className="font-serif text-4xl font-bold text-balance md:text-5xl">
                Instalación Certificada con Garantía
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                Nuestros técnicos certificados instalan tu aire acondicionado siguiendo las mejores
                prácticas y normas de seguridad.
              </p>
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/cotizacion">
                    <Calendar className="mr-2 h-5 w-5" />
                    Agendar Instalación
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent" asChild>
                  <Link href="/contacto">
                    <Phone className="mr-2 h-5 w-5" />
                    Consultar
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/technician-installing-air-conditioner.jpg"
                alt="Técnico instalando aire acondicionado"
                fill
                className="rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Proceso de Instalación</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-pretty">
              Un proceso simple y profesional en 4 pasos
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Evaluación",
                description:
                  "Visitamos tu espacio para evaluar las necesidades y determinar la mejor ubicación.",
              },
              {
                step: "02",
                title: "Planificación",
                description: "Diseñamos el plan de instalación y coordinamos fecha y hora contigo.",
              },
              {
                step: "03",
                title: "Instalación",
                description: "Nuestros técnicos instalan el equipo siguiendo normas de seguridad.",
              },
              {
                step: "04",
                title: "Pruebas",
                description: "Realizamos pruebas completas y te enseñamos a usar tu nuevo equipo.",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="space-y-4 pt-6">
                  <div className="text-primary/20 text-4xl font-bold">{item.step}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 space-y-4 text-center">
              <h2 className="font-serif text-3xl font-bold md:text-4xl">
                ¿Qué incluye la instalación?
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Visita técnica previa sin costo",
                "Instalación de unidad interior y exterior",
                "Tubería de cobre de hasta 3 metros",
                "Cable eléctrico y protecciones",
                "Perforación de pared (1 orificio)",
                "Soporte y anclajes",
                "Pruebas de funcionamiento",
                "Limpieza del área de trabajo",
                "Capacitación de uso",
                "Garantía de instalación por 2 años",
                "Certificado de instalación",
                "Soporte post-instalación",
              ].map((item, index) => (
                <div key={index} className="bg-background flex items-start gap-3 rounded-lg p-4">
                  <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Precios de Instalación</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-pretty">
              Precios transparentes sin sorpresas
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                title: "Split Básico",
                price: "Incluido",
                description: "Con la compra del equipo",
                features: [
                  "Hasta 18,000 BTU",
                  "Tubería hasta 3m",
                  "1 perforación",
                  "Garantía 2 años",
                ],
              },
              {
                title: "Split Premium",
                price: "$150",
                description: "Instalación adicional",
                features: [
                  "24,000 - 36,000 BTU",
                  "Tubería hasta 5m",
                  "2 perforaciones",
                  "Garantía 3 años",
                ],
                popular: true,
              },
              {
                title: "Cassette/Piso-Techo",
                price: "$350",
                description: "Instalación especializada",
                features: [
                  "Cualquier capacidad",
                  "Instalación compleja",
                  "Múltiples perforaciones",
                  "Garantía 5 años",
                ],
              },
            ].map((plan, index) => (
              <Card key={index} className={plan.popular ? "border-primary border-2" : ""}>
                <CardHeader>
                  {plan.popular && (
                    <Badge className="bg-primary text-primary-foreground mb-2 w-fit">
                      Más Popular
                    </Badge>
                  )}
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="pt-4">
                    <div className="text-primary text-3xl font-bold">{plan.price}</div>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="text-primary h-4 w-4 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link href="/cotizacion">Solicitar</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
