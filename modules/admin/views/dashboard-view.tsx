import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { formatCurrency } from "@/modules/admin/lib/admin-formatters"
import type { Product } from "@/types"

interface DashboardViewProps {
  dashboardData: {
    todaySales: number
    soldToday: number
    noStock: number
    top: Product[]
  }
}

export function DashboardView({ dashboardData }: DashboardViewProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card className="border-border dark:bg-card/70 rounded-2xl border bg-white/70 shadow-lg backdrop-blur dark:shadow-none">
          <CardHeader>
            <CardDescription>💰 Ventas hoy</CardDescription>
            <CardTitle>{formatCurrency(dashboardData.todaySales)}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-border dark:bg-card/70 rounded-2xl border bg-white/70 shadow-lg backdrop-blur dark:shadow-none">
          <CardHeader>
            <CardDescription>📦 Productos vendidos</CardDescription>
            <CardTitle>{dashboardData.soldToday}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-border dark:bg-card/70 rounded-2xl border bg-white/70 shadow-lg backdrop-blur dark:shadow-none">
          <CardHeader>
            <CardDescription>📉 Sin stock</CardDescription>
            <CardTitle>{dashboardData.noStock}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="border-border dark:bg-card/70 rounded-2xl border bg-white/70 shadow-lg backdrop-blur dark:shadow-none">
          <CardHeader>
            <CardDescription>🔥 Top producto</CardDescription>
            <CardTitle className="text-base">{dashboardData.top[0]?.name ?? "-"}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <Card className="border-border dark:bg-card/70 rounded-2xl border bg-white/70 shadow-lg backdrop-blur dark:shadow-none">
        <CardHeader>
          <CardTitle>Ventas por día (mock)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[48, 62, 39, 77, 69, 81, 54].map((value, index) => (
            <div key={index} className="space-y-1">
              <div className="text-muted-foreground flex items-center justify-between text-xs">
                <span>Día {index + 1}</span>
                <span>{value}%</span>
              </div>
              <div className="bg-muted h-2 overflow-hidden rounded-full">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
