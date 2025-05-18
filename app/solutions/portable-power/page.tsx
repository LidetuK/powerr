import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Battery, Smartphone, Tent, Shield, Sun, Zap } from "lucide-react"

export default function PortablePower() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Portable power devices"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Portable Power & Gadgets</Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter md:text-5xl">
              Innovative Portable Energy Solutions
            </h1>
            <p className="mb-8 text-lg md:text-xl text-gray-200">
              Stay powered on the go with our range of portable energy solutions, from compact chargers to robust power
              stations for outdoor adventures, emergencies, and everyday use.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/quote">Shop Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Learn More</Link>
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
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Power Anywhere, Anytime</h2>
              <p className="text-gray-600 mb-6">
                Do you need reliable power when you're away from the grid? Whether you're camping in the wilderness,
                facing frequent power outages, or simply need to charge your devices on the go, our portable power
                solutions ensure you're never left without energy.
              </p>
              <p className="text-gray-600 mb-6">
                POWWRR's range of portable power gadgets combines innovation with practicality, offering compact,
                efficient, and durable solutions that meet diverse energy needs in any situation.
              </p>
              <p className="text-gray-600">
                Our products are designed specifically for African conditions, ensuring reliability even in challenging
                environments and remote locations.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Portable power station in use"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products/Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Our Products</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">
              Portable Power Solutions for Every Need
            </h2>
            <p className="text-gray-600">
              Explore our range of innovative portable energy products designed to keep you powered wherever you go.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="feature-card">
              <CardContent className="p-8">
                <Battery className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Portable Power Stations</h3>
                <p className="text-gray-600 mb-4">
                  High-capacity power stations that can run multiple devices, from small electronics to appliances,
                  perfect for camping, emergencies, or as backup power.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Multiple output options (AC, DC, USB)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Fast charging capability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Solar charging compatible</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Sun className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Solar Chargers</h3>
                <p className="text-gray-600 mb-4">
                  Portable solar panels that harness the abundant African sunshine to charge your devices directly or
                  power your portable power station.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Foldable, lightweight design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>High-efficiency solar cells</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Weather-resistant construction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Shield className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Emergency Backup Systems</h3>
                <p className="text-gray-600 mb-4">
                  Reliable backup power solutions for homes and small businesses, ensuring essential devices stay
                  powered during outages.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Automatic power switching</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Extended runtime for critical devices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Solar recharging capability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Tent className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Outdoor & Adventure Power</h3>
                <p className="text-gray-600 mb-4">
                  Rugged, weather-resistant power solutions designed specifically for outdoor activities, from camping
                  to safari expeditions.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Durable, all-weather construction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Portable lighting solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Multi-device charging capability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Smartphone className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Mobile Device Chargers</h3>
                <p className="text-gray-600 mb-4">
                  Compact, high-capacity power banks and solar chargers designed specifically for smartphones, tablets,
                  and other small electronics.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Fast-charging technology</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Multiple device charging</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Compact, pocket-sized options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Zap className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Specialized Energy Gadgets</h3>
                <p className="text-gray-600 mb-4">
                  Innovative energy solutions for specific needs, from solar-powered lighting to specialized charging
                  equipment for professional use.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Solar lanterns and lighting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Professional equipment chargers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom energy solutions</span>
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
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Why Choose POWWRR Portable Solutions</h2>
            <p className="text-gray-600">
              Our portable power products are designed with your needs in mind, delivering tangible benefits in any
              situation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Reliability</h3>
              <p className="text-gray-600">
                Our products are rigorously tested to ensure they perform consistently in various conditions, from urban
                environments to remote wilderness. With POWWRR, you can count on your power source when you need it
                most.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Portability</h3>
              <p className="text-gray-600">
                Designed for mobility, our products balance power capacity with compact, lightweight design, making them
                easy to transport and use anywhere. From pocket-sized chargers to carry-friendly power stations, we
                prioritize portability.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Versatility</h3>
              <p className="text-gray-600">
                With multiple output options and charging methods, our portable power solutions can adapt to various
                devices and situations. Whether you're charging a smartphone or powering a small appliance, we've got
                you covered.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Durability</h3>
              <p className="text-gray-600">
                Built to withstand the challenges of African environments, from dust to heat to occasional bumps, our
                products feature robust construction and quality materials that ensure long-term reliability and
                performance.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Sustainability</h3>
              <p className="text-gray-600">
                Our portable power solutions harness renewable energy through solar charging capabilities, reducing
                reliance on grid electricity and minimizing environmental impact while providing clean, reliable power.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Innovation</h3>
              <p className="text-gray-600">
                We continuously incorporate the latest technology advancements into our products, from high-efficiency
                solar cells to advanced battery management systems, ensuring you benefit from cutting-edge energy
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology and Features */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Technology</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Advanced Features & Technology</h2>
            <p className="text-gray-300">
              Our portable power solutions incorporate cutting-edge technology to deliver superior performance and user
              experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Battery Technology</h3>
              <p className="text-gray-300 mb-4">
                We use the latest lithium-ion battery technology with advanced battery management systems that ensure:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Longer battery life and cycle count</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Faster charging capabilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Enhanced safety features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Optimal temperature management</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Solar Technology</h3>
              <p className="text-gray-300 mb-4">
                Our solar charging solutions feature high-efficiency photovoltaic cells that maximize energy harvesting:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Monocrystalline solar panels for maximum efficiency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>MPPT charge controllers for optimal power conversion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Foldable, lightweight designs for portability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Weather-resistant construction for durability</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Connectivity & Control</h3>
              <p className="text-gray-300 mb-4">
                Our advanced products include smart features for enhanced user control and monitoring:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Mobile app integration for remote monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Real-time power usage and battery status</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Customizable power management settings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Firmware updates for continuous improvement</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Output Options</h3>
              <p className="text-gray-300 mb-4">
                Our portable power solutions offer versatile output options to power various devices:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>AC outlets for standard appliances</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>USB-A and USB-C ports with fast charging</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>DC outputs for specialized equipment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Wireless charging capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-green-600 hover:bg-green-700">Applications</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Portable Power for Every Situation</h2>
            <p className="text-gray-600">
              Discover how our portable power solutions can enhance your life in various scenarios.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Use Case 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Camping with portable power"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Outdoor Adventures</h3>
                <p className="text-gray-600 mb-4">
                  Keep your devices charged during camping trips, safaris, and outdoor expeditions. Our rugged power
                  stations and solar chargers ensure you stay connected even in remote locations.
                </p>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Home backup power"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Power Outage Backup</h3>
                <p className="text-gray-600 mb-4">
                  Ensure essential devices stay powered during grid outages. From lighting to communication devices to
                  medical equipment, our backup solutions provide peace of mind.
                </p>
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Mobile office setup"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mobile Office</h3>
                <p className="text-gray-600 mb-4">
                  Power your laptops, phones, and other work equipment when working remotely or on the go. Our portable
                  power stations enable productivity anywhere.
                </p>
              </div>
            </div>

            {/* Use Case 4 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Small business using portable power"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Small Business Continuity</h3>
                <p className="text-gray-600 mb-4">
                  Keep essential business operations running during power outages. From point-of-sale systems to
                  lighting, our solutions help maintain business continuity.
                </p>
              </div>
            </div>

            {/* Use Case 5 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Events and gatherings"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Events & Gatherings</h3>
                <p className="text-gray-600 mb-4">
                  Power sound systems, lighting, and other equipment for outdoor events, gatherings, and ceremonies
                  where grid power isn't available or reliable.
                </p>
              </div>
            </div>

            {/* Use Case 6 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Healthcare applications"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Healthcare Applications</h3>
                <p className="text-gray-600 mb-4">
                  Provide reliable power for medical devices in remote clinics or during emergencies. Our solutions
                  support critical healthcare equipment when it matters most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 max-w-2xl mx-auto">
            Ready to Experience Portable Power Freedom?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explore our range of portable power solutions and find the perfect product for your energy needs.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
              <Link href="/quote">Shop Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-orange-600">
              <Link href="/contact">Request Product Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
