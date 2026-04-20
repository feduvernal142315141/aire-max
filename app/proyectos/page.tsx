import type { Metadata } from "next"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, Home, Factory, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Proyectos | Aire-Max — Casos de Éxito en Climatización",
  description:
    "Conoce nuestros proyectos de instalación HVAC: oficinas corporativas, residencias premium e instalaciones industriales. Resultados reales con ahorro energético comprobado.",
  keywords: "proyectos climatización, instalación AC corporativa, HVAC residencial, casos de éxito aire acondicionado",
  openGraph: {
    title: "Proyectos | Aire-Max",
    description:
      "Portafolio de instalaciones HVAC en toda la República Mexicana. Comercial, residencial e industrial.",
    type: "website",
  },
}

const projects = [
  {
    title: "Climatización Oficinas Corporativas",
    category: "Comercial",
    location: "Ciudad de México",
    description: "Instalación de 15 equipos cassette inverter para oficinas de 500m²",
    image: "/lg-cassette-commercial-air-conditioner.jpg",
    results: [
      "40% reducción en consumo energético",
      "Temperatura uniforme en todas las áreas",
      "Sistema centralizado",
    ],
    icon: Building2,
  },
  {
    title: "Residencia Familiar Premium",
    category: "Residencial",
    location: "Monterrey",
    description: "Sistema multi-split para casa de 300m² con 6 zonas independientes",
    image: "/daikin-split-air-conditioner-premium.jpg",
    results: [
      "Control individual por habitación",
      "Ahorro del 35% en electricidad",
      "Instalación en 48 horas",
    ],
    icon: Home,
  },
  {
    title: "Planta Industrial",
    category: "Industrial",
    location: "Guadalajara",
    description: "Climatización de nave industrial de 1000m² con equipos de alta capacidad",
    image: "/carrier-cassette-air-conditioner.jpg",
    results: ["Ambiente controlado 24/7", "Mantenimiento preventivo incluido", "ROI en 18 meses"],
    icon: Factory,
  },
]

export default function ProyectosPage() {
  return (
    <div className="flex flex-col pt-16 md:pt-20">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="gradient-bg-animated absolute inset-0 bg-gradient-to-br from-[#f9fcff] via-[#e0f2fe] to-[#f9fcff]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#00e0ff] opacity-[0.06] blur-[100px]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="animate-fade-up mb-16 space-y-6 text-center">
            <Badge className="border-primary/20 text-primary mx-auto w-fit border bg-white/80 backdrop-blur-sm">
              Casos de Éxito
            </Badge>
            <h1 className="font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Proyectos que <span className="gradient-text">Transforman Espacios</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
              Descubre cómo hemos ayudado a empresas y hogares a lograr el confort perfecto
            </p>
          </div>

          <div className="mx-auto max-w-6xl space-y-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:border-primary/30 group overflow-hidden border-2 border-transparent transition-all duration-300 hover:shadow-2xl"
              >
                <div className="grid gap-0 md:grid-cols-2">
                  <div className="relative h-64 overflow-hidden md:h-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge className="text-foreground absolute top-4 left-4 bg-white/90">
                      {project.category}
                    </Badge>
                  </div>

                  <CardContent className="flex flex-col justify-center space-y-6 p-8 md:p-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-xl">
                          <project.icon className="text-primary h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-serif text-2xl font-bold">{project.title}</h3>
                          <p className="text-muted-foreground text-sm">{project.location}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-primary text-sm font-semibold tracking-wide uppercase">
                        Resultados
                      </h4>
                      <ul className="space-y-2">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="bg-primary h-1.5 w-1.5 rounded-full" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" className="group/btn w-fit bg-transparent" asChild>
                      <Link href="/contacto">
                        Ver más detalles
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              asChild
              className="from-primary to-accent bg-gradient-to-r text-white shadow-lg"
            >
              <Link href="/contacto">
                Solicita tu Proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
