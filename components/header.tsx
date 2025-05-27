"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-orange-600">Bella Vista</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
