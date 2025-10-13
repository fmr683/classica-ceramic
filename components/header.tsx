// components/header.tsx
"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-bold text-2xl text-foreground">Classica Ceramic</span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          <Link href="/#deals" className="text-sm text-foreground transition-colors hover:text-accent">
            Trending Packages
          </Link>
          <Link href="/#contact" className="text-sm text-foreground transition-colors hover:text-accent">
            Contact Us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border py-2 animate-in fade-in slide-in-from-top-1">
          <nav className="flex flex-col gap-1 py-2" aria-label="Mobile">
            <Link
              href="/#deals"
              className="rounded px-3 py-2 text-sm transition-colors hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              Trending Packages
            </Link>
            <Link
              href="/#contact"
              className="rounded px-3 py-2 text-sm transition-colors hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
