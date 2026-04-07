'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <h2 className="text-xl font-semibold text-gray-800">Something went wrong</h2>
      <p className="text-gray-500 text-sm">Could not load this country. Please try again.</p>
      <button
        onClick={() => unstable_retry()}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Try again
      </button>
    </div>
  )
}
