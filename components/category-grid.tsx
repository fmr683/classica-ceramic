export function CategoryGrid() {
  const categories = [
    {
      name: "TILES",
      image: "/modern-bathroom-tiles-mosaic.jpg",
      subcategories: ["WALL TILES", "FLOOR TILES", "MOSAIC TILES"],
    },
    {
      name: "BATHWARES",
      image: "/luxury-bathroom-interior-with-sink-and-mirror.jpg",
      subcategories: ["WATER CLOSET", "WASH BASINS", "FAUCETS", "SHOWERS"],
    },
    {
      name: "ACCESSORIES",
      image: "/bathroom-accessories-towel-rack-soap-dispenser.jpg",
      subcategories: ["ALL ACCESSORIES", "KITCHEN SINKS", "OTHER ACCESSORIES", "SEAT COVERS"],
    },
  ]

  return (
    <section className="py-12 lg:py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">SHOP BY CATEGORY</h2>
          <p className="text-sm text-muted-foreground">
            A selection of carefully curated masterpieces of Tiles, Bathwares and Accessories by Rocell await you.
            Choose your category to begin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="group relative overflow-hidden cursor-pointer h-[400px]">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
                <div className="space-y-1">
                  {category.subcategories.map((sub) => (
                    <p key={sub} className="text-sm opacity-90">
                      {sub}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
