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
  const wrapper = shallow(<Item leftTitle="Test" />)
  expect(wrapper.find('.kirk-item-leftText .kirk-item-title').exists()).toBe(true)
})

it('Should display body text on the left', () => {
  const wrapper = shallow(<Item leftBody="Test" />)
  expect(wrapper.find('.kirk-item-leftText .kirk-item-body').exists()).toBe(true)
})

it('Should display a right add-on', () => {
  const wrapper = shallow(<Item rightAddon={<ClockIcon />} />)
  expect(wrapper.find(ClockIcon).exists()).toBe(true)
})

it('Should display title on the right', () => {
  const wrapper = shallow(<Item rightTitle="Test" />)
  expect(wrapper.find('.kirk-item-rightText .kirk-item-title').exists()).toBe(true)
})

it('Should display body text on the right', () => {
  const wrapper = shallow(<Item rightBody="Test" />)
  expect(wrapper.find('.kirk-item-rightText .kirk-item-body').exists()).toBe(true)
})

it('Should display a chevron', () => {
  const wrapper = shallow(<Item chevron={<ChevronIcon />} />)
  expect(wrapper.find('.kirk-item-chevron').exists()).toBe(true)
})

it('Should not have a highlighted state by default', () => {
  const wrapper = shallow(<Item />)
  expect(wrapper.hasClass('kirk-item--highlighted')).toBe(false)
})

it('Should have a highlighted state', () => {
  const wrapper = shallow(<Item highlighted />)
  expect(wrapper.hasClass('kirk-item--highlighted')).toBe(true)
})
