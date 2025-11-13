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
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="w-fit">Instalación Profesional</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-balance">
                Instalación Certificada con Garantía
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Nuestros técnicos certificados instalan tu aire acondicionado siguiendo las mejores prácticas y normas
                de seguridad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Proceso de Instalación</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Un proceso simple y profesional en 4 pasos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Evaluación",
                description: "Visitamos tu espacio para evaluar las necesidades y determinar la mejor ubicación.",
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
                <CardContent className="pt-6 space-y-4">
                  <div className="text-4xl font-bold text-primary/20">{item.step}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">¿Qué incluye la instalación?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
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
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Precios de Instalación</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Precios transparentes sin sorpresas
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Split Básico",
                price: "Incluido",
                description: "Con la compra del equipo",
                features: ["Hasta 18,000 BTU", "Tubería hasta 3m", "1 perforación", "Garantía 2 años"],
              },
              {
                title: "Split Premium",
                price: "$150",
                description: "Instalación adicional",
                features: ["24,000 - 36,000 BTU", "Tubería hasta 5m", "2 perforaciones", "Garantía 3 años"],
                popular: true,
              },
              {
                title: "Cassette/Piso-Techo",
                price: "$350",
                description: "Instalación especializada",
                features: ["Cualquier capacidad", "Instalación compleja", "Múltiples perforaciones", "Garantía 5 años"],
              },
            ].map((plan, index) => (
              <Card key={index} className={plan.popular ? "border-primary border-2" : ""}>
                <CardHeader>
                  {plan.popular && <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Más Popular</Badge>}
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="pt-4">
                    <div className="text-3xl font-bold text-primary">{plan.price}</div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
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
