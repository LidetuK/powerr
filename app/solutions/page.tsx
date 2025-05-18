import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Sun, Factory, Battery, Zap, Car } from "lucide-react"

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="POWWRR energy solutions"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Our Solutions</Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter md:text-5xl">
              Comprehensive Energy Solutions for Every Need
            </h1>
            <p className="mb-8 text-lg md:text-xl text-gray-200">
              From portable power gadgets to large-scale infrastructure projects, POWWRR offers a wide range of
              sustainable energy solutions designed to meet the diverse needs of individuals, businesses, and
              communities.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Explore Our Energy Solutions</h2>
            <p className="text-gray-600">
              At POWWRR, we offer a comprehensive range of energy solutions designed to address various needs and
              challenges. From individual consumers to large enterprises and governments, our solutions are tailored to
              deliver reliable, sustainable, and innovative energy.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Home & Business Card */}
            <Card className="feature-card">
              <CardHeader>
                <div className="relative h-48 w-full mb-4 rounded-t-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Home & Business Installations"
                    fill
                    className="object-cover"
                  />
                </div>
                <Sun className="h-10 w-10 text-orange-500 mb-2" />
                <CardTitle>Home & Business Installations</CardTitle>
                <CardDescription>Solar solutions for residential and commercial properties</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Custom solar installations that reduce energy costs and carbon footprint for homes and businesses. Our
                  solutions range from rooftop solar panels to integrated energy management systems.
                </p>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• Residential solar systems</li>
                  <li>• Commercial installations</li>
                  <li>• Energy storage solutions</li>
                  <li>• Smart energy management</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                  <Link href="/solutions/home-business">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Industrial & Agricultural Card */}
            <Card className="feature-card">
              <CardHeader>
                <div className="relative h-48 w-full mb-4 rounded-t-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Industrial & Agricultural Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
                <Factory className="h-10 w-10 text-orange-500 mb-2" />
                <CardTitle>Industrial & Agricultural</CardTitle>
                <CardDescription>Large-scale energy solutions for industrial and agricultural sectors</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Powerful energy systems designed to meet the high demands of industrial facilities and agricultural
                  operations, reducing operational costs and environmental impact.
                </p>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• Industrial solar farms</li>
                  <li>• Agricultural pumping solutions</li>
                  <li>• Manufacturing energy systems</li>
                  <li>• Warehouse & facility solutions</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                  <Link href="/solutions/industrial-agricultural">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Portable Power Card */}
            <Card className="feature-card">
              <CardHeader>
                <div className="relative h-48 w-full mb-4 rounded-t-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Portable Power & Gadgets"
                    fill
                    className="object-cover"
                  />
                </div>
                <Battery className="h-10 w-10 text-orange-500 mb-2" />
                <CardTitle>Portable Power & Gadgets</CardTitle>
                <CardDescription>Innovative portable energy solutions for everyday use</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Compact, efficient power solutions for on-the-go energy needs, from camping to emergency backup. Our
                  portable products combine innovation with practicality.
                </p>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• Portable power stations</li>
                  <li>• Solar chargers</li>
                  <li>• Emergency backup systems</li>
                  <li>• Outdoor & adventure power</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                  <Link href="/solutions/portable-power">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Infrastructure & Grid Card */}
            <Card className="feature-card">
              <CardHeader>
                <div className="relative h-48 w-full mb-4 rounded-t-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Infrastructure & Grid Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
                <Zap className="h-10 w-10 text-orange-500 mb-2" />
                <CardTitle>Infrastructure & Grid</CardTitle>
                <CardDescription>Comprehensive grid and infrastructure solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced grid technologies and infrastructure solutions for communities and nations. We help build the
                  backbone of sustainable energy systems.
                </p>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• Microgrid development</li>
                  <li>• Smart grid technology</li>
                  <li>• Community power systems</li>
                  <li>• Grid modernization</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                  <Link href="/solutions/infrastructure-grid">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* EV Charging Card */}
            <Card className="feature-card">
              <CardHeader>
                <div className="relative h-48 w-full mb-4 rounded-t-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="EV Charging Systems"
                    fill
                    className="object-cover"
                  />
                </div>
                <Car className="h-10 w-10 text-orange-500 mb-2" />
                <CardTitle>EV Charging Systems</CardTitle>
                <CardDescription>Advanced electric vehicle charging infrastructure</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Future-ready EV charging solutions for residential, commercial, and public spaces. Supporting the
                  transition to sustainable transportation.
                </p>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• Home charging stations</li>
                  <li>• Commercial charging hubs</li>
                  <li>• Public charging networks</li>
                  <li>• Solar-powered EV charging</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                  <Link href="/solutions/ev-charging">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Custom Solutions Card */}
            <Card className="feature-card bg-gray-900 text-white">
              <CardHeader>
                <CardTitle>Custom Energy Solutions</CardTitle>
                <CardDescription className="text-gray-300">
                  Tailored solutions for unique energy challenges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Don't see exactly what you need? Our team of experts can design custom energy solutions to address
                  your specific challenges and requirements.
                </p>
                <p className="text-gray-300">
                  From unique geographical considerations to specialized industry needs, we have the expertise to
                  develop innovative solutions that deliver results.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Benefits */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-green-600 hover:bg-green-700">Benefits</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">The POWWRR Advantage</h2>
            <p className="text-gray-600">
              Our solutions are designed with your needs in mind, delivering tangible benefits that make a real
              difference.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Cost Savings</h3>
              <p className="text-gray-600">
                Reduce energy costs with efficient, renewable solutions that provide long-term savings and return on
                investment.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Reliability</h3>
              <p className="text-gray-600">
                Enjoy consistent, dependable power with solutions designed for durability and performance in African
                conditions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Sustainability</h3>
              <p className="text-gray-600">
                Reduce your carbon footprint and contribute to a cleaner environment with renewable energy solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Scalability</h3>
              <p className="text-gray-600">
                Start small and expand as needed with modular solutions that grow with your energy requirements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Innovation</h3>
              <p className="text-gray-600">
                Access cutting-edge technology and stay ahead with solutions that incorporate the latest advancements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Expert Support</h3>
              <p className="text-gray-600">
                Benefit from our team's expertise and ongoing support throughout the lifecycle of your energy solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 max-w-2xl mx-auto">
            Ready to Find Your Perfect Energy Solution?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team today to discuss your energy needs and discover how POWWRR can help you achieve your goals.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-orange-600">
              <Link href="/quote">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
