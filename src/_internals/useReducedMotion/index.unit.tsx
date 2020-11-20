import React from 'react'
import { mount } from 'enzyme'

import { useReducedMotion } from './index'

let TestComponent

describe('useReducedMotion', () => {
  beforeEach(() => {
    TestComponent = () => {
      const reducedMotion = useReducedMotion()
      return reducedMotion ? <div>reduced</div> : <div>basic</div>
    }
  })

  it('Should call match media with "prefers-reduced-motion" and return true when it matches', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: true,
    }))
    const wrapper = mount(<TestComponent />)
    expect(window.matchMedia).toHaveBeenCalledWith('(prefers-reduced-motion)')
    expect(wrapper.find('div').text()).toEqual('reduced')
  })

  it('Should call match media with "prefers-reduced-motion" and return false when it does not match', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: false,
    }))
    const wrapper = mount(<TestComponent />)
    expect(window.matchMedia).toHaveBeenCalledWith('(prefers-reduced-motion)')
    expect(wrapper.find('div').text()).toEqual('basic')
  })
})
