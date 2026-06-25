"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import Counter from "@/components/counter"

export default function CTA() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-primary to-amber-500 px-8 py-16 shadow-2xl shadow-primary/30 md:px-16 md:py-20"
        >
          {/* floating decorative shapes */}
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute bottom-0 right-1/3 h-24 w-24 rounded-full bg-white/10" />

          {/* floating truck illustration */}
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-6 right-0 hidden h-56 w-72 lg:block"
          >
            <Image src="/images/cta-truck.png" alt="Delivery truck" fill className="object-contain" />
          </motion.div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-pretty text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
              Ready to Move Your Business Forward?
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-primary-foreground/90">
              Tell us what you need to ship and get a tailored logistics solution that saves you time and keeps your
              customers happy.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-card px-7 py-3.5 text-base font-semibold text-primary shadow-lg"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/70 px-7 py-3.5 text-base font-semibold text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> Contact Us
              </motion.a>
            </div>

            <div className="mt-10 flex gap-10 border-t border-primary-foreground/20 pt-8">
              <div>
                <Counter value={5000} suffix="+" className="text-3xl font-bold text-primary-foreground" />
                <p className="mt-1 text-sm text-primary-foreground/80">Shipments</p>
              </div>
              <div>
                <Counter value={1000} suffix="+" className="text-3xl font-bold text-primary-foreground" />
                <p className="mt-1 text-sm text-primary-foreground/80">Clients</p>
              </div>
              <div>
                <Counter value={99} suffix="%" className="text-3xl font-bold text-primary-foreground" />
                <p className="mt-1 text-sm text-primary-foreground/80">On-Time</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
