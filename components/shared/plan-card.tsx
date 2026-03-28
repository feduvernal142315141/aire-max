import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PlanCardProps {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
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
  const isNumericPrice = !isNaN(Number(price));

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2",
        popular
          ? "border-2 border-primary shadow-xl scale-105"
          : "border-2 border-transparent",
        className,
      )}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
          Más Popular
        </div>
      )}

      <CardHeader className="text-center pb-8 pt-8">
        <CardTitle className="text-2xl font-serif mb-2">{name}</CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground mb-6">{description}</p>
        )}
        <div className="space-y-2">
          <div className="flex items-baseline justify-center gap-2">
            {isNumericPrice && (
              <span className="text-2xl font-bold">$</span>
            )}
            <span className="text-5xl font-bold text-primary">{price}</span>
            {period && (
              <span className="text-muted-foreground">/{period}</span>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={cn(
            "w-full",
            popular
              ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg"
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
  );
}
