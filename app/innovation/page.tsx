import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Zap, Database, Globe, Users, Battery } from "lucide-react"

export default function InnovationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Innovation and technology"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Innovation & Technology</Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter md:text-5xl">
              Pioneering the Future of Energy
            </h1>
            <p className="mb-8 text-lg md:text-xl text-gray-200">
              At POWWRR, innovation is at the heart of everything we do. We're constantly pushing the boundaries of
              what's possible in sustainable energy technology.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Culture */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="POWWRR innovation lab"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-green-600 hover:bg-green-700">Our Approach</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">A Culture of Innovation</h2>
              <p className="text-gray-600 mb-6">
                Innovation at POWWRR isn't just about developing new technologies—it's about fostering a culture that
                encourages creative thinking, problem-solving, and continuous improvement. We believe that the best
                solutions emerge when diverse perspectives come together to address complex challenges.
              </p>
              <p className="text-gray-600 mb-6">
                Our innovation process is guided by a deep understanding of the unique energy challenges facing Africa
                and a commitment to developing solutions that are not just technologically advanced but also practical,
                accessible, and culturally appropriate.
              </p>
              <p className="text-gray-600">
                From our state-of-the-art R&D facilities to our collaborative partnerships with leading research
                institutions, we've created an ecosystem that nurtures innovation and accelerates the development of
                transformative energy solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Focus Areas */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Focus Areas</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Our Technology Focus Areas</h2>
            <p className="text-gray-600">
              We're focusing our innovation efforts on key technologies that have the potential to transform Africa's
              energy landscape and drive sustainable development.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="feature-card">
              <CardContent className="p-8">
                <Lightbulb className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Advanced Solar PV</h3>
                <p className="text-gray-600 mb-6">
                  We're pushing the boundaries of solar photovoltaic technology, developing high-efficiency, durable,
                  and cost-effective solar solutions optimized for African conditions.
                </p>
                <p className="text-gray-600">
                  Our research includes bifacial panels, building-integrated PV, flexible solar materials, and
                  specialized coatings that enhance performance in dusty and high-temperature environments.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Battery className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Battery Storage Innovation</h3>
                <p className="text-gray-600 mb-6">
                  Energy storage is critical for reliable renewable energy systems. We're developing advanced battery
                  technologies and storage solutions that are efficient, long-lasting, and sustainable.
                </p>
                <p className="text-gray-600">
                  Our work spans lithium-ion optimization, flow batteries, solid-state technologies, and innovative
                  thermal storage approaches, all designed to address the unique storage needs of African energy
                  systems.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Zap className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">AI-Powered Grid Systems</h3>
                <p className="text-gray-600 mb-6">
                  We're harnessing the power of artificial intelligence to create smarter, more efficient energy grids
                  that can optimize distribution, predict maintenance needs, and integrate diverse energy sources.
                </p>
                <p className="text-gray-600">
                  Our AI systems enable predictive load balancing, fault detection, renewable integration, and
                  autonomous microgrid management, enhancing reliability while reducing costs.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Database className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">IoT Energy Management</h3>
                <p className="text-gray-600 mb-6">
                  Internet of Things (IoT) technology is revolutionizing energy management. We're developing connected
                  devices and systems that enable real-time monitoring, control, and optimization of energy use.
                </p>
                <p className="text-gray-600">
                  From smart meters and sensors to integrated building management systems, our IoT solutions provide
                  unprecedented visibility and control over energy consumption and generation.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Globe className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Sustainable Materials</h3>
                <p className="text-gray-600 mb-6">
                  We're researching and developing sustainable materials and manufacturing processes that reduce
                  environmental impact while enhancing performance and durability.
                </p>
                <p className="text-gray-600">
                  Our materials science team is exploring biodegradable components, recycled materials, and
                  resource-efficient production methods that align with circular economy principles.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Users className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Human-Centered Design</h3>
                <p className="text-gray-600 mb-6">
                  Technology must serve people. We're applying human-centered design principles to create energy
                  solutions that are intuitive, accessible, and aligned with the needs and preferences of users.
                </p>
                <p className="text-gray-600">
                  Our design process involves extensive user research, participatory design sessions, and iterative
                  testing to ensure our solutions truly meet the needs of diverse communities across Africa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* R&D and Global Partnerships */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <Badge className="mb-4 bg-blue-700 hover:bg-blue-800">Collaboration</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">R&D and Global Partnerships</h2>
              <p className="text-gray-600 mb-6">
                Innovation thrives through collaboration. At POWWRR, we've established a global network of partnerships
                with leading research institutions, technology companies, and energy experts to accelerate our
                innovation efforts and bring the best solutions to Africa.
              </p>
              <p className="text-gray-600 mb-6">
                Our R&D facilities serve as hubs for collaborative research, where our team works alongside partners to
                test, refine, and scale new technologies. These partnerships enable us to leverage diverse expertise,
                access cutting-edge research, and accelerate the development of solutions tailored to African contexts.
              </p>
              <p className="text-gray-600">
                Through joint research projects, technology exchanges, and knowledge sharing, we're building a global
                innovation ecosystem that supports our mission of transforming Africa's energy landscape through
                sustainable, accessible solutions.
              </p>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="POWWRR global partnerships"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer/Partner Benefits */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Benefits</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">How Our Innovation Benefits You</h2>
            <p className="text-gray-300">
              Our commitment to innovation translates into tangible benefits for our customers, partners, and
              communities across Africa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Enhanced Performance</h3>
              <p className="text-gray-300">
                Our innovative technologies deliver superior performance, efficiency, and reliability compared to
                conventional solutions, maximizing the value of your energy investment.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Future-Ready Solutions</h3>
              <p className="text-gray-300">
                By staying at the forefront of energy technology, we ensure that our solutions are adaptable,
                upgradable, and prepared for the evolving energy landscape.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Cost Effectiveness</h3>
              <p className="text-gray-300">
                Our innovations focus on reducing costs throughout the product lifecycle, from manufacturing and
                installation to operation and maintenance, making sustainable energy more accessible.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Customized Solutions</h3>
              <p className="text-gray-300">
                Our innovative approach allows us to develop tailored solutions that address the specific needs,
                constraints, and opportunities of different contexts across Africa.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Environmental Sustainability</h3>
              <p className="text-gray-300">
                Our innovations prioritize environmental sustainability, reducing carbon emissions, minimizing resource
                use, and supporting circular economy principles.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Knowledge Transfer</h3>
              <p className="text-gray-300">
                We're committed to sharing knowledge and building local capacity, ensuring that our innovations
                contribute to long-term technological self-reliance across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 max-w-2xl mx-auto">
            Partner with Us in Shaping the Future of Energy
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're interested in accessing our innovative solutions, collaborating on research and development,
            or joining our mission to transform Africa's energy landscape, we'd love to hear from you.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
              <Link href="/contact">Contact Our Innovation Team</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-orange-600">
              <Link href="/partnerships">Explore Partnership Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
