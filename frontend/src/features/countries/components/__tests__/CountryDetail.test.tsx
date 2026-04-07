import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CountryDetailView } from '../CountryDetail'

vi.mock('../FlagImage', () => ({
  FlagImage: ({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) => (
    <img src={src} alt={alt} data-priority={priority} />
  ),
}))

const mockCountry = {
  name: 'Germany',
  population: 84270625,
  capital: 'Berlin',
  flag: 'https://flagcdn.com/de.svg',
}

describe('CountryDetailView', () => {
  it('renders the country name in a heading', () => {
    render(<CountryDetailView country={mockCountry} />)

    expect(screen.getByRole('heading', { level: 1, name: 'Germany' })).toBeInTheDocument()
  })

  it('renders the capital', () => {
    render(<CountryDetailView country={mockCountry} />)

    expect(screen.getByText('Berlin')).toBeInTheDocument()
  })

  it('renders the population formatted with toLocaleString', () => {
    render(<CountryDetailView country={mockCountry} />)

    const expected = mockCountry.population.toLocaleString()
    expect(screen.getByText(expected)).toBeInTheDocument()
  })

  it('does not display raw unformatted population number', () => {
    render(<CountryDetailView country={mockCountry} />)
      
    expect(screen.queryByText('84270625')).not.toBeInTheDocument()
  })

  it('renders the flag image with priority', () => {
    render(<CountryDetailView country={mockCountry} />)

    const img = screen.getByAltText('Flag of Germany')
    expect(img).toHaveAttribute('src', 'https://flagcdn.com/de.svg')
    expect(img).toHaveAttribute('data-priority', 'true')
  })
})