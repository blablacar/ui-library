import React from 'react'
import { shallow } from 'enzyme'
import BlankSeparator from './BlankSeparator'

describe('BlankSeparator', () => {
  it('Should render the BlankSeparator properly', () => {
    const wrapper = shallow(<BlankSeparator />)
    expect(wrapper.text()).toBe('')
    expect(wrapper.prop('aria-hidden')).toBe('true')
  })
})
