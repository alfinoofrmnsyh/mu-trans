"use client"

import { motion } from "framer-motion"
import { Truck, Ship, Globe, Package, Container, Warehouse, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Freight Forwarding",
    description: "Move your cargo seamlessly with managed customs, documentation, and route planning handled for you.",
  },
  {
    icon: Ship,
    title: "Inter-Island Shipping",
    description: "Reach every corner of the archipelago with dependable sea freight connecting Indonesia's islands.",
  },
  {
    icon: Container,
    title: "International Shipping",
    description: "Expand globally with reliable export and import shipping that keeps your supply chain on track.",
  },
  {
    icon: Package,
    title: "Courier Service",
    description: "Send documents and parcels fast, with door-to-door pickup and delivery you can rely on.",
  },
  {
    icon: Truck,
    title: "Trucking Service",
    description: "Get full and partial truckload transport with a modern fleet sized to fit your shipment.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Store and manage inventory in secure facilities with real-time stock visibility.",
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-pretty text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Everything you need to move your goods
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            Choose the solution that fits your shipment, and let our team handle the rest with speed and care.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -10 }}
                className="group rounded-[24px] border border-border bg-card p-8 shadow-sm transition-shadow duration-300 hover:shadow-2xl"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <Icon className="h-7 w-7" />
                </motion.div>
                <h3 className="mt-6 text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
