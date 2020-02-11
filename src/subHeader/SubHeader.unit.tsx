import React from 'react'
import { mount } from 'enzyme'
import SubHeader from './SubHeader'

describe('SubHeader', () => {
  it('Should render the SubHeader properly', () => {
    const wrapper = mount(<SubHeader>SubHeader content</SubHeader>)
    const heading = wrapper.find('h2')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe('SubHeader content')

    const headingClass = wrapper.find('.kirk-subheader')
    expect(headingClass.exists()).toBe(true)
  })
})
