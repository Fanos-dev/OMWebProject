import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import NotFound from '../not-found'

vi.mock('next/link', () => ({
  default: ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
    <a href={href} className={className}>{children}</a>
  ),
}))

describe('NotFound', () => {
  it('renders the not found heading', () => {
    render(<NotFound />)

    expect(screen.getByRole('heading', { name: 'Country not found' })).toBeInTheDocument()
  })

  it('renders the descriptive message', () => {
    render(<NotFound />)

    expect(screen.getByText('There is no country with that name in our records.')).toBeInTheDocument()
  })

  it('renders a link back to the home page', () => {
    render(<NotFound />)

    const link = screen.getByRole('link', { name: 'Back to all countries' })
    expect(link).toHaveAttribute('href', '/')
  })
})