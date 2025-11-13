import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Snowflake, Wind, Droplets, Moon, Leaf, Wifi, Gauge } from "lucide-react"
import type { Product } from "@/lib/products"

interface ProductFeaturesProps {
  product: Product
}

export function ProductFeatures({ product }: ProductFeaturesProps) {
  const features = [
    {
      icon: Snowflake,
      title: "Enfriamiento Rápido",
      description: "Alcanza la temperatura deseada en minutos gracias a su potente compresor.",
    },
    {
      icon: Wind,
      title: "Distribución Uniforme",
      description: "Sistema de flujo de aire optimizado para climatización homogénea.",
    },
    {
      icon: Droplets,
      title: "Deshumidificación",
      description: "Elimina el exceso de humedad para mayor confort.",
    },
    {
      icon: Moon,
      title: "Modo Nocturno",
      description: "Funcionamiento silencioso y ajuste automático de temperatura.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Refrigerante ecológico y bajo consumo energético.",
    },
    {
      icon: Gauge,
      title: "Alta Eficiencia",
      description: `Clasificación ${product.energyRating} para máximo ahorro en tu factura.`,
    },
  ]

  if (product.wifi) {
    features.push({
      icon: Wifi,
      title: "Control Inteligente",
      description: "Controla tu aire desde cualquier lugar con tu smartphone.",
    })
  }

  return (
    <Card className="mb-12">
      <CardHeader>
        <CardTitle>Características y Beneficios</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t">
          <h4 className="font-semibold mb-4">Incluye:</h4>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Instalación profesional certificada",
              "Garantía extendida de fábrica",
              "Kit de instalación completo",
              "Control remoto",
              "Manual de usuario en español",
              "Soporte técnico 24/7",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
