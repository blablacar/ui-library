import React from 'react'
import { mount } from 'enzyme'

import Loader, { LoaderLayoutMode } from './Loader'
import { StyledCircleIcon } from 'icon/circleIcon'
import { StyledCheckIcon } from 'icon/checkIcon'

jest.useFakeTimers()

describe('Loader', () => {
  it('Should have a custom className', () => {
    const customClassName = 'custom-loader'
    const wrapper = mount(<Loader className={customClassName} />)
    expect(wrapper.hasClass(customClassName)).toBe(true)
  })

  it('Should have a custom size', () => {
    const size = 100
    const wrapper = mount(<Loader size={size} />)
    expect(wrapper.find(StyledCircleIcon).prop('size')).toBe(size)
  })

  it('Should be fullscreen by default', () => {
    const wrapper = mount(<Loader />)
    expect(wrapper.find('.kirk-loader--fullScreen').exists()).toBe(true)
  })

  it('Should be inline when using the prop', () => {
    const wrapper = mount(<Loader inline />)
    expect(wrapper.find('.kirk-loader--inline').exists()).toBe(true)
  })

  it('Should override layoutMode when inline prop is set', () => {
    const wrapper = mount(<Loader inline layoutMode={LoaderLayoutMode.BLOCK} />)
    expect(wrapper.find('.kirk-loader--inline').exists()).toBe(true)
  })

  it('Should use correctly inline layout mode', () => {
    const wrapper = mount(<Loader layoutMode={LoaderLayoutMode.INLINE} />)
    expect(wrapper.find('.kirk-loader--inline').exists()).toBe(true)
  })

  it('Should use correctly block layout mode', () => {
    const wrapper = mount(<Loader layoutMode={LoaderLayoutMode.BLOCK} />)
    expect(wrapper.find('.kirk-loader--block').exists()).toBe(true)
  })

  it('Should use correctly fullscreen layout mode', () => {
    const wrapper = mount(<Loader layoutMode={LoaderLayoutMode.FULLSCREEN} />)
    expect(wrapper.find('.kirk-loader--fullScreen').exists()).toBe(true)
  })

  it('Should show the done icon', () => {
    const wrapper = mount(<Loader done />)
    expect(wrapper.find(StyledCheckIcon).exists()).toBe(true)
  })

  it('Should fire the callback event when done', () => {
    const callback = jest.fn()
    const wrapper = mount(<Loader onDoneAnimationEnd={callback} />)
    wrapper.setProps({ done: true })
    expect(callback).not.toBeCalled()
    jest.advanceTimersByTime(1500)
    expect(callback).toBeCalled()
  })
})
