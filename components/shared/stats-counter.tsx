"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { IconResolver } from "./icon-resolver";
import { cn } from "@/lib/utils";

interface StatItem {
  icon: string;
  value: number;
  suffix: string;
  label: string;
}

interface StatsCounterProps {
  stats: StatItem[];
  duration?: number;
  className?: string;
}

export function StatsCounter({
  stats,
  duration = 2000,
  className,
}: StatsCounterProps) {
  const [counts, setCounts] = useState<Record<number, number>>(() =>
    Object.fromEntries(stats.map((_, i) => [i, 0])),
  );

  useEffect(() => {
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const newCounts: Record<number, number> = {};
      stats.forEach((stat, i) => {
        newCounts[i] = Math.min(
          Math.floor((stat.value * step) / steps),
          stat.value,
        );
      });
      setCounts(newCounts);

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [stats, duration]);

  return (
    <div
      className={cn("grid md:grid-cols-2 lg:grid-cols-4 gap-6", className)}
    >
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="bg-white/50 backdrop-blur-lg border border-[rgba(7,156,251,0.08)] shadow-[0_8px_40px_rgba(3,126,204,0.1)] hover:shadow-[0_12px_50px_rgba(3,126,204,0.15)] hover:-translate-y-2 transition-all duration-300 group"
        >
          <CardContent className="pt-8 pb-6 space-y-4 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#079cfb]/10 to-[#00e0ff]/10 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(7,156,251,0.15)] group-hover:shadow-[0_0_30px_rgba(7,156,251,0.3)] transition-all duration-300">
              <IconResolver
                name={stat.icon}
                className="w-8 h-8 text-[#037ecc]"
              />
            </div>
            <div className="text-4xl font-bold text-[#037ecc] group-hover:scale-105 transition-transform duration-300">
              {counts[index] ?? 0}
              {stat.suffix}
            </div>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
