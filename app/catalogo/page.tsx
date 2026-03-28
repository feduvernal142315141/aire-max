import { CatalogPageClient } from "@/components/catalog/catalog-page-client"
import { getProducts } from "@/services"

export default async function CatalogoPage() {
  const initialProducts = await getProducts()

  return <CatalogPageClient initialProducts={initialProducts} />
}
