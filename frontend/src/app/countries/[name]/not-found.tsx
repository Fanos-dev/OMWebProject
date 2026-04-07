import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <h2 className="text-xl font-semibold text-gray-800">Country not found</h2>
      <p className="text-gray-500 text-sm">
        There is no country with that name in our records.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Back to all countries
      </Link>
    </div>
  )
}
