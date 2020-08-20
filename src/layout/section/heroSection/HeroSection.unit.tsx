import React from 'react'

import { render, screen } from '@testing-library/react'

import { BusHeroSectionProps, HeroSection, HomeHeroSectionProps } from './HeroSection'

function createHomeProps(props: Partial<HomeHeroSectionProps> = {}): HomeHeroSectionProps {
  return {
    heroText: 'hero text',
    heroImageUrlSmall: 'http://heroImageUrlSmall',
    heroImageUrlLarge: 'http://heroImageUrlLarge',
    bottomElement: null,
    ...props,
  }
}

function createBusProps(props: Partial<BusHeroSectionProps> = {}): BusHeroSectionProps {
  return {
    heroText: 'hero text',
    heroImageUrl: 'http://heroImageUrl',
    bottomElement: null,
    ...props,
  }
}

describe('HeroSection', () => {
  describe('home', () => {
    it('should render the title', () => {
      const props = createHomeProps()
      render(<HeroSection {...props} />)
      expect(screen.getByText('hero text')).toBeInTheDocument()
    })

    it('should render a search form', () => {
      const props = createHomeProps({
        bottomElement: <div data-testid="bottom-element">Bottom element</div>,
      })

      render(<HeroSection {...props} />)
      expect(screen.getByTestId('bottom-element')).toBeInTheDocument()
    })
  })

  describe('bus', () => {
    it('should render the title', () => {
      const props = createBusProps()
      render(<HeroSection {...props} />)
      expect(screen.getByText('hero text')).toBeInTheDocument()
    })

    it('should render the desciption', () => {
      const props = createBusProps({ heroDescription: 'hero desciption' })
      render(<HeroSection {...props} />)
      expect(screen.getByText('hero desciption')).toBeInTheDocument()
    })

    it('should render a search form', () => {
      const props = createBusProps({
        bottomElement: <div data-testid="bottom-element">Bottom element</div>,
      })

      render(<HeroSection {...props} />)
      expect(screen.getByTestId('bottom-element')).toBeInTheDocument()
    })
  })
})
