import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  )
}
