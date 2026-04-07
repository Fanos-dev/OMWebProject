export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCountry } from '@/features/countries/lib/api'
import { CountryDetailView } from '@/features/countries/components/CountryDetail'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>
}): Promise<Metadata> {
  const { name } = await params
  const country = await getCountry(decodeURIComponent(name))
  return {
    title: country ? `${country.name}` : 'Country not found',
  }
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params
  const country = await getCountry(decodeURIComponent(name))

  if (!country) notFound()

  return (
    <>
      <Link
        href="/"
        className="text-sm text-blue-600 hover:underline mb-6 inline-block"
      >
        Back to all countries
      </Link>
      <CountryDetailView country={country} />
    </>
  )
}