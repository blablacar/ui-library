import React from 'react'
import renderer from 'react-test-renderer'

import { MessagingSummaryItem } from './MessagingSummaryItem'

const defaultProps = {
  url: 'http_test.url',
  pictureUrl: 'http_test.picture.url',
  label: 'A label',
  subLabel: 'A sub label',
  timeLabel: '3 days ago',
  hasUnreadMessages: true,
}

it('Should render properly with unread messages', () => {
  const item = <MessagingSummaryItem {...defaultProps} />
  const messagingSummaryItem = renderer.create(item).toJSON()
  expect(messagingSummaryItem).toMatchSnapshot()
})

it('Should render properly with read messages', () => {
  const props = {
    ...defaultProps,
    hasUnreadMessages: false,
  }
  const item = <MessagingSummaryItem {...props} />
  const messagingSummaryItem = renderer.create(item).toJSON()
  expect(messagingSummaryItem).toMatchSnapshot()
})
