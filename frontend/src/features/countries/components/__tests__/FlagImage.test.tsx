import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FlagImage } from '../FlagImage'

vi.mock('next/image', () => ({
  default: ({ src, alt, className, priority, width, height }: {
    src: string
    alt: string
    className?: string
    priority?: boolean
    width: number
    height: number
  }) => (
    <img src={src} alt={alt} className={className} data-priority={priority} width={width} height={height} />
  ),
}))

describe('FlagImage', () => {
  it('renders an image with the correct src and alt', () => {
    render(<FlagImage src="https://flagcdn.com/de.svg" alt="Flag of Germany" />)

    const img = screen.getByAltText('Flag of Germany')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://flagcdn.com/de.svg')
  })

  it('applies className when provided', () => {
    render(<FlagImage src="https://flagcdn.com/de.svg" alt="Flag of Germany" className="rounded w-full" />)

    expect(screen.getByAltText('Flag of Germany')).toHaveAttribute('class', 'rounded w-full')
  })

  it('passes priority when provided', () => {
    render(<FlagImage src="https://flagcdn.com/de.svg" alt="Flag of Germany" priority />)

    expect(screen.getByAltText('Flag of Germany')).toHaveAttribute('data-priority', 'true')
  })

  it('renders without optional props', () => {
    render(<FlagImage src="https://flagcdn.com/fr.svg" alt="Flag of France" />)

    const img = screen.getByAltText('Flag of France')
    expect(img).toBeInTheDocument()
    expect(img).not.toHaveAttribute('class')
  })
})