import type React from "react"

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return <div className={`bg-white rounded-lg border border-slate-200 p-6 shadow-sm ${className}`}>{children}</div>
}

export function CardHeader({ children, className = "" }: CardProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

export function CardTitle({ children, className = "" }: CardProps) {
  return <h3 className={`text-lg font-semibold text-slate-800 ${className}`}>{children}</h3>
}

export function CardDescription({ children, className = "" }: CardProps) {
  return <p className={`text-sm text-slate-600 mt-1 ${className}`}>{children}</p>
}

export function CardContent({ children, className = "" }: CardProps) {
  return <div className={`${className}`}>{children}</div>
}

export function CardFooter({ children, className = "" }: CardProps) {
  return <div className={`mt-4 pt-4 border-t border-slate-200 ${className}`}>{children}</div>
}
