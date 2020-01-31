import React from 'react'
import { mount } from 'enzyme'

import HeroSection from './heroSection'

const defaultProps = {
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
})
