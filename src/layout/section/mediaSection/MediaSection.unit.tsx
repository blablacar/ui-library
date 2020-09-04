import React from 'react'
import renderer from 'react-test-renderer'

import { MediaSection } from './index'

describe('MediaSection', () => {
  it('should render MediaSection', () => {
    const section = <MediaSection>default section</MediaSection>
    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })
})
