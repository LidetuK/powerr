"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import AnimatedBackground from "@/components/animated-background"
import AnimatedText from "@/components/animated-text"
import GlowingButton from "@/components/glowing-button"
import AnimatedCard from "@/components/animated-card"
import { ArrowRight, History, Lightbulb, Rocket, Target } from "lucide-react"

export default function StoryVisionPage() {
  return (
    <>
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="POWWRR story and vision"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">About Us</Badge>
            </motion.div>
            <AnimatedText
              text="Our Story & Vision"
              className="mb-6 text-4xl font-bold leading-tight tracking-tighter md:text-5xl gradient-text"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-8 text-lg md:text-xl text-gray-200"
            >
              Discover the journey of POWWRR from its humble beginnings to its vision for transforming Africa's energy
              landscape.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 animated-bg">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <History className="h-8 w-8 text-orange-500 mr-3" />
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl gradient-text">Our Story</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Founded with a vision to address Africa's energy challenges, POWWRR began as a small initiative focused
                on bringing reliable power to underserved communities. What started as a mission to provide basic
                lighting solutions has evolved into a comprehensive energy company offering everything from portable
                power gadgets to large-scale infrastructure projects.
              </p>
              <p className="text-gray-300 mb-6">
                Our journey began in 2015 when His Royal Highness Thee Royal Warrior Osagyefo Torgbi Kiti'Kata I
                recognized the critical need for sustainable energy solutions across Africa. Having witnessed firsthand
                the limitations imposed by unreliable power, he assembled a team of engineers, energy experts, and
                community development specialists to create solutions tailored to African contexts.
              </p>
              <p className="text-gray-300">
                Through years of research, development, and on-the-ground implementation, POWWRR has refined its
                approach and expanded its reach. Today, we stand as a leader in sustainable energy solutions, with
                projects spanning multiple countries and impacting thousands of lives.
              </p>
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
                alt="POWWRR history"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50 mix-blend-overlay"></div>

              {/* Timeline elements */}
              <motion.div
                className="absolute top-10 left-10 bg-white/10 backdrop-blur-md p-4 rounded-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <span className="text-orange-500 font-bold">2015</span>
                <p className="text-white text-sm">Founded</p>
              </motion.div>
              <motion.div
                className="absolute top-1/3 right-10 bg-white/10 backdrop-blur-md p-4 rounded-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-orange-500 font-bold">2018</span>
                <p className="text-white text-sm">First Major Project</p>
              </motion.div>
              <motion.div
                className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md p-4 rounded-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
              >
                <span className="text-orange-500 font-bold">2023</span>
                <p className="text-white text-sm">Continental Expansion</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <AnimatedBackground className="opacity-50" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              className="relative h-[500px] rounded-xl overflow-hidden md:order-last"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="POWWRR vision"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 mix-blend-overlay"></div>

              {/* Vision elements */}
              <motion.div
                className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-3 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Lightbulb className="h-8 w-8 text-yellow-500" />
              </motion.div>
              <motion.div
                className="absolute top-1/3 left-10 bg-white/10 backdrop-blur-md p-3 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                <Rocket className="h-8 w-8 text-blue-500" />
              </motion.div>
              <motion.div
                className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md p-3 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
              >
                <Target className="h-8 w-8 text-green-500" />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-orange-500 mr-3" />
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl gradient-text">Our Vision</h2>
              </div>
              <p className="text-gray-300 mb-6">
                At POWWRR, we envision an Africa where reliable, sustainable energy is accessible to all, powering
                economic growth, improving quality of life, and preserving the environment for future generations. We
                see a continent where energy is no longer a constraint but a catalyst for development and prosperity.
              </p>
              <p className="text-gray-300 mb-6">
                Our vision extends beyond simply providing energy solutions. We aim to create an ecosystem where
                sustainable energy technologies are developed, manufactured, and maintained within Africa, creating jobs
                and building local capacity. We envision communities empowered to manage their own energy resources and
                businesses enabled to reach their full potential through reliable power.
              </p>
              <p className="text-gray-300 mb-6">
                By 2030, we aim to have impacted over 10 million lives across 25 African countries, establishing POWWRR
                as the continent's leading provider of sustainable energy solutions and a global model for combining
                commercial success with social impact.
              </p>
              <GlowingButton asChild className="mt-4">
                <Link href="/projects">
                  See Our Vision in Action <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </GlowingButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Our Journey</Badge>
            </motion.div>
            <AnimatedText
              text="Key Milestones"
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
              Tracing our path from inception to our current position as a leader in sustainable energy solutions.
            </motion.p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-purple-500"></div>

            {/* Milestones */}
            {[
              {
                year: "2015",
                title: "Foundation",
                description:
                  "POWWRR was founded with a mission to bring sustainable energy solutions to underserved communities in Africa.",
              },
              {
                year: "2017",
                title: "First Community Project",
                description:
                  "Completed our first solar microgrid project, bringing electricity to a rural village in Ghana.",
              },
              {
                year: "2018",
                title: "Product Expansion",
                description:
                  "Launched our portable power product line, making sustainable energy accessible for everyday use.",
              },
              {
                year: "2020",
                title: "International Recognition",
                description:
                  "Received the Global Sustainability Award for our innovative approach to renewable energy solutions.",
              },
              {
                year: "2022",
                title: "Continental Expansion",
                description:
                  "Expanded operations to 10 African countries, establishing regional offices and partnerships.",
              },
              {
                year: "2024",
                title: "Technology Innovation",
                description:
                  "Introduced our proprietary energy management system, enhancing efficiency and reliability.",
              },
            ].map((milestone, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} mb-16`}>
                <div className="w-1/2"></div>
                <div className="relative flex items-center justify-center">
                  <motion.div
                    className="absolute w-6 h-6 bg-orange-500 rounded-full z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  ></motion.div>
                  <motion.div
                    className="absolute w-12 h-12 bg-orange-500/30 rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  ></motion.div>
                </div>
                <motion.div
                  className="w-1/2 px-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <AnimatedCard className="bg-white/5">
                    <span className="text-orange-500 font-bold text-xl">{milestone.year}</span>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </AnimatedCard>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600 to-orange-500 text-white relative overflow-hidden">
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
            Join Us in Shaping Africa's Energy Future
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Whether you're interested in our solutions, partnership opportunities, or joining our team, we'd love to
            hear from you.
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
              <Link href="/partnerships">Explore Partnerships</Link>
            </GlowingButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
