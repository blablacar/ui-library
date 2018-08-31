import React from 'react'
import Drawer from 'drawer'

const defaultProps = {
  onClick() {},
}

describe('Drawer', () => {
  it('Renders with a custom className', () => {
    const customClassName = 'custom-drawer'
    const wrapper = shallow(<Drawer {...defaultProps} className={customClassName}>body</Drawer>)
    expect(wrapper.hasClass(customClassName)).toBe(true)
  })

  it('Should call `onOpen` after open and scroll top', () => {
    const onOpen = jest.fn()
    const onChange = jest.fn()
    const windowScroll = global.scroll
    global.scroll = jest.fn()

    const wrapper = mount(
      <Drawer
        {...defaultProps}
        onChange={onChange}
        onOpen={onOpen}
      >
        body
      </Drawer>,
    )
    wrapper.instance().open()
    wrapper.find('.scrollableContent').simulate('transitionEnd')
    expect(onOpen).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(true)
    expect(global.scroll).toHaveBeenCalledWith(0, 0)
    global.scroll = windowScroll
  })

  it('Should call `onClose` after close', () => {
    const onClose = jest.fn()
    const onChange = jest.fn()
    const wrapper = mount(
      <Drawer
        {...defaultProps}
        onChange={onChange}
        onClose={onClose}
      >
        body
      </Drawer>,
    )
    wrapper.instance().close()
    wrapper.find('.scrollableContent').simulate('transitionEnd')
    expect(onClose).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(false)
  })
})
