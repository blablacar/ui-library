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

  it('Should call `onOpen` after open', () => {
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
    wrapper.instance().open()
    wrapper.find('.scrollableContent').simulate('transitionEnd')
    expect(onOpen).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(true)
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
