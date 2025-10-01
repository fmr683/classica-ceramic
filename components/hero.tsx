import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Where Innovation Meets Comfort</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
                25<span className="text-4xl">%</span>OFF
              </h1>
              <div className="inline-block bg-accent text-accent-foreground px-4 py-1.5 text-sm font-medium">
                AuraFlow Smart Water Closet
              </div>
            </div>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Shop Now
            </Button>
          </div>

          <div className="relative">
            <img src="/modern-white-smart-toilet-water-closet.jpg" alt="AuraFlow Smart Water Closet" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
