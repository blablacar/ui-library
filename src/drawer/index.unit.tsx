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

  it('Should call `onOpen` and `scrollLock` after open', () => {
    const onOpen = jest.fn()
    const onChange = jest.fn()
    const wrapper = mount(
      <Drawer
        {...defaultProps}
        onChange={onChange}
        onOpen={onOpen}
      >
        body
      </Drawer>,
    )
    const scrollLock = jest.spyOn(wrapper.instance(), 'scrollLock')
    wrapper.instance().open()
    wrapper.find('.scrollableContent').simulate('transitionEnd')
    expect(onOpen).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(true)
    expect(scrollLock).toHaveBeenCalledTimes(1)
  })

  it('Should call `onClose` and `scrollRestore` after close', () => {
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
    const scrollRestore = jest.spyOn(wrapper.instance(), 'scrollRestore')
    wrapper.instance().close()
    wrapper.find('.scrollableContent').simulate('transitionEnd')
    expect(onClose).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(false)
    expect(scrollRestore).toHaveBeenCalledTimes(1)
  })
})
