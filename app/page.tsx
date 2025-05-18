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

export default function Home() {
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

      {/* Brand Introduction */}
      <section className="py-20 md:py-32 animated-bg">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 gradient-text">
                Innovative Energy Solutions for a Sustainable Future
              </h2>
              <p className="text-gray-300 mb-6">
                POWWRR is at the forefront of the sustainable energy revolution, delivering cutting-edge solutions that
                address the diverse energy needs of homes, businesses, and nations across Africa and globally.
              </p>
              <p className="text-gray-300 mb-6">
                Our comprehensive range of products and services spans from portable power devices to large-scale
                infrastructure projects, all designed with innovation, reliability, and sustainability at their core.
              </p>
              <GlowingButton asChild className="mt-4">
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </GlowingButton>
            </motion.div>
            <motion.div
              className="relative h-[500px] rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="POWWRR energy solutions"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50 mix-blend-overlay"></div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-4 rounded-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Zap className="h-8 w-8 text-orange-500" />
              </motion.div>
              <motion.div
                className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md p-4 rounded-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                <Sun className="h-8 w-8 text-yellow-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Categories */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <AnimatedBackground className="opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-green-600 hover:bg-green-700">Our Solutions</Badge>
            </motion.div>
            <AnimatedText
              text="Comprehensive Energy Solutions for Every Need"
              className="text-3xl font-bold tracking-tight md:text-4xl mb-6"
              once={true}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-300"
            >
              Explore our wide range of sustainable energy solutions designed to meet the diverse needs of individuals,
              businesses, and communities.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedCard delay={0.1}>
              <Sun className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Home & Business Installations</h3>
              <p className="text-gray-300 mb-4">
                Custom solar installations that reduce energy costs and carbon footprint for homes and businesses.
              </p>
              <Button asChild variant="link" className="p-0 text-orange-500 hover:text-orange-400">
                <Link href="/solutions/home-business">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <Factory className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Industrial & Agricultural</h3>
              <p className="text-gray-300 mb-4">
                Powerful energy systems designed to meet the high demands of industrial facilities and agricultural
                operations.
              </p>
              <Button asChild variant="link" className="p-0 text-orange-500 hover:text-orange-400">
                <Link href="/solutions/industrial-agricultural">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Battery className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Portable Power & Gadgets</h3>
              <p className="text-gray-300 mb-4">
                Compact, efficient power solutions for on-the-go energy needs, from camping to emergency backup.
              </p>
              <Button asChild variant="link" className="p-0 text-orange-500 hover:text-orange-400">
                <Link href="/solutions/portable-power">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <Zap className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Infrastructure & Grid</h3>
              <p className="text-gray-300 mb-4">
                Advanced grid technologies and infrastructure solutions for communities and nations.
              </p>
              <Button asChild variant="link" className="p-0 text-orange-500 hover:text-orange-400">
                <Link href="/solutions/infrastructure-grid">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedCard>

            <AnimatedCard delay={0.5}>
              <Car className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">EV Charging Systems</h3>
              <p className="text-gray-300 mb-4">
                Future-ready EV charging solutions for residential, commercial, and public spaces.
              </p>
              <Button asChild variant="link" className="p-0 text-orange-500 hover:text-orange-400">
                <Link href="/solutions/ev-charging">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedCard>

            <AnimatedCard delay={0.6}>
              <h3 className="text-xl font-bold mb-3 text-orange-500">Explore All Solutions</h3>
              <p className="text-gray-300 mb-4">
                View our comprehensive portfolio of sustainable energy solutions designed for various applications and
                scales.
              </p>
              <Button asChild variant="link" className="p-0 text-orange-500 hover:text-orange-400">
                <Link href="/solutions">
                  View All Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Why Choose POWWRR */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-green-600 hover:bg-green-700">Why Choose POWWRR</Badge>
            </motion.div>
            <AnimatedText
              text="The POWWRR Advantage"
              className="text-3xl font-bold tracking-tight md:text-4xl mb-6 glow-text"
              once={true}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-300"
            >
              We combine innovation, reliability, and sustainability to deliver energy solutions that truly make a
              difference.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Innovation",
                description:
                  "Cutting-edge technology and forward-thinking solutions that stay ahead of industry trends.",
              },
              {
                title: "Reliability",
                description: "Dependable products and services backed by rigorous testing and quality assurance.",
              },
              {
                title: "Sustainability",
                description:
                  "Environmentally conscious solutions that reduce carbon footprints and promote clean energy.",
              },
              {
                title: "Empowerment",
                description: "Enabling communities and businesses to take control of their energy future.",
              },
              {
                title: "Collaboration",
                description: "Strategic partnerships that enhance our capabilities and extend our reach.",
              },
              {
                title: "Excellence",
                description: "Commitment to the highest standards in every aspect of our operations.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(255, 138, 0, 0.2)",
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
              >
                <CheckCircle className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <AnimatedBackground className="opacity-30" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              className="relative h-[600px] rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="His Royal Highness Thee Royal Warrior Osagyefo Torgbi Kiti'Kata I"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-transparent to-transparent"></div>

              {/* Animated elements */}
              <motion.div
                className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-3 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Globe className="h-6 w-6 text-blue-400" />
              </motion.div>
              <motion.div
                className="absolute top-1/3 left-10 bg-white/10 backdrop-blur-md p-3 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                <Shield className="h-6 w-6 text-green-400" />
              </motion.div>
              <motion.div
                className="absolute bottom-1/4 right-10 bg-white/10 backdrop-blur-md p-3 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
              >
                <Lightbulb className="h-6 w-6 text-yellow-400" />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-blue-700 hover:bg-blue-800">Leadership</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 gradient-text">Visionary Leadership</h2>
              <p className="text-gray-300 mb-6 italic text-xl">
                "Our mission extends beyond providing energy solutions. We are committed to transforming Africa's energy
                landscape, empowering communities, and driving sustainable development across the continent and beyond."
              </p>
              <p className="text-gray-300 mb-6">
                Under the visionary leadership of His Royal Highness Thee Royal Warrior Osagyefo Torgbi Kiti'Kata I,
                POWWRR is dedicated to pioneering innovative energy solutions that address the unique challenges and
                opportunities of the African continent.
              </p>
              <GlowingButton asChild className="mt-4" glowColor="blue">
                <Link href="/about">
                  Learn About Our Vision <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </GlowingButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedText
              text="Our Impact"
              className="text-3xl font-bold tracking-tight md:text-4xl mb-6 glow-text"
              once={true}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-green-100"
            >
              Transforming lives and communities through sustainable energy solutions.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { value: 500, suffix: "+", label: "Projects Completed" },
              { value: 50, suffix: "K+", label: "Homes Powered" },
              { value: 100, suffix: "MW+", label: "Clean Energy Generated" },
              { value: 15, suffix: "+", label: "African Countries Served" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                }}
              >
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  className="text-5xl font-bold mb-2 gradient-text"
                />
                <p className="text-xl">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-orange-600 to-orange-500 text-white relative overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                width: Math.random() * 100 + 20,
                height: Math.random() * 100 + 20,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight md:text-5xl mb-6 max-w-2xl mx-auto glow-text"
          >
            Ready to Power Your Future with Sustainable Energy?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Contact us today to discuss how POWWRR's innovative energy solutions can meet your needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center"
          >
            <GlowingButton asChild size="lg" className="bg-white text-orange-500 hover:bg-gray-100" glowColor="blue">
              <Link href="/contact">Contact Us</Link>
            </GlowingButton>
            <GlowingButton
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-orange-600"
              glowColor="orange"
            >
              <Link href="/quote">Get a Quote</Link>
            </GlowingButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
