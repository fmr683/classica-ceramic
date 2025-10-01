"use client"

import { ShoppingCart, Heart, User, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [cartCount] = useState(0)

  return (
    <>
      <div className="w-full bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-9 items-center justify-between text-xs">
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Our Locations
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Need Help?
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <span className="font-bold text-xl text-foreground">Rocell</span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              <a href="#deals" className="text-sm text-foreground hover:text-accent transition-colors">
                Today's Deals
              </a>
              <button className="flex items-center gap-1 text-sm text-foreground hover:text-accent transition-colors">
                Tiles
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-1 text-sm text-foreground hover:text-accent transition-colors">
                Bathwares
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-1 text-sm text-foreground hover:text-accent transition-colors">
                Accessories
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-1 text-sm text-foreground hover:text-accent transition-colors">
                Inspiration
                <ChevronDown className="h-4 w-4" />
              </button>
            </nav>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
                <span className="sr-only">Cart</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
