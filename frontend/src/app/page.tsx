export const dynamic = 'force-dynamic'

import { CountryGrid } from '@/features/countries/components/CountryGrid'

export default function HomePage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Countries</h1>
      <CountryGrid />
    </>
  )
}
