export default function Loading() {
  return (
    <>
      <div className="w-48 h-8 bg-gray-200 rounded animate-pulse mb-6" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-200 bg-white"
          >
            <div className="w-full h-28 bg-gray-200 rounded animate-pulse" />
            <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </>
  )
}
