import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="bg-muted/30 flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="space-y-4 pt-6 text-center">
          <div className="bg-destructive/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
            <AlertCircle className="text-destructive h-8 w-8" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Producto no encontrado</h1>
            <p className="text-muted-foreground">
              El producto que buscas no existe o ha sido removido de nuestro catálogo.
            </p>
          </div>
          <div className="flex flex-col gap-3 pt-4 sm:flex-row">
            <Button asChild className="flex-1">
              <Link href="/catalogo">Ver Catálogo</Link>
            </Button>
            <Button variant="outline" asChild className="flex-1 bg-transparent">
              <Link href="/">Ir al Inicio</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
