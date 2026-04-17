import { cn } from "@/lib/utils"
import { IconResolver } from "./icon-resolver"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  className?: string
  variant?: "default" | "compact"
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  variant = "default",
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-[#079cfb]/8 bg-white/70 shadow-[0_4px_40px_rgba(7,156,251,0.05)] backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_50px_rgba(7,156,251,0.12)]",
        variant === "default" ? "p-8" : "p-6",
        className,
      )}
    >
      {/* Hover glow */}
      <div className="absolute top-0 left-0 h-32 w-32 rounded-full bg-[#00baff] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />

      {/* Icon */}
      <div className={cn("relative", variant === "default" ? "mb-6" : "mb-4")}>
        <div
          className={cn(
            "flex items-center justify-center rounded-full border border-white/60 bg-[#079cfb]/8 shadow-[0_0_20px_rgba(7,156,251,0.2)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-110",
            variant === "default" ? "h-[60px] w-[60px]" : "h-12 w-12",
          )}
        >
          <IconResolver
            name={icon}
            className={cn("text-[#037ecc]", variant === "default" ? "h-7 w-7" : "h-6 w-6")}
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3
          className={cn(
            "font-semibold text-[#0f172a]",
            variant === "default" ? "text-[20px]" : "text-base",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "leading-relaxed text-[#475569]",
            variant === "default" ? "text-[15px]" : "text-sm",
          )}
        >
          {description}
        </p>
      </div>

      {/* Hover border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-500 group-hover:border-[#079cfb]/20" />
    </div>
  )
}
