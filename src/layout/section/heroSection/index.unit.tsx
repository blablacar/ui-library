import React from 'react'
import { mount } from 'enzyme'

import HeroSection, { HeroSectionProps } from './heroSection'

const defaultProps: HeroSectionProps = {
  heroImageUrl: 'http://heroImageUrl',
  heroImageUrlLarge: 'http://heroImageUrl',
  heroText: 'hero text',
  heroDescription: 'hero description',
  buttonText: 'button text',
  buttonHref: 'http://buttonhref',
}

describe('HeroSection', () => {
  it('should render basic hero section', () => {
    const wrapper = mount(<HeroSection {...defaultProps} />)
    expect(wrapper.find('h1').text()).toContain('hero text')
    expect(wrapper.find('p').text()).toContain('hero description')
    const button = wrapper.find('a')
    expect(button.text()).toContain('button text')
  })

  it('should render a serch form', () => {
    const props: HeroSectionProps = {
      ...defaultProps,
      bottomElement: <div>Bottom element</div>,
    }

    const wrapper = mount(<HeroSection {...props} />)
    expect(wrapper.find('h1').text()).toContain('hero text')
    expect(wrapper.find('p').text()).toContain('hero description')
    expect(wrapper.find('a')).toHaveLength(0)
    expect(wrapper.find('form')).toBeDefined()
  })
})
