"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import AnimatedBackground from "@/components/animated-background"
import AnimatedText from "@/components/animated-text"
import { FloatingIcons } from "@/components/floating-icons"
import GlowingButton from "@/components/glowing-button"
import { AnimatedCounter } from "@/components/animated-counter"
import AnimatedCard from "@/components/animated-card"
import { Sun, Factory, Battery, Zap, Car, CheckCircle, ArrowRight, Globe, Shield, Lightbulb } from "lucide-react"

export default function ClientHome() {
  return (
    <>
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <FloatingIcons />
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-orange-500 hover:bg-orange-600 text-lg py-2 px-4">
                Sustainable Energy Solutions
              </Badge>
            </motion.div>

            <AnimatedText
              text="Powering Progress Across Africa and Beyond"
              className="mb-6 text-5xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl gradient-text"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-8 text-xl md:text-2xl text-gray-200"
            >
              From portable power gadgets to large-scale solar installations, grid infrastructure, and EV charging
              systems — we deliver innovative energy solutions that empower communities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
            >
              <GlowingButton asChild size="lg" glowColor="orange">
                <Link href="/solutions">Explore Solutions</Link>
              </GlowingButton>
              <GlowingButton
                asChild
                size="lg"
                variant="outline"
                glowColor="blue"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/quote">Get a Quote</Link>
              </GlowingButton>
            </motion.div>
          </div>
        </div>

        {/* Animated lightning bolt */}
        <motion.div
          className="absolute right-0 bottom-0 w-1/3 h-2/3 opacity-70 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 0.7, scale: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-16%20160417-lJ4xPT2oycJPPShzUYuSEeITvtkWgO.png"
            alt="Lightning bolt"
            fill
            className="object-contain"
          />
        </motion.div>
      </section>

      {/* Rest of your sections... */}
    </>
  )
} 