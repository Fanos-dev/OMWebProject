import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CountryError from '../error'

describe('CountryError', () => {
  const mockRetry = vi.fn()
  const mockError = new Error('Country fetch failed')

  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    mockRetry.mockReset()
  })

  it('renders the error heading', () => {
    render(<CountryError error={mockError} unstable_retry={mockRetry} />)

    expect(screen.getByRole('heading', { name: 'Something went wrong' })).toBeInTheDocument()
  })

  it('renders the country-specific error message', () => {
    render(<CountryError error={mockError} unstable_retry={mockRetry} />)

    expect(screen.getByText('Could not load this country. Please try again.')).toBeInTheDocument()
  })

  it('logs the error to console.error on mount', () => {
    render(<CountryError error={mockError} unstable_retry={mockRetry} />)

    expect(console.error).toHaveBeenCalledWith(mockError)
  })

  it('calls unstable_retry when the retry button is clicked', async () => {
    render(<CountryError error={mockError} unstable_retry={mockRetry} />)

    await userEvent.click(screen.getByRole('button', { name: 'Try again' }))

    expect(mockRetry).toHaveBeenCalledOnce()
  })
})