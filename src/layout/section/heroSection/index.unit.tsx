import React from 'react'

import { render, screen } from '@testing-library/react'

import HeroSection, { HeroSectionProps } from './heroSection'

function createProps(props: Partial<HeroSectionProps>): HeroSectionProps {
  return {
    heroText: 'hero text',
    heroDescription: 'hero description',
    heroImageUrlLarge: 'http://heroImageUrl',
    ...props,
  }
}

describe('HeroSection', () => {
  it('should render basic hero section', () => {
    const props = createProps({
      heroImageUrl: 'http://heroImageUrl',
      buttonText: 'button text',
      buttonHref: 'http://buttonhref',
    })

    render(<HeroSection {...props} />)

    expect(screen.getByText(props.heroText)).toBeInTheDocument()
    expect(screen.getByText(props.heroDescription)).toBeInTheDocument()
    expect(screen.getByText(props.buttonText)).toHaveAttribute('href', props.buttonHref)
  })

  it('should render a search form', () => {
    const props = createProps({
      bottomElement: <div data-testid="bottom-element">Bottom element</div>,
    })

    render(<HeroSection {...props} />)
    expect(screen.getByTestId(props.bottomElement.props['data-testid'])).toBeInTheDocument()
  })
})
