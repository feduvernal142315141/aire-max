import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
      <section className="relative overflow-hidden bg-[#f3f9ff] py-10 md:py-16">
        <div className="bg-gradient-radial absolute inset-0 from-[#e8f6ff] via-white to-[#f8fcff]" />

        <div className="animate-breathe absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#079cfb] opacity-[0.06] blur-[120px]" />

        <div className="absolute top-20 left-10 opacity-5">
          <Snowflake className="h-24 w-24 text-[#037ecc]" />
        </div>
        <div className="absolute right-10 bottom-20 opacity-5">
          <Snowflake className="h-32 w-32 text-[#037ecc]" />
        </div>

        <div className="relative z-10 container mx-auto px-5 md:px-4">
          <div className="mb-12 space-y-4 text-center md:mb-16 md:space-y-6">
            <Badge className="animate-fade-down mx-auto w-fit rounded-full border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              <HelpCircle className="mr-2 h-4 w-4" />
              Preguntas Frecuentes
            </Badge>

            <h1 className="animate-fade-down font-serif text-3xl font-bold delay-100 md:text-5xl lg:text-6xl">
              <span className="text-[#1e2b39]">¿Tienes </span>
              <span className="relative inline-block">
                <span className="gradient-text">Dudas?</span>
                <span className="animate-underline-sweep absolute -bottom-2 left-1/2 h-1 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#037ecc] to-[#00baff]" />
              </span>
            </h1>

            <p className="animate-fade-down mx-auto max-w-[520px] text-base leading-relaxed text-[#5f6b7a] delay-200 md:text-lg">
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
                  <Card className="rounded-2xl border border-[#e6f3fb] bg-white/70 shadow-[0_8px_30px_rgba(3,126,204,0.08)] backdrop-blur-lg transition-all duration-300 hover:shadow-[0_12px_40px_rgba(3,126,204,0.12)]">
                    <CardContent className="p-5 md:p-8">
                      <div className="mb-6 flex items-center gap-3">
                        <div className="rounded-lg bg-[#037ecc]/10 p-2">
                          <Icon className="h-5 w-5 text-[#037ecc]" />
                        </div>
                        <h2 className="relative text-xl font-semibold text-[#037ecc] md:text-2xl">
                          {category.category}
                          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#037ecc] to-[#00baff] transition-all duration-300 group-hover:w-full" />
                        </h2>
                      </div>

                      <Accordion type="single" collapsible className="space-y-3">
                        {category.questions.map((faq, faqIndex) => (
                          <AccordionItem
                            key={faqIndex}
                            value={`item-${categoryIndex}-${faqIndex}`}
                            className="group border-b border-[#e6f3fb] last:border-0"
                          >
                            <AccordionTrigger className="-mx-2 rounded-lg px-2 py-4 text-left text-[15px] transition-colors hover:text-[#037ecc] hover:shadow-[0_0_20px_rgba(7,156,251,0.08)] md:text-base">
                              {faq.q}
                            </AccordionTrigger>

                            <AccordionContent className="animate-fade-down rounded-lg bg-gradient-to-b from-[#f9fcff] to-[#ffffff] px-2 pt-2 pb-4 text-[15px] leading-relaxed text-[#4a5568]">
                              {faq.a}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>

                  {categoryIndex < faqs.length - 1 && (
                    <div className="my-6 h-px bg-gradient-to-r from-transparent via-blue-200/40 to-transparent md:my-10" />
                  )}
                </div>
              )
            })}
          </div>

          <div className="animate-fade-up mt-12 text-center md:mt-16">
            <Card className="bg-gradient-radial mx-auto max-w-2xl rounded-3xl border border-[#d4edff]/40 from-[#eaf7ff] via-[#ffffff] to-[#f8fcff] shadow-[0_12px_40px_rgba(3,126,204,0.1)]">
              <CardContent className="space-y-5 p-6 md:p-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#037ecc]/10 shadow-[0_0_20px_rgba(7,156,251,0.15)]">
                  <MessageCircle className="h-8 w-8 text-[#037ecc]" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#002c5f] md:text-3xl">
                  ¿No encontraste tu respuesta?
                </h3>

                <p className="mx-auto max-w-md text-base text-[#5f6b7a] md:text-lg">
                  Nuestro equipo está disponible todos los días para ayudarte con cualquier consulta
                </p>

                <Button
                  size="lg"
                  asChild
                  className="rounded-full bg-gradient-to-r from-[#037ecc] to-[#00baff] px-6 py-3 text-white shadow-[0_6px_20px_rgba(7,156,251,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(7,156,251,0.35)]"
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
