"use client"

import type React from "react"
import { motion } from "framer-motion"

export const AnimatedGlowBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-600 rounded-full blur-3xl opacity-40 -z-10"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 -left-32 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-30 -z-10"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500 rounded-full blur-3xl opacity-20 -z-10"
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      {children}
    </div>
  )
}
