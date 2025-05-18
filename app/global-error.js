"use client"

import Link from "next/link"

export default function GlobalError({ error }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-purple-900 text-white p-4">
          <div className="text-center max-w-md">
            <h1 className="text-6xl font-bold mb-4">500</h1>
            <h2 className="text-2xl text-purple-300 mb-6">Server Error</h2>
            <p className="mb-8 text-gray-300">
              We apologize for the inconvenience. Our team has been notified and is working on the issue.
            </p>
            <div className="flex justify-center">
              <Link
                href="/"
                className="px-6 py-3 bg-purple-700 hover:bg-purple-600 rounded-md font-medium transition-colors"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
