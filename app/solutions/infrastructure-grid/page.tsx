import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Zap, Network, Building, Users, BarChart, Shield } from "lucide-react"

export default function InfrastructureGrid() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Energy grid infrastructure"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Infrastructure & Grid</Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter md:text-5xl">
              Advanced Grid & Infrastructure Solutions
            </h1>
            <p className="mb-8 text-lg md:text-xl text-gray-200">
              Build the backbone of sustainable energy systems with our comprehensive grid and infrastructure solutions
              for communities and nations.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/quote">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Request Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Audience-focused Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <Badge className="mb-4 bg-green-600 hover:bg-green-700">Benefits</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">
                Transforming Energy Infrastructure for a Sustainable Future
              </h2>
              <p className="text-gray-600 mb-6">
                Are you facing challenges with unreliable grid infrastructure, energy access limitations, or the need to
                integrate renewable energy sources? Our comprehensive infrastructure and grid solutions address these
                challenges, providing reliable, sustainable, and future-ready energy systems.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're a government entity, utility company, community developer, or organization seeking to
                improve energy infrastructure, POWWRR delivers tailored solutions that meet your specific needs and
                conditions.
              </p>
              <p className="text-gray-600">
                Our solutions are designed specifically for African contexts, addressing unique challenges while
                leveraging abundant renewable resources to create resilient, efficient energy systems.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Smart grid infrastructure"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services/Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Our Services</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">
              Comprehensive Infrastructure Solutions
            </h2>
            <p className="text-gray-600">
              We offer a wide range of infrastructure and grid solutions tailored to the unique energy needs of
              communities and nations across Africa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="feature-card">
              <CardContent className="p-8">
                <Network className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Microgrid Development</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive microgrid solutions that combine generation, storage, and distribution to create
                  self-sufficient energy systems for communities and facilities.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Hybrid renewable energy integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Battery storage systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Intelligent control systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Zap className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Smart Grid Technology</h3>
                <p className="text-gray-600 mb-4">
                  Advanced grid technologies that enhance reliability, efficiency, and flexibility through intelligent
                  monitoring, control, and automation.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Advanced metering infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Distribution automation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Demand response systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Users className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Community Power Systems</h3>
                <p className="text-gray-600 mb-4">
                  Tailored energy solutions for villages, towns, and communities, providing reliable power while
                  promoting local ownership and sustainability.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Community-owned energy models</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Pay-as-you-go systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Scalable infrastructure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Building className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Grid Modernization</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive solutions to upgrade existing grid infrastructure, improving reliability, efficiency,
                  and the integration of renewable energy sources.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Infrastructure upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Renewable integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Digital transformation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <BarChart className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Energy Management Systems</h3>
                <p className="text-gray-600 mb-4">
                  Sophisticated software and hardware solutions that optimize energy generation, distribution, and
                  consumption across grid infrastructure.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Real-time monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Predictive analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Load balancing systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Shield className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Grid Security & Resilience</h3>
                <p className="text-gray-600 mb-4">
                  Solutions that enhance the security, reliability, and resilience of energy infrastructure against
                  physical and cyber threats, as well as natural disasters.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cybersecurity solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Physical security measures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Disaster recovery systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-green-600 hover:bg-green-700">Benefits</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">
              Why Choose POWWRR for Infrastructure & Grid Solutions
            </h2>
            <p className="text-gray-600">
              Our infrastructure and grid solutions deliver tangible benefits that transform energy systems and
              communities.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">For Communities & Nations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Increased energy access and reliability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Reduced energy costs and dependence on imported fuels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Job creation and economic development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Environmental benefits and reduced carbon emissions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Enhanced energy security and independence</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Improved quality of life and social services</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">For Utilities & Developers</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Reduced operational costs and maintenance requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Improved grid stability and power quality</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Enhanced ability to integrate renewable energy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Better data for planning and decision-making</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Reduced losses and improved revenue collection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Future-ready infrastructure with scalability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology and Process */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Our Approach</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">
              How We Deliver Infrastructure & Grid Solutions
            </h2>
            <p className="text-gray-300">
              Our comprehensive approach ensures you receive a solution that perfectly meets your infrastructure needs
              and delivers long-term value.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Assessment & Planning</h3>
              <p className="text-gray-300">
                We conduct thorough assessments of existing infrastructure, energy needs, resources, and goals to
                develop a comprehensive plan.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Engineering & Design</h3>
              <p className="text-gray-300">
                Our engineers design custom infrastructure solutions optimized for your specific requirements and local
                conditions.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Implementation</h3>
              <p className="text-gray-300">
                We deploy and integrate infrastructure components with minimal disruption, ensuring quality and
                compliance with standards.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Operation & Support</h3>
              <p className="text-gray-300">
                We provide ongoing monitoring, maintenance, training, and support to ensure optimal performance and
                sustainability.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href="/quote">Start Your Infrastructure Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Examples */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-green-600 hover:bg-green-700">Case Studies</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Success Stories</h2>
            <p className="text-gray-600">
              See how our infrastructure and grid solutions have transformed communities and energy systems across
              Africa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Case Study 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Rural microgrid project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Rural Microgrid in Tanzania</h3>
                <p className="text-gray-600 mb-4">
                  A solar-powered microgrid system providing reliable electricity to 5,000 residents and businesses in a
                  previously unelectrified rural community.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-orange-500">
                  <Link href="/projects">
                    Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Smart grid implementation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Smart Grid in Nairobi</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive grid modernization project that reduced outages by 60% and improved energy efficiency
                  by 30% in a major urban district.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-orange-500">
                  <Link href="/projects">
                    Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Community energy project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Island Energy System in Cape Verde</h3>
                <p className="text-gray-600 mb-4">
                  A hybrid renewable energy system combining solar, wind, and battery storage that reduced diesel
                  consumption by 85% on a remote island.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-orange-500">
                  <Link href="/projects">
                    Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 max-w-2xl mx-auto">
            Ready to Transform Your Energy Infrastructure?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your infrastructure and grid needs and discover how POWWRR can help you build a
            sustainable energy future.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
              <Link href="/quote">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-orange-600">
              <Link href="/contact">Request Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
