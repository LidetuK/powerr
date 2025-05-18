import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Lightbulb, TrendingUp, Building, Users, HandMetal } from "lucide-react"

export default function PartnershipsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Business partnership"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Partnerships</Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter md:text-5xl">
              Strategic Partnerships for Sustainable Energy
            </h1>
            <p className="mb-8 text-lg md:text-xl text-gray-200">
              At POWWRR, we believe that transformative change happens through collaboration. Join us in our mission to
              power Africa's sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner with POWWRR */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <Badge className="mb-4 bg-green-600 hover:bg-green-700">Why Partner With Us</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">The POWWRR Partnership Advantage</h2>
              <p className="text-gray-600 mb-6">
                Partnering with POWWRR means joining forces with a visionary leader in sustainable energy solutions
                across Africa. Our partnerships are built on mutual respect, shared values, and a common commitment to
                driving positive change through innovative energy solutions.
              </p>
              <p className="text-gray-600 mb-6">
                We bring to our partnerships deep expertise in energy technologies, extensive market knowledge, and a
                strong network across Africa. Our royal leadership provides unique insights and access to key
                stakeholders, while our commitment to sustainability ensures that our partnerships create lasting
                positive impact.
              </p>
              <p className="text-gray-600">
                Whether you're a technology provider, distributor, investor, or community organization, partnering with
                POWWRR opens doors to new opportunities, markets, and collaborative innovations that address Africa's
                energy challenges.
              </p>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="POWWRR partnership meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Partnerships */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Partnership Types</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Explore Partnership Opportunities</h2>
            <p className="text-gray-600">
              We offer various types of partnerships tailored to different organizations and objectives, all united by
              our shared commitment to sustainable energy solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="feature-card">
              <CardContent className="p-8">
                <Lightbulb className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Technology Partnerships</h3>
                <p className="text-gray-600 mb-6">
                  Collaborate with us to integrate, adapt, or develop innovative energy technologies tailored to African
                  contexts and needs.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Joint R&D initiatives</li>
                  <li>• Technology licensing</li>
                  <li>• Product integration</li>
                  <li>• Testing and validation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Globe className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Distribution Partnerships</h3>
                <p className="text-gray-600 mb-6">
                  Join our network of distributors and resellers to bring POWWRR's sustainable energy solutions to new
                  markets and customers across Africa.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Authorized distributorships</li>
                  <li>• Value-added reselling</li>
                  <li>• Service partnerships</li>
                  <li>• Market expansion</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <HandMetal className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Project Partnerships</h3>
                <p className="text-gray-600 mb-6">
                  Collaborate on specific energy projects, from community microgrids to large-scale infrastructure
                  initiatives across the continent.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Joint project development</li>
                  <li>• EPC partnerships</li>
                  <li>• Public-private partnerships</li>
                  <li>• Community energy initiatives</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <TrendingUp className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Investment Partnerships</h3>
                <p className="text-gray-600 mb-6">
                  Invest in the future of sustainable energy in Africa through various investment opportunities with
                  POWWRR.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Project financing</li>
                  <li>• Strategic investments</li>
                  <li>• Impact investing</li>
                  <li>• Green bonds and financing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Building className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Institutional Partnerships</h3>
                <p className="text-gray-600 mb-6">
                  Collaborate with us on research, policy development, and capacity building to advance sustainable
                  energy across Africa.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Research collaborations</li>
                  <li>• Policy advocacy</li>
                  <li>• Knowledge exchange</li>
                  <li>• Training and education</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent className="p-8">
                <Users className="h-10 w-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Community Partnerships</h3>
                <p className="text-gray-600 mb-6">
                  Work with us to develop community-based energy solutions that empower local populations and drive
                  sustainable development.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Community ownership models</li>
                  <li>• Social enterprise development</li>
                  <li>• Skills development</li>
                  <li>• Sustainable livelihoods</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ideal Partner Profile */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="POWWRR ideal partners"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-blue-700 hover:bg-blue-800">Ideal Partners</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Our Ideal Partner Profile</h2>
              <p className="text-gray-600 mb-6">
                While we're open to diverse partnerships, we find that the most successful collaborations share certain
                characteristics. Our ideal partners typically:
              </p>
              <ul className="space-y-4 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-2">•</span>
                  <span>
                    <strong>Share our values:</strong> A commitment to sustainability, innovation, integrity, and
                    empowering African communities
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-2">•</span>
                  <span>
                    <strong>Bring complementary strengths:</strong> Expertise, resources, or market access that
                    complements POWWRR's capabilities
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-2">•</span>
                  <span>
                    <strong>Think long-term:</strong> A vision for sustainable impact and growth beyond short-term gains
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-2">•</span>
                  <span>
                    <strong>Embrace innovation:</strong> Willingness to explore new approaches and technologies
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold mr-2">•</span>
                  <span>
                    <strong>Value cultural context:</strong> Appreciation for the diverse cultural, social, and economic
                    contexts across Africa
                  </span>
                </li>
              </ul>
              <p className="text-gray-600">
                If this sounds like your organization, we'd love to explore potential collaboration opportunities with
                you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Our Process</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Partnership Engagement Process</h2>
            <p className="text-gray-300">
              We've developed a clear, structured process for establishing and nurturing successful partnerships.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Initial Engagement</h3>
              <p className="text-gray-300">
                Contact us to express interest and share information about your organization and partnership goals.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Exploration & Alignment</h3>
              <p className="text-gray-300">
                We'll discuss potential collaboration areas, assess alignment, and identify mutual benefits.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Partnership Design</h3>
              <p className="text-gray-300">
                Together, we'll develop a structured partnership framework with clear objectives, roles, and metrics.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Implementation & Growth</h3>
              <p className="text-gray-300">
                We'll launch our collaboration, monitor progress, and continuously seek ways to enhance our partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form or CTA */}
      <section className="py-16 md:py-24 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 max-w-2xl mx-auto">
            Ready to Explore Partnership Opportunities?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our partnerships team today to discuss how we can collaborate to drive sustainable energy solutions
            across Africa.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
              <Link href="/contact">Contact Our Partnerships Team</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-orange-600">
              <Link href="/contact">Request Partnership Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
