"use client"

import type React from "react"
import Link from "next/link"
import { Slot } from "@radix-ui/react-slot"

interface GlowingButtonProps {
  children: React.ReactNode
  className?: string
  asChild?: boolean
  href?: string
  size?: "sm" | "md" | "lg"
  glowColor?: "purple" | "orange" | "blue"
  variant?: "default" | "outline"
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-8 py-4 text-base",
  lg: "px-12 py-5 text-lg",
}

const glowClasses = {
  purple: "bg-purple-600 hover:bg-purple-700 shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:shadow-[0_0_25px_rgba(124,58,237,0.7)]",
  orange: "bg-orange-500 hover:bg-orange-600 shadow-[0_0_15px_rgba(255,138,0,0.5)] hover:shadow-[0_0_25px_rgba(255,138,0,0.7)]",
  blue: "bg-blue-600 hover:bg-blue-700 shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)]",
}

const variantClasses = {
  default: "text-white",
  outline: "bg-transparent border-2 border-current text-current hover:bg-current hover:text-white",
}

export default function GlowingButton({
  children,
  className = "",
  asChild = false,
  href = "/",
  size = "md",
  glowColor = "purple",
  variant = "default",
}: GlowingButtonProps) {
  const Comp = asChild ? Slot : Link
  const sizeClass = sizeClasses[size] || sizeClasses.md
  const glowClass = glowClasses[glowColor] || glowClasses.purple
  const variantClass = variantClasses[variant] || variantClasses.default

  if (asChild) {
    return (
      <Slot
        className={`
          relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300
          ${sizeClass} ${glowClass} ${variantClass} ${className}
        `}
      >
        <span className="relative">{children}</span>
      </Slot>
    )
  }
  return (
    <Link
      href={href}
      className={`
        relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300
        ${sizeClass} ${glowClass} ${variantClass} ${className}
      `}
    >
      <span className="relative">{children}</span>
    </Link>
  )
}
