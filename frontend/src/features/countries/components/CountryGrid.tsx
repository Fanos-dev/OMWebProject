import { getCountries } from '../lib/api'
import { CountryCard } from './CountryCard'

export async function CountryGrid() {
  const countries = await getCountries()
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </div>
  )
}
