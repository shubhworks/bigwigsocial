"use client"

import React from "react"
import { useState } from "react"

interface DropdownMenuProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function DropdownMenu({ children, open: controlledOpen, onOpenChange }: DropdownMenuProps) {
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
    <div className="relative inline-block" data-dropdown-menu>
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

interface DropdownMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  open?: boolean
  setOpen?: (open: boolean) => void
  asChild?: boolean
  children?: React.ReactNode
}

export function DropdownMenuTrigger({
  open,
  setOpen,
  asChild,
  children,
  className = "",
  ...props
}: DropdownMenuTriggerProps) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: (e: React.MouseEvent) => {
        setOpen?.(!open)
        children?.props?.onClick?.(e)
      },
    })
  }

  return (
    <button onClick={() => setOpen?.(!open)} className={className} {...props}>
      {children}
    </button>
  )
}

interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  children?: React.ReactNode
}

export function DropdownMenuContent({ open, children, className = "" }: DropdownMenuContentProps) {
  if (!open) return null

  return (
    <div
      className={`absolute top-full right-0 z-50 mt-2 w-56 rounded-md border border-slate-200 bg-white shadow-lg overflow-hidden ${className}`}
    >
      {children}
    </div>
  )
}

interface DropdownMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  setOpen?: (open: boolean) => void
  children?: React.ReactNode
}

export function DropdownMenuItem({ setOpen, children, className = "", ...props }: DropdownMenuItemProps) {
  return (
    <button
      onClick={(e) => {
        setOpen?.(false)
        props.onClick?.(e)
      }}
      className={`w-full px-4 py-2 text-left text-sm hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
