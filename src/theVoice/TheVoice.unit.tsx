import React from 'react'
import { mount, shallow } from 'enzyme'
import Title from '../title'
import TheVoice from './TheVoice'

describe('TheVoice', () => {
  it('Should use a h1 with the voice content', () => {
    const title = 'the voice content'
    const wrapper = mount(<TheVoice>{title}</TheVoice>)
    const heading = wrapper.find('h1')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe('the voice content')
  })

  it('Should forward id to Title if provided', () => {
    const wrapper = shallow(<TheVoice id="my-id">My title</TheVoice>)
    expect(wrapper.find(Title).exists()).toBe(true)
    expect(wrapper.find(Title).prop('id')).toBe('my-id')
  })
})
