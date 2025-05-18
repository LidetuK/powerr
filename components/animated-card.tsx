"use client"

import type React from "react"
import { useState } from "react"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function AnimatedCard({ children, className = "", delay = 0 }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`
        bg-white rounded-lg shadow-lg overflow-hidden
        transition-all duration-300 ease-in-out
        ${isHovered ? "transform -translate-y-2 shadow-xl" : ""}
        ${className}
      `}
      style={{ transitionDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}
