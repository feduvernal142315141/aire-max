import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, Home, Factory, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "Climatización Oficinas Corporativas",
    category: "Comercial",
    location: "Ciudad de México",
    description: "Instalación de 15 equipos cassette inverter para oficinas de 500m²",
    image: "/lg-cassette-commercial-air-conditioner.jpg",
    results: ["40% reducción en consumo energético", "Temperatura uniforme en todas las áreas", "Sistema centralizado"],
    icon: Building2,
  },
  {
    title: "Residencia Familiar Premium",
    category: "Residencial",
    location: "Monterrey",
    description: "Sistema multi-split para casa de 300m² con 6 zonas independientes",
    image: "/daikin-split-air-conditioner-premium.jpg",
    results: ["Control individual por habitación", "Ahorro del 35% en electricidad", "Instalación en 48 horas"],
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
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f9fcff] via-[#e0f2fe] to-[#f9fcff] gradient-bg-animated" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00e0ff] opacity-[0.06] blur-[100px] rounded-full" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-6 animate-fade-up">
            <Badge className="w-fit mx-auto bg-white/80 backdrop-blur-sm border border-primary/20 text-primary">
              Casos de Éxito
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
              Proyectos que <span className="gradient-text">Transforman Espacios</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Descubre cómo hemos ayudado a empresas y hogares a lograr el confort perfecto
            </p>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-transparent hover:border-primary/30 transition-all duration-300 hover:shadow-2xl group"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-foreground">{project.category}</Badge>
                  </div>

                  <CardContent className="p-8 md:p-10 flex flex-col justify-center space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <project.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-serif font-bold">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">{project.location}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">Resultados</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" className="w-fit bg-transparent group/btn" asChild>
                      <Link href="/contacto">
                        Ver más detalles
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent text-white shadow-lg">
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
