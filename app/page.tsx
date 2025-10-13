import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductCarousel } from "@/components/product-carousel"
import { CategoryGrid } from "@/components/category-grid"
import { Footer } from "@/components/footer"
import { products as productsList } from "@/data/products"



export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      {/* <ProductCarousel
        title="TOP SAVINGS FOR YOU"
        subtitle="Discover top savings on Tiles, Bathwares, and Accessories to elevate your space."
        products={topSavings}
      /> */}
      <ProductCarousel
        anchorId="deals"      
        title="TRENDING PACKAGES"
        subtitle="Trending Now, Don't Miss These Bestsellers."
        products={productsList}
      />
      {/* <CategoryGrid />
      <ProductCarousel
        title="RECENTLY VIEWED"
        subtitle="Keep the inspiration alive with recently seen picks."
        products={recentlyViewed}
      /> */}
      <Footer />
    </main>
  )
}
