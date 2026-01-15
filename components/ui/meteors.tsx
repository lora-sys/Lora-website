"use client"
import { useMemo } from "react"
import { motion } from "motion/react"
function generateMeteors(count: number, seed: number) {
  const meteors = []
  for (let i = 0; i < count; i++) {
    meteors.push({
      left: Math.floor((seed * (i + 1) * 9302) % 400) + "px",
      top: Math.floor((seed * (i + 1) * 49297) % 100) + "px",
      animationDelay: Math.floor((seed * (i + 1) * 37189) % 5) + "s",
      animationDuration: Math.floor((seed * (i + 1) * 12345) % 3) + 5 + "s",
    })
  }
  return meteors
}
export function Meteors({ number = 20 }: { number?: number }) {
  const meteors = useMemo(() => generateMeteors(number, 12345), [number])
  return (
    <div className="relative overflow-hidden">
      {meteors.map((meteor, idx) => (
        <motion.span
          key={idx}
          className="animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
          style={{
            left: meteor.left,
            top: meteor.top,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
        />
      ))}
    </div>
  )
}