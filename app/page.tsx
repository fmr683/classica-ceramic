import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductCarousel } from "@/components/product-carousel"
import { CategoryGrid } from "@/components/category-grid"
import { Footer } from "@/components/footer"

const topSavings = [
  {
    id: 1,
    name: "Mosaic Glossy Glass (MG05) TURQUOISE MALLA - 710*5",
    originalPrice: 1650,
    currentPrice: 1445,
    image: "/turquoise-mosaic-glass-tiles.jpg",
    badge: "sale" as const,
    discount: 12,
  },
  {
    id: 2,
    name: "Aztra Water Closet",
    originalPrice: 167240,
    currentPrice: 167240,
    image: "/modern-white-toilet-water-closet.jpg",
    badge: "sale" as const,
    discount: 15,
  },
  {
    id: 3,
    name: "Lumina E Water Closet",
    originalPrice: 89000,
    currentPrice: 82000,
    image: "/elegant-white-toilet.jpg",
    badge: "new" as const,
  },
  {
    id: 4,
    name: "Aria Water Closet",
    originalPrice: 75200,
    currentPrice: 71200,
    image: "/contemporary-toilet-design.jpg",
    badge: "new" as const,
  },
  {
    id: 5,
    name: "Mosaic Glossy Glass (MG03) BLUE MALLA",
    originalPrice: 2850,
    currentPrice: 2380,
    image: "/blue-mosaic-glass-tiles.jpg",
    badge: "sale" as const,
    discount: 16,
  },
]

const trendingProducts = [
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

const recentlyViewed = [
  {
    id: 10,
    name: "Athia Natural",
    originalPrice: 640,
    currentPrice: 640,
    image: "/natural-stone-pattern-tiles.jpg",
    badge: "sale" as const,
    discount: 10,
  },
  {
    id: 11,
    name: "Aztra Water Closet",
    originalPrice: 175000,
    currentPrice: 167240,
    image: "/premium-white-toilet.jpg",
    badge: "sale" as const,
    discount: 4,
  },
  {
    id: 12,
    name: "Andria Floor Mounted Water Closet",
    originalPrice: 171500,
    currentPrice: 165000,
    image: "/placeholder.svg?height=400&width=400",
    badge: "sale" as const,
    discount: 4,
  },
  {
    id: 13,
    name: "Aqua + Wash Basin",
    originalPrice: 35885,
    currentPrice: 30885,
    image: "/placeholder.svg?height=400&width=400",
    badge: "sale" as const,
    discount: 14,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductCarousel
        title="TOP SAVINGS FOR YOU"
        subtitle="Discover top savings on Tiles, Bathwares, and Accessories to elevate your space."
        products={topSavings}
      />
      <ProductCarousel
        title="TRENDING PRODUCTS"
        subtitle="Trending Now, Don't Miss These Bestsellers."
        products={trendingProducts}
      />
      <CategoryGrid />
      <ProductCarousel
        title="RECENTLY VIEWED"
        subtitle="Keep the inspiration alive with recently seen picks."
        products={recentlyViewed}
      />
      <Footer />
    </main>
  )
}
