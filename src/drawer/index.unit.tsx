import React from 'react'
import Drawer from 'drawer'

const defaultProps = {
  onClick() {},
}

describe('Drawer', () => {
  beforeEach(() => {
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb())
  })

  afterEach(() => {
    window.requestAnimationFrame.mockRestore()
  })
  it('Renders with a custom className', () => {
    const customClassName = 'custom-drawer'
    const wrapper = shallow(
      <Drawer {...defaultProps} className={customClassName}>
        body
      </Drawer>,
    )
    expect(wrapper.hasClass(customClassName)).toBe(true)
  })

  it('Should call `onOpen` and `scrollLock` after open', () => {
    const onOpen = jest.fn()
    const onChange = jest.fn()
    const wrapper = mount(
      <Drawer {...defaultProps} onChange={onChange} onOpen={onOpen}>
        body
      </Drawer>,
    )
    const scrollLock = jest.spyOn(wrapper.instance(), 'scrollLock')
    wrapper.find('.scrollableContent').simulate('transitionEnd')
    expect(onChange).toHaveBeenCalledWith(false)
    wrapper.setProps({ open: true })
    wrapper.find('.scrollableContent').simulate('transitionEnd')
    expect(onChange).toHaveBeenCalledWith(false)
    expect(onOpen).toHaveBeenCalledTimes(1)
    expect(scrollLock).toHaveBeenCalledTimes(1)
  })

  it('Should call `onClose` and `scrollUnlock` after close', () => {
    const onClose = jest.fn()
    const onChange = jest.fn()
    const wrapper = mount(
      <Drawer {...defaultProps} onChange={onChange} onClose={onClose}>
        body
      </Drawer>,
    )
    const scrollUnlock = jest.spyOn(wrapper.instance(), 'scrollUnlock')
    wrapper.instance().close()
    wrapper.find('.scrollableContent').simulate('transitionEnd')
    expect(onClose).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(false)
    expect(scrollUnlock).toHaveBeenCalledTimes(1)
  })
})
