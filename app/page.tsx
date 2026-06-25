import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import Milestones from "@/components/milestones"
import Testimonials from "@/components/testimonials"
import Impact from "@/components/impact"
import CTA from "@/components/cta"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Milestones />
      <Testimonials />
      <Impact />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
