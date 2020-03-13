import React from 'react'
import { shallow } from 'enzyme'
import DatePicker, { DatePickerOrientation } from 'datePicker'
import DatePickerOverlay from './DatePickerOverlay'
import Item from '_utils/item'
import CalendarIcon from 'icon/calendarIcon'

describe('DatePickerOverlay', () => {
  it('should have a Item with a title and a calendar icon', () => {
    const wrapper = shallow(<DatePickerOverlay title="Today" />)
    expect(wrapper.find(Item).prop('leftTitle')).toEqual('Today')
    expect(wrapper.find(Item).prop('leftAddon')).toEqual(<CalendarIcon />)
  })

  it('should have a DatePicker with 1 month displayed and in horizontal orientation', () => {
    const wrapper = shallow(<DatePickerOverlay title="Today" />)
    expect(wrapper.find(DatePicker).prop('numberOfMonths')).toEqual(1)
    expect(wrapper.find(DatePicker).prop('orientation')).toEqual(DatePickerOrientation.HORIZONTAL)
  })
})
