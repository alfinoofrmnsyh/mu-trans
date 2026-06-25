"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const contactDetails = [
  { icon: MapPin, label: "Address", value: "Jakarta, Indonesia" },
  { icon: Phone, label: "Phone", value: "+62 (0)21 - XXX - XXXX" },
  { icon: Mail, label: "Email", value: "info@ubgtrans.co.id" },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", company: "", phone: "", service: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", company: "", phone: "", service: "", message: "" })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Get in Touch
          </span>
          <h2 className="mt-5 text-pretty text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Let&apos;s plan your next shipment together
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: info + map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Reach out and our team will help you find the right logistics solution. We respond fast and we&apos;re
              ready when you are.
            </p>

            <div className="flex flex-col gap-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon
                return (
                  <div key={detail.label} className="flex items-center gap-4 rounded-2xl bg-card p-4 shadow-sm">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{detail.label}</p>
                      <p className="text-sm text-muted-foreground">{detail.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Map placeholder */}
            <div className="relative mt-2 h-56 overflow-hidden rounded-[24px] border border-border bg-card shadow-sm">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=Jakarta,Indonesia&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-[24px] border border-border bg-card p-8 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-semibold text-foreground">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-foreground">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="+62..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-semibold text-foreground">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a service</option>
                  <option value="freight">Freight Forwarding</option>
                  <option value="inter-island">Inter-Island Shipping</option>
                  <option value="international">International Shipping</option>
                  <option value="courier">Courier Service</option>
                  <option value="trucking">Trucking Service</option>
                  <option value="warehousing">Warehousing</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full resize-none rounded-xl border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Tell us about your logistics needs..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30"
              >
                {submitted ? "Message Sent!" : "Send Message"} <Send className="h-4 w-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
