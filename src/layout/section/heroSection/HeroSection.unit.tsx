import React from 'react'

import { render, screen } from '@testing-library/react'

import { ClassicHeroSectionProps, HeroSection, IllustrationHeroSectionProps } from './HeroSection'

function createIllustrationProps(
  props: Partial<IllustrationHeroSectionProps> = {},
): IllustrationHeroSectionProps {
  return {
    heroText: 'hero text',
    heroImageUrlSmall: 'http://heroImageUrlSmall',
    heroImageUrlLarge: 'http://heroImageUrlLarge',
    bottomElement: null,
    ...props,
  }
}

function createClassicProps(props: Partial<ClassicHeroSectionProps> = {}): ClassicHeroSectionProps {
  return {
    heroText: 'hero text',
    heroImageUrl: 'http://heroImageUrl',
    bottomElement: null,
    ...props,
  }
}

describe('HeroSection', () => {
  describe('illustration', () => {
    it('should render the title', () => {
      const props = createIllustrationProps()
      render(<HeroSection {...props} />)
      expect(screen.getByText('hero text')).toBeInTheDocument()
    })

    it('should render a search form', () => {
      const props = createIllustrationProps({
        bottomElement: <div data-testid="bottom-element">Bottom element</div>,
      })

      render(<HeroSection {...props} />)
      expect(screen.getByTestId('bottom-element')).toBeInTheDocument()
    })
  })

  describe('classic', () => {
    it('should render the title', () => {
      const props = createClassicProps()
      render(<HeroSection {...props} />)
      expect(screen.getByText('hero text')).toBeInTheDocument()
    })

    it('should render the desciption', () => {
      const props = createClassicProps({ heroDescription: 'hero desciption' })
      render(<HeroSection {...props} />)
      expect(screen.getByText('hero desciption')).toBeInTheDocument()
    })

    it('should render a search form', () => {
      const props = createClassicProps({
        bottomElement: <div data-testid="bottom-element">Bottom element</div>,
      })

      render(<HeroSection {...props} />)
      expect(screen.getByTestId('bottom-element')).toBeInTheDocument()
    })
  })
})
