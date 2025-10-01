import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SlidersHorizontal } from "lucide-react"

export const dynamic = 'force-dynamic';

const products = [
  {
    id: 1,
    name: "Mosaic Glossy Glass (MG05) TURQUOISE MALLA - 710*5",
    originalPrice: 1650,
    currentPrice: 1445,
    image: "/turquoise-mosaic-glass-tiles.jpg",
    badge: "sale" as const,
    discount: 12,
    category: "Tiles",
  },
  {
    id: 2,
    name: "Aztra Water Closet",
    originalPrice: 167240,
    currentPrice: 167240,
    image: "/modern-white-toilet-water-closet.jpg",
    badge: "sale" as const,
    discount: 15,
    category: "Bathwares",
  },
  {
    id: 3,
    name: "Lumina E Water Closet",
    originalPrice: 89000,
    currentPrice: 82000,
    image: "/elegant-white-toilet.jpg",
    badge: "new" as const,
    category: "Bathwares",
  },
  {
    id: 4,
    name: "Aria Water Closet",
    originalPrice: 75200,
    currentPrice: 71200,
    image: "/contemporary-toilet-design.jpg",
    badge: "new" as const,
    category: "Bathwares",
  },
  {
    id: 5,
    name: "Mosaic Glossy Glass (MG03) BLUE MALLA",
    originalPrice: 2850,
    currentPrice: 2380,
    image: "/blue-mosaic-glass-tiles.jpg",
    badge: "sale" as const,
    discount: 16,
    category: "Tiles",
  },
  {
    id: 6,
    name: "Mosaic -Glossy Glass (SFPM1)",
    originalPrice: 3200,
    currentPrice: 2780,
    image: "/mixed-blue-mosaic-tiles.jpg",
    badge: "sale" as const,
    discount: 13,
    category: "Tiles",
  },
  {
    id: 7,
    name: "Mosaic -Glossy Glass (DXR82)",
    originalPrice: 2980,
    currentPrice: 2380,
    image: "/deep-blue-mosaic-tiles.jpg",
    badge: "sale" as const,
    discount: 20,
    category: "Tiles",
  },
  {
    id: 8,
    name: "Mosaic -Glossy Glass (GX100)",
    originalPrice: 2850,
    currentPrice: 2380,
    image: "/navy-blue-mosaic-tiles.jpg",
    badge: "sale" as const,
    discount: 16,
    category: "Tiles",
  },
  {
    id: 9,
    name: "Infinity 05 Wash Basin",
    originalPrice: 35500,
    currentPrice: 32237,
    image: "/modern-white-pedestal-sink-wash-basin.jpg",
    badge: "sale" as const,
    discount: 9,
    category: "Bathwares",
  },
  {
    id: 10,
    name: "Athia Natural",
    originalPrice: 640,
    currentPrice: 640,
    image: "/natural-stone-pattern-tiles.jpg",
    badge: "sale" as const,
    discount: 10,
    category: "Tiles",
  },
  {
    id: 11,
    name: "Aqua + Wash Basin",
    originalPrice: 35885,
    currentPrice: 30885,
    image: "/modern-ceramic-wash-basin.jpg",
    badge: "sale" as const,
    discount: 14,
    category: "Bathwares",
  },
  {
    id: 12,
    name: "Chrome Shower Head",
    originalPrice: 12500,
    currentPrice: 10800,
    image: "/chrome-rainfall-shower-head.jpg",
    badge: "new" as const,
    category: "Accessories",
  },
]

export default function ProductsPage() {
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
            <span className="text-foreground">All Products</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-4 space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </h3>
              </div>

              {/* Category Filter */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Category</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="tiles" />
                    <Label htmlFor="tiles" className="text-sm cursor-pointer">
                      Tiles
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="bathwares" />
                    <Label htmlFor="bathwares" className="text-sm cursor-pointer">
                      Bathwares
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="accessories" />
                    <Label htmlFor="accessories" className="text-sm cursor-pointer">
                      Accessories
                    </Label>
                  </div>
                </div>
              </div>

              {/* Price Range */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Price Range</h4>
                <div className="px-2">
                  <Slider defaultValue={[0, 100000]} max={200000} step={1000} />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>Rs. 0</span>
                    <span>Rs. 200,000</span>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Availability</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="in-stock" />
                    <Label htmlFor="in-stock" className="text-sm cursor-pointer">
                      In Stock
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="on-sale" />
                    <Label htmlFor="on-sale" className="text-sm cursor-pointer">
                      On Sale
                    </Label>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-transparent" variant="outline">
                Clear All Filters
              </Button>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-semibold mb-1">All Products</h1>
                <p className="text-sm text-muted-foreground">Showing {products.length} products</p>
              </div>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="discount">Best Discount</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-12">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="default" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
