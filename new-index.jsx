import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>POWWRR - Sustainable Energy Solutions</title>
        <meta
          name="description"
          content="POWWRR provides innovative sustainable energy solutions for homes, businesses, and infrastructure."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-purple text-white p-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow animate-float">
              Powering a Sustainable Future
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              Innovative energy solutions for homes, businesses, and infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/solutions"
                className="px-8 py-4 bg-white text-purple-700 rounded-lg font-medium hover:bg-gray-100 transition-colors glow"
              >
                Explore Solutions
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-white rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Our Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-700">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <Link
                    href={solution.link}
                    className="text-purple-700 font-medium hover:text-purple-900 transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects / Impact Section */}
        <section className="py-20 bg-white text-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-6">Our Impact</h2>

            {/* Impact Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-purple-50 p-8 rounded-lg text-center">
                <div className="text-5xl font-bold text-purple-700 mb-2">250+ MW</div>
                <p className="text-gray-600">Total Power Installed</p>
              </div>
              <div className="bg-purple-50 p-8 rounded-lg text-center">
                <div className="text-5xl font-bold text-purple-700 mb-2">100,000+</div>
                <p className="text-gray-600">Homes Powered</p>
              </div>
              <div className="bg-purple-50 p-8 rounded-lg text-center">
                <div className="text-5xl font-bold text-purple-700 mb-2">500K tons</div>
                <p className="text-gray-600">CO₂ Emissions Reduced</p>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-center mb-10">Featured Projects</h3>

            {/* Featured Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-300"></div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">Solar Microgrid, Kenya</h4>
                  <p className="text-gray-600 mb-4">
                    Powering 15 villages with sustainable energy, providing electricity to over 5,000 people who
                    previously had no access to power.
                  </p>
                  <Link
                    href="/projects/kenya-microgrid"
                    className="text-purple-700 font-medium hover:text-purple-900 transition-colors"
                  >
                    View Project →
                  </Link>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-300"></div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">Grid Stabilization, South Africa</h4>
                  <p className="text-gray-600 mb-4">
                    A 50MW battery storage system providing critical grid stability and reducing blackouts in
                    high-demand urban areas.
                  </p>
                  <Link
                    href="/projects/south-africa-grid"
                    className="text-purple-700 font-medium hover:text-purple-900 transition-colors"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/projects"
                className="inline-flex items-center bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Explore All Projects →
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Elements Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Trusted Partners</h2>

            {/* Partner Logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm h-20">
                <div className="bg-gray-300 w-32 h-10"></div>
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm h-20">
                <div className="bg-gray-300 w-32 h-10"></div>
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm h-20">
                <div className="bg-gray-300 w-32 h-10"></div>
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm h-20">
                <div className="bg-gray-300 w-32 h-10"></div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-bold text-lg">John Smith</h4>
                    <p className="text-gray-600">CEO, GreenTech Solutions</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "POWWRR's innovative energy solutions have transformed our operations. Their expertise and commitment
                  to sustainability have made them an invaluable partner in our journey toward carbon neutrality."
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-bold text-lg">Sarah Johnson</h4>
                    <p className="text-gray-600">Director, African Development Fund</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The impact of POWWRR's projects in rural communities has been remarkable. They don't just provide
                  energy; they create opportunities for education, healthcare, and economic growth where it's needed
                  most."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Section */}
        <section className="py-20 bg-gradient-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Innovation at Our Core</h2>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              We're constantly pushing the boundaries of what's possible in sustainable energy.
            </p>
            <Link
              href="/innovation"
              className="px-8 py-4 bg-white text-blue-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Discover Our Innovations
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Contact our team to learn how POWWRR can help you achieve your sustainable energy goals.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-purple-700 text-white rounded-lg font-medium hover:bg-purple-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">POWWRR</h3>
              <p className="text-gray-400">Sustainable energy solutions for a brighter future.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/solutions/home-business" className="text-gray-400 hover:text-white transition-colors">
                    Home & Business
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/industrial-agricultural"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Industrial & Agricultural
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/portable-power" className="text-gray-400 hover:text-white transition-colors">
                    Portable Power
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/infrastructure-grid"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Infrastructure & Grid
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/ev-charging" className="text-gray-400 hover:text-white transition-colors">
                    EV Charging
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/innovation" className="text-gray-400 hover:text-white transition-colors">
                    Innovation
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="text-gray-400 hover:text-white transition-colors">
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <address className="text-gray-400 not-italic">
                <p>123 Energy Way</p>
                <p>Sustainable City, SC 12345</p>
                <p className="mt-2">info@powwrr.com</p>
                <p>(123) 456-7890</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} POWWRR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

// Sample solution data
const solutions = [
  {
    title: "Home & Business",
    description: "Energy storage solutions for residential and commercial properties.",
    link: "/solutions/home-business",
  },
  {
    title: "Industrial & Agricultural",
    description: "Powerful systems designed for industrial facilities and agricultural operations.",
    link: "/solutions/industrial-agricultural",
  },
  {
    title: "Portable Power",
    description: "Mobile energy solutions for remote locations and emergency situations.",
    link: "/solutions/portable-power",
  },
  {
    title: "Infrastructure & Grid",
    description: "Large-scale solutions for infrastructure projects and grid stabilization.",
    link: "/solutions/infrastructure-grid",
  },
  {
    title: "EV Charging",
    description: "Fast, efficient charging solutions for electric vehicles.",
    link: "/solutions/ev-charging",
  },
  {
    title: "Custom Solutions",
    description: "Tailored energy systems designed for your specific needs.",
    link: "/contact",
  },
]
