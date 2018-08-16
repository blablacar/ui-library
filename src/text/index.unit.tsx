import React from 'react'

import Text from 'text'

describe('Text', () => {
  it('Should have the default classes', () => {
    const wrapper = shallow(<Text>{'test'}</Text>)
    expect(wrapper.hasClass('kirk-text')).toBe(true)
    expect(wrapper.hasClass('kirk-text-body')).toBe(true)
  })

  it('Should have the custom class', () => {
    const wrapper = shallow(<Text className="testClass">{'test'}</Text>)
    expect(wrapper.hasClass('testClass')).toBe(true)
  })

  it('Should render with the default span tag', () => {
    const wrapper = shallow(<Text>{'test'}</Text>)
    expect(wrapper.name()).toBe('span')
  })

  it('Should render with the div tag', () => {
    const wrapper = shallow(<Text tag="div">{'test'}</Text>)
    expect(wrapper.name()).toBe('div')
  })

  it('Should render the given text', () => {
    const wrapper = shallow(<Text>{'test'}</Text>)
    expect(wrapper.text()).toContain('test')
  })
})
