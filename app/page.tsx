import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Menu from "@/components/menu"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Testimonials from "@/components/testimonials"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
