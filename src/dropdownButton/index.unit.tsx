import React from 'react'
import DropdownButton from 'dropdownButton'

const dummyDropdown = () => <div />

const defaultProps = {
  children: <div />,
  dropdown: <dummyDropdown />,
}

describe('DropdownButton', () => {
  it('Should not be open when mouting', () => {
    const wrapper = shallow(<DropdownButton {...defaultProps} />)
    expect(wrapper.state('open')).toBe(false)
    expect(wrapper.find('dummyDropdown').exists()).toBe(false)
  })

  it('Should be open when clicking the button', () => {
    const wrapper = shallow(<DropdownButton {...defaultProps} />)
    wrapper.find('button').simulate('click')
    expect(wrapper.state('open')).toBe(true)
    expect(wrapper.find('dummyDropdown').exists()).toBe(true)
  })

  it('Should accept a custom className for the button', () => {
    const customClassName = 'custom'
    const wrapper = shallow(<DropdownButton {...defaultProps} className={customClassName} />)
    expect(wrapper.find('button').hasClass(customClassName)).toBe(true)
  })

  describe('#dropdownWithPointer', () => {
    it('Should not have a pointer by default', () => {
      const wrapper = shallow(<DropdownButton {...defaultProps} />)
      wrapper.setState({ open: true })
      expect(wrapper.find('.dropdown').hasClass('dropdown--withPointer')).toBe(false)
    })

    it('Should have a pointer when having prop `dropdownWithPointer`', () => {
      const wrapper = shallow(<DropdownButton {...defaultProps} dropdownWithPointer />)
      wrapper.setState({ open: true })
      expect(wrapper.find('.dropdown').hasClass('dropdown--withPointer')).toBe(true)
    })
  })
})
