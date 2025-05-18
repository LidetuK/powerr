"use client"

import { useState, useEffect } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
}

export default function AnimatedText({ text, className = "", once = false }: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState(once ? text[0] || "" : "")
  const [currentIndex, setCurrentIndex] = useState(once ? 1 : 0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (once && hasAnimated) return
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    } else if (once) {
      setHasAnimated(true)
    }
  }, [currentIndex, text, once, hasAnimated])

  useEffect(() => {
    if (!once) {
      setDisplayText("")
      setCurrentIndex(0)
    }
  }, [text, once])

  return (
    <span className={`${className} relative`}>
      {displayText}
      {currentIndex < text.length && <span className="inline-block w-1 h-6 bg-white animate-blink ml-1"></span>}
    </span>
  )
}
