export default function Loading() {
  return (
    <div className="max-w-sm mx-auto flex flex-col items-center gap-6">
      <div className="w-full h-60 bg-gray-200 rounded-lg animate-pulse" />
      <div className="w-full space-y-3">
        <div className="w-48 h-7 bg-gray-200 rounded animate-pulse" />
        <div className="w-36 h-5 bg-gray-200 rounded animate-pulse" />
        <div className="w-40 h-5 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  )
}
