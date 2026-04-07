import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import HomeLoading from '../loading'

describe('HomeLoading', () => {
  it('renders without crashing', () => {
    const { container: c } = render(<HomeLoading />)
    expect(c).toBeTruthy()
  })

  it('renders 8 skeleton cards', () => {
    const { container: c } = render(<HomeLoading />)
      
    const skeletonCards = c.querySelectorAll('.h-28')
    expect(skeletonCards).toHaveLength(8)
  })

  it('renders the title skeleton', () => {
    const { container: c } = render(<HomeLoading />)
    const titleSkeleton = c.querySelector('.w-48.h-8')
    expect(titleSkeleton).toBeInTheDocument()
  })
})