import React from 'react'
import { shallow, mount } from 'enzyme'

import TopBar from 'topBar'
import Button from 'button'

it('should not have any modifier classes', () => {
  const topBar = shallow(<TopBar />)
  expect(topBar.hasClass('kirk-topBar--fixed')).toBe(false)
  expect(topBar.hasClass('kirk-topBar--overlayed')).toBe(false)
  expect(topBar.hasClass('kirk-topBar--bgTransparent')).toBe(false)
  expect(topBar.hasClass('kirk-topBar--bgShadedTransparent')).toBe(false)
})

it('should have the custom class on inner wrapper', () => {
  const topBar = shallow(<TopBar innerWrapperClassName="test" />)
  expect(topBar.find('.test').exists()).toBe(true)
})

it('should have the fixed modifier class', () => {
  const topBar = shallow(<TopBar fixed />)
  expect(topBar.hasClass('kirk-topBar--fixed')).toBe(true)
})

it('should have the bgTransparent modifier class', () => {
  const topBar = shallow(<TopBar bgTransparent />)
  expect(topBar.hasClass('kirk-topBar--bgTransparent')).toBe(true)
})

it('should have the bgShadedTransparent modifier class', () => {
  const topBar = shallow(<TopBar bgShadedTransparent />)
  expect(topBar.hasClass('kirk-topBar--bgShadedTransparent')).toBe(true)
})

it('should have a clickable button ', () => {
  const onClick = jest.fn()
  const topBar = mount(<TopBar leftItem={<Button onClick={onClick} />} />)
  expect(topBar.find('button')).toHaveLength(1)
  const button = topBar.find('button')
  button.simulate('click')
  expect(onClick).toHaveBeenCalledTimes(1)
})

it('should have a left area with a button', () => {
  const topBar = mount(<TopBar leftItem={<Button />} />)
  const leftArea = topBar.find('.kirk-topBar-left')
  expect(leftArea.contains(<Button />)).toBe(true)
})

it('should have a right area with a span', () => {
  const topBar = mount(<TopBar rightItem={<span>Test</span>} />)
  const rightArea = topBar.find('.kirk-topBar-right')
  expect(rightArea.contains(<span>Test</span>)).toBe(true)
})

it('should have a center area', () => {
  const topBar = mount(<TopBar centerItem={<span>Test</span>} />)
  expect(topBar.find('.kirk-topBar-center')).toHaveLength(1)
})
