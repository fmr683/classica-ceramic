import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCarousel } from "@/components/product-carousel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Minus, Plus, Heart, Share2, Star } from "lucide-react"
import Image from "next/image"

const relatedProducts = [
  {
    id: 6,
    name: "Mosaic -Glossy Glass (SFPM1)",
    originalPrice: 3200,
    currentPrice: 2780,
    image: "/mixed-blue-mosaic-tiles.jpg",
    badge: "sale" as const,
    discount: 13,
  },
  {
    id: 7,
    name: "Mosaic -Glossy Glass (DXR82)",
    originalPrice: 2980,
    currentPrice: 2380,
    image: "/deep-blue-mosaic-tiles.jpg",
    badge: "sale" as const,
    discount: 20,
  },
  {
    id: 8,
    name: "Mosaic -Glossy Glass (GX100)",
    originalPrice: 2850,
    currentPrice: 2380,
    image: "/navy-blue-mosaic-tiles.jpg",
    badge: "sale" as const,
    discount: 16,
  },
  {
    id: 9,
    name: "Infinity 05 Wash Basin",
    originalPrice: 35500,
    currentPrice: 32237,
    image: "/modern-white-pedestal-sink-wash-basin.jpg",
    badge: "sale" as const,
    discount: 9,
  },
]

export default function ProductDetailPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground">
              Home
            </a>
            <span>/</span>
            <a href="/products" className="hover:text-foreground">
              Products
            </a>
            <span>/</span>
            <a href="/products?category=tiles" className="hover:text-foreground">
              Tiles
            </a>
            <span>/</span>
            <span className="text-foreground">Mosaic Glossy Glass</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
              <Image
                src="/turquoise-mosaic-glass-tiles.jpg"
                alt="Mosaic Glossy Glass (MG05) TURQUOISE MALLA"
                fill
                className="object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">12% OFF</Badge>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className="relative aspect-square bg-muted rounded-lg overflow-hidden border-2 border-transparent hover:border-accent transition-colors"
                >
                  <Image
                    src="/turquoise-mosaic-glass-tiles.jpg"
                    alt={`Product view ${i}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-semibold text-balance">
                  Mosaic Glossy Glass (MG05) TURQUOISE MALLA - 710*5
                </h1>
                <Button variant="ghost" size="icon">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(24 reviews)</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold">Rs. 1,445.00</span>
                <span className="text-xl text-muted-foreground line-through">Rs. 1,650.00</span>
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  Save 12%
                </Badge>
              </div>
            </div>

            <div className="space-y-4 py-6 border-y border-border">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium min-w-24">Availability:</span>
                <Badge variant="secondary" className="bg-success/10 text-success">
                  In Stock
                </Badge>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium min-w-24">SKU:</span>
                <span className="text-sm text-muted-foreground">MG05-TUR-710</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium min-w-24">Category:</span>
                <a href="/products?category=tiles" className="text-sm text-accent hover:underline">
                  Tiles
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center border border-border rounded-md">
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center">1</span>
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button size="lg" className="flex-1">
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              <Button size="lg" variant="outline" className="w-full bg-transparent">
                Buy Now
              </Button>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold">Product Highlights</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Premium glossy glass mosaic tiles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Vibrant turquoise color for stunning visual appeal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Easy to clean and maintain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Perfect for bathrooms, kitchens, and feature walls</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="specifications"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent"
              >
                Reviews (24)
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Transform your space with our stunning Mosaic Glossy Glass tiles in a vibrant turquoise shade. These
                premium quality glass mosaic tiles feature a brilliant glossy finish that reflects light beautifully,
                creating a dynamic and eye-catching surface.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Perfect for adding a pop of color to bathrooms, kitchens, or as an accent wall, these tiles are not only
                visually stunning but also highly durable and easy to maintain. The glass material is resistant to
                moisture and stains, making it ideal for wet areas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each sheet measures 710mm x 5mm, providing excellent coverage and easy installation. The mosaic pattern
                adds texture and depth to any surface, while the turquoise color brings a fresh, contemporary feel to
                your interior design.
              </p>
            </TabsContent>
            <TabsContent value="specifications" className="mt-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-sm font-medium">Material</span>
                    <span className="text-sm text-muted-foreground">Glossy Glass</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-sm font-medium">Size</span>
                    <span className="text-sm text-muted-foreground">710mm x 5mm</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-sm font-medium">Color</span>
                    <span className="text-sm text-muted-foreground">Turquoise</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-sm font-medium">Finish</span>
                    <span className="text-sm text-muted-foreground">Glossy</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-sm font-medium">Application</span>
                    <span className="text-sm text-muted-foreground">Wall</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-sm font-medium">Water Absorption</span>
                    <span className="text-sm text-muted-foreground">0%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-sm font-medium">Suitable For</span>
                    <span className="text-sm text-muted-foreground">Indoor</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-sm font-medium">Warranty</span>
                    <span className="text-sm text-muted-foreground">1 Year</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6 space-y-6">
              {[1, 2, 3].map((review) => (
                <div key={review} className="border-b border-border pb-6 last:border-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">Sarah Johnson</span>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-3 h-3 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">2 weeks ago</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Absolutely love these tiles! The turquoise color is exactly as shown in the pictures, and the glossy
                    finish really makes my bathroom pop. Installation was straightforward, and they look amazing.
                  </p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <ProductCarousel
            title="RELATED PRODUCTS"
            subtitle="You might also like these products"
            products={relatedProducts}
          />
        </div>
      </div>

      <Footer />
    </main>
  )
}
