import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProductById, getProducts, getRelatedProducts } from "@/services"
import { ProductGallery } from "@/components/product/product-gallery"
import { ProductInfo } from "@/components/product/product-info"
import { ProductSpecs } from "@/components/product/product-specs"
import { ProductFeatures } from "@/components/product/product-features"
import { RelatedProducts } from "@/components/product/related-products"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = await getProductById(id)

  if (!product) {
    return { title: "Producto no encontrado | Aire-Max" }
  }

  const description = product.description.slice(0, 160)

  return {
    title: `${product.name} | Aire-Max`,
    description,
    openGraph: {
      title: `${product.name} — Aire-Max`,
      description,
      images: [product.image],
      type: "website",
    },
  }
}

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((product) => ({
    id: product.id,
  }))
}

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = await getProductById(id)

  if (!product) {
    notFound()
  }

  const relatedProducts = await getRelatedProducts(product, 4)

  return (
    <div className="bg-background min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/catalogo">Catálogo</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>

        {/* Specifications */}
        <ProductSpecs product={product} />

        {/* Features */}
        <ProductFeatures product={product} />

        {/* Related Products */}
        {relatedProducts.length > 0 && <RelatedProducts products={relatedProducts} />}
      </div>
    </div>
  )
}
