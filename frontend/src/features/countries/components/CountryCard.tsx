import Link from 'next/link'
import { FlagImage } from './FlagImage'
import type { CountrySummary } from '../types'

type Props = {
  country: CountrySummary
}

export function CountryCard({ country }: Props) {
  return (
    <Link
      href={`/countries/${encodeURIComponent(country.name)}`}
      className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow"
    >
      <FlagImage
        src={country.flag}
        alt={`Flag of ${country.name}`}
        className="rounded object-cover w-full h-28"
      />
      <span className="text-sm font-medium text-gray-700 text-center">
        {country.name}
      </span>
    </Link>
  )
}
