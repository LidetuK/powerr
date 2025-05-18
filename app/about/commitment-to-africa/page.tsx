"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import AnimatedBackground from "@/components/animated-background"
import AnimatedText from "@/components/animated-text"
import GlowingButton from "@/components/glowing-button"
import AnimatedCard from "@/components/animated-card"
import AnimatedCounter from "@/components/animated-counter"
import { ArrowRight, Globe, Lightbulb, Users, Zap, BookOpen, Briefcase, GraduationCap } from "lucide-react"

export default function CommitmentToAfricaPage() {
  return (
    <>
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/placeholder.svg?height=1080&width=1920" alt="African landscape" fill className="object-cover" />
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
              text="Our Commitment to Africa"
              className="mb-6 text-4xl font-bold leading-tight tracking-tighter md:text-5xl gradient-text"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-8 text-lg md:text-xl text-gray-200"
            >
              Dedicated to empowering communities, driving sustainable development, and transforming Africa's energy
              landscape.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vision for Africa */}
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
                <Globe className="h-8 w-8 text-orange-500 mr-3" />
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl gradient-text">Our Vision for Africa</h2>
              </div>
              <p className="text-gray-300 mb-6">
                At POWWRR, our commitment to Africa goes beyond providing energy solutions. We envision a continent
                where reliable, sustainable energy is the foundation for economic growth, improved quality of life, and
                environmental stewardship.
              </p>
              <p className="text-gray-300 mb-6">
                We believe that Africa's energy challenges present unique opportunities for innovation and
                transformation. Rather than simply replicating models from other regions, we're developing solutions
                specifically designed for African contexts, addressing unique challenges such as dispersed populations,
                diverse environments, and varying resource availability.
              </p>
              <p className="text-gray-300">
                Our approach is guided by a deep respect for local knowledge and traditions, combined with cutting-edge
                technology and global best practices. We're committed to working in partnership with communities,
                governments, and organizations across the continent to create energy systems that are not just
                technically sound but also socially and culturally appropriate.
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
                alt="African energy landscape"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50 mix-blend-overlay"></div>

              {/* Map elements */}
              <motion.div
                className="absolute top-10 left-10 bg-white/10 backdrop-blur-md p-4 rounded-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <span className="text-orange-500 font-bold">West Africa</span>
              </motion.div>
              <motion.div
                className="absolute top-1/3 right-10 bg-white/10 backdrop-blur-md p-4 rounded-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-orange-500 font-bold">East Africa</span>
              </motion.div>
              <motion.div
                className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md p-4 rounded-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
              >
                <span className="text-orange-500 font-bold">Southern Africa</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
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
              <Badge className="mb-4 bg-green-600 hover:bg-green-700">Focus Areas</Badge>
            </motion.div>
            <AnimatedText
              text="Our Key Focus Areas"
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
              We're focusing our efforts on five key areas that we believe are critical to transforming Africa's energy
              landscape.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedCard delay={0.1}>
              <Zap className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Energy Access</h3>
              <p className="text-gray-300 mb-4">
                Expanding access to reliable, affordable energy for underserved communities through innovative off-grid
                and mini-grid solutions.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Solar home systems for rural households</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Community microgrids with local ownership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Pay-as-you-go financing models</span>
                </li>
              </ul>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <Briefcase className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Economic Development</h3>
              <p className="text-gray-300 mb-4">
                Leveraging energy solutions to drive economic growth, create jobs, and support entrepreneurship across
                the continent.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Productive use applications for agriculture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Energy for small and medium enterprises</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Local manufacturing and assembly</span>
                </li>
              </ul>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <GraduationCap className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Skills Development</h3>
              <p className="text-gray-300 mb-4">
                Building local capacity through training, education, and knowledge transfer in renewable energy
                technologies.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Technical training programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>University partnerships and scholarships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Youth engagement in STEM</span>
                </li>
              </ul>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <Lightbulb className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Innovation & Research</h3>
              <p className="text-gray-300 mb-4">
                Investing in Africa-focused research and development to create solutions tailored to local contexts and
                needs.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>R&D centers in key African countries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Collaborative research with local institutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Innovation challenges and incubation</span>
                </li>
              </ul>
            </AnimatedCard>

            <AnimatedCard delay={0.5}>
              <BookOpen className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Policy & Advocacy</h3>
              <p className="text-gray-300 mb-4">
                Working with governments and organizations to create enabling environments for sustainable energy
                adoption and growth.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Policy development support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Regulatory framework advocacy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Public-private partnerships</span>
                </li>
              </ul>
            </AnimatedCard>

            <AnimatedCard delay={0.6}>
              <Users className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Community Empowerment</h3>
              <p className="text-gray-300 mb-4">
                Ensuring that communities are active participants in their energy future through ownership models and
                inclusive approaches.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Community-owned energy systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Inclusive decision-making processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Energy literacy and education</span>
                </li>
              </ul>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Our Impact</Badge>
            </motion.div>
            <AnimatedText
              text="Measuring Our Impact Across Africa"
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
              We track our progress and impact through measurable outcomes that reflect our commitment to sustainable
              development in Africa.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              className="text-center bg-white/5 backdrop-blur-sm p-8 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
              }}
            >
              <AnimatedCounter end={15} suffix="+" className="text-5xl font-bold mb-2 gradient-text" />
              <p className="text-xl mb-2">African Countries</p>
              <p className="text-gray-300 text-sm">Where we have active projects and operations</p>
            </motion.div>

            <motion.div
              className="text-center bg-white/5 backdrop-blur-sm p-8 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
              }}
            >
              <AnimatedCounter end={500} suffix="+" className="text-5xl font-bold mb-2 gradient-text" />
              <p className="text-xl mb-2">Local Jobs Created</p>
              <p className="text-gray-300 text-sm">Direct employment in technical and support roles</p>
            </motion.div>

            <motion.div
              className="text-center bg-white/5 backdrop-blur-sm p-8 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
              }}
            >
              <AnimatedCounter end={100} suffix="K+" className="text-5xl font-bold mb-2 gradient-text" />
              <p className="text-xl mb-2">Lives Impacted</p>
              <p className="text-gray-300 text-sm">Through access to clean, reliable energy</p>
            </motion.div>

            <motion.div
              className="text-center bg-white/5 backdrop-blur-sm p-8 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
              }}
            >
              <AnimatedCounter end={50} suffix="K+" className="text-5xl font-bold mb-2 gradient-text" />
              <p className="text-xl mb-2">Tons of CO₂</p>
              <p className="text-gray-300 text-sm">Annual emissions avoided through our solutions</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnerships for Africa */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <AnimatedBackground className="opacity-30" />
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
                alt="African partnerships"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 mix-blend-overlay"></div>

              {/* Partnership elements */}
              <motion.div
                className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-3 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Globe className="h-8 w-8 text-blue-400" />
              </motion.div>
              <motion.div
                className="absolute top-1/3 left-10 bg-white/10 backdrop-blur-md p-3 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                <Users className="h-8 w-8 text-green-400" />
              </motion.div>
              <motion.div
                className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md p-3 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
              >
                <Lightbulb className="h-8 w-8 text-yellow-400" />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-orange-500 mr-3" />
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl gradient-text">Partnerships for Africa</h2>
              </div>
              <p className="text-gray-300 mb-6">
                We recognize that transforming Africa's energy landscape requires collaboration. That's why we've
                established strategic partnerships with a diverse range of organizations across the continent and
                globally.
              </p>
              <p className="text-gray-300 mb-6">
                Our partners include African governments, international development agencies, research institutions,
                local NGOs, and private sector companies. Together, we're pooling resources, expertise, and networks to
                accelerate the deployment of sustainable energy solutions.
              </p>
              <p className="text-gray-300 mb-6">
                These partnerships enable us to leverage complementary strengths, share risks, and maximize impact. They
                also ensure that our work is aligned with national development priorities and integrated with broader
                initiatives to address Africa's energy challenges.
              </p>
              <GlowingButton asChild className="mt-4" glowColor="blue">
                <Link href="/partnerships">
                  Explore Our Partnerships <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </GlowingButton>
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
            Join Us in Transforming Africa's Energy Future
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Whether you're interested in our solutions, partnership opportunities, or supporting our mission, we invite
            you to be part of Africa's sustainable energy journey.
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
              <Link href="/projects">Explore Our Projects</Link>
            </GlowingButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
