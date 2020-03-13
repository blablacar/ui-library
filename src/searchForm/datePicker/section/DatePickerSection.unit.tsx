import React from 'react'
import { shallow } from 'enzyme'
import DatePicker, { DatePickerOrientation } from 'datePicker'
import DatePickerSection from './DatePickerSection'
import Item from '_utils/item'
import ChevronIcon from 'icon/chevronIcon'

describe('DatePickerSection', () => {
  it('should have a clickable Item with a title and chevron icon', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<DatePickerSection title="Today" onClick={onClick} />)
    expect(wrapper.find(Item).prop('leftTitle')).toEqual('Today')
    expect(wrapper.find(Item).prop('leftAddon')).toEqual(<ChevronIcon left />)
    expect(wrapper.find(Item).prop('tag')).toEqual(<button type="button" />)
    wrapper.find(Item).simulate('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('should have a DatePicker in vertical orientation', () => {
    const wrapper = shallow(<DatePickerSection title="Today" />)
    expect(wrapper.find(DatePicker).prop('orientation')).toEqual(DatePickerOrientation.VERTICAL)
  })
})
