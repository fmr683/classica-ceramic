"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Share2 } from "lucide-react"
import { OrderNowDialog } from "@/components/order-now-dialog"
import ShareButton from "@/components/share-button" // if you added this previously

export default function ProductPurchase({
  productName,
  productSlug,
  showShare = true,
}: {
  productName: string
  productSlug: string
  showShare?: boolean
}) {
  const [qty, setQty] = useState<number>(1)

  const dec = () => setQty((q) => Math.max(1, q - 1))
  const inc = () => setQty((q) => Math.min(99, q + 1))

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Quantity:</span>
        <div className="flex items-center border border-border rounded-md">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-10 w-10"
            aria-label="Decrease quantity"
            onClick={dec}
            disabled={qty <= 1}
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="w-12 text-center select-none" aria-live="polite" aria-atomic="true">
            {qty}
          </span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-10 w-10"
            aria-label="Increase quantity"
            onClick={inc}
            disabled={qty >= 99}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex gap-3">
        <OrderNowDialog productName={productName} productSlug={productSlug} quantity={qty} />
        {showShare ? (
          <ShareButton productName={productName} productSlug={productSlug} />
        ) : (
          <Button size="lg" variant="outline" aria-label="Share product">
            <Share2 className="w-5 h-5" />
          </Button>
        )}
      </div>
    </div>
  )
}
