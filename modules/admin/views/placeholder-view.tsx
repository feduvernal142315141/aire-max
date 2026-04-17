import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { AdminSection } from "@/modules/admin/types"

interface PlaceholderViewProps {
  section: AdminSection
}

export function PlaceholderView({ section }: PlaceholderViewProps) {
  return (
    <Card className="rounded-2xl border border-white/20 bg-white/70 shadow-lg backdrop-blur">
      <CardHeader>
        <CardTitle className="capitalize">{section}</CardTitle>
        <CardDescription>
          Módulo preparado en estructura admin. Seguimos con detalles específicos en la próxima
          iteración.
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
