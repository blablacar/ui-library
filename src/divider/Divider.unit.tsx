import React from 'react'
import { shallow } from 'enzyme'
import Divider from './Divider'

describe('Divider', () => {
    it('Should render the divider properly', () => {
        const wrapper = shallow(<Divider />)
        expect(wrapper.text()).toBe('')
        expect(wrapper.prop('aria-hidden')).toBe('true')
    })
})
