import React from 'react'
import { shallow } from 'enzyme'

import { HamburgerButton } from './HamburgerButton'

const defaultProps = {
  onClick() {},
}

describe('HamburgerButton', () => {
  it('Should not be open by default', () => {
    const wrapper = shallow(<HamburgerButton {...defaultProps} />)
    expect(wrapper.prop('aria-expanded')).toBe(false)
  })

  it('Should be open when having prop `open`', () => {
    const wrapper = shallow(<HamburgerButton {...defaultProps} open />)
    expect(wrapper.prop('aria-expanded')).toBe(true)
  })

  it('Should trigger an `onClick` event', () => {
    const onClickSpy = jest.fn()
    const wrapper = shallow(<HamburgerButton {...defaultProps} onClick={onClickSpy} />)
    wrapper.simulate('click')
    expect(onClickSpy).toHaveBeenCalledTimes(1)
  })
})
