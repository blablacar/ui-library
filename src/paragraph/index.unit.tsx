import React from 'react'
import { mount } from 'enzyme'

import Paragraph from './paragraph'

const shortText = 'text'
const longText = 'text '.repeat(100)
const expectedTruncatedLongText =
  'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text …'

it('should truncate long text', () => {
  const props = {
    isExpandable: true,
    expandLabel: 'Read more',
  }
  const paragraph = mount(<Paragraph {...props}>{longText}</Paragraph>)
  const expandButton = paragraph.find('Button')
  expect(expandButton.exists()).toBe(true)
  expect(expandButton.text()).toBe('Read more')

  const text = paragraph.find('Text')
  expect(text.exists()).toBe(true)
  expect(text.text()).toBe(expectedTruncatedLongText)
})

it('should never truncate short text', () => {
  const props = {
    isExpandable: true,
    expandLabel: 'Read more',
  }
  const paragraph = mount(<Paragraph {...props}>{shortText}</Paragraph>)
  const expandButton = paragraph.find('Button')
  expect(expandButton.exists()).toBe(false)

  const text = paragraph.find('Text')
  expect(text.exists()).toBe(true)
  expect(text.text()).toBe(shortText)
})

it('should expand truncated long text', () => {
  const props = {
    isExpandable: true,
    expandLabel: 'Read more',
  }
  const paragraph = mount(<Paragraph {...props}>{longText}</Paragraph>)
  const expandButton = paragraph.find('Button')

  // Initially the text is truncated and the button to expand is visible:
  expect(paragraph.find('Text').text()).toBe(expectedTruncatedLongText)
  expect(paragraph.find('Button').exists()).toBe(true)

  // Verify that truncated text is expanded after clicking the toggle
  expandButton.simulate('click')
  expect(paragraph.find('Text').text()).toBe(longText)

  // Verify button has been removed
  expect(paragraph.find('Button').exists()).toBe(false)
})
