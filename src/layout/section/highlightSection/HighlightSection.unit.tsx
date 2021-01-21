import React from 'react'
import renderer from 'react-test-renderer'

import { HighlightSection } from './index'

describe('HighlightSection', () => {
  it('should render default highlight section', () => {
    const section = <HighlightSection>default highlight section</HighlightSection>
    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })
})
