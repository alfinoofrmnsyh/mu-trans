"use client"

import { useState, useEffect, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Budi Santoso",
    company: "PT. Maju Jaya Trading",
    rating: 5,
    text: "Our shipments always arrive on time and in perfect condition. Having a logistics partner this reliable lets us focus on growing our business with total confidence.",
    image: "/images/avatar-1.png",
  },
  {
    name: "Siti Nurhaliza",
    company: "CV. Bahagia Makmur",
    rating: 5,
    text: "The real-time tracking gives us complete visibility of every order. Whenever we have a question, support responds fast. It has made our operations so much smoother.",
    image: "/images/avatar-2.png",
  },
  {
    name: "Ahmad Wijaya",
    company: "PT. Sukses Bersama",
    rating: 5,
    text: "They handle our inter-island shipments with incredible care. The team is professional from pickup to delivery and truly treats our cargo like their own.",
    image: "/images/avatar-3.png",
  },
  {
    name: "Eka Putri",
    company: "Toko Online Berkah",
    rating: 5,
    text: "Affordable pricing without compromising on quality. Their last-mile delivery keeps our online customers happy and coming back. Highly recommended.",
    image: "/images/avatar-4.png",
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((p) => (p + 1) % testimonials.length), [])
  const prev = () => setIndex((p) => (p - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[index]

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Testimonials
          </span>
          <h2 className="mt-5 text-pretty text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Trusted by businesses across Indonesia
          </h2>
        </div>

        <div className="relative rounded-[32px] border border-border bg-card p-8 shadow-xl md:p-12">
          <Quote className="absolute right-8 top-8 h-16 w-16 text-primary/10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-6 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-pretty text-xl font-medium leading-relaxed text-foreground md:text-2xl">
                {`"${t.text}"`}
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                  <Image src={t.image || "/placeholder.svg"} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-primary" : "w-3 bg-border hover:bg-primary/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
