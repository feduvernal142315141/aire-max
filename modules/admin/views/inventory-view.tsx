import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { stockHealthBadge } from "@/modules/admin/lib/admin-formatters"
import type { Product } from "@/types"

interface InventoryViewProps {
  products: Product[]
  onAdjustStock: (id: string, delta: number) => void
}

export function InventoryView({ products, onAdjustStock }: InventoryViewProps) {
  return (
    <Card className="rounded-2xl border border-white/20 bg-white/70 shadow-lg backdrop-blur">
      <CardHeader>
        <CardTitle>Inventario</CardTitle>
        <CardDescription>Alertas por salud de stock + ajustes rápidos.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col gap-2 rounded-xl border p-3 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="text-muted-foreground text-sm">Stock actual: {product.stock ?? 0}</p>
            </div>
            <div className="flex items-center gap-2">
              {stockHealthBadge(product.stock ?? 0)}
              <Button variant="outline" size="sm" onClick={() => onAdjustStock(product.id, -1)}>
                -
              </Button>
              <Button variant="outline" size="sm" onClick={() => onAdjustStock(product.id, 1)}>
                +
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
