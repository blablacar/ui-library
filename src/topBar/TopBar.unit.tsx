import React from 'react'
import { mount, shallow } from 'enzyme'

import { Button } from '../button'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('should not have the scrolled class if hasScrolled is false or null', () => {
    const topBar = shallow(<TopBar zIndex={50} />)
    expect(topBar.hasClass('kirk-topBar--scrolled')).toBe(false)
  })

  it('should not have the scrolled class if hasScrolled is true', () => {
    const topBar = shallow(<TopBar zIndex={50} hasScrolled />)
    expect(topBar.hasClass('kirk-topBar--scrolled')).toBe(true)
  })

  it('should have a clickable button ', () => {
    const onClick = jest.fn()
    const topBar = mount(<TopBar zIndex={50} leftItem={<Button onClick={onClick} />} />)
    expect(topBar.find('button')).toHaveLength(1)
    const button = topBar.find('button')
    button.simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should have a left area with a button', () => {
    const topBar = mount(<TopBar zIndex={50} leftItem={<Button />} />)
    const leftArea = topBar.find('.kirk-topBar-left')
    expect(leftArea.contains(<Button />)).toBe(true)
  })

  it('should have a right area with a span', () => {
    const topBar = mount(<TopBar zIndex={50} rightItem={<span>Test</span>} />)
    const rightArea = topBar.find('.kirk-topBar-right')
    expect(rightArea.contains(<span>Test</span>)).toBe(true)
  })

  it('should have a center area', () => {
    const topBar = mount(<TopBar zIndex={50} centerItem={<span>Test</span>} />)
    expect(topBar.find('.kirk-topBar-center')).toHaveLength(1)
  })
})
