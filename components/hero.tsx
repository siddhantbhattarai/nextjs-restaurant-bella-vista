"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById("menu")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-restaurant.jpg" alt="Restaurant interior" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-orange-400">Bella Vista</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Experience authentic Italian cuisine in the heart of the city. Fresh ingredients, traditional recipes, and a
          warm atmosphere.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={scrollToMenu} className="bg-orange-600 hover:bg-orange-700">
            View Our Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Make a Reservation
          </Button>
        </div>
      </div>
    </section>
  )
}
