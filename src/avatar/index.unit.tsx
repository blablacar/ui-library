import React from 'react'
import Avatar, { IdCheck } from 'avatar'
import Check from 'icon/checkIcon'

it('Should have the proper default state.', () => {
  const avatar = shallow(<Avatar image="//placehold.it/80x80" alt="my alternative txt" />)
  expect(avatar.find('img').prop('src')).toEqual('//placehold.it/80x80')
  expect(avatar.find(IdCheck).exists()).toBe(false)
})

it('Should have the IdCheck icon when verified/checked.', () => {
  const avatar = shallow(<Avatar image="//placehold.it/80x80" checked />)
  expect(avatar.find(IdCheck).exists()).toBe(true)
})

it('Should render the IdCheck icon', () => {
  const idCheck = shallow(<IdCheck checked />)
  expect(idCheck.find(Check)).toHaveLength(1)
})

it('Should allow for size, image and alt modifiers', () => {
  const avatar = shallow(<Avatar image="//placehold.it/80x80" medium alt="my alternative txt" />)
  expect(avatar.hasClass('kirk-medium')).toBe(true)
  expect(avatar.hasClass('kirk-image')).toBe(true)
  expect(avatar.find('img').prop('alt')).toBe('my alternative txt')
})
