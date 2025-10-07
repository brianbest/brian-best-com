import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { PixelButton } from '@/components/pixel-button'

describe('PixelButton', () => {
  it('renders children correctly', () => {
    render(<PixelButton>Click me</PixelButton>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders with different variants', () => {
    const { rerender } = render(<PixelButton variant="primary">Primary</PixelButton>)
    expect(screen.getByRole('button')).toHaveClass('pixel-button-primary')

    rerender(<PixelButton variant="secondary">Secondary</PixelButton>)
    expect(screen.getByRole('button')).toHaveClass('pixel-button-secondary')

    rerender(<PixelButton variant="outline">Outline</PixelButton>)
    expect(screen.getByRole('button')).toHaveClass('bg-transparent')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<PixelButton size="sm">Small</PixelButton>)
    expect(screen.getByRole('button')).toHaveClass('px-4', 'py-2', 'text-xs')

    rerender(<PixelButton size="md">Medium</PixelButton>)
    expect(screen.getByRole('button')).toHaveClass('px-6', 'py-3', 'text-sm')

    rerender(<PixelButton size="lg">Large</PixelButton>)
    expect(screen.getByRole('button')).toHaveClass('px-8', 'py-4', 'text-base')
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<PixelButton onClick={handleClick}>Click</PixelButton>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('can be disabled', () => {
    const handleClick = jest.fn()
    render(<PixelButton disabled onClick={handleClick}>Disabled</PixelButton>)
    
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('accepts custom className', () => {
    render(<PixelButton className="custom-class">Custom</PixelButton>)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })
})
