"use client"
import { motion } from "framer-motion"
import { Sun, Battery, Zap, Car, Home } from "lucide-react"

export function FloatingIcons() {
  const icons = [
    { Icon: Sun, color: "text-yellow-500", size: 40, delay: 0 },
    { Icon: Battery, color: "text-green-500", size: 36, delay: 0.2 },
    { Icon: Zap, color: "text-orange-500", size: 44, delay: 0.4 },
    { Icon: Car, color: "text-blue-500", size: 38, delay: 0.6 },
    { Icon: Home, color: "text-purple-500", size: 42, delay: 0.8 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, index) => {
        const { Icon, color, size, delay } = item
        const x = 40 + Math.random() * 60
        const y = 20 + Math.random() * 60

        return (
          <motion.div
            key={index}
            className={`absolute ${color}`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0.4],
              scale: [0, 1.2, 1],
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: 10,
              delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Icon size={size} />
          </motion.div>
        )
      })}
    </div>
  )
}

// Add default export that points to the named export
export default FloatingIcons
