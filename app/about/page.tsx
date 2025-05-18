import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/placeholder.svg?height=1080&width=1920" alt="POWWRR team" fill className="object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">About Us</Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter md:text-5xl">
              Powering Africa's Sustainable Future
            </h1>
            <p className="mb-8 text-lg md:text-xl text-gray-200">
              POWWRR is dedicated to transforming Africa's energy landscape through innovative, sustainable solutions
              that empower communities and drive economic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Origin Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="POWWRR origin story"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-green-600 hover:bg-green-700">Our Story</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">The POWWRR Journey</h2>
              <p className="text-gray-600 mb-6">
                Founded with a vision to address Africa's energy challenges, POWWRR began as a small initiative focused
                on bringing reliable power to underserved communities. What started as a mission to provide basic
                lighting solutions has evolved into a comprehensive energy company offering everything from portable
                power gadgets to large-scale infrastructure projects.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey has been guided by a deep understanding of the unique energy needs across Africa and a
                commitment to developing solutions that are not just innovative but also sustainable and accessible.
                Through strategic partnerships and continuous innovation, we have expanded our reach and impact,
                transforming the energy landscape one community at a time.
              </p>
              <p className="text-gray-600">
                Today, POWWRR stands as a leader in sustainable energy solutions, backed by the visionary leadership of
                His Royal Highness Thee Royal Warrior Osagyefo Torgbi Kiti'Kata I, whose commitment to African
                development has been the driving force behind our growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <Badge className="mb-4 bg-blue-700 hover:bg-blue-800">Leadership</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Royal Visionary Leadership</h2>
              <p className="text-gray-600 mb-6">
                His Royal Highness Thee Royal Warrior Osagyefo Torgbi Kiti'Kata I brings a unique blend of traditional
                wisdom and modern vision to POWWRR. With a deep commitment to sustainable development and a passion for
                leveraging technology to address Africa's challenges, he has been instrumental in shaping POWWRR's
                mission and strategic direction.
              </p>
              <p className="text-gray-600 mb-6 italic">
                "Energy is the lifeblood of development. By providing sustainable, reliable energy solutions, we are not
                just powering devices; we are powering dreams, ambitions, and the future of Africa."
              </p>
              <p className="text-gray-600">
                Under his guidance, POWWRR has established strategic partnerships with global technology leaders,
                expanded its product portfolio, and extended its reach across Africa and beyond, all while maintaining a
                steadfast commitment to sustainability and community empowerment.
              </p>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="His Royal Highness Thee Royal Warrior Osagyefo Torgbi Kiti'Kata I"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Our Foundation</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Mission, Vision & Values</h2>
            <p className="text-gray-600">
              Our mission, vision, and values form the foundation of everything we do at POWWRR, guiding our decisions,
              actions, and growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-orange-500 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-orange-100">
                  Deliver innovative and reliable energy solutions that empower homes, businesses, and nations across
                  Africa and the globe.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-green-100">
                  To lead the sustainable energy transformation of Africa, backed by innovation, partnership, and the
                  leadership of His Royal Highness Thee Royal Warrior Osagyefo Torgbi Kiti'Kata I.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-700 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Innovation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Reliability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sustainability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Empowerment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Integrity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Excellence</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commitment to African Development */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="African development projects"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-green-600 hover:bg-green-700">Our Commitment</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Empowering African Development</h2>
              <p className="text-gray-300 mb-6">
                At POWWRR, our commitment to African development goes beyond providing energy solutions. We believe in
                the transformative power of sustainable energy to drive economic growth, improve quality of life, and
                create opportunities for communities across the continent.
              </p>
              <p className="text-gray-300 mb-6">
                Through our projects and initiatives, we are addressing key challenges such as energy access,
                reliability, and affordability, while also contributing to skills development, job creation, and
                technology transfer.
              </p>
              <p className="text-gray-300 mb-6">
                We work closely with local communities, governments, and partners to ensure that our solutions are not
                only technologically advanced but also culturally appropriate and aligned with local development
                priorities.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/projects">View Our Impact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team or Leadership (Optional) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Our Team</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Leadership Team</h2>
            <p className="text-gray-600">
              Our diverse team of experts brings together decades of experience in energy, technology, business, and
              community development.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Leadership profiles would go here */}
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Team Member ${index}`}
                    alt={`Team Member ${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Executive Name</h3>
                <p className="text-gray-500 mb-3">Position Title</p>
                <p className="text-gray-600 max-w-xs mx-auto">
                  Brief description of experience and expertise in the energy sector.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 max-w-2xl mx-auto">
            Join Us in Powering Africa's Sustainable Future
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're looking for energy solutions, partnership opportunities, or want to be part of our journey,
            we'd love to hear from you.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-orange-600">
              <Link href="/partnerships">Explore Partnerships</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
