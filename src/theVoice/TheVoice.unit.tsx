import React from 'react'
import { mount } from 'enzyme'
import TheVoice from './TheVoice'

describe('TheVoice', () => {
  it('Should use a h1 with the voice content', () => {
    const title = 'the voice content'
    const wrapper = mount(<TheVoice>{title}</TheVoice>)
    const heading = wrapper.find('h1')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe('the voice content')
  })
})
