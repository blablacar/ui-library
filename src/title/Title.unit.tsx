import React from 'react'
import { shallow } from 'enzyme'

import {} from '@testing-library/react'

import { Title } from './Title'

describe('Title', () => {
  it('Should render the given title text', () => {
    const title = 'blabla'
    const wrapper = shallow(<Title>{title}</Title>)
    expect(wrapper.hasClass('kirk-title')).toBe(true)
    expect(wrapper.text()).toContain(title)
    expect(wrapper.name()).toBe('h1')
  })

  describe('#headingLevel', () => {
    it('Should render the correct heading level when passing a `number`', () => {
      const wrapper = shallow(<Title headingLevel={5}>blabla</Title>)
      expect(wrapper.name()).toBe('h5')
    })

    it('Should render the correct heading level when passing a `string`', () => {
      const wrapper = shallow(<Title headingLevel="5">blabla</Title>)
      expect(wrapper.name()).toBe('h5')
    })

    it('Should render blank when heading level is invalid', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
      const wrapper = shallow(<Title headingLevel={10}>blabla</Title>)
      expect(wrapper.type()).toBe(null)
      consoleErrorSpy.mockRestore()
    })
  })

  it('Should add id if provided', () => {
    const wrapper = shallow(<Title id="my-id">blabla</Title>)
    expect(wrapper.prop('id')).toBe('my-id')
  })
})
