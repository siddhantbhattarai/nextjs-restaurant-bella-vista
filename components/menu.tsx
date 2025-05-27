"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Image from "next/image"

const menuItems = [
  {
    category: "Appetizers",
    items: [
      {
        name: "Bruschetta Classica",
        description: "Toasted bread with fresh tomatoes, basil, and garlic",
        price: "$12",
        image: "/images/bruschetta.jpg",
        popular: true,
      },
      {
        name: "Antipasto Platter",
        description: "Selection of cured meats, cheeses, and marinated vegetables",
        price: "$18",
        image: "/images/Antipasto-Platter-1.jpg",
        popular: false,
      },
      {
        name: "Calamari Fritti",
        description: "Crispy fried squid with marinara sauce",
        price: "$15",
        image: "/images/Calamari-Fritti.jpg",
        popular: false,
      },
    ],
  },
  {
    category: "Main Courses",
    items: [
      {
        name: "Spaghetti Carbonara",
        description: "Classic Roman pasta with eggs, pancetta, and Parmesan",
        price: "$22",
        image: "/images/Spaghetti Carbonara.jpeg",
        popular: true,
      },
      {
        name: "Osso Buco",
        description: "Braised veal shanks with risotto Milanese",
        price: "$32",
        image: "/images/italiancooking_ossobucco.jpg",
        popular: false,
      },
      {
        name: "Margherita Pizza",
        description: "Fresh mozzarella, tomato sauce, and basil",
        price: "$18",
        image: "/images/pizza.jpg",
        popular: true,
      },
      {
        name: "Branzino al Sale",
        description: "Mediterranean sea bass baked in sea salt",
        price: "$28",
        image: "/images/branzino-pescato-al-sale.jpg",
        popular: false,
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee and mascarpone",
        price: "$10",
        image: "/images/tiramisu.jpg",
        popular: true,
      },
      {
        name: "Panna Cotta",
        description: "Vanilla custard with berry compote",
        price: "$9",
        image: "/images/Panna Cotta.jpg",
        popular: false,
      },
      {
        name: "Gelato",
        description: "Choice of vanilla, chocolate, or pistachio",
        price: "$8",
        image: "/images/Gelato.jpg",
        popular: false,
      },
    ],
  },
]

export default function Menu() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [cart, setCart] = useState<{ [key: string]: number }>({})

  const addToCart = (itemName: string) => {
    setCart((prev) => ({
      ...prev,
      [itemName]: (prev[itemName] || 0) + 1,
    }))
  }

  const getCartCount = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0)
  }

  const toggleFavorite = (itemName: string) => {
    setFavorites((prev) => (prev.includes(itemName) ? prev.filter((name) => name !== itemName) : [...prev, itemName]))
  }

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {getCartCount() > 0 && (
          <div className="mb-8 text-center">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full">
              <span className="font-semibold">Cart: {getCartCount()} items</span>
            </div>
          </div>
        )}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients and traditional Italian cooking
            methods.
          </p>
        </div>

        <div className="grid gap-12 md:gap-16">
          {menuItems.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-orange-600 mb-8 text-center">{category.category}</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="relative h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      {item.popular && (
                        <div className="absolute top-2 left-2 bg-orange-600 text-white px-2 py-1 rounded text-sm font-semibold">
                          Popular
                        </div>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                        onClick={() => toggleFavorite(item.name)}
                      >
                        <Heart
                          className={`h-4 w-4 ${
                            favorites.includes(item.name) ? "fill-red-500 text-red-500" : "text-gray-600"
                          }`}
                        />
                      </Button>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <span className="text-lg font-bold text-orange-600">{item.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">{item.description}</CardDescription>
                      <div className="mt-4">
                        <Button
                          onClick={() => addToCart(item.name)}
                          className="w-full bg-orange-600 hover:bg-orange-700"
                          size="sm"
                        >
                          Add to Cart {cart[item.name] && `(${cart[item.name]})`}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
