"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { IconResolver } from "./icon-resolver"
import { cn } from "@/lib/utils"

interface StatItem {
  icon: string
  value: number
  suffix: string
  label: string
}

interface StatsCounterProps {
  stats: StatItem[]
  duration?: number
  className?: string
}

export function StatsCounter({ stats, duration = 2000, className }: StatsCounterProps) {
  const [counts, setCounts] = useState<Record<number, number>>(() =>
    Object.fromEntries(stats.map((_, i) => [i, 0])),
  )

  useEffect(() => {
    const steps = 60
    const interval = duration / steps
    let step = 0

    const timer = setInterval(() => {
      step++
      const newCounts: Record<number, number> = {}
      stats.forEach((stat, i) => {
        newCounts[i] = Math.min(Math.floor((stat.value * step) / steps), stat.value)
      })
      setCounts(newCounts)

      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [stats, duration])

  return (
    <div className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-4", className)}>
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="group border border-[rgba(7,156,251,0.08)] bg-white/50 shadow-[0_8px_40px_rgba(3,126,204,0.1)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_50px_rgba(3,126,204,0.15)]"
        >
          <CardContent className="space-y-4 pt-8 pb-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#079cfb]/10 to-[#00e0ff]/10 shadow-[0_0_20px_rgba(7,156,251,0.15)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(7,156,251,0.3)]">
              <IconResolver name={stat.icon} className="h-8 w-8 text-[#037ecc]" />
            </div>
            <div className="text-4xl font-bold text-[#037ecc] transition-transform duration-300 group-hover:scale-105">
              {counts[index] ?? 0}
              {stat.suffix}
            </div>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
