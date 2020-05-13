import React from 'react'
import { shallow } from 'enzyme'

import Badge from '../badge'

import Avatar from './Avatar'

it('Should have the proper default state.', () => {
  const avatar = shallow(<Avatar image="//placehold.it/80x80" alt="my alternative txt" />)
  expect(avatar.find('img').prop('src')).toEqual('//placehold.it/80x80')
  expect(avatar.find(Badge).exists()).toBe(false)
})

it('Should show a Badge if there are unread notifications.', () => {
  const avatar = shallow(<Avatar image="//placehold.it/80x80" unreadNotificationsCount="345" />)
  expect(avatar.find(Badge).hasClass('kirk-avatar-badge--unreadNotifications')).toBe(true)
})

it('Should show a Badge if ID checked.', () => {
  const avatar = shallow(<Avatar image="//placehold.it/80x80" isIdChecked />)
  expect(avatar.find(Badge).hasClass('kirk-avatar-badge--idCheck')).toBe(true)
})

it('Should allow for size, image and alt modifiers', () => {
  const avatar = shallow(<Avatar image="//placehold.it/80x80" isMedium alt="my alternative txt" />)
  expect(avatar.hasClass('kirk-avatar--medium')).toBe(true)
  expect(avatar.hasClass('kirk-avatar--image')).toBe(true)
  expect(avatar.find('img').prop('alt')).toBe('my alternative txt')
})
