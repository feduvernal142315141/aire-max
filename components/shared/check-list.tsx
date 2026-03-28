import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckListProps {
  items: string[];
  columns?: 1 | 2;
  className?: string;
  size?: "sm" | "md";
}

export function CheckList({
  items,
  columns = 1,
  className,
  size = "md",
}: CheckListProps) {
  return (
    <ul
      className={cn(
        columns === 2 ? "grid md:grid-cols-2 gap-3" : "space-y-3",
        className,
      )}
    >
      {items.map((item, index) => (
        <li
          key={index}
          className={cn(
            "flex items-start gap-3",
            columns === 2 && "p-4 rounded-lg bg-background",
          )}
        >
          <CheckCircle2
            className={cn(
              "text-primary flex-shrink-0 mt-0.5",
              size === "sm" ? "w-4 h-4" : "w-5 h-5",
            )}
          />
          <span className={size === "sm" ? "text-sm" : "text-base"}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
