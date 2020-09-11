import React from 'react'
import renderer from 'react-test-renderer'

import { BaseSection, SectionContentSize } from './index'

describe('BaseSection', () => {
  it('should render default basic section', () => {
    const section = <BaseSection>default section</BaseSection>
    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })

  it('should render non-default section', () => {
    const props = {
      tagName: 'article',
      role: 'contentinfo',
      contentSize: SectionContentSize.LARGE,
    }
    const section = <BaseSection {...props}>large section</BaseSection>
    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })
})
