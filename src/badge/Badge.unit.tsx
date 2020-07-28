import React from 'react'
import { shallow } from 'enzyme'

import { CheckIcon as StyledCheckIcon } from '../icon/checkIcon'
import { Badge } from './index'

it('Should read the aria-label attribute and not the children if both are provided', () => {
  const wrapper = shallow(<Badge aria-label="Unread messages">12</Badge>)
  expect(wrapper.find('span').prop('aria-hidden')).toBe(true)
})

it('Should display the children if this is a number', () => {
  const wrapper = shallow(<Badge>12</Badge>)
  expect(wrapper.find('span').prop('aria-hidden')).toBe(false)
})

it('Should read the children if aria-label is empty', () => {
  const wrapper = shallow(<Badge>12</Badge>)
  expect(wrapper.find('span').text()).toBe('12')
})

it('Should not render if children is empty', () => {
  const wrapper = shallow(<Badge />)
  expect(wrapper.find('span').exists()).toBe(false)
})

it('can accept a JSX.Element as children', () => {
  const wrapper = shallow(
    <Badge>
      <StyledCheckIcon />
    </Badge>,
  )
  expect(wrapper.find(StyledCheckIcon).exists()).toBe(true)
})
