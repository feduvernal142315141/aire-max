import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { IconResolver } from "./icon-resolver"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  features: string[]
  link: string
  color?: string
  className?: string
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
  link,
  color = "from-primary to-primary/80",
  className,
}: ServiceCardProps) {
  return (
    <Card className={cn("group transition-all hover:shadow-xl", className)}>
      <CardHeader>
        <div
          className={cn(
            "mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br transition-transform group-hover:scale-110",
            color,
          )}
        >
          <IconResolver name={icon} className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="text-primary h-4 w-4 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button variant="outline" className="w-full bg-transparent" asChild>
          <Link href={link}>
            Más información
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
