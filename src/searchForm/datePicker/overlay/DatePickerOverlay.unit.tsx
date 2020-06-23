import React from 'react'
import { shallow } from 'enzyme'

import { Item } from '../../../_internals/item'
import { DatePicker, DatePickerOrientation } from '../../../datePicker'
import { CalendarIcon } from '../../../icon/calendarIcon'
import { DatePickerOverlay } from './DatePickerOverlay'

describe('DatePickerOverlay', () => {
  it('should have a Item with a title and a calendar icon', () => {
    const wrapper = shallow(
      <DatePickerOverlay
        title="Today"
        name="Name"
        renderDatePickerComponent={props => <DatePicker {...props} />}
      />,
    )

    expect(wrapper.find(Item).prop('leftTitle')).toEqual('Today')
    expect(wrapper.find(Item).prop('leftAddon')).toEqual(<CalendarIcon />)
  })

  it('should have a DatePicker with 1 month displayed and in horizontal orientation', () => {
    const wrapper = shallow(
      <DatePickerOverlay
        title="Today"
        name="name"
        renderDatePickerComponent={props => <DatePicker {...props} />}
      />,
    )

    expect(wrapper.find(DatePicker).prop('numberOfMonths')).toEqual(1)
    expect(wrapper.find(DatePicker).prop('orientation')).toEqual(DatePickerOrientation.HORIZONTAL)
    expect(wrapper.find(DatePicker).prop('focus')).toBe(true)
  })
})
