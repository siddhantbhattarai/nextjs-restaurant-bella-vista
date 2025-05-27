"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment: "The best Italian food in the city! The pasta is absolutely divine and the service is exceptional.",
    date: "2 weeks ago",
  },
  {
    name: "Mike Chen",
    rating: 5,
    comment: "Authentic flavors and cozy atmosphere. The tiramisu is a must-try! Will definitely come back.",
    date: "1 month ago",
  },
  {
    name: "Emily Rodriguez",
    rating: 4,
    comment: "Great food and friendly staff. The pizza reminded me of my trip to Italy. Highly recommended!",
    date: "3 weeks ago",
  },
]

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`h-4 w-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers about their dining experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-3">{renderStars(testimonial.rating)}</div>
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div className="font-semibold text-gray-900">- {testimonial.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
