import React from 'react'
import renderer from 'react-test-renderer'

import IllustratedSection from './index'

const defaultProps = {
  illustrationUrl: 'http://blablacar.com/pic.jpg',
}

describe('IllustratedSection', () => {
  it('should render default MediaContentSection section', () => {
    const section = <IllustratedSection {...defaultProps}>Hello World</IllustratedSection>
    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })
})
