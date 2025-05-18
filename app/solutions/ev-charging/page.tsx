import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Car, Home, Building, MapPin, Zap, Settings } from "lucide-react"

export default function EVCharging() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="EV charging station"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">EV Charging Systems</Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter md:text-5xl">
              Advanced Electric Vehicle Charging Infrastructure
            </h1>
            <p className="mb-8 text-lg md:text-xl text-gray-200">
              Support the transition to sustainable transportation with our future-ready EV charging solutions for
              residential, commercial, and public spaces.
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
                Powering the Future of Transportation
              </h2>
              <p className="text-gray-600 mb-6">
                Are you looking to support the growing adoption of electric vehicles with reliable charging
                infrastructure? Our EV charging solutions provide the foundation for sustainable transportation, whether
                you're a homeowner, business, property developer, or municipality.
              </p>
              <p className="text-gray-600 mb-6">
                As Africa embraces electric mobility, POWWRR is at the forefront of developing charging infrastructure
                that is reliable, accessible, and future-ready, helping to reduce emissions and dependence on imported
                fuels.
              </p>
              <p className="text-gray-600">
                Our solutions are designed specifically for African contexts, addressing unique challenges while
                providing the charging capabilities needed to support the transition to electric vehicles.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="EV charging station"
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
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Comprehensive EV Charging Solutions</h2>
            <p className="text-gray-600">
              We offer a wide range of EV charging solutions tailored to different settings and requirements across
              Africa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="feature-card">
              <CardContent className="p-8">
                <Home className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Home Charging Stations</h3>
                <p className="text-gray-600 mb-4">
                  Convenient, efficient charging solutions for residential properties, allowing EV owners to charge
                  their vehicles safely and conveniently at home.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Level 2 AC charging</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Solar integration options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Smart charging capabilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Building className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Commercial Charging Hubs</h3>
                <p className="text-gray-600 mb-4">
                  Multi-point charging solutions for businesses, workplaces, and commercial properties, supporting
                  employee, customer, and fleet vehicle charging needs.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Multiple charging points</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Load management systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Access control and billing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <MapPin className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Public Charging Networks</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive public charging infrastructure solutions for municipalities, shopping centers, and
                  public spaces, enabling widespread EV adoption.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Fast charging capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Payment and access systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Network management platform</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Zap className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Solar-Powered EV Charging</h3>
                <p className="text-gray-600 mb-4">
                  Integrated solutions that combine solar power generation with EV charging, reducing grid dependence
                  and ensuring truly sustainable transportation.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Solar canopy integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Battery storage options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Grid-tied or off-grid systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Car className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Fleet Charging Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Specialized charging infrastructure for commercial and public transport fleets, optimized for
                  operational efficiency and vehicle availability.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>High-capacity charging</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Scheduling and management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Depot optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Settings className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Charging Management Systems</h3>
                <p className="text-gray-600 mb-4">
                  Software platforms and management systems that optimize charging operations, user experience, and grid
                  integration.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>User management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Billing and payment processing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Remote monitoring and control</span>
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
              Why Choose POWWRR for EV Charging Infrastructure
            </h2>
            <p className="text-gray-600">
              Our EV charging solutions deliver tangible benefits that support the transition to sustainable
              transportation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">For Property Owners & Businesses</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Attract and retain EV-driving customers and employees</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Generate new revenue streams through charging fees</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Enhance sustainability credentials and brand image</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Increase property value and future-proof your facilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Potential tax incentives and green building certifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Support fleet electrification and reduce operational costs</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">For Communities & Municipalities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Reduce air pollution and improve public health</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Decrease dependence on imported fuels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Create jobs in the green economy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Attract tourism and economic development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Support climate action goals and commitments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Prepare for the future of transportation</span>
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
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">How We Deliver EV Charging Solutions</h2>
            <p className="text-gray-300">
              Our comprehensive approach ensures you receive a charging solution that perfectly meets your needs and
              delivers long-term value.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Needs Assessment</h3>
              <p className="text-gray-300">
                We evaluate your specific requirements, site conditions, electrical capacity, and future growth plans.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Solution Design</h3>
              <p className="text-gray-300">
                Our engineers design a tailored charging solution optimized for your specific location and requirements.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Installation</h3>
              <p className="text-gray-300">
                We handle the complete installation process, from electrical work to commissioning and testing.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
              <p className="text-gray-300">
                We provide maintenance, monitoring, software updates, and support to ensure optimal performance.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href="/quote">Start Your EV Charging Project</Link>
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
              See how our EV charging solutions have supported sustainable transportation across Africa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Case Study 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Shopping center EV charging"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Shopping Center in Cape Town</h3>
                <p className="text-gray-600 mb-4">
                  A 10-point charging hub that increased visitor dwell time by 35% and generated new revenue streams for
                  a major shopping center.
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
                  alt="Municipal EV fleet charging"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Municipal Fleet in Nairobi</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive fleet charging solution that enabled the electrification of 50 municipal vehicles,
                  reducing operational costs by 40%.
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
                  alt="Solar-powered EV charging"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Solar EV Charging Network in Ghana</h3>
                <p className="text-gray-600 mb-4">
                  A network of solar-powered charging stations along a major highway corridor, enabling long-distance EV
                  travel and promoting tourism.
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
            Ready to Support the Electric Vehicle Revolution?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your EV charging needs and discover how POWWRR can help you build the
            infrastructure for sustainable transportation.
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
