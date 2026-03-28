import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAAction {
  text: string;
  href: string;
  icon?: ReactNode;
  variant?: "default" | "secondary" | "outline";
}

interface CTASectionProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  actions: CTAAction[];
  className?: string;
}

export function CTASection({
  title,
  subtitle,
  icon,
  actions,
  className,
}: CTASectionProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-white", className)}>
      <div className="container mx-auto px-4">
        <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-white/10" />
          <CardContent className="relative py-12 md:py-16 text-center space-y-6">
            {icon && <div className="flex justify-center">{icon}</div>}
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  size="lg"
                  variant={
                    action.variant ?? (index === 0 ? "secondary" : "outline")
                  }
                  className={cn(
                    index > 0 &&
                      "bg-white/10 hover:bg-white/20 border-white/20",
                  )}
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
  );
}
