"use client"

import type React from "react"

interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "outline"
  className?: string
  onClick?: () => void
  type?: "button" | "submit"
}

export function Button({ children, variant = "primary", className = "", onClick, type = "button" }: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    primary: `${baseStyles} bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400`,
    outline: `${baseStyles} border-2 border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-400`,
  }

  return (
    <button type={type} onClick={onClick} className={`${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}
