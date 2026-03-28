import { useEffect, useState } from "react"

interface AnimatedStats {
  years: number
  clients: number
  satisfaction: number
  equipment: number
}

const DEFAULT_TARGETS: AnimatedStats = {
  years: 15,
  clients: 5000,
  satisfaction: 98,
  equipment: 10000,
}

const INITIAL_STATS: AnimatedStats = {
  years: 0,
  clients: 0,
  satisfaction: 0,
  equipment: 0,
}

interface UseAnimatedStatsOptions {
  targets?: AnimatedStats
  duration?: number
  steps?: number
}

export function useAnimatedStats(options: UseAnimatedStatsOptions = {}) {
  const { targets = DEFAULT_TARGETS, duration = 2000, steps = 60 } = options
  const [stats, setStats] = useState<AnimatedStats>(INITIAL_STATS)

  useEffect(() => {
    const interval = duration / steps
    let step = 0

    const timer = window.setInterval(() => {
      step += 1

      setStats({
        years: Math.min(Math.floor((targets.years * step) / steps), targets.years),
        clients: Math.min(Math.floor((targets.clients * step) / steps), targets.clients),
        satisfaction: Math.min(Math.floor((targets.satisfaction * step) / steps), targets.satisfaction),
        equipment: Math.min(Math.floor((targets.equipment * step) / steps), targets.equipment),
      })

      if (step >= steps) {
        window.clearInterval(timer)
      }
    }, interval)

    return () => window.clearInterval(timer)
  }, [duration, steps, targets])

  return stats
}
