import { FlagImage } from './FlagImage'
import type { CountryDetail } from '../types'

type Props = {
  country: CountryDetail
}

export function CountryDetailView({ country }: Props) {
  return (
    <div className="max-w-sm mx-auto flex flex-col items-center gap-6">
      <FlagImage
        src={country.flag}
        alt={`Flag of ${country.name}`}
        className="rounded-lg shadow w-full"
        priority
      />
      <div className="w-full space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">{country.name}</h1>
        <p className="text-gray-600">
          <span className="font-semibold">Capital: </span>
          {country.capital}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Population: </span>
          {country.population.toLocaleString()}
        </p>
      </div>
    </div>
  )
}
