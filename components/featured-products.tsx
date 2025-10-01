import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Cascade Rainfall Shower",
    price: 899,
    image: "/luxury-rainfall-shower-system-chrome.jpg",
    category: "Showers",
  },
  {
    id: 2,
    name: "Minimalist Basin Faucet",
    price: 349,
    image: "/modern-minimalist-bathroom-faucet.jpg",
    category: "Faucets",
  },
  {
    id: 3,
    name: "Marble Vessel Sink",
    price: 1299,
    image: "/white-marble-vessel-sink-bathroom.jpg",
    category: "Sinks",
  },
  {
    id: 4,
    name: "Brass Towel Rail Set",
    price: 249,
    image: "/brass-towel-rail-bathroom-accessories.jpg",
    category: "Accessories",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-light tracking-tight text-balance mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked pieces that define contemporary bathroom luxury
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{product.category}</p>
                <h3 className="font-serif text-xl font-light mb-3 text-balance">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">${product.price}</span>
                  <Button variant="ghost" size="sm" className="text-accent hover:text-accent">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
