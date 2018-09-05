import React from 'react'

import Item from './index'
import ClockIcon from 'icon/clockIcon'
import ChevronIcon from 'icon/chevronIcon'

it('Should be displayed in default state without props', () => {
  const wrapper = shallow(<Item />)
  expect(wrapper.hasClass('kirk-item')).toBe(true)
  expect(wrapper.type()).toBe('div')
})

it('Should accept a custom `className`', () => {
  const wrapper = shallow(<Item className="test" />)
  expect(wrapper.hasClass('test')).toBe(true)
})

it('Should accept a custom `tag`', () => {
  const wrapper = shallow(<Item tag={<li />} />)
  expect(wrapper.type()).toBe('li')
})

it('Should accept custom props on a custom `tag`', () => {
  const wrapper = shallow(<Item tag={<li role="option" />} />)
  expect(wrapper.prop('role')).toBe('option')
})

it('Should display a left add-on', () => {
  const wrapper = shallow(<Item leftAddon={<ClockIcon />} />)
  expect(wrapper.find(ClockIcon).exists()).toBe(true)
})

it('Should display title on the left', () => {
  const wrapper = mount(<Item leftTitle="Test" />)
  expect(wrapper.find('.kirk-item-leftText .kirk-text-title').exists()).toBe(true)
})

it('Should display body text on the left', () => {
  const wrapper = mount(<Item leftBody="Test" />)
  expect(wrapper.find('.kirk-item-leftText .kirk-text-body').exists()).toBe(true)
})

it('Should display a right add-on', () => {
  const wrapper = shallow(<Item rightAddon={<ClockIcon />} />)
  expect(wrapper.find(ClockIcon).exists()).toBe(true)
})

it('Should display title on the right', () => {
  const wrapper = mount(<Item rightTitle="Test" />)
  expect(wrapper.find('.kirk-item-rightText .kirk-text-title').exists()).toBe(true)
})

it('Should display body text on the right', () => {
  const wrapper = mount(<Item rightBody="Test" />)
  expect(wrapper.find('.kirk-item-rightText .kirk-text-body').exists()).toBe(true)
})

it('Should display a chevron', () => {
  const wrapper = mount(<Item chevron={<ChevronIcon />} />)
  expect(wrapper.find(ChevronIcon).exists()).toBe(true)
})
