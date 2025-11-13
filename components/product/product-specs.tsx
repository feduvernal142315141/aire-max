import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import type { Product } from "@/lib/products"

interface ProductSpecsProps {
  product: Product
}

export function ProductSpecs({ product }: ProductSpecsProps) {
  const specs = [
    { label: "Marca", value: product.brand },
    { label: "Modelo", value: product.name },
    { label: "Tipo", value: product.category.replace("-", " ").toUpperCase() },
    { label: "Capacidad", value: `${product.capacity} BTU/h` },
    { label: "Eficiencia Energética", value: product.energyRating },
    { label: "Tecnología", value: product.inverter ? "Inverter" : "On/Off" },
    { label: "Control WiFi", value: product.wifi ? "Sí" : "No" },
    { label: "Voltaje", value: "220V / 60Hz" },
    { label: "Refrigerante", value: "R-410A / R-32" },
    { label: "Nivel de Ruido", value: "22-45 dB" },
    { label: "Dimensiones Unidad Interior", value: "90 x 30 x 20 cm" },
    { label: "Dimensiones Unidad Exterior", value: "80 x 55 x 30 cm" },
  ]

  return (
    <Card className="mb-12">
      <CardHeader>
        <CardTitle>Especificaciones Técnicas</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            {specs.map((spec, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium w-1/3">{spec.label}</TableCell>
                <TableCell className="capitalize">{spec.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
