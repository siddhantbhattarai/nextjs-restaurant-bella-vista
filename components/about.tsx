import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 1985 by Chef Marco Rossi, Bella Vista has been serving authentic Italian cuisine for over 35
              years. Our passion for traditional recipes and fresh ingredients has made us a beloved destination for
              food lovers.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Every dish is prepared with love and attention to detail, using recipes passed down through generations of
              Italian cooking tradition.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-orange-600">35+</div>
                  <div className="text-sm text-gray-600">Years of Service</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-gray-600">Menu Items</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-orange-600">1000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative h-96 lg:h-full">
            <Image src="/images/chef.jpg" alt="Chef Marco Rossi" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
