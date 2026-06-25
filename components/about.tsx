"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import Counter from "@/components/counter"

const points = [
  "End-to-end shipment visibility on every order",
  "Dedicated support team available around the clock",
  "Nationwide reach with reliable delivery timelines",
]

export default function About() {
  return (
    <section id="about" className="relative bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 md:px-8 lg:grid-cols-2">
        {/* Left: story */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            About Us
          </span>
          <h2 className="mt-5 text-pretty text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Your shipments, handled with care from pickup to delivery
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            You need a logistics partner you can count on. We combine an experienced team, a modern fleet, and
            real-time tracking technology so your cargo moves safely and arrives on schedule, every time.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {points.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-base text-foreground/80">{point}</span>
              </motion.li>
            ))}
          </ul>

          {/* mini counters */}
          <div className="mt-10 flex gap-10">
            <div>
              <Counter value={12} suffix="+" className="text-3xl font-bold text-primary" />
              <p className="mt-1 text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <Counter value={50} suffix="+" className="text-3xl font-bold text-primary" />
              <p className="mt-1 text-sm text-muted-foreground">Fleet Units</p>
            </div>
            <div>
              <Counter value={1000} suffix="+" className="text-3xl font-bold text-primary" />
              <p className="mt-1 text-sm text-muted-foreground">Happy Clients</p>
            </div>
          </div>
        </motion.div>

        {/* Right: asymmetric overlapping cards */}
        <div className="relative h-[460px] sm:h-[500px]">
          {/* Large card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="absolute left-0 top-0 h-72 w-[68%] overflow-hidden rounded-[28px] shadow-2xl"
          >
            <Image src="/images/about-transport.png" alt="Logistics distribution center" fill className="object-cover" />
          </motion.div>

          {/* Medium card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="absolute right-0 top-28 z-10 h-56 w-[52%] overflow-hidden rounded-[24px] border-4 border-card shadow-2xl"
          >
            <Image src="/images/about-fleet.png" alt="Fleet of cargo vans" fill className="object-cover" />
          </motion.div>

          {/* Small card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-0 left-8 z-20 h-40 w-44 overflow-hidden rounded-[20px] border-4 border-card shadow-2xl"
          >
            <Image src="/images/about-tracking.png" alt="Shipment tracking dashboard" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
