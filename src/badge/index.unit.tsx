import React from 'react'

import Badge from 'badge'
import CheckIcon from 'icon/checkIcon'

it('Should read the aria-label attribute and not the children if both are provided', () => {
  const wrapper = shallow(<Badge ariaLabel="Unread messages">12</Badge>)
  expect(wrapper.find('span').prop('aria-hidden')).toBe(true)
})

it('Should read the children if aria-label is empty', () => {
  const wrapper = shallow(<Badge>12</Badge>)
  expect(wrapper.find('span').prop('aria-hidden')).toBe(false)
})

it('Should not render if children is empty', () => {
  const wrapper = shallow(<Badge />)
  expect(wrapper.find('span').exists()).toBe(false)
})

it('can accept a JSX.Element as children', () => {
  const wrapper = shallow(<Badge><CheckIcon /></Badge>)
  expect(wrapper.find('CheckIcon').exists()).toBe(true)
})
