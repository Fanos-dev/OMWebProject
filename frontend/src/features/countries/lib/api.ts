import type { CountrySummary, CountryDetail } from '../types'

const BASE = process.env.BACKEND_API_URL ?? 'http://localhost:8081'

export async function getCountries(): Promise<CountrySummary[]> {
  const res = await fetch(`${BASE}/countries`)
  if (!res.ok) throw new Error(`Failed to fetch countries: ${res.status}`)
  return res.json()
}

export async function getCountry(name: string): Promise<CountryDetail | null> {
  const res = await fetch(`${BASE}/countries/${encodeURIComponent(name)}`)
  if (res.status === 404) return null
  if (!res.ok) throw new Error(`Failed to fetch country "${name}": ${res.status}`)
  return res.json()
}
