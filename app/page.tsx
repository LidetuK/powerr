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
import ClientHome from "@/components/client-home"

export default function Home() {
  return <ClientHome />
}
