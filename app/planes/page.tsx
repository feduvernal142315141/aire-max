import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Phone, Sparkles, Shield, Clock, Wrench } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Plan Básico",
    price: "49.99",
    period: "mes",
    description: "Ideal para hogares con un equipo de aire acondicionado",
    features: [
      "2 visitas al año",
      "Limpieza de filtros",
      "Revisión de gas refrigerante",
      "Inspección eléctrica básica",
      "10% descuento en repuestos",
      "Soporte telefónico",
    ],
    popular: false,
  },
  {
    name: "Plan Estándar",
    price: "89.99",
    period: "mes",
    description: "Perfecto para hogares con múltiples equipos",
    features: [
      "4 visitas al año",
      "Limpieza profunda de serpentines",
      "Recarga de gas incluida (1 vez/año)",
      "Revisión eléctrica completa",
      "20% descuento en repuestos",
      "Prioridad en emergencias",
      "Soporte 24/7",
    ],
    popular: true,
  },
  {
    name: "Plan Premium",
    price: "149.99",
    period: "mes",
    description: "Solución completa para negocios y oficinas",
    features: [
      "Visitas ilimitadas",
      "Mantenimiento preventivo mensual",
      "Recarga de gas ilimitada",
      "Reparaciones incluidas",
      "30% descuento en repuestos",
      "Respuesta en menos de 4 horas",
      "Soporte técnico dedicado 24/7",
      "Reemplazo temporal en caso de falla",
    ],
    popular: false,
  },
]

export default function PlanesPage() {
  return (
    <div className="flex flex-col pt-16 md:pt-20">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="gradient-bg-animated absolute inset-0 bg-gradient-to-br from-[#f9fcff] via-[#e0f2fe] to-[#f9fcff]" />
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-[#079cfb] opacity-[0.06] blur-[100px]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="animate-fade-up mb-16 space-y-6 text-center">
            <Badge className="border-primary/20 text-primary mx-auto w-fit border bg-white/80 backdrop-blur-sm">
              <Shield className="mr-2 h-4 w-4" />
              Planes de Mantenimiento
            </Badge>
            <h1 className="font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Mantén tu Equipo en <span className="gradient-text">Óptimas Condiciones</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
              Elige el plan de mantenimiento que mejor se adapte a tus necesidades y disfruta de un
              aire acondicionado eficiente todo el año
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular
                    ? "border-primary scale-105 border-2 shadow-xl"
                    : "border-2 border-transparent"
                }`}
              >
                {plan.popular && (
                  <div className="from-primary to-accent absolute top-0 right-0 rounded-bl-lg bg-gradient-to-r px-4 py-1 text-sm font-semibold text-white">
                    Más Popular
                  </div>
                )}
                <CardHeader className="pt-8 pb-8 text-center">
                  <CardTitle className="mb-2 font-serif text-2xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground mb-6 text-sm">{plan.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-primary text-5xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "from-primary to-accent hover:from-primary/90 hover:to-accent/90 bg-gradient-to-r text-white shadow-lg"
                        : "bg-transparent"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href="/contacto">Contratar Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 space-y-6 text-center">
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
              {[
                {
                  icon: Clock,
                  title: "Respuesta Rápida",
                  description: "Atención prioritaria para clientes con plan",
                },
                {
                  icon: Shield,
                  title: "Garantía Extendida",
                  description: "Cobertura adicional en todos los servicios",
                },
                {
                  icon: Wrench,
                  title: "Técnicos Certificados",
                  description: "Personal especializado y capacitado",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex flex-col items-center space-y-3 text-center">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-xl">
                    <benefit.icon className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="from-primary to-primary/80 text-primary-foreground relative overflow-hidden border-0 bg-gradient-to-br">
            <div className="bg-grid-white/10 absolute inset-0" />
            <CardContent className="relative space-y-6 py-12 text-center md:py-16">
              <Sparkles className="mx-auto h-16 w-16 opacity-80" />
              <h2 className="font-serif text-3xl font-bold md:text-4xl">
                ¿Necesitas un plan personalizado?
              </h2>
              <p className="mx-auto max-w-2xl text-lg opacity-90">
                Contáctanos y diseñaremos un plan de mantenimiento adaptado a tus necesidades
                específicas
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contacto">
                  <Phone className="mr-2 h-5 w-5" />
                  Contactar Ahora
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
