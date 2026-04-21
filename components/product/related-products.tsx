import { ProductCard } from "@/components/catalog/product-card"
import type { Product } from "@/types"

interface RelatedProductsProps {
  products: Product[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products.length) return null

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-foreground font-serif text-2xl font-bold">Productos relacionados</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          Equipos similares que podrían interesarte
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
