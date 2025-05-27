import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Mail } from "lucide-react"
import HoursWidget from "@/components/hours-widget"
import ContactForm from "@/components/contact-form"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HoursWidget />
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Come and experience the authentic taste of Italy in our cozy restaurant. We look forward to serving you!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                123 Italian Street
                <br />
                Downtown District
                <br />
                New York, NY 10001
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                (555) 123-4567
                <br />
                Call for reservations
                <br />
                or takeout orders
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle>Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Mon-Thu: 11am-10pm
                <br />
                Fri-Sat: 11am-11pm
                <br />
                Sunday: 12pm-9pm
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                info@bellavista.com
                <br />
                For inquiries and
                <br />
                special events
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Make a Reservation</h3>
          <p className="text-gray-600 mb-8">Reserve your table for an unforgettable dining experience</p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            Book a Table
          </Button>
        </div>
      </div>
      <div className="mt-16">
        <ContactForm />
      </div>
    </section>
  )
}
