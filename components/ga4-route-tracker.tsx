// components/ga4-route-tracker.tsx
"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export default function GA4RouteTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!window.gtag) return
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "")
    window.gtag("event", "page_view", {
      page_path: url,
    })
  }, [pathname, searchParams])

  return null
}
