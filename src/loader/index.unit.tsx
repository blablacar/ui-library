import React from 'react'
import { shallow, mount } from 'enzyme'

import Loader from 'loader'
import CircleIcon from 'icon/circleIcon'
import CheckIcon from 'icon/checkIcon'

jest.useFakeTimers()

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

  it('Should show the done icon', () => {
    const wrapper = mount(<Loader done />)
    expect(wrapper.find(CheckIcon)).toHaveLength(1)
  })

  it('Should fire the callback event when done', () => {
    const event = jest.fn()
    const wrapper = mount(<Loader onDoneAnimationEnd={event} />)
    wrapper.setProps({ done: true })
    expect(event).not.toBeCalled()
    jest.advanceTimersByTime(1500)
    expect(event).toBeCalled()
  })
})
