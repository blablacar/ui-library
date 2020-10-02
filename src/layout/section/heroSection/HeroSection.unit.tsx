import React from 'react'

import { render, screen } from '@testing-library/react'

import { HeroSection, HeroSectionProps } from './HeroSection'

function createHeroSectionProps(props: Partial<HeroSectionProps> = {}): HeroSectionProps {
  return {
    heroText: 'hero text',
    heroImageUrlSmall: 'http://heroImageUrlSmall',
    heroImageUrlLarge: 'http://heroImageUrlLarge',
    bottomElement: null,
    ...props,
  }
}

describe('HeroSection', () => {
  describe('illustration', () => {
    it('should render the title', () => {
      const props = createHeroSectionProps()
      render(<HeroSection {...props} />)
      expect(screen.getByText('hero text')).toBeInTheDocument()
    })

    it('should render a search form', () => {
      const props = createHeroSectionProps({
        bottomElement: <div data-testid="bottom-element">Bottom element</div>,
      })

      render(<HeroSection {...props} />)
      expect(screen.getByTestId('bottom-element')).toBeInTheDocument()
    })
  })
})
