import React from 'react'
import Loader from 'loader'
import CircleIcon from 'icon/circleIcon'

describe('Loader', () => {
  it('Should have a custom className', () => {
    const customClassName = 'custom-loader'
    const wrapper = shallow(<Loader className={customClassName} />)
    expect(wrapper.hasClass(customClassName)).toBe(true)
  })

  it('Should have a custom size', () => {
    const size = 100
    const wrapper = shallow(<Loader size={size} />)
    expect(wrapper.find(CircleIcon).prop('size')).toBe(size)
  })

  it('Should be inlined', () => {
    const wrapper = mount(<Loader inline />)
    expect(wrapper.prop('inline')).toBe(true)
  })
})
