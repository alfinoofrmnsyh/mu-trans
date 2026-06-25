"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Phone, Package, MapPin } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-secondary/40 pb-32 pt-26 md:pb-40 md:pt-34">
      {/* decorative floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-10 top-24 h-40 w-40 rounded-full bg-primary/10 blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="pointer-events-none absolute right-10 top-48 h-52 w-52 rounded-full bg-primary/10 blur-2xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
        {/* Left content */}
        <div className="relative">
          {/* Floating mini images around heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -top-10 right-4 z-20 hidden h-24 w-32 overflow-hidden rounded-2xl border-4 border-card shadow-xl md:block lg:right-8"
          >
            <Image src="/images/mini-delivery.png" alt="Courier delivering a package" fill className="object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: 8 }}
            animate={{ opacity: 1, scale: 1, rotate: 6 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute bottom-24 right-0 z-20 hidden h-24 w-32 overflow-hidden rounded-2xl border-4 border-card shadow-xl lg:block"
          >
            <Image src="/images/mini-cargo.png" alt="Cargo shipping containers" fill className="object-cover" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary"
          >
            <Package className="h-4 w-4" /> Trusted Logistics Partner
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-pretty text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            Smart Logistics Solutions Across <span className="text-primary">Indonesia</span> and Beyond
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-l text-pretty text-md leading-relaxed text-muted-foreground"
          >
            Get your shipments delivered safely, on time, and with complete visibility. We handle freight forwarding,
            trucking, and courier with modern technology and operational excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground shadow-sm"
            >
              <Phone className="h-4 w-4" /> Contact Us
            </motion.a>
          </motion.div>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] shadow-2xl">
            <Image
              src="/images/hero-truck.png"
              alt="Orange cargo truck on the highway"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* floating stat card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-card p-4 shadow-xl"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MapPin className="h-6 w-6" />
            </span>
            <div>
              <p className="text-2xl font-bold text-foreground">20+</p>
              <p className="text-xs text-muted-foreground">Cities Covered</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Curved cutout at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="h-[60px] w-full md:h-[120px]">
          <path d="M0 120H1440V40C1080 110 360 110 0 40V120Z" className="fill-background" />
        </svg>
      </div>
    </section>
  )
}
