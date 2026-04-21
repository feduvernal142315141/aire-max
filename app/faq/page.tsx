import type { Metadata } from "next"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Aire-Max — Todo sobre Aires Acondicionados",
  description:
    "Resolvemos tus dudas sobre compra, instalación, mantenimiento y garantías de aires acondicionados. Guías de BTU, eficiencia energética y más.",
  keywords:
    "FAQ aire acondicionado, preguntas frecuentes AC, BTU calculadora, eficiencia energética HVAC",
  openGraph: {
    title: "FAQ | Aire-Max",
    description:
      "Todas las respuestas sobre aires acondicionados: cómo elegir el BTU correcto, tiempos de instalación, garantías y más.",
    type: "website",
  },
}
import {
  MessageCircle,
  HelpCircle,
  ShoppingCart,
  Wrench,
  Settings,
  Shield,
  Snowflake,
} from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    category: "Compra y Selección",
    icon: ShoppingCart,
    questions: [
      {
        q: "¿Cómo sé qué capacidad de BTU necesito?",
        a: "La capacidad necesaria depende del tamaño del espacio. Como regla general: 9,000 BTU para 12-18m², 12,000 BTU para 18-25m², 18,000 BTU para 25-35m², y 24,000 BTU para 35-45m². Nuestros asesores pueden ayudarte con un cálculo preciso considerando altura de techo, aislamiento y exposición solar.",
      },
      {
        q: "¿Qué diferencia hay entre un aire inverter y uno convencional?",
        a: "Los aires inverter ajustan continuamente su velocidad de compresor para mantener la temperatura, consumiendo hasta 40% menos energía. Los convencionales se encienden y apagan completamente, consumiendo más electricidad y generando fluctuaciones de temperatura.",
      },
      {
        q: "¿Cuánto tiempo dura un aire acondicionado?",
        a: "Con mantenimiento adecuado, un aire acondicionado de calidad puede durar entre 10-15 años. Los equipos inverter tienden a tener mayor vida útil debido a su funcionamiento más eficiente.",
      },
    ],
  },
  {
    category: "Instalación",
    icon: Wrench,
    questions: [
      {
        q: "¿Cuánto tiempo toma la instalación?",
        a: "Una instalación estándar de un equipo split toma entre 3-5 horas. Instalaciones más complejas o múltiples equipos pueden requerir 1-2 días. Siempre coordinamos horarios convenientes para ti.",
      },
      {
        q: "¿Qué incluye el servicio de instalación?",
        a: "Incluye: montaje de unidades interior y exterior, tubería de cobre hasta 3 metros, cableado eléctrico, perforación de muro, soportes, pruebas de funcionamiento y limpieza del área. Tubería adicional tiene costo extra.",
      },
      {
        q: "¿Necesito preparar algo antes de la instalación?",
        a: "Asegúrate de tener acceso libre al área de instalación, una toma eléctrica cercana (220V para equipos grandes), y espacio exterior para la unidad condensadora. Nuestro técnico evaluará el sitio antes de comenzar.",
      },
    ],
  },
  {
    category: "Mantenimiento",
    icon: Settings,
    questions: [
      {
        q: "¿Con qué frecuencia debo dar mantenimiento?",
        a: "Recomendamos mantenimiento profesional cada 6 meses para uso residencial y cada 3 meses para uso comercial intensivo. La limpieza de filtros debe hacerse mensualmente.",
      },
      {
        q: "¿Qué incluye el mantenimiento preventivo?",
        a: "Limpieza de filtros y serpentines, revisión de niveles de gas refrigerante, inspección eléctrica, lubricación de componentes, verificación de drenaje, medición de temperaturas y pruebas de funcionamiento.",
      },
      {
        q: "¿Qué pasa si no le doy mantenimiento?",
        a: "Sin mantenimiento, el equipo pierde eficiencia (hasta 30% más consumo), acumula bacterias y hongos, puede presentar fugas de agua, y su vida útil se reduce significativamente. También pierdes la garantía del fabricante.",
      },
    ],
  },
  {
    category: "Garantía y Soporte",
    icon: Shield,
    questions: [
      {
        q: "¿Qué cubre la garantía?",
        a: "Los equipos nuevos incluyen garantía del fabricante (1-5 años según marca) que cubre defectos de fábrica. Nuestra garantía de instalación (1 año) cubre mano de obra y materiales utilizados. No cubre daños por mal uso o falta de mantenimiento.",
      },
      {
        q: "¿Qué tan rápido responden a emergencias?",
        a: "Clientes con plan de mantenimiento tienen respuesta en menos de 24 horas. Servicios de emergencia sin plan: 48-72 horas según disponibilidad. Ofrecemos soporte telefónico inmediato para diagnóstico inicial.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="flex flex-col pt-16 md:pt-20">
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="bg-section absolute inset-0" />

        <div className="animate-breathe bg-primary absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.06] blur-[120px] dark:opacity-[0.10]" />

        <div className="absolute top-20 left-10 opacity-[0.04] dark:opacity-[0.06]">
          <Snowflake className="text-primary h-24 w-24" />
        </div>
        <div className="absolute right-10 bottom-20 opacity-[0.04] dark:opacity-[0.06]">
          <Snowflake className="text-primary h-32 w-32" />
        </div>

        <div className="relative z-10 container mx-auto px-5 md:px-4">
          <div className="mb-12 space-y-4 text-center md:mb-16 md:space-y-6">
            <Badge className="animate-fade-down border-primary/20 bg-primary/8 text-primary mx-auto w-fit rounded-full px-3 py-1 text-sm font-medium dark:bg-sky-500/15 dark:text-sky-400">
              <HelpCircle className="mr-2 h-4 w-4" />
              Preguntas Frecuentes
            </Badge>

            <h1 className="animate-fade-down font-serif text-3xl font-bold delay-100 md:text-5xl lg:text-6xl">
              <span className="text-foreground">¿Tienes </span>
              <span className="relative inline-block">
                <span className="gradient-text">Dudas?</span>
                <span className="animate-underline-sweep from-primary absolute -bottom-2 left-1/2 h-1 -translate-x-1/2 rounded-full bg-gradient-to-r to-[#00baff]" />
              </span>
            </h1>

            <p className="animate-fade-down text-muted-foreground mx-auto max-w-[520px] text-base leading-relaxed delay-200 md:text-lg">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y productos
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6 md:space-y-10">
            {faqs.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <div
                  key={categoryIndex}
                  className="animate-fade-up"
                  style={{ animationDelay: `${categoryIndex * 100}ms` }}
                >
                  <Card className="border-border bg-card/70 dark:bg-card/80 rounded-2xl border shadow-[var(--elevation-1)] backdrop-blur-lg transition-all duration-300 hover:shadow-[var(--elevation-2)]">
                    <CardContent className="p-5 md:p-8">
                      <div className="mb-6 flex items-center gap-3">
                        <div className="bg-primary/10 dark:bg-primary/15 rounded-lg p-2">
                          <Icon className="text-primary h-5 w-5 dark:text-sky-400" />
                        </div>
                        <h2 className="text-foreground text-xl font-semibold md:text-2xl">
                          {category.category}
                        </h2>
                      </div>

                      <Accordion type="single" collapsible className="space-y-3">
                        {category.questions.map((faq, faqIndex) => (
                          <AccordionItem
                            key={faqIndex}
                            value={`item-${categoryIndex}-${faqIndex}`}
                            className="border-border border-b last:border-0"
                          >
                            <AccordionTrigger className="hover:text-primary -mx-2 rounded-lg px-2 py-4 text-left text-sm transition-colors md:text-base dark:hover:text-sky-400">
                              {faq.q}
                            </AccordionTrigger>

                            <AccordionContent className="bg-muted/20 text-muted-foreground dark:bg-muted/10 rounded-lg px-2 pt-2 pb-4 text-sm leading-relaxed">
                              {faq.a}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>

                  {categoryIndex < faqs.length - 1 && (
                    <div className="via-border my-6 h-px bg-gradient-to-r from-transparent to-transparent md:my-10" />
                  )}
                </div>
              )
            })}
          </div>

          <div className="animate-fade-up mt-12 text-center md:mt-16">
            <Card className="border-border bg-card/80 dark:bg-card/90 mx-auto max-w-2xl rounded-3xl border shadow-[var(--elevation-2)] backdrop-blur-sm">
              <CardContent className="space-y-5 p-6 md:p-10">
                <div className="bg-primary/10 dark:bg-primary/15 mx-auto flex h-16 w-16 items-center justify-center rounded-full shadow-[0_0_20px_rgba(7,156,251,0.15)]">
                  <MessageCircle className="text-primary h-8 w-8 dark:text-sky-400" />
                </div>

                <h3 className="text-foreground font-serif text-2xl font-bold md:text-3xl">
                  ¿No encontraste tu respuesta?
                </h3>

                <p className="text-muted-foreground mx-auto max-w-md text-base md:text-lg">
                  Nuestro equipo está disponible todos los días para ayudarte con cualquier consulta
                </p>

                <Button
                  size="lg"
                  asChild
                  className="from-primary rounded-xl bg-gradient-to-r to-[#00baff] text-white shadow-[0_6px_20px_rgba(7,156,251,0.25)] transition-all hover:shadow-[0_8px_30px_rgba(7,156,251,0.35)] hover:brightness-105 dark:from-sky-500 dark:to-cyan-400"
                >
                  <Link href="/contacto">Contactar Soporte</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
