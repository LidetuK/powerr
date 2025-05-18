import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">The page you are looking for does not exist.</p>
      <div className="flex gap-4">
        <Link 
          href="/"
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
        >
          Return Home
        </Link>
        <button 
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  )
} 