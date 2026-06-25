"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Radar, Headphones } from "lucide-react"
import Counter from "@/components/counter"

const features = [
  {
    icon: ShieldCheck,
    title: "Your cargo stays protected",
    description:
      "Every shipment is insured, monitored, and handled by trained professionals so you never worry about damage or loss.",
    gradient: "from-primary to-amber-400",
  },
  {
    icon: Radar,
    title: "You always know where it is",
    description:
      "Track your goods in real time from any device with live status updates from pickup all the way to delivery.",
    gradient: "from-sky-500 to-cyan-400",
  },
  {
    icon: Headphones,
    title: "Support whenever you need it",
    description:
      "Our dedicated team is available around the clock to answer questions and keep your deliveries moving.",
    gradient: "from-emerald-500 to-teal-400",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-pretty text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Logistics built around your peace of mind
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="rounded-[28px] border border-border bg-card p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-foreground">{feature.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* counters strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid grid-cols-2 gap-6 rounded-[28px] bg-secondary/60 p-8 md:grid-cols-4"
        >
          <div className="text-center">
            <Counter value={99} suffix="%" className="text-3xl font-bold text-primary md:text-4xl" />
            <p className="mt-1 text-sm text-muted-foreground">On-Time Rate</p>
          </div>
          <div className="text-center">
            <Counter value={24} suffix="/7" className="text-3xl font-bold text-primary md:text-4xl" />
            <p className="mt-1 text-sm text-muted-foreground">Support</p>
          </div>
          <div className="text-center">
            <Counter value={20} suffix="+" className="text-3xl font-bold text-primary md:text-4xl" />
            <p className="mt-1 text-sm text-muted-foreground">Cities</p>
          </div>
          <div className="text-center">
            <Counter value={100} suffix="%" className="text-3xl font-bold text-primary md:text-4xl" />
            <p className="mt-1 text-sm text-muted-foreground">Insured Cargo</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
