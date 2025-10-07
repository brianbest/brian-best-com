import React from 'react'
import { render, screen } from '@testing-library/react'
import { 
  PixelCard, 
  PixelCardHeader, 
  PixelCardTitle, 
  PixelCardDescription, 
  PixelCardContent,
  PixelCardFooter 
} from '@/components/pixel-card'

describe('PixelCard', () => {
  it('renders card with children', () => {
    render(
      <PixelCard>
        <div>Card content</div>
      </PixelCard>
    )
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('applies hoverable class by default', () => {
    const { container } = render(<PixelCard>Content</PixelCard>)
    expect(container.firstChild).toHaveClass('pixel-card')
  })

  it('can disable hover effects', () => {
    const { container } = render(<PixelCard hoverable={false}>Content</PixelCard>)
    expect(container.firstChild).toHaveClass('pixel-card')
  })

  it('renders PixelCardHeader', () => {
    render(
      <PixelCard>
        <PixelCardHeader>Header</PixelCardHeader>
      </PixelCard>
    )
    expect(screen.getByText('Header')).toBeInTheDocument()
  })

  it('renders PixelCardTitle', () => {
    render(
      <PixelCard>
        <PixelCardTitle>Title</PixelCardTitle>
      </PixelCard>
    )
    const title = screen.getByText('Title')
    expect(title).toBeInTheDocument()
    expect(title).toHaveClass('font-pixel')
  })

  it('renders PixelCardDescription', () => {
    render(
      <PixelCard>
        <PixelCardDescription>Description</PixelCardDescription>
      </PixelCard>
    )
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('renders complete card structure', () => {
    render(
      <PixelCard>
        <PixelCardHeader>
          <PixelCardTitle>Card Title</PixelCardTitle>
          <PixelCardDescription>Card Description</PixelCardDescription>
        </PixelCardHeader>
        <PixelCardContent>
          <p>Card content goes here</p>
        </PixelCardContent>
        <PixelCardFooter>
          <button>Action</button>
        </PixelCardFooter>
      </PixelCard>
    )

    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Card Description')).toBeInTheDocument()
    expect(screen.getByText('Card content goes here')).toBeInTheDocument()
    expect(screen.getByText('Action')).toBeInTheDocument()
  })
})
