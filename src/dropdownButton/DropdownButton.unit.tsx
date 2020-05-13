import React from 'react'
import { shallow } from 'enzyme'

import ChevronIcon from '../icon/chevronIcon'
import DropdownButton from './DropdownButton'

const defaultProps = {
  onClick() {},
  children: <div className="children" />,
}

describe('DropdownButton', () => {
  it('Should not be open by default', () => {
    const wrapper = shallow(<DropdownButton {...defaultProps} />)
    expect(wrapper.find('button').prop('aria-expanded')).toBe(false)
    expect(wrapper.hasClass('kirk-dropdownButton--open')).toBe(false)
  })

  it('Should have the correct props & class when opened', () => {
    const wrapper = shallow(<DropdownButton {...defaultProps} open />)
    expect(wrapper.find('button').prop('aria-expanded')).toBe(true)
    expect(wrapper.hasClass('kirk-dropdownButton--open')).toBe(true)
  })

  it('Should accept a custom className for the button', () => {
    const customClassName = 'custom'
    const wrapper = shallow(<DropdownButton {...defaultProps} className={customClassName} />)
    expect(wrapper.hasClass(customClassName)).toBe(true)
  })

  it('Should have an attribute type button', () => {
    const wrapper = shallow(<DropdownButton {...defaultProps} />)
    expect(wrapper.find('button[type="button"]')).toHaveLength(1)
  })

  it('Should always have the chevron icon', () => {
    const wrapper = shallow(<DropdownButton {...defaultProps} />)
    expect(wrapper.find(ChevronIcon)).toHaveLength(1)
  })

  it('Should always handle the chevron icon position', () => {
    const wrapper = shallow(<DropdownButton {...defaultProps} />)
    expect(wrapper.find(ChevronIcon)).toHaveLength(1)
    expect(wrapper.find('.children')).toHaveLength(1)

    expect(
      wrapper
        .find('button')
        .childAt(0)
        .is('.children'),
    ).toBe(true)
    expect(
      wrapper
        .find('button')
        .childAt(1)
        .is(ChevronIcon),
    ).toBe(true)

    wrapper.setProps({ iconPosition: 'left' })
    expect(
      wrapper
        .find('button')
        .childAt(0)
        .is(ChevronIcon),
    ).toBe(true)
    expect(
      wrapper
        .find('button')
        .childAt(1)
        .is('.children'),
    ).toBe(true)
  })
})
