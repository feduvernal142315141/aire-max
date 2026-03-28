import { cn } from "@/lib/utils";

const PRICE_SIZE = {
  sm: { price: "text-lg", original: "text-sm" },
  md: { price: "text-2xl", original: "text-base" },
  lg: { price: "text-4xl", original: "text-xl" },
} as const;

type PriceSize = keyof typeof PRICE_SIZE;

interface PriceDisplayProps {
  price: number;
  originalPrice?: number;
  currency?: string;
  size?: PriceSize;
  className?: string;
  suffix?: string;
}

export function PriceDisplay({
  price,
  originalPrice,
  currency = "$",
  size = "md",
  className,
  suffix,
}: PriceDisplayProps) {
  return (
    <div className={cn("flex items-baseline gap-2 flex-wrap", className)}>
      {originalPrice && (
        <span
          className={cn(
            "line-through text-muted-foreground",
            PRICE_SIZE[size].original,
          )}
        >
          {currency}
          {originalPrice.toLocaleString("es-ES")}
        </span>
      )}
      <span className={cn("font-bold text-primary", PRICE_SIZE[size].price)}>
        {currency}
        {price.toLocaleString("es-ES")}
      </span>
      {suffix && (
        <span className="text-muted-foreground text-sm">{suffix}</span>
      )}
    </div>
  );
}
