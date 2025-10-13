// /data/products.ts
export type Product = {
    id: string
    category: string
    link: string           // e.g. "products/basic-package"
    slug: string           // derived from link or set explicitly
    name: string
    packageItems: string     // comma-separated list
    originalPrice: number
    currentPrice: number
    image: string
    badge: "sale" | "new" | "hot" | undefined
    discount?: number
    pdpImage: string
  }
  
  const toSlug = (linkOrName: string) => {
    // if it's a full link like "products/basic-package", take the last segment
    const last = linkOrName.split("/").filter(Boolean).pop() ?? linkOrName
    return last
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
  }
  
  export const products: Product[] = [
    {
      id: 'basic-package',
      category: "Bathroom set",
      link: "products/basic-package",
      slug: toSlug("products/basic-package"),
      packageItems:
        "Angle valves, 2 Cables, 1 Bib Tap, 1 Basin Tap, Basin Waste, 2 nail packs, Bidet shower, Jet shower, Hand shower, Soap holder, Glass, Etc.",
      name: "Basic Package",
      originalPrice: 67000,
      currentPrice: 57000,
      image: "/new/set-1.jpg",
      pdpImage: "/new/basic-pdp.jpg",
      badge: "sale",
      discount: 12,
    },
    {
      id: 'standard-package',
      category: "Bathroom set",
      link: "products/standard-package",
      slug: toSlug("products/standard-package"),
      packageItems:
        "Angle valves, 2 Cables, 1 Bib Tap, 1 Basin Tap, Basin Waste, 2 nail packs, Bidet shower, Jet shower, Hand shower, Soap holder, Glass, Etc.",
      name: "Standard Package",
      originalPrice: 77000,
      currentPrice: 67000,
      image: "/new/set-2.jpg",
      badge: "sale",
      discount: 12,
      pdpImage: "/new/standard-pdp.jpg",
    },
  ]
  
  // helpers
  export const getProductBySlug = (slug: string) =>
    products.find((p) => p.slug === slug)
  
  export const getProductById = (id: string) =>
    products.find((p) => p.id === id)
  
  export const getRelated = (slug: string, limit = 8) => {
    const current = getProductBySlug(slug)
    if (!current) return products.slice(0, limit)
    return products.filter(p => p.slug !== slug && p.category === current.category).slice(0, limit)
  }
  