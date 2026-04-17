import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CTAAction {
  text: string
  href: string
  icon?: ReactNode
  variant?: "default" | "secondary" | "outline"
}

interface CTASectionProps {
  title: string
  subtitle?: string
  icon?: ReactNode
  actions: CTAAction[]
  className?: string
}

export function CTASection({ title, subtitle, icon, actions, className }: CTASectionProps) {
  return (
    <section className={cn("bg-white py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">
        <Card className="from-primary to-primary/80 text-primary-foreground relative overflow-hidden border-0 bg-gradient-to-br">
          <div className="bg-grid-white/10 absolute inset-0" />
          <CardContent className="relative space-y-6 py-12 text-center md:py-16">
            {icon && <div className="flex justify-center">{icon}</div>}
            <h2 className="font-serif text-3xl font-bold md:text-4xl">{title}</h2>
            {subtitle && <p className="mx-auto max-w-2xl text-lg opacity-90">{subtitle}</p>}
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  size="lg"
                  variant={action.variant ?? (index === 0 ? "secondary" : "outline")}
                  className={cn(index > 0 && "border-white/20 bg-white/10 hover:bg-white/20")}
                  asChild
                >
                  <Link href={action.href}>
                    {action.icon}
                    {action.text}
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
