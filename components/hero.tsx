"use client"

import Image from "next/image"

export function Hero() {
  return (
    <section className="relative w-full">
      <Image
        src="/new/banner-1.jpg"
        alt="Classica Ceramic Premium Bathroom set"
        width={1920}
        height={700}
        priority
        className="w-full h-auto object-cover"
      />
    </section>
  )
}
