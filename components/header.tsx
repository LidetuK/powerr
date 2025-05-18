"use client"

import React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const solutions = [
  {
    title: "Home & Business Installations",
    href: "/solutions/home-business",
    description: "Solar solutions for residential and commercial properties",
  },
  {
    title: "Industrial & Agricultural",
    href: "/solutions/industrial-agricultural",
    description: "Large-scale energy solutions for industrial and agricultural sectors",
  },
  {
    title: "Portable Power & Gadgets",
    href: "/solutions/portable-power",
    description: "Innovative portable energy solutions for everyday use",
  },
  {
    title: "Infrastructure & Grid",
    href: "/solutions/infrastructure-grid",
    description: "Comprehensive grid and infrastructure solutions",
  },
  {
    title: "EV Charging Systems",
    href: "/solutions/ev-charging",
    description: "Advanced electric vehicle charging infrastructure",
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm dark:bg-gray-950/95" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SFjWzaQn3iSVUATkt2r1JUBtLRVilR.png"
            alt="POWWRR Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1">
                    <ListItem title="Our Story & Vision" href="/about/story-vision">
                      Learn about our origins and our vision for the future
                    </ListItem>
                    <ListItem title="Values" href="/about/values">
                      Discover the core values that drive everything we do
                    </ListItem>
                    <ListItem title="Commitment to Africa" href="/about/commitment-to-africa">
                      Explore our dedication to sustainable development across Africa
                    </ListItem>
                    <ListItem title="About Overview" href="/about" className="col-span-full">
                      Get a complete overview of POWWRR
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {solutions.map((solution) => (
                      <ListItem key={solution.title} title={solution.title} href={solution.href}>
                        {solution.description}
                      </ListItem>
                    ))}
                    <ListItem title="Solutions Overview" href="/solutions" className="col-span-full">
                      Explore our complete range of sustainable energy solutions
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/innovation" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Innovation</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/partnerships" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Partnerships</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Projects</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild className="bg-orange-500 hover:bg-orange-600">
            <Link href="/quote">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white dark:bg-gray-950 md:hidden">
          <div className="container flex flex-col space-y-4 py-6">
            <div className="py-2">
              <div className="text-lg font-medium">About Us</div>
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <Link
                  href="/about/story-vision"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Story & Vision
                </Link>
                <Link
                  href="/about/values"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Values
                </Link>
                <Link
                  href="/about/commitment-to-africa"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Commitment to Africa
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Overview
                </Link>
              </div>
            </div>
            <div className="py-2">
              <div className="text-lg font-medium">Solutions</div>
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                {solutions.map((solution) => (
                  <Link
                    key={solution.title}
                    href={solution.href}
                    className="text-muted-foreground hover:text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {solution.title}
                  </Link>
                ))}
                <Link
                  href="/solutions"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solutions Overview
                </Link>
              </div>
            </div>
            <Link href="/innovation" className="py-2 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              Innovation
            </Link>
            <Link href="/partnerships" className="py-2 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              Partnerships
            </Link>
            <Link href="/projects" className="py-2 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/contact" className="py-2 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Button asChild className="mt-4 w-full bg-orange-500 hover:bg-orange-600">
              <Link href="/quote" onClick={() => setMobileMenuOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
