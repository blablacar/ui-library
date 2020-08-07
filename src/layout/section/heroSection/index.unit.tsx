import React from 'react'

import { render, screen } from '@testing-library/react'

import { HeroSection, HeroSectionProps } from './heroSection'

function createProps(props: Partial<HeroSectionProps>): HeroSectionProps {
  return {
    heroText: 'hero text',
    heroImageUrl: 'http://heroImageUrl.small',
    bottomElement: <div data-testid="bottom-element">Bottom element</div>,
    ...props,
  }
}

describe('HeroSection', () => {
  it('should render basic hero section', () => {
    const props = createProps({})

    const { container } = render(<HeroSection {...props} />)
    // Not using `getByRole('heading')` to make sure that the tag used is h1 for SEO purposes
    expect(container.querySelector('h1')).toHaveTextContent(props.heroText)
    expect(screen.getByTestId(props.bottomElement.props['data-testid'])).toBeInTheDocument()
  })
})
