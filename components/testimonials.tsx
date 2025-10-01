"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "The quality and attention to detail exceeded our expectations. Our bathroom feels like a luxury spa.",
    author: "Sarah Mitchell",
    role: "Interior Designer",
    rating: 5,
  },
  {
    id: 2,
    quote: "Exceptional craftsmanship and timeless design. These fixtures will last a lifetime.",
    author: "James Chen",
    role: "Architect",
    rating: 5,
  },
  {
    id: 3,
    quote: "From selection to installation, the entire experience was seamless and professional.",
    author: "Emma Rodriguez",
    role: "Homeowner",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-light tracking-tight text-balance mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-8 border-border/50">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-base leading-relaxed mb-6 text-pretty">"{testimonial.quote}"</blockquote>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
