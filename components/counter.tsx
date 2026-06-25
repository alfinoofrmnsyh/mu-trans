"use client"

import { useCountUp } from "@/hooks/use-count-up"

interface CounterProps {
  value: number
  suffix?: string
  prefix?: string
  className?: string
  duration?: number
}

export default function Counter({ value, suffix = "", prefix = "", className, duration }: CounterProps) {
  const { ref, count } = useCountUp(value, duration)
  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
