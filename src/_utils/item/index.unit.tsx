import React from 'react'
import renderer from 'react-test-renderer'

import Item from './index'
import ClockIcon from 'icon/clockIcon'
import ChevronIcon from 'icon/chevronIcon'

it('Should not have changed', () => {
  const item = renderer
    .create(<Item className="custom" leftTitle="Test" leftBody="Test" rightAddon={<ClockIcon />} />)
    .toJSON()
  expect(item).toMatchSnapshot()
})

it('Should be displayed in default state without props', () => {
  const wrapper = shallow(<Item />)
  expect(wrapper.hasClass('kirk-item')).toBe(true)
  expect(wrapper.type()).toBe('div')
})

it('Should accept a custom `className`', () => {
  const customClassName = 'custom'
  const wrapper = shallow(<Item className={customClassName} />)
  expect(wrapper.hasClass(customClassName)).toBe(true)
})

it('Should be highlighted', () => {
  const wrapper = shallow(<Item highlighted />)
  expect(wrapper.hasClass('kirk-item--highlighted')).toBe(true)
})

it('Should accept a custom `tag`', () => {
  const wrapper = shallow(<Item tag={<li />} />)
  expect(wrapper.type()).toBe('li')
})

it('Should not return an href prop when no href is pass to the item', () => {
  const wrapper = shallow(<Item />)
  expect(wrapper.prop('href')).toBeUndefined()
})

it('Should return a tag A when href is a string', () => {
  const wrapper = shallow(<Item href="#" />)
  expect(wrapper.type()).toBe('a')
  expect(wrapper.prop('href')).toBe('#')
})

it('Should return a tag of a with its href when href is a component a', () => {
  const wrapper = shallow(<Item href={<a href="#" />} />)
  expect(wrapper.type()).toEqual('a')
  expect(wrapper.prop('href')).toEqual('#')
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
  const wrapper = shallow(<Item chevron />)
  expect(wrapper.find(ChevronIcon).exists()).toBe(true)
})
