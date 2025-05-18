"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-purple-900 text-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4">Oops!</h1>
        <h2 className="text-2xl text-purple-300 mb-6">Something went wrong</h2>
        <p className="mb-8 text-gray-300">
          We apologize for the inconvenience. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-purple-700 hover:bg-purple-600 rounded-md font-medium transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 border border-purple-700 text-purple-300 hover:bg-purple-800 rounded-md font-medium transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}
