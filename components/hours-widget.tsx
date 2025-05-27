"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"

const restaurantHours = {
  monday: { open: 11, close: 22 },
  tuesday: { open: 11, close: 22 },
  wednesday: { open: 11, close: 22 },
  thursday: { open: 11, close: 22 },
  friday: { open: 11, close: 23 },
  saturday: { open: 11, close: 23 },
  sunday: { open: 12, close: 21 },
}

export default function HoursWidget() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date()
      const dayName = now.toLocaleDateString("en-US", { weekday: "long" }).toLowerCase()
      const currentHour = now.getHours()

      const todayHours = restaurantHours[dayName as keyof typeof restaurantHours]
      if (todayHours) {
        setIsOpen(currentHour >= todayHours.open && currentHour < todayHours.close)
      }
    }

    checkIfOpen()
  }, [currentTime])

  const formatTime = (hour: number) => {
    if (hour === 0) return "12:00 AM"
    if (hour < 12) return `${hour}:00 AM`
    if (hour === 12) return "12:00 PM"
    return `${hour - 12}:00 PM`
  }

  return (
    <Card className="mb-8">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-orange-600" />
            <span className="font-semibold">Restaurant Status</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isOpen ? "bg-green-500" : "bg-red-500"}`}></div>
            <span className={`font-semibold ${isOpen ? "text-green-600" : "text-red-600"}`}>
              {isOpen ? "Open Now" : "Closed"}
            </span>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Current time: {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </CardContent>
    </Card>
  )
}
