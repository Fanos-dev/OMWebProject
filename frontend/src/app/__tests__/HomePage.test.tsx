import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import HomePage from '../page'

vi.mock('@/features/countries/components/CountryGrid', () => ({
  CountryGrid: () => <div data-testid="country-grid" />,
}))

describe('HomePage', () => {
  it('renders the Countries heading', () => {
    render(<HomePage />)

    expect(screen.getByRole('heading', { level: 1, name: 'Countries' })).toBeInTheDocument()
  })

  it('renders the CountryGrid component', () => {
    render(<HomePage />)

    expect(screen.getByTestId('country-grid')).toBeInTheDocument()
  })
})