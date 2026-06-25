"use client"

import { motion } from "framer-motion"
import { Package, Users, Truck, MapPin } from "lucide-react"
import Counter from "@/components/counter"

const stats = [
  { icon: Package, value: 5000, suffix: "+", label: "Shipments Delivered" },
  { icon: Users, value: 1000, suffix: "+", label: "Satisfied Customers" },
  { icon: Truck, value: 50, suffix: "+", label: "Fleet Units" },
  { icon: MapPin, value: 20, suffix: "+", label: "Cities Covered" },
]

export default function Impact() {
  return (
    <section className="bg-secondary-foreground py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary">
            Our Impact
          </span>
          <h2 className="mt-5 text-pretty text-3xl font-bold tracking-tight text-background md:text-4xl">
            Numbers that reflect your trust in us
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-[24px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </span>
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="mt-5 block text-4xl font-extrabold text-background md:text-5xl"
                />
                <p className="mt-2 text-sm text-background/70">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
