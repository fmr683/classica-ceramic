"use client"

import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"

type Props = {
  productName: string
  productSlug: string
  className?: string
}

export default function ShareButton({ productName, productSlug, className }: Props) {
  const url = `https://classicaceramic.lk/products/${productSlug}`

  const handleShare = async () => {
    const shareData = {
      title: productName,
      text: `Check out this package from Classica Ceramic: ${productName}`,
      url,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(url)
        // Simple, unobtrusive fallback
        alert("Link copied to clipboard!")
      }
    } catch (e) {
      // user cancelled or share failed — fallback to copy
      try {
        await navigator.clipboard.writeText(url)
        alert("Link copied to clipboard!")
      } catch {}
    }
  }

  return (
    <Button
      size="lg"
      variant="outline"
      aria-label="Share product"
      onClick={handleShare}
      className={`cursor-pointer hover:bg-accent hover:text-white transition-colors ${className ?? ""}`}
    >
      <Share2 className="w-5 h-5" />
    </Button>
  )
}
