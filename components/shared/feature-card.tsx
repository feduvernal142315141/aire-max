import { cn } from "@/lib/utils";
import { IconResolver } from "./icon-resolver";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
  variant?: "default" | "compact";
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
        "group relative bg-white/70 backdrop-blur-lg border border-[#079cfb]/8 rounded-2xl shadow-[0_4px_40px_rgba(7,156,251,0.05)] hover:shadow-[0_8px_50px_rgba(7,156,251,0.12)] transition-all duration-500 hover:-translate-y-2",
        variant === "default" ? "p-8" : "p-6",
        className,
      )}
    >
      {/* Hover glow */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#00baff] opacity-0 group-hover:opacity-20 blur-3xl rounded-full transition-opacity duration-500" />

      {/* Icon */}
      <div className={cn("relative", variant === "default" ? "mb-6" : "mb-4")}>
        <div
          className={cn(
            "rounded-full bg-[#079cfb]/8 backdrop-blur-sm border border-white/60 flex items-center justify-center shadow-[0_0_20px_rgba(7,156,251,0.2)] group-hover:scale-110 transition-transform duration-300",
            variant === "default" ? "w-[60px] h-[60px]" : "w-12 h-12",
          )}
        >
          <IconResolver
            name={icon}
            className={cn(
              "text-[#037ecc]",
              variant === "default" ? "w-7 h-7" : "w-6 h-6",
            )}
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
            "text-[#475569] leading-relaxed",
            variant === "default" ? "text-[15px]" : "text-sm",
          )}
        >
          {description}
        </p>
      </div>

      {/* Hover border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#079cfb]/20 transition-colors duration-500" />
    </div>
  );
}
