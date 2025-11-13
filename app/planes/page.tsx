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
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f9fcff] via-[#e0f2fe] to-[#f9fcff] gradient-bg-animated" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#079cfb] opacity-[0.06] blur-[100px] rounded-full" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-6 animate-fade-up">
            <Badge className="w-fit mx-auto bg-white/80 backdrop-blur-sm border border-primary/20 text-primary">
              <Shield className="w-4 h-4 mr-2" />
              Planes de Mantenimiento
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
              Mantén tu Equipo en <span className="gradient-text">Óptimas Condiciones</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Elige el plan de mantenimiento que mejor se adapte a tus necesidades y disfruta de un aire acondicionado
              eficiente todo el año
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  plan.popular ? "border-2 border-primary shadow-xl scale-105" : "border-2 border-transparent"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Más Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl font-serif mb-2">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold text-primary">${plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg"
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

          <div className="mt-16 text-center space-y-6">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                <div key={index} className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-white/10" />
            <CardContent className="relative py-12 md:py-16 text-center space-y-6">
              <Sparkles className="w-16 h-16 mx-auto opacity-80" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold">¿Necesitas un plan personalizado?</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Contáctanos y diseñaremos un plan de mantenimiento adaptado a tus necesidades específicas
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
