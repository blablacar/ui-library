import React from 'react'
import renderer from 'react-test-renderer'

import ItemInfo from 'itemInfo'
import ItemsSection from './index'

describe('ItemsSection', () => {
  it('should render default items section', () => {
    const section = (
      <ItemsSection>
        <ItemInfo mainTitle="First item" mainInfo="First info" />
        <ItemInfo mainTitle="Second item" mainInfo="Second info" />
      </ItemsSection>
    )
    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })

  it('should render non-default items section', () => {
    const props = {
      Tag: <span />,
      className: 'contentinfo',
    }
    const section = (
      <ItemsSection {...props}>
        <ItemInfo mainTitle="First item" mainInfo="First info" />
        <ItemInfo mainTitle="Second item" mainInfo="Second info" />
      </ItemsSection>
    )

    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })
})
