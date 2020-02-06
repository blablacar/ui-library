import React from 'react'
import renderer from 'react-test-renderer'

import BasicSection, { SectionContentSize } from './index'

describe('BaseSection', () => {
  it('should render default basic section', () => {
    const section = <BasicSection>default section</BasicSection>
    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })

  it('should render non-default section', () => {
    const props = {
      tagName: 'article',
      role: 'contentinfo',
      contentSize: SectionContentSize.LARGE,
    }
    const section = <BasicSection {...props}>large section</BasicSection>
    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })
})
