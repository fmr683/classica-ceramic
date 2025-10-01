import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const cartItems = [
  {
    id: 1,
    name: "Mosaic Glossy Glass (MG05) TURQUOISE MALLA - 710*5",
    price: 1445,
    originalPrice: 1650,
    quantity: 2,
    image: "/turquoise-mosaic-glass-tiles.jpg",
  },
  {
    id: 2,
    name: "Infinity 05 Wash Basin",
    price: 32237,
    originalPrice: 35500,
    quantity: 1,
    image: "/modern-white-pedestal-sink-wash-basin.jpg",
  },
  {
    id: 3,
    name: "Chrome Shower Head",
    price: 10800,
    originalPrice: 12500,
    quantity: 1,
    image: "/chrome-rainfall-shower-head.jpg",
  },
]

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const savings = cartItems.reduce((sum, item) => sum + (item.originalPrice - item.price) * item.quantity, 0)
  const shipping = 500
  const total = subtotal + shipping

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
            <span className="text-foreground">Shopping Cart</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="relative w-24 h-24 flex-shrink-0 bg-muted rounded-md overflow-hidden">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-4 mb-2">
                    <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
                    <Button variant="ghost" size="icon" className="flex-shrink-0 h-8 w-8">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-semibold">Rs. {item.price.toLocaleString()}</span>
                    {item.originalPrice > item.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        Rs. {item.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border rounded-md">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-10 text-center text-sm">{item.quantity}</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    <span className="text-sm font-medium">
                      Total: Rs. {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-4">
              <Input placeholder="Enter coupon code" className="flex-1" />
              <Button variant="outline">Apply Coupon</Button>
            </div>

            <Link href="/products">
              <Button variant="outline" className="w-full bg-transparent">
                Continue Shopping
              </Button>
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal ({cartItems.length} items)</span>
                  <span className="font-medium">Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">Rs. {shipping.toLocaleString()}</span>
                </div>
                {savings > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-success">Total Savings</span>
                    <span className="font-medium text-success">- Rs. {savings.toLocaleString()}</span>
                  </div>
                )}
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-lg">Total</span>
                    <span className="font-bold text-xl">Rs. {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full mb-3">
                Proceed to Checkout
              </Button>

              <div className="space-y-2 text-xs text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span>
                  <span>Free shipping on orders over Rs. 50,000</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span>
                  <span>Secure checkout with SSL encryption</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span>
                  <span>Easy returns within 30 days</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
