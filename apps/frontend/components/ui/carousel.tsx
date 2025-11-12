"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselContextType {
  current: number
  next: () => void
  prev: () => void
  itemsPerView: number
  totalItems: number
}

const CarouselContext = React.createContext<CarouselContextType | undefined>(undefined)

interface CarouselProps {
  children: React.ReactNode
  itemsPerView?: number
  className?: string
}

export function Carousel({ children, itemsPerView = 1, className = "" }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  const childArray = React.Children.toArray(children)
  const totalItems = childArray.length

  const next = () => {
    setCurrent((prev) => (prev + 1) % (totalItems - itemsPerView + 1))
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + (totalItems - itemsPerView + 1)) % (totalItems - itemsPerView + 1))
  }

  return (
    <CarouselContext.Provider value={{ current, next, prev, itemsPerView, totalItems }}>
      <div className={`w-full ${className}`}>{children}</div>
    </CarouselContext.Provider>
  )
}

interface CarouselContentProps {
  children: React.ReactNode
  className?: string
}

export function CarouselContent({ children, className = "" }: CarouselContentProps) {
  const context = React.useContext(CarouselContext)
  if (!context) throw new Error("CarouselContent must be used within Carousel")

  const { current, itemsPerView } = context
  const childArray = React.Children.toArray(children)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-4"
        animate={{ x: `-${current * (100 / itemsPerView)}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {childArray.map((child, index) => (
          <div key={index} style={{ flex: `0 0 calc(${100 / itemsPerView}% - 16px)` }}>
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

interface CarouselItemProps {
  children: React.ReactNode
  className?: string
}

export function CarouselItem({ children, className = "" }: CarouselItemProps) {
  return <div className={`w-full ${className}`}>{children}</div>
}

interface CarouselButtonProps {
  className?: string
}

export function CarouselPrevious({ className = "" }: CarouselButtonProps) {
  const context = React.useContext(CarouselContext)
  if (!context) throw new Error("CarouselPrevious must be used within Carousel")

  return (
    <button
      onClick={context.prev}
      className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-14 p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors z-10 ${className}`}
      aria-label="Previous slide"
    >
      <ChevronLeft size={24} />
    </button>
  )
}

export function CarouselNext({ className = "" }: CarouselButtonProps) {
  const context = React.useContext(CarouselContext)
  if (!context) throw new Error("CarouselNext must be used within Carousel")

  return (
    <button
      onClick={context.next}
      className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-14 p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors z-10 ${className}`}
      aria-label="Next slide"
    >
      <ChevronRight size={24} />
    </button>
  )
}
