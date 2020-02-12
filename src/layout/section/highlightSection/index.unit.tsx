import React from 'react'
import renderer from 'react-test-renderer'

import HighlightSection from './index'

describe('HighlightSection', () => {
  it('should render default highlight section', () => {
    const section = <HighlightSection title="the title">default highlight section</HighlightSection>
    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })

  it('should add a classname to the content', () => {
    const section = (
      <HighlightSection title="the title" contentClassName="some-content-class-name">
        default highlight section
      </HighlightSection>
    )
    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })
})
