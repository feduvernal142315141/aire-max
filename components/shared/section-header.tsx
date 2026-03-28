import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const SECTION_HEADER_SIZE = {
  small: "text-2xl md:text-3xl",
  default: "text-[28px] md:text-[38px] lg:text-5xl",
  large: "text-4xl md:text-5xl lg:text-6xl",
} as const;

type SectionHeaderSize = keyof typeof SECTION_HEADER_SIZE;

interface SectionHeaderProps {
  title: string;
  gradientText?: string;
  subtitle?: string;
  badge?: string;
  badgeIcon?: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  align?: "center" | "left";
  size?: SectionHeaderSize;
}

export function SectionHeader({
  title,
  gradientText,
  subtitle,
  badge,
  badgeIcon,
  as: Tag = "h2",
  className,
  align = "center",
  size = "default",
}: SectionHeaderProps) {
  const renderTitle = () => {
    if (!gradientText) return title;

    const parts = title.split(gradientText);

    // gradientText not found as substring — render title plain + gradient appended
    if (parts.length === 1) {
      return (
        <>
          {title} <span className="gradient-text">{gradientText}</span>
        </>
      );
    }

    return (
      <>
        {parts[0]}
        <span className="gradient-text">{gradientText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={cn(
        "space-y-4 md:space-y-6",
        align === "center" && "text-center",
        className,
      )}
    >
      {badge && (
        <Badge className="w-fit mx-auto bg-white/80 backdrop-blur-sm border border-primary/20 text-primary">
          {badgeIcon}
          {badgeIcon ? <span className="ml-2">{badge}</span> : badge}
        </Badge>
      )}
      <Tag className={cn("font-serif font-bold", SECTION_HEADER_SIZE[size])}>
        {renderTitle()}
      </Tag>
      {subtitle && (
        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground leading-relaxed",
            align === "center" && "max-w-3xl mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
