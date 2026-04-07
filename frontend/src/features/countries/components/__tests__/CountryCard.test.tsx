import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CountryCard } from '../CountryCard'

vi.mock('next/link', () => ({
  default: ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
    <a href={href} className={className}>{children}</a>
  ),
}))

vi.mock('../FlagImage', () => ({
  FlagImage: ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
    <img src={src} alt={alt} className={className} />
  ),
}))

const mockCountry = {
  name: 'Germany',
  flag: 'https://flagcdn.com/de.svg',
}

describe('CountryCard', () => {
  it('renders the country name', () => {
    render(<CountryCard country={mockCountry} />)

    expect(screen.getByText('Germany')).toBeInTheDocument()
  })

  it('links to the correct country page', () => {
    render(<CountryCard country={mockCountry} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/countries/Germany')
  })

  it('URL-encodes country names with spaces in the link', () => {
    render(<CountryCard country={{ name: 'South Korea', flag: 'https://flagcdn.com/kr.svg' }} />)

    expect(screen.getByRole('link')).toHaveAttribute('href', '/countries/South%20Korea')
  })

  it('renders the flag image with correct src and alt', () => {
    render(<CountryCard country={mockCountry} />)

    const img = screen.getByAltText('Flag of Germany')
    expect(img).toHaveAttribute('src', 'https://flagcdn.com/de.svg')
  })
})