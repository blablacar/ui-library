import React from 'react'
import { shallow, mount } from 'enzyme'

import Why from './Why'

const text = 'Why this?'
const title = 'Why this? (new window)'

it('Should render attributes and the given text.', () => {
  const wrapper = shallow(<Why title={title}>{text}</Why>)
  expect(wrapper.text()).toContain(text)
  expect(wrapper.prop('title')).toBe(title)
})

it('Should render the modifiers.', () => {
  const wrapper = shallow(
    <Why className="addClass" title={title}>
      Text
    </Why>,
  )
  expect(wrapper.hasClass('kirk-why addClass')).toBe(true)
})

it('Should have a onClick behaviour.', () => {
  const onClick = jest.fn()
  const wrapper = mount(
    <Why title={title} onClick={onClick}>
      Text
    </Why>,
  )
  wrapper.simulate('click')
  expect(onClick).toHaveBeenCalledTimes(1)
})
