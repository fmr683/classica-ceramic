// /app/products/[slug]/page.tsx
import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import Script from "next/script"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCarousel } from "@/components/product-carousel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Minus, Plus, Heart, Share2, Star } from "lucide-react"

import { getProductBySlug, getRelated } from "@/data/products"
import { OrderNowDialog } from "@/components/order-now-dialog"
import ShareButton from "@/components/share-button"
import ProductPurchase from "@/components/product-purchase"

type PageProps = { params: { slug: string } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) return { title: "Product not found | Classica Ceramic" }

  const title = `${product.name} | Classica Ceramic`
  const description = `${product.name} – ${product.category} in Sri Lanka. Save ${product.discount ?? 0}%: Rs. ${product.currentPrice.toLocaleString()} (was Rs. ${product.originalPrice.toLocaleString()}).`
  const images = [{ url: product.image, width: 1200, height: 630, alt: product.name }]

  return {
    title,
    description,
    openGraph: {
      // ✅ use a supported OG type
      type: "website",
      title,
      description,
      images,
      url: `/products/${product.slug}`,
      siteName: "Classica Ceramic",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map(i => i.url),
    },
    alternates: { canonical: `/products/${product.slug}` },
  }
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug)
  if (!product) return notFound()

  const related = getRelated(params.slug, 8)
  const savings = Math.max(0, product.originalPrice - product.currentPrice)
  const packageItems = product.packageItems.split(",").map((h) => h.trim()).filter(Boolean)

  const description = `${product.name} – ${product.category} in Sri Lanka. Save ${product.discount ?? 0}%: Rs. ${product.currentPrice.toLocaleString()} (was Rs. ${product.originalPrice.toLocaleString()}).`

  return (
    <main className="min-h-screen bg-background">
      {/* Product JSON-LD (for rich results) */}
      <Script id="ld-product" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            image: [product.image],
            description,
            brand: { "@type": "Brand", name: "Classica Ceramic" },
            category: product.category,
            sku: product.slug.toUpperCase(),
            offers: {
              "@type": "Offer",
              priceCurrency: "LKR",
              price: product.currentPrice,
              url: `/products/${product.slug}`,
              availability: "http://schema.org/InStock",
            },
          }),
        }}
      />

      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground">Home</a>
            <span>/</span>
            <a href="/products" className="hover:text-foreground">Products</a>
            <span>/</span>
            <a href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-foreground">
              {product.category}
            </a>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
          <div className="relative aspect-[4/3] w-full bg-muted rounded-lg overflow-hidden">
              <Image
                src={product.pdpImage}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
              {product.discount ? (
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {product.discount}% OFF
                </Badge>
              ) : null}
            </div>

            {/* Thumbs (repeat hero if you only have one image) */}
            {/* <div className="grid grid-cols-4 gap-4">
              {[product.image, product.image, product.image, product.image].map((src, i) => (
                <button
                  key={i}
                  className="relative aspect-square bg-muted rounded-lg overflow-hidden border-2 border-transparent hover:border-accent transition-colors"
                >
                  <Image src={src} alt={`${product.name} ${i + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div> */}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-semibold text-balance">{product.name}</h1>
                {/* <Button variant="ghost" size="icon" aria-label="Add to wishlist">
                  <Heart className="w-5 h-5" />
                </Button> */}
              </div>
{/* 
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(24 reviews)</span>
              </div> */}

              {/* <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold">Rs. {product.currentPrice.toLocaleString()}</span>
                <span className="text-xl text-muted-foreground line-through">Rs. {product.originalPrice.toLocaleString()}</span>
                {savings > 0 && (
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    Save {product.discount ?? Math.round((savings / product.originalPrice) * 100)}%
                  </Badge>
                )}
              </div> */}
            </div>

            <div className="space-y-4 py-6 border-y border-border">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium min-w-24">Availability:</span>
                <Badge variant="secondary" className="bg-success/10 text-success">In Stock</Badge>
              </div>
              {/* <div className="flex items-center gap-4">
                <span className="text-sm font-medium min-w-24">SKU:</span>
                <span className="text-sm text-muted-foreground">{product.slug.toUpperCase()}</span>
              </div> */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium min-w-24">Category:</span>
                <a href={`/products?category=${encodeURIComponent(product.category)}`} className="text-sm text-accent hover:underline">
                  {product.category}
                </a>
              </div>
            </div>

            <div className="space-y-4">
            <ProductPurchase productName={product.name} productSlug={product.slug} />


              {/* <Button size="lg" variant="outline" className="w-full bg-transparent">Buy Now</Button> */}
            </div>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold">Package Items</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {packageItems.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger value="description" className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent">
                Description
              </TabsTrigger>
              <TabsTrigger value="specifications" className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent">
                Specifications
              </TabsTrigger>
             {/*  <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent">
                Reviews (24)
              </TabsTrigger> */}
            </TabsList>

            <TabsContent value="description" className="mt-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Upgrade your bathroom with the {product.name}. Quality components, modern styling, and great value for homes in Sri Lanka.
              </p>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-sm font-medium">Package Type</span>
                    <span className="text-sm text-muted-foreground">{product.category}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-sm font-medium">Finish</span>
                    <span className="text-sm text-muted-foreground">Mixed</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-sm font-medium">Warranty</span>
                    <span className="text-sm text-muted-foreground">25 Year</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-sm font-medium">Delivery</span>
                    <span className="text-sm text-muted-foreground">Free Delivery within Colombo 1 to 15, we offer reasonable delivery charges across the island.</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* <TabsContent value="reviews" className="mt-6 space-y-6">
              {[1,2,3].map((r) => (
                <div key={r} className="border-b border-border pb-6 last:border-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">Verified Buyer</span>
                        <div className="flex items-center gap-1">
                          {[1,2,3,4,5].map((star) => (
                            <Star key={star} className="w-3 h-3 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">2 weeks ago</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Great value package and fast delivery in Colombo. Recommended!
                  </p>
                </div>
              ))}
            </TabsContent> */}
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <ProductCarousel
            title="MORE PACKAGES"
            subtitle="You might also like these packages"
            products={related}
          />
        </div>
      </div>

      <Footer />
    </main>
  )
}
