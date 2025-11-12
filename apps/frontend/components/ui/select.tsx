"use client"

import React from "react"

import { useState } from "react"

interface SelectProps {
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}

export function Select({ value, onValueChange, children }: SelectProps) {
  const [open, setOpen] = useState(false)
  return (
    <div data-select-root>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              open,
              setOpen,
              value,
              onValueChange,
            } as any)
          : child,
      )}
    </div>
  )
}

interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  open?: boolean
  setOpen?: (open: boolean) => void
}

export function SelectTrigger({ open, setOpen, className = "", ...props }: SelectTriggerProps) {
  return (
    <button
      onClick={() => setOpen?.(!open)}
      className={`flex h-10 w-full items-center justify-between rounded-md border border-slate-300 bg-white px-3 py-2 text-base placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )
}

interface SelectValueProps {
  placeholder?: string
  children?: React.ReactNode
}

export function SelectValue({ placeholder, children }: SelectValueProps) {
  return <span>{children || placeholder}</span>
}

interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  children?: React.ReactNode
}

export function SelectContent({ open, children, className = "" }: SelectContentProps) {
  if (!open) return null
  return (
    <div
      className={`absolute top-full left-0 right-0 z-50 mt-2 rounded-md border border-slate-200 bg-white shadow-lg overflow-hidden ${className}`}
    >
      {children}
    </div>
  )
}

interface SelectItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  onValueChange?: (value: string) => void
  setOpen?: (open: boolean) => void
  children?: React.ReactNode
}

export function SelectItem({ value, onValueChange, setOpen, children, className = "", ...props }: SelectItemProps) {
  return (
    <button
      onClick={() => {
        onValueChange?.(value)
        setOpen?.(false)
      }}
      className={`w-full px-3 py-2 text-left text-sm hover:bg-blue-50 focus:bg-blue-50 focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
