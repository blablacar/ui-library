import React from 'react'
import { mount } from 'enzyme'

import ColumnedContentSection, {
  ColumnedContentSectionProps,
  ColumnedSectionContentMediaKind,
} from './index'

const DEFAULT_TOP_LINK_HREF = 'http://link'
const DEFAULT_TOP_LINK_LABEL = 'top link label'

const columnContent: any = {
  title: 'title',
  content: 'content',
}
const defaultProps: ColumnedContentSectionProps = {
  title: 'section title',
  columnContentList: [columnContent, columnContent, columnContent],
}

const assertTopLink = (wrapper: any, exists: boolean) => {
  const link = wrapper.find('Button.kirk-columned-content-section-top-link')
  expect(link.exists()).toBe(exists)
  if (exists === true) {
    expect(link.text()).toBe(DEFAULT_TOP_LINK_LABEL)
    expect(link.prop('href')).toBe(DEFAULT_TOP_LINK_HREF)
  }
}

describe('MediaContentSection', () => {
  it('should render top link', () => {
    const props = {
      ...defaultProps,
      topLinkHref: DEFAULT_TOP_LINK_HREF,
      topLinkLabel: DEFAULT_TOP_LINK_LABEL,
    }
    const wrapper = mount(<ColumnedContentSection {...props} />)
    assertTopLink(wrapper, true)
  })

  it('should not render top link', () => {
    const wrapper = mount(<ColumnedContentSection {...defaultProps} />)
    assertTopLink(wrapper, false)
  })

  it('should render title', () => {
    const wrapper = mount(<ColumnedContentSection {...defaultProps} />)
    expect(wrapper.find('Title.kirk-columned-content-section-title').exists()).toBe(true)
  })

  it('should render basic columns', () => {
    const wrapper = mount(<ColumnedContentSection {...defaultProps} />)
    const columns = wrapper.find('li.kirk-columned-content-section-column')
    expect(columns.length).toBe(3)

    columns.forEach(column => {
      expect(column.find('Title.kirk-columned-content-section-subtitle').text()).toBe('title')
      expect(column.find('p').text()).toBe('content')
    })
  })

  it('should render columns with images of various media kinds', () => {
    const column1 = {
      ...columnContent,
      media: {
        kind: ColumnedSectionContentMediaKind.ELEMENT,
        element: <svg />,
      },
    }

    const column2 = {
      ...columnContent,
      media: {
        kind: ColumnedSectionContentMediaKind.COVER,
        pictureUrl: 'http://pic2',
        href: 'http://link2',
      },
    }

    const column3 = {
      ...columnContent,
      media: {
        kind: ColumnedSectionContentMediaKind.FIT,
        pictureUrl: 'http://pic3',
      },
    }

    const props = {
      ...defaultProps,
      columnContentList: [column1, column2, column3],
    }
    const wrapper = mount(<ColumnedContentSection {...props} />)
    const columns = wrapper.find('li.kirk-columned-content-section-column')
    expect(columns.length).toBe(3)

    // column 1: ELEMENT media: Verify <svg> element:
    const contentColumn1 = columns.at(0)
    expect(contentColumn1.find('svg').length).toBe(1)

    // column 2: COVER media: Verify image nested in an anchor:
    const contentColumn2 = columns.at(1)
    // Verify anchor inside column.
    const link = contentColumn2.find('a')
    expect(link.length).toBe(1)
    expect(link.prop('href')).toBe('http://link2')
    // Verify image inside anchor
    const img2 = link.find('img')
    expect(img2.length).toBe(1)
    expect(img2.prop('src')).toBe('http://pic2')

    // column 3: FIT media: Verify image existence:
    const contentColumn3 = columns.at(2)
    const img3 = contentColumn3.find('img')
    expect(img3.length).toBe(1)
    expect(img3.prop('src')).toBe('http://pic3')
  })
})
