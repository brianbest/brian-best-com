import React from 'react'
import { render, screen } from '@testing-library/react'
import { PixelBadge } from '@/components/pixel-badge'

describe('PixelBadge', () => {
  it('renders children correctly', () => {
    render(<PixelBadge>Badge text</PixelBadge>)
    expect(screen.getByText('Badge text')).toBeInTheDocument()
  })

  it('renders with default variant', () => {
    render(<PixelBadge>Default</PixelBadge>)
    const badge = screen.getByText('Default')
    expect(badge).toHaveClass('pixel-badge')
    expect(badge).toHaveClass('border-accent', 'text-accent')
  })

  it('renders with primary variant', () => {
    render(<PixelBadge variant="primary">Primary</PixelBadge>)
    const badge = screen.getByText('Primary')
    expect(badge).toHaveClass('border-primary', 'text-primary')
  })

  it('renders with secondary variant', () => {
    render(<PixelBadge variant="secondary">Secondary</PixelBadge>)
    const badge = screen.getByText('Secondary')
    expect(badge).toHaveClass('border-secondary', 'text-secondary')
  })

  it('renders with success variant', () => {
    render(<PixelBadge variant="success">Success</PixelBadge>)
    const badge = screen.getByText('Success')
    expect(badge).toHaveClass('border-pixel-success', 'text-pixel-success')
  })

  it('renders with warning variant', () => {
    render(<PixelBadge variant="warning">Warning</PixelBadge>)
    const badge = screen.getByText('Warning')
    expect(badge).toHaveClass('border-pixel-warning', 'text-pixel-warning')
  })

  it('renders with error variant', () => {
    render(<PixelBadge variant="error">Error</PixelBadge>)
    const badge = screen.getByText('Error')
    expect(badge).toHaveClass('border-pixel-error', 'text-pixel-error')
  })

  it('accepts custom className', () => {
    render(<PixelBadge className="custom-class">Badge</PixelBadge>)
    expect(screen.getByText('Badge')).toHaveClass('custom-class')
  })
})
