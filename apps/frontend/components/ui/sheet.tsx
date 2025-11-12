"use client"

import React from "react"

import type { ReactNode } from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"

interface SheetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

export function Sheet({ open: controlledOpen, onOpenChange, children }: SheetProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = (newOpen: boolean) => {
    if (controlledOpen !== undefined) {
      onOpenChange?.(newOpen)
    } else {
      setUncontrolledOpen(newOpen)
    }
  }

  return (
    <div data-sheet-root>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
            open,
            setOpen,
          } as any)
          : child,
      )}
    </div>
  )
}

interface SheetTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  open?: boolean
  setOpen?: (open: boolean) => void
  asChild?: boolean
  children?: ReactNode
}

export function SheetTrigger({ open, setOpen, asChild, children, className = "", ...props }: SheetTriggerProps) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: (e: React.MouseEvent) => {
        setOpen?.(true)
        children?.props?.onClick?.(e)
      },
    })
  }

  return (
    <button onClick={() => setOpen?.(true)} className={className} {...props}>
      {children}
    </button>
  )
}

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  setOpen?: (open: boolean) => void
  side?: "left" | "right" | "top" | "bottom"
  children?: ReactNode
}

export function SheetContent({ open, setOpen, side = "right", children, className = "" }: SheetContentProps) {
  if (!open) return null

  const sideStyles = {
    right: "fixed right-0 top-0 h-full w-72 animate-in slide-in-from-right-80",
    left: "fixed left-0 top-0 h-full w-72 animate-in slide-in-from-left-80",
    top: "fixed top-0 left-0 right-0 h-auto animate-in slide-in-from-top-80",
    bottom: "fixed bottom-0 left-0 right-0 h-auto animate-in slide-in-from-bottom-80",
  }

  return (
    <>
      <motion.div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={() => setOpen?.(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div
        className={`fixed z-50 bg-white shadow-lg ${sideStyles[side]} ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button
          onClick={() => setOpen?.(false)}
          className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-md transition-colors"
        >
          <X size={20} className="text-slate-600" />
        </button>
        {children}
      </motion.div>
    </>
  )
}
