import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Phone, Calendar, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MantenimientoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="from-accent/5 via-background to-primary/5 bg-gradient-to-br py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <Badge className="bg-accent text-accent-foreground w-fit">
                Mantenimiento Preventivo
              </Badge>
              <h1 className="font-serif text-4xl font-bold text-balance md:text-5xl">
                Mantén tu Equipo en Óptimas Condiciones
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                El mantenimiento regular extiende la vida útil de tu aire acondicionado, mejora su
                eficiencia y reduce costos de energía.
              </p>
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/cotizacion">
                    <Calendar className="mr-2 h-5 w-5" />
                    Agendar Mantenimiento
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
                src="/technician-maintaining-air-conditioner.jpg"
                alt="Técnico realizando mantenimiento"
                fill
                className="rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Planes de Mantenimiento</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-pretty">
              Elige el plan que mejor se adapte a tus necesidades
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {[
              {
                title: "Plan Básico",
                subtitle: "Mantenimiento Anual",
                price: "79.99",
                period: "por visita",
                description: "Ideal para uso residencial moderado",
                features: [
                  "1 visita al año",
                  "Limpieza de filtros",
                  "Revisión general",
                  "Verificación de gas",
                  "Informe técnico",
                  "10% descuento en repuestos",
                ],
                cta: "Contratar",
              },
              {
                title: "Plan Premium",
                subtitle: "Mantenimiento Semestral",
                price: "139.99",
                period: "por año",
                description: "Recomendado para uso intensivo",
                features: [
                  "2 visitas al año",
                  "Limpieza profunda",
                  "Revisión completa",
                  "Recarga de gas incluida",
                  "Prioridad en emergencias",
                  "20% descuento en repuestos",
                  "Garantía extendida",
                ],
                popular: true,
                cta: "Contratar",
              },
              {
                title: "Plan Empresarial",
                subtitle: "Mantenimiento Trimestral",
                price: "Personalizado",
                period: "según necesidades",
                description: "Para comercios y oficinas",
                features: [
                  "4+ visitas al año",
                  "Mantenimiento preventivo",
                  "Atención prioritaria 24/7",
                  "Recargas incluidas",
                  "Repuestos con descuento",
                  "Contrato personalizado",
                  "Múltiples equipos",
                ],
                cta: "Cotizar",
              },
            ].map((plan, index) => (
              <Card key={index} className={plan.popular ? "border-primary border-2 shadow-lg" : ""}>
                <CardHeader>
                  {plan.popular && (
                    <Badge className="bg-primary text-primary-foreground mb-2 w-fit">
                      <Star className="mr-1 h-3 w-3 fill-current" />
                      Más Popular
                    </Badge>
                  )}
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{plan.subtitle}</p>
                  <div className="pt-4">
                    <div className="flex items-baseline gap-1">
                      {plan.price !== "Personalizado" && (
                        <span className="text-2xl font-bold">$</span>
                      )}
                      <span className="text-primary text-4xl font-bold">{plan.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{plan.period}</p>
                  </div>
                  <p className="pt-2 text-sm">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link href="/cotizacion">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="font-serif text-3xl font-bold md:text-4xl">
              ¿Qué incluye el mantenimiento?
            </h2>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Limpieza Completa",
                items: ["Filtros de aire", "Serpentines", "Drenaje", "Carcasa exterior"],
              },
              {
                title: "Revisión Técnica",
                items: [
                  "Nivel de refrigerante",
                  "Presión del sistema",
                  "Conexiones eléctricas",
                  "Termostato",
                ],
              },
              {
                title: "Optimización",
                items: [
                  "Ajuste de temperatura",
                  "Calibración",
                  "Lubricación",
                  "Pruebas de rendimiento",
                ],
              },
            ].map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="text-primary h-4 w-4 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="font-serif text-3xl font-bold md:text-4xl">
              Beneficios del Mantenimiento Regular
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Ahorro Energético",
                description: "Hasta 30% menos consumo eléctrico",
                stat: "30%",
              },
              {
                title: "Vida Útil",
                description: "Extiende la duración del equipo",
                stat: "+5 años",
              },
              {
                title: "Aire Limpio",
                description: "Mejor calidad del aire interior",
                stat: "100%",
              },
              {
                title: "Menos Averías",
                description: "Previene reparaciones costosas",
                stat: "80%",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="space-y-3 pt-6">
                  <div className="text-primary text-4xl font-bold">{benefit.stat}</div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
