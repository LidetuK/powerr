import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Filter, MapPin, Calendar, CheckCircle } from "lucide-react"

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/placeholder.svg?height=1080&width=1920" alt="POWWRR projects" fill className="object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Projects & Case Studies</Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter md:text-5xl">
              Transforming Africa Through Sustainable Energy
            </h1>
            <p className="mb-8 text-lg md:text-xl text-gray-200">
              Explore our portfolio of successful projects and discover how POWWRR's innovative energy solutions are
              making a real difference across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Project Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Filter className="h-5 w-5 text-gray-500 mr-2" />
              <span className="font-medium">Filter Projects:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="text-sm">
                All Projects
              </Button>
              <Button variant="outline" className="text-sm">
                Home & Business
              </Button>
              <Button variant="outline" className="text-sm">
                Industrial
              </Button>
              <Button variant="outline" className="text-sm">
                Infrastructure
              </Button>
              <Button variant="outline" className="text-sm">
                EV Charging
              </Button>
              <Button variant="outline" className="text-sm">
                Portable Power
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-green-600 hover:bg-green-700">Featured Projects</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Spotlight on Impact</h2>
            <p className="text-gray-600">
              These featured projects showcase the breadth and impact of POWWRR's sustainable energy solutions across
              different contexts and scales.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Featured Project 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Rural Electrification Project"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-blue-600">Infrastructure</Badge>
                  <Badge className="bg-gray-600">Microgrid</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2">Rural Electrification in Tanzania</h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm mr-4">Mwanza Region, Tanzania</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">Completed 2023</span>
                </div>
                <p className="text-gray-600 mb-6">
                  A comprehensive rural electrification project that brought reliable, renewable energy to 15 villages
                  and over 5,000 residents through an innovative solar-powered microgrid system with battery storage.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Impact Highlights:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>5,000+ residents with first-time electricity access</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>30+ new businesses established</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>500 tons of CO2 emissions avoided annually</span>
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                  <Link href="/projects/rural-electrification-tanzania">
                    View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Featured Project 2 */}
            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Commercial Solar Installation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-green-600">Industrial</Badge>
                  <Badge className="bg-gray-600">Manufacturing</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2">Manufacturing Facility in Kenya</h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm mr-4">Nairobi, Kenya</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">Completed 2022</span>
                </div>
                <p className="text-gray-600 mb-6">
                  A large-scale solar installation with battery backup for a major textile manufacturing facility,
                  reducing energy costs and ensuring production continuity during grid outages.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Impact Highlights:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>60% reduction in energy costs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Zero production downtime due to power outages</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>1,200 tons of CO2 emissions avoided annually</span>
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                  <Link href="/projects/manufacturing-facility-kenya">
                    View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Project Gallery</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Explore Our Projects</h2>
            <p className="text-gray-600">
              Browse through our diverse portfolio of successful energy projects across Africa, showcasing our
              comprehensive range of sustainable solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Residential Solar Project"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge>Home & Business</Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">Residential Solar in Ghana</h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">Accra, Ghana</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Solar installation for a residential community, providing reliable power and reducing electricity
                  costs for 50 homes.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-orange-500">
                  <Link href="/projects/residential-solar-ghana">
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="EV Charging Network"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge>EV Charging</Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">Urban EV Charging Network</h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">Cape Town, South Africa</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive EV charging infrastructure across Cape Town, supporting the city's transition to
                  electric mobility.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-orange-500">
                  <Link href="/projects/ev-charging-cape-town">
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Agricultural Solar Pumping"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge>Industrial & Agricultural</Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">Agricultural Solar Pumping</h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">Dodoma, Tanzania</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Solar-powered irrigation system for a 500-acre farm, increasing crop yields and reducing operational
                  costs.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-orange-500">
                  <Link href="/projects/agricultural-solar-tanzania">
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Hotel Energy System"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge>Home & Business</Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">Luxury Hotel Energy System</h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">Zanzibar, Tanzania</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive energy solution for a luxury resort, combining solar, storage, and smart energy
                  management.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-orange-500">
                  <Link href="/projects/hotel-energy-zanzibar">
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Project 5 */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Community Microgrid"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge>Infrastructure & Grid</Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">Island Microgrid System</h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">Cape Verde</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Hybrid renewable energy system for a remote island, reducing diesel consumption by 85% and providing
                  24/7 power.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-orange-500">
                  <Link href="/projects/island-microgrid-cape-verde">
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Project 6 */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Portable Power Distribution"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge>Portable Power</Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">Emergency Relief Power</h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">Mozambique</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Deployment of portable power stations and solar chargers for communities affected by Cyclone Idai,
                  supporting relief efforts.
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-orange-500">
                  <Link href="/projects/emergency-relief-mozambique">
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href="/projects/all">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Map */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-blue-700 hover:bg-blue-800">Our Reach</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">POWWRR Projects Across Africa</h2>
            <p className="text-gray-600">
              Explore our project locations across the continent and see how POWWRR is powering progress throughout
              Africa.
            </p>
          </div>

          <div className="relative h-[600px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=1200&width=2000&text=Interactive+Project+Map"
              alt="POWWRR project map of Africa"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-green-600 hover:bg-green-700">Testimonials</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">What Our Clients Say</h2>
            <p className="text-gray-600">
              Hear from those who have experienced the transformative impact of POWWRR's sustainable energy solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <Card className="bg-white p-8">
              <CardContent className="p-0">
                <div className="mb-6">
                  <p className="text-gray-600 italic">
                    "The solar installation by POWWRR has completely transformed our business. We've reduced our energy
                    costs by 70% and no longer worry about power outages disrupting our operations. The team was
                    professional, knowledgeable, and delivered exactly what they promised."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Client portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah Mensah</h4>
                    <p className="text-sm text-gray-500">Business Owner, Ghana</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-white p-8">
              <CardContent className="p-0">
                <div className="mb-6">
                  <p className="text-gray-600 italic">
                    "As a municipal leader, I was skeptical about the feasibility of a community microgrid. POWWRR not
                    only proved it was possible but delivered a system that has brought reliable electricity to our
                    village for the first time. The impact on education, healthcare, and local businesses has been
                    remarkable."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Client portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Joseph Mwangi</h4>
                    <p className="text-sm text-gray-500">Community Leader, Kenya</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-white p-8">
              <CardContent className="p-0">
                <div className="mb-6">
                  <p className="text-gray-600 italic">
                    "The solar pumping system installed by POWWRR has revolutionized our farming operations. We've
                    increased our irrigated land by 40% while eliminating fuel costs and maintenance headaches. The
                    system has paid for itself in just 18 months and continues to exceed our expectations."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Client portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Amina Diallo</h4>
                    <p className="text-sm text-gray-500">Farm Manager, Tanzania</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 max-w-2xl mx-auto">
            Ready to Start Your Energy Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how POWWRR can help you achieve your sustainable energy goals with solutions
            tailored to your specific needs.
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
