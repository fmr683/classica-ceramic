import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { Suspense } from "react"
import "./globals.css"
import GA4RouteTracker from "@/components/ga4-route-tracker"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const SITE_URL = "https://www.classicaceramic.com/" 
const DEFAULT_TITLE = "Affordable & Premium Bathroom Sets in Sri Lanka | Classica Ceramic"
const DEFAULT_DESC =
  "Shop affordable and premium bathroom sets in Sri Lanka. Explore bathware packages, wash basins, tiles, and accessories with islandwide delivery and trusted after-sales service."

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Classica Ceramic",
  },
  description: DEFAULT_DESC,
  keywords: [
    "bathroom sets Sri Lanka",
    "bathware Sri Lanka",
    "bathroom accessories Sri Lanka",
    "affordable bathroom sets",
    "premium bathroom sets",
    "bathware packages",
    "wash basins Sri Lanka",
    "bathroom tiles Sri Lanka",
    "bathroom renovations Sri Lanka",
    "Classica Ceramic",
  ],
  authors: [{ name: "Classica Ceramic", url: SITE_URL }],
  creator: "Classica Ceramic",
  publisher: "Classica Ceramic",
  applicationName: "Classica Ceramic",
  alternates: {
    canonical: "/",
    languages: {
      "en-LK": "/",
      // Add localized routes if/when you have them:
      "si-LK": "/si",
      "ta-LK": "/ta",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Classica Ceramic",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    locale: "en_LK",
    images: [
      {
        url: "/og/classica-ceramic.jpg", // ← TODO: ensure this exists (1200x630)
        width: 1200,
        height: 630,
        alt: "Classica Ceramic — Affordable & Premium Bathroom Sets in Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: ["/og/classica-ceramic.jpg"],
    site: "@yourhandle", // ← optional
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  category: "shopping",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-LK" className="scroll-smooth">
      {/* Cloudflare Turnstile script */}
      <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />

      <body className={`font-sans ${inter.variable} ${playfair.variable} antialiased`}>

         {/* GA4 base script */}
         {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = window.gtag || gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  anonymize_ip: true,
                  page_path: window.location.pathname
                });
              `}
            </Script>
          </>
        ) : null}

        {/* Track client-side route changes */}
        {GA_ID ? <GA4RouteTracker /> : null}
            
        {/* Organization + WebSite Schema (sitewide) */}
        <Script id="ld-org" type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Classica Ceramic",
              url: SITE_URL,
              logo: `${SITE_URL}/logo.png`, // ← TODO: provide a 512x512+ transparent PNG
              sameAs: [
                "https://www.facebook.com/yourpage",
                "https://www.instagram.com/yourhandle",
                "https://www.youtube.com/@yourchannel",
              ],
            }),
          }}
        />
        <Script id="ld-website" type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Classica Ceramic",
              url: SITE_URL,
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
              inLanguage: "en-LK",
            }),
          }}
        />

        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
