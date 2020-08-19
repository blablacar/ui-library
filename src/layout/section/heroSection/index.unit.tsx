import React from 'react'

import { render, screen } from '@testing-library/react'

import { HeroSection, HeroSectionProps } from './heroSection'

function createProps(props: Partial<HeroSectionProps> = {}): HeroSectionProps {
  return {
    heroText: 'hero text',
    heroDescription: 'hero description',
    heroImageUrl: 'http://heroImageUrl',
    ...props,
  }
}

describe('HeroSection', () => {
  it('should render the title', () => {
    const props = createProps()
    render(<HeroSection {...props} />)
    expect(screen.getByText(props.heroText)).toBeInTheDocument()
  })

  it('should render the desciption', () => {
    const props = createProps()
    render(<HeroSection {...props} />)
    expect(screen.getByText(props.heroDescription)).toBeInTheDocument()
  })

  it('should render a search form', () => {
    const props = createProps({
      bottomElement: <div data-testid="bottom-element">Bottom element</div>,
    })

    render(<HeroSection {...props} />)
    expect(screen.getByTestId(props.bottomElement.props['data-testid'])).toBeInTheDocument()
  })
})
