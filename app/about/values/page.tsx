"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import AnimatedBackground from "@/components/animated-background"
import AnimatedText from "@/components/animated-text"
import GlowingButton from "@/components/glowing-button"
import AnimatedCard from "@/components/animated-card"
import { Lightbulb, Shield, Users, Zap, Globe, CheckCircle, Heart } from "lucide-react"

export default function ValuesPage() {
  return (
    <>
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/placeholder.svg?height=1080&width=1920" alt="POWWRR values" fill className="object-cover" />
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
              text="Our Core Values"
              className="mb-6 text-4xl font-bold leading-tight tracking-tighter md:text-5xl gradient-text"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-8 text-lg md:text-xl text-gray-200"
            >
              The principles that guide our decisions, shape our culture, and define our approach to sustainable energy
              solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values Introduction */}
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
                <Heart className="h-8 w-8 text-orange-500 mr-3" />
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl gradient-text">Our Values</h2>
              </div>
              <p className="text-gray-300 mb-6">
                At POWWRR, our values are more than just words on a page—they're the foundation of everything we do.
                They guide our interactions with customers, partners, and communities, and they shape the solutions we
                develop and deliver.
              </p>
              <p className="text-gray-300 mb-6">
                These core principles reflect our commitment to not just providing energy solutions, but doing so in a
                way that respects people, communities, and the planet. They embody our belief that how we achieve our
                goals is just as important as the goals themselves.
              </p>
              <p className="text-gray-300">
                Our values were established by our founder, His Royal Highness Thee Royal Warrior Osagyefo Torgbi
                Kiti'Kata I, and have remained constant even as our company has grown and evolved. They serve as our
                compass, ensuring that we stay true to our mission and vision as we work to transform Africa's energy
                landscape.
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
                alt="POWWRR team values"
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
                <Lightbulb className="h-8 w-8 text-yellow-500" />
              </motion.div>
              <motion.div
                className="absolute top-1/3 left-10 bg-white/10 backdrop-blur-md p-4 rounded-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                <Shield className="h-8 w-8 text-green-500" />
              </motion.div>
              <motion.div
                className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md p-4 rounded-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
              >
                <Users className="h-8 w-8 text-blue-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <AnimatedBackground className="opacity-50" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-green-600 hover:bg-green-700">Core Principles</Badge>
            </motion.div>
            <AnimatedText
              text="The Principles That Guide Us"
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
              These seven core values define who we are and how we operate at POWWRR.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                  "We constantly seek new and better ways to address energy challenges, embracing creativity and forward-thinking in everything we do.",
                color: "text-yellow-500",
              },
              {
                icon: Shield,
                title: "Integrity",
                description:
                  "We operate with honesty, transparency, and ethical standards that earn the trust of our customers, partners, and communities.",
                color: "text-green-500",
              },
              {
                icon: Users,
                title: "Empowerment",
                description:
                  "We believe in enabling individuals and communities to take control of their energy future through access, education, and participation.",
                color: "text-blue-500",
              },
              {
                icon: Zap,
                title: "Excellence",
                description:
                  "We strive for the highest standards in our products, services, and operations, continuously improving and exceeding expectations.",
                color: "text-orange-500",
              },
              {
                icon: Globe,
                title: "Sustainability",
                description:
                  "We are committed to environmental stewardship, developing solutions that meet present needs without compromising future generations.",
                color: "text-teal-500",
              },
              {
                icon: CheckCircle,
                title: "Reliability",
                description:
                  "We deliver dependable solutions and stand behind our commitments, recognizing that energy is a critical resource that demands consistency.",
                color: "text-purple-500",
              },
              {
                icon: Heart,
                title: "Compassion",
                description:
                  "We approach our work with empathy and understanding, recognizing the human impact of energy access and tailoring our solutions accordingly.",
                color: "text-red-500",
              },
            ].map((value, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <value.icon className={`h-12 w-12 ${value.color} mb-4`} />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Living Our Values</Badge>
            </motion.div>
            <AnimatedText
              text="Our Values in Action"
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
              See how our core values translate into tangible actions and outcomes in our daily operations.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(255, 138, 0, 0.2)",
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-orange-500">Innovation in Practice</h3>
              <p className="text-gray-300 mb-4">
                Our commitment to innovation is evident in our R&D investments, which represent 15% of our annual
                budget. We maintain partnerships with leading research institutions and run an internal innovation lab
                where team members can develop and test new ideas.
              </p>
              <p className="text-gray-300">
                Recent innovations include our adaptive solar tracking system that increases energy capture by 30% and
                our AI-powered energy management platform that optimizes consumption patterns for maximum efficiency.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(255, 138, 0, 0.2)",
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-green-500">Integrity in Practice</h3>
              <p className="text-gray-300 mb-4">
                We maintain transparent pricing and clear communication about the capabilities and limitations of our
                products. Our contracts are written in plain language, and we provide comprehensive training to ensure
                customers understand their energy systems.
              </p>
              <p className="text-gray-300">
                We've implemented a strict code of conduct for all employees and partners, with zero tolerance for
                corruption or unethical practices. Our annual ethics audit is conducted by an independent third party
                and published publicly.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(255, 138, 0, 0.2)",
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-500">Empowerment in Practice</h3>
              <p className="text-gray-300 mb-4">
                We've trained over 500 local technicians across Africa, creating sustainable employment while ensuring
                communities have the skills to maintain their energy systems. Our community ownership models allow
                villages to collectively own and manage their microgrids.
              </p>
              <p className="text-gray-300">
                Our education programs have reached 10,000+ students, teaching energy literacy and inspiring the next
                generation of renewable energy innovators. We provide scholarships for promising students to pursue
                energy-related studies.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(255, 138, 0, 0.2)",
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-teal-500">Sustainability in Practice</h3>
              <p className="text-gray-300 mb-4">
                We've implemented a circular economy approach to our products, with take-back programs for batteries and
                solar panels at end-of-life. Our manufacturing facilities are powered by 100% renewable energy, and we
                offset any unavoidable carbon emissions.
              </p>
              <p className="text-gray-300">
                Our solutions have collectively prevented over 50,000 tons of CO2 emissions annually. We conduct
                environmental impact assessments for all major projects and work to enhance biodiversity around our
                installations.
              </p>
            </motion.div>
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
            Experience Our Values in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Discover how our commitment to these core principles translates into exceptional energy solutions and
            positive impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center"
          >
            <GlowingButton asChild size="lg" className="bg-white text-orange-500 hover:bg-gray-100" glowColor="blue">
              <Link href="/projects">Explore Our Projects</Link>
            </GlowingButton>
            <GlowingButton
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-orange-600"
              glowColor="orange"
            >
              <Link href="/contact">Contact Us</Link>
            </GlowingButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
