import React from 'react'
import Radio from 'radio'
import ItemChoice from 'itemChoice'
import CrossIcon from 'icon/crossIcon'

const defaultProps = {
  name: 'radioName',
  value: 'radioValue1',
}

jest.useFakeTimers()

describe('Radio', () => {
  it('Should render an input with the proper attributes', () => {
    const wrapper = shallow(<Radio {...defaultProps}>Title</Radio>)
    expect(wrapper.find('input').prop('name')).toBe(defaultProps.name)
    expect(wrapper.find('input').prop('value')).toBe(defaultProps.value)
    expect(wrapper.find('input').prop('checked')).toBe(false)
  })

  it('Should accept a custom `className`', () => {
    const customClassName = 'custom'
    const wrapper = shallow(<Radio {...defaultProps} className={customClassName}>Title</Radio>)
    expect(wrapper.hasClass(customClassName)).toBe(true)
  })

  it('Should call `onChange` when selected', () => {
    const onChange = jest.fn()
    const wrapper = shallow(<Radio {...defaultProps} onChange={onChange}>Title</Radio>)
    wrapper.find('input').simulate('change')
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('Should render a subLabel', () => {
    const wrapper = shallow(<Radio {...defaultProps} subLabel="Sublabel1">Title</Radio>)
    expect(wrapper.find(ItemChoice).prop('subLabel')).toBe('Sublabel1')
  })

  it('Can be displayed as highlighted', () => {
    const wrapper = shallow(<Radio {...defaultProps} highlighted>Title</Radio>)
    expect(wrapper.find(ItemChoice).prop('highlighted')).toBe(true)
  })

  it('Can be in loading state', () => {
    const wrapper = shallow(<Radio {...defaultProps} status={Radio.STATUS.LOADING}>Title</Radio>)
    expect(wrapper.find(ItemChoice).prop('status')).toBe(Radio.STATUS.LOADING)
  })

  it('Can be in valid state', () => {
    const wrapper = shallow(<Radio {...defaultProps} status={Radio.STATUS.CHECKED}>Title</Radio>)
    expect(wrapper.find(ItemChoice).prop('status')).toBe(Radio.STATUS.CHECKED)
  })

  it('fires the callback event when valid', () => {
    const event = jest.fn()
    const wrapper = mount(<Radio {...defaultProps} onDoneAnimationEnd={event}>blabla</Radio>)
    wrapper.setProps({ status: Radio.STATUS.CHECKED })
    expect(setTimeout.mock.calls.length).toBe(1)
    expect(setTimeout).toHaveBeenCalledTimes(1)
  })
})
