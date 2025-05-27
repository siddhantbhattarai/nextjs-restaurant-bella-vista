"use client"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">Bella Vista</h3>
            <p className="text-gray-300">
              Authentic Italian cuisine in the heart of the city. Experience the taste of Italy with every bite.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-orange-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-orange-400 transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-orange-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <p className="text-gray-300">Stay connected for updates and special offers</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Bella Vista Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
