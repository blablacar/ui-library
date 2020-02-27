import React from 'react'
import renderer from 'react-test-renderer'

import IllustratedSection from './index'

const defaultProps = {
  illustrationUrl: 'http://blablacar.com/pic.jpg',
}

describe('IllustratedSection', () => {
  it('should render default IllustratedSection section', () => {
    const section = <IllustratedSection {...defaultProps}>Hello World</IllustratedSection>
    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })

  it('should render an IllustratedSection section with an Avatar', () => {
    const section = (
      <IllustratedSection {...defaultProps} isAvatar>
        Hello World
      </IllustratedSection>
    )
    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })
})
