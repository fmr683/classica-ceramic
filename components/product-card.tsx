import Link from "next/link"
import { Card } from "@/components/ui/card"

interface ProductCardProps {
  slug: string
  name: string
  originalPrice: number
  currentPrice: number
  image: string
  badge?: "sale" | "new"
  discount?: number
}

export function ProductCard({
  slug,
  name,
  originalPrice,
  currentPrice,
  image,
  badge,
  discount,
}: ProductCardProps) {
  const formatPrice = (price: number | undefined) =>
    price ? price.toLocaleString() : "0"

  return (
    <Link href={`/products/${slug}`} prefetch className="block">
      <Card className="group cursor-pointer overflow-hidden border hover:shadow-lg transition-all duration-300">
        {/* --- Image Container --- */}
        <div className="relative bg-muted" style={{ aspectRatio: "500 / 416" }}>
          {badge && (
            <div
              className={`absolute bottom-3 left-3 px-3 py-1 text-xs font-medium text-white z-10 ${
                badge === "sale" ? "bg-accent" : "bg-success"
              }`}
            >
              {badge === "sale" ? `${discount}% OFF` : "New"}
            </div>
          )}
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* --- Product Info --- */}
        <div className="p-4 space-y-2">
          <h3 className="text-2xl text-foreground line-clamp-2 min-h-[2.5rem]">{name}</h3>
          <div className="flex items-center gap-2">
            {originalPrice && currentPrice && originalPrice !== currentPrice && (
              <span className="text-xl text-muted-foreground line-through">
                LKR {formatPrice(originalPrice)}
              </span>
            )}
            <span className="text-xl font-semibold text-foreground">
              LKR {formatPrice(currentPrice)}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
