import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/placeholder.svg?height=1080&width=1920" alt="POWWRR contact" fill className="object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">Contact Us</Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter md:text-5xl">
              Get in Touch with POWWRR
            </h1>
            <p className="mb-8 text-lg md:text-xl text-gray-200">
              Have questions about our sustainable energy solutions? Ready to start your project? We're here to help.
              Reach out to our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and one of our team members will get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="Enter your first name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email address" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number (Optional)
                  </label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What is your message regarding?" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry or project"
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                You can reach us directly through the following channels or visit our headquarters in Accra, Ghana.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start">
                    <Mail className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Email Us</h3>
                      <p className="text-gray-600 mb-2">For general inquiries:</p>
                      <a href="mailto:info@powwrr.com" className="text-orange-500 hover:text-orange-600">
                        info@powwrr.com
                      </a>
                      <p className="text-gray-600 mt-2 mb-2">For support:</p>
                      <a href="mailto:support@powwrr.com" className="text-orange-500 hover:text-orange-600">
                        support@powwrr.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start">
                    <Phone className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Call Us</h3>
                      <p className="text-gray-600 mb-2">Main Office:</p>
                      <a href="tel:+233123456789" className="text-orange-500 hover:text-orange-600">
                        +233 12 345 6789
                      </a>
                      <p className="text-gray-600 mt-2 mb-2">Customer Service:</p>
                      <a href="tel:+233987654321" className="text-orange-500 hover:text-orange-600">
                        +233 98 765 4321
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start">
                    <MapPin className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Visit Us</h3>
                      <p className="text-gray-600 mb-2">POWWRR Headquarters:</p>
                      <address className="not-italic text-gray-600">
                        123 Energy Avenue
                        <br />
                        Accra Business District
                        <br />
                        Accra, Ghana
                      </address>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start">
                    <Clock className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Business Hours</h3>
                      <p className="text-gray-600 mb-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600 mb-1">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-green-600 hover:bg-green-700">Our Location</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Find Us on the Map</h2>
            <p className="text-gray-600">
              Our headquarters is conveniently located in the heart of Accra, Ghana. We welcome you to visit us to
              discuss your energy needs in person.
            </p>
          </div>

          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=1000&width=2000&text=Interactive+Map"
              alt="POWWRR headquarters location map"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">FAQs</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our services, solutions, and processes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">How quickly can you implement a solution?</h3>
                <p className="text-gray-600">
                  Implementation timelines vary based on the complexity and scale of the project. Small residential
                  installations can be completed in as little as 1-2 weeks, while larger commercial or infrastructure
                  projects may take several months. We'll provide a detailed timeline during the consultation phase.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Do you offer financing options?</h3>
                <p className="text-gray-600">
                  Yes, we offer various financing options including leasing, power purchase agreements (PPAs), and
                  partnerships with financial institutions. Our team can help you identify the best financing solution
                  for your specific situation and needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">What areas do you serve?</h3>
                <p className="text-gray-600">
                  POWWRR operates throughout Africa, with a primary focus on West and East African countries. We have
                  completed projects in Ghana, Kenya, Tanzania, Nigeria, South Africa, and several other nations. For
                  specific inquiries about your location, please contact our team.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">What maintenance is required for your systems?</h3>
                <p className="text-gray-600">
                  Our systems are designed for minimal maintenance, but regular check-ups ensure optimal performance. We
                  offer comprehensive maintenance packages that include routine inspections, cleaning, and performance
                  monitoring. Most of our solutions come with remote monitoring capabilities.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see your question answered here? Contact us directly and we'll be happy to help.
            </p>
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link href="/contact">Ask Your Question</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 max-w-2xl mx-auto">
            Ready to Start Your Sustainable Energy Journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your energy needs and discover how POWWRR can help you achieve your
            sustainability goals.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
              <Link href="/quote">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-orange-600">
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
