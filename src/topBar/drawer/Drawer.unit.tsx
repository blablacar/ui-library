import React from 'react'
import { shallow } from 'enzyme'

import { render, screen } from '@testing-library/react'

import { Drawer } from './index'

const defaultProps = {
  onClick() {},
}

describe('Drawer', () => {
  it('Renders with a custom className', () => {
    const customClassName = 'custom-drawer'
    render(<Drawer {...defaultProps} className={customClassName} />)
    // getByRole('complementary') should match <aside>, but it doesn't...
    const items = screen.getAllByText('')
    expect(items[2]).toHaveClass(customClassName)
  })

  it('Should call `onOpen` and `scrollLock` after open', () => {
    const onOpen = jest.fn()
    const onTransitionEnd = jest.fn()
    const wrapper = shallow(
      <Drawer {...defaultProps} onTransitionEnd={onTransitionEnd} onOpen={onOpen}>
        body
      </Drawer>,
    )
    const scrollLock = jest.spyOn(wrapper.instance(), 'scrollLock')
    expect(onOpen).toHaveBeenCalledTimes(0)
    expect(scrollLock).toHaveBeenCalledTimes(0)
    wrapper.setProps({ open: true })
    wrapper.instance().props.onTransitionEnd(true)
    expect(onTransitionEnd).toHaveBeenCalledWith(true)
    expect(onOpen).toHaveBeenCalledTimes(1)
    expect(scrollLock).toHaveBeenCalledTimes(1)
  })

  it('Should call `onClose` and `scrollUnlock` after close', () => {
    const onClose = jest.fn()
    const onTransitionEnd = jest.fn()
    const wrapper = shallow(
      <Drawer {...defaultProps} open onTransitionEnd={onTransitionEnd} onClose={onClose}>
        body
      </Drawer>,
    )
    const scrollUnlock = jest.spyOn(wrapper.instance(), 'scrollUnlock')
    expect(onClose).toHaveBeenCalledTimes(0)
    expect(scrollUnlock).toHaveBeenCalledTimes(0)
    wrapper.setProps({ open: false })
    wrapper.instance().props.onTransitionEnd(false)
    expect(onTransitionEnd).toHaveBeenCalledWith(false)
    expect(onClose).toHaveBeenCalledTimes(1)
    expect(scrollUnlock).toHaveBeenCalledTimes(1)
  })
})
