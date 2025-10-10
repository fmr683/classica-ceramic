"use client"

import { ProductCard } from "@/components/product-card"

interface Product {
  id: number
  name: string
  originalPrice: number
  currentPrice: number
  image: string
  badge?: "sale" | "new"
  discount?: number
}

interface ProductCarouselProps {
  title: string
  subtitle?: string
  products: Product[]
}

export function ProductCarousel({ title, subtitle, products }: ProductCarouselProps) {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Header --- */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">{title}</h2>
          {subtitle && (
            <p className="text-sm text-muted-foreground max-w-md mx-auto">{subtitle}</p>
          )}
        </div>

        {/* --- Product Grid --- */}
        <div
          className="
            grid gap-8
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            place-items-center
          "
        >
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
