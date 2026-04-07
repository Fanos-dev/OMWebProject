import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import CountryLoading from '../loading'

describe('CountryLoading', () => {
  it('renders without crashing', () => {
    const { container } = render(<CountryLoading />)
    expect(container).toBeTruthy()
  })

  it('renders the flag placeholder', () => {
    const { container } = render(<CountryLoading />)
    const flagSkeleton = container.querySelector('.h-60')
    expect(flagSkeleton).toBeInTheDocument()
  })

  it('renders three text field skeletons', () => {
    const { container } = render(<CountryLoading />)
    const textSkeletons = container.querySelectorAll('.animate-pulse')
      
    expect(textSkeletons.length).toBeGreaterThanOrEqual(4)
  })
})