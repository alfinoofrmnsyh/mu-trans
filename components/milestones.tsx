"use client"

import { motion } from "framer-motion"
import { Flag, TrendingUp, Radar, Network, Sparkles } from "lucide-react"

const milestones = [
  {
    year: "2017",
    title: "Founded",
    description: "Started operations with a small fleet and a big commitment to reliable delivery.",
    icon: Flag,
  },
  {
    year: "2018",
    title: "Expansion",
    description: "Grew our routes and team to serve more businesses across Java.",
    icon: TrendingUp,
  },
  {
    year: "2020",
    title: "Tracking Technology",
    description: "Launched real-time shipment tracking, giving customers full visibility.",
    icon: Radar,
  },
  {
    year: "2023",
    title: "Network Growth",
    description: "Connected more islands and partners to broaden our nationwide coverage.",
    icon: Network,
  },
  {
    year: "2025",
    title: "Smart Logistics",
    description: "Introduced data-driven routing and automation for faster, smarter deliveries.",
    icon: Sparkles,
  },
]

export default function Milestones() {
  return (
    <section id="journey" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Our Journey
          </span>
          <h2 className="mt-5 text-pretty text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Growing alongside the businesses we serve
          </h2>
        </div>

        <div className="relative">
          {/* center animated line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-6 top-0 h-full w-1 origin-top rounded-full bg-primary/30 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="flex flex-col gap-10">
            {milestones.map((m, i) => {
              const Icon = m.icon
              const isLeft = i % 2 === 0
              return (
                <div
                  key={m.year}
                  className={`relative flex items-center gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="ml-16 w-full rounded-[24px] border border-border bg-card p-6 shadow-sm md:ml-0 md:w-[44%]"
                  >
                    <span className="text-sm font-bold text-primary">{m.year}</span>
                    <h3 className="mt-1 text-xl font-bold text-foreground">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                  </motion.div>

                  {/* node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.2, type: "spring" }}
                    className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40 md:left-1/2"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  {/* spacer for desktop */}
                  <div className="hidden md:block md:w-[44%]" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
