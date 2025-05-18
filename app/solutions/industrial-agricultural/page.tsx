import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Factory, Droplet, Warehouse, Leaf, Sun, BarChart } from "lucide-react"

export default function IndustrialAgricultural() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Industrial solar farm"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Industrial & Agricultural</Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter md:text-5xl">
              Powerful Energy Solutions for Industry & Agriculture
            </h1>
            <p className="mb-8 text-lg md:text-xl text-gray-200">
              Reduce operational costs and environmental impact with our large-scale energy solutions designed for
              industrial facilities and agricultural operations.
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
                Optimize Your Operations with Sustainable Energy
              </h2>
              <p className="text-gray-600 mb-6">
                Are high energy costs and unreliable power affecting your industrial or agricultural operations? Our
                tailored energy solutions address these challenges, providing reliable, cost-effective power that
                enhances productivity and sustainability.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're managing a manufacturing facility, warehouse, farm, or processing plant, POWWRR delivers
                energy systems designed to meet your specific operational requirements and environmental conditions.
              </p>
              <p className="text-gray-600">
                Our solutions are built to withstand the demands of industrial and agricultural environments while
                delivering significant cost savings and environmental benefits.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Industrial solar installation"
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
              Comprehensive Industrial & Agricultural Solutions
            </h2>
            <p className="text-gray-600">
              We offer a wide range of energy solutions tailored to the unique needs of industrial facilities and
              agricultural operations across Africa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="feature-card">
              <CardContent className="p-8">
                <Factory className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Industrial Solar Farms</h3>
                <p className="text-gray-600 mb-4">
                  Large-scale solar installations designed to power manufacturing facilities, processing plants, and
                  industrial complexes.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>MW-scale installations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Ground-mounted or rooftop options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>High-efficiency solar panels</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Droplet className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Agricultural Pumping Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Solar-powered irrigation and water pumping systems that reduce operational costs and increase
                  reliability for farms and agricultural operations.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Solar water pumps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Drip irrigation integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Remote monitoring systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Warehouse className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Manufacturing Energy Systems</h3>
                <p className="text-gray-600 mb-4">
                  Integrated energy solutions for manufacturing facilities, designed to provide reliable power and
                  reduce production costs.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Uninterrupted power supply</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Load management systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Energy-efficient equipment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Leaf className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Greenhouse & Controlled Environment</h3>
                <p className="text-gray-600 mb-4">
                  Energy solutions for greenhouses and controlled environment agriculture, supporting year-round
                  production and climate control.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Climate control systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Lighting and heating solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Automated monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Sun className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Cold Storage & Processing</h3>
                <p className="text-gray-600 mb-4">
                  Reliable energy solutions for agricultural cold storage and processing facilities, ensuring product
                  quality and reducing post-harvest losses.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cold chain solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Processing equipment power</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Backup power systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <BarChart className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Energy Management & Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Advanced systems that monitor and optimize energy usage in industrial and agricultural settings,
                  maximizing efficiency and reducing waste.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Real-time monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Predictive maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Efficiency analytics</span>
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
              Why Choose POWWRR for Industrial & Agricultural Energy
            </h2>
            <p className="text-gray-600">
              Our solutions deliver tangible benefits that improve operational efficiency and sustainability.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">For Industrial Facilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Significant reduction in energy costs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Protection from grid instability and outages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Improved production reliability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Enhanced sustainability credentials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Reduced carbon footprint</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Potential tax incentives and carbon credits</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">For Agricultural Operations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Lower irrigation and operational costs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Reliable water pumping in remote locations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Extended growing seasons with controlled environments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Reduced post-harvest losses with reliable cold storage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Increased crop yields and quality</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Sustainable farming practices and credentials</span>
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
              How We Deliver Industrial & Agricultural Solutions
            </h2>
            <p className="text-gray-300">
              Our comprehensive approach ensures you receive a solution that perfectly meets your operational needs and
              delivers long-term value.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Assessment</h3>
              <p className="text-gray-300">
                We conduct a thorough assessment of your facility, energy needs, operational patterns, and goals.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Engineering & Design</h3>
              <p className="text-gray-300">
                Our engineers design a custom solution optimized for your specific industrial or agricultural
                requirements.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Implementation</h3>
              <p className="text-gray-300">
                We install and integrate your energy system with minimal disruption to your operations.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Monitoring & Support</h3>
              <p className="text-gray-300">
                We provide ongoing monitoring, maintenance, and support to ensure optimal performance and ROI.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href="/quote">Start Your Energy Transformation</Link>
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
              See how our industrial and agricultural energy solutions have transformed operations across Africa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Case Study 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Manufacturing facility solar installation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Manufacturing Plant in Kenya</h3>
                <p className="text-gray-600 mb-4">
                  A textile manufacturing facility reduced energy costs by 60% and eliminated production disruptions
                  with our industrial solar solution.
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
                  alt="Agricultural solar pumping system"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Commercial Farm in Tanzania</h3>
                <p className="text-gray-600 mb-4">
                  A 500-acre farm increased crop yields by 35% and reduced irrigation costs by 70% with our solar
                  pumping system.
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
                  alt="Food processing facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Food Processing in Ghana</h3>
                <p className="text-gray-600 mb-4">
                  A food processing company eliminated product losses due to power outages and reduced energy costs by
                  50% with our integrated solution.
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
            Ready to Optimize Your Industrial or Agricultural Operations?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your energy needs and discover how POWWRR can help you achieve operational
            excellence through sustainable energy.
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
