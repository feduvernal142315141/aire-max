import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface PlanCardProps {
  name: string
  price: string
  period?: string
  description?: string
  features: string[]
  popular?: boolean
  ctaText?: string
  ctaLink?: string
  className?: string
}

export function PlanCard({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  ctaText = "Contratar Plan",
  ctaLink = "/contacto",
  className,
}: PlanCardProps) {
  const isNumericPrice = !isNaN(Number(price))

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl",
        popular ? "border-primary scale-105 border-2 shadow-xl" : "border-2 border-transparent",
        className,
      )}
    >
      {popular && (
        <div className="from-primary to-accent absolute top-0 right-0 rounded-bl-lg bg-gradient-to-r px-4 py-1 text-sm font-semibold text-white">
          Más Popular
        </div>
      )}

      <CardHeader className="pt-8 pb-8 text-center">
        <CardTitle className="mb-2 font-serif text-2xl">{name}</CardTitle>
        {description && <p className="text-muted-foreground mb-6 text-sm">{description}</p>}
        <div className="space-y-2">
          <div className="flex items-baseline justify-center gap-2">
            {isNumericPrice && <span className="text-2xl font-bold">$</span>}
            <span className="text-primary text-5xl font-bold">{price}</span>
            {period && <span className="text-muted-foreground">/{period}</span>}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={cn(
            "w-full",
            popular
              ? "from-primary to-accent hover:from-primary/90 hover:to-accent/90 bg-gradient-to-r text-white shadow-lg"
              : "bg-transparent",
          )}
          variant={popular ? "default" : "outline"}
          size="lg"
          asChild
        >
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
