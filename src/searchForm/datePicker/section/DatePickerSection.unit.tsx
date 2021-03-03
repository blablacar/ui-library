import React from 'react'
import { shallow } from 'enzyme'

import { Item } from '../../../_internals/item'
import { DatePicker, DatePickerOrientation } from '../../../datePicker'
import { ChevronIcon, ChevronIconDirections } from '../../../icon/chevronIcon'
import { DatePickerSection } from './DatePickerSection'

describe('DatePickerSection', () => {
  it('should have a clickable Item with a title and chevron icon', () => {
    const onClick = jest.fn()
    const wrapper = shallow(
      <DatePickerSection
        title="Today"
        onClose={onClick}
        name="Name"
        renderDatePickerComponent={props => <DatePicker {...props} />}
      />,
    )

    expect(wrapper.find(Item).prop('leftTitle')).toEqual('Today')
    expect(wrapper.find(Item).prop('leftAddon')).toEqual(
      <ChevronIcon direction={ChevronIconDirections.LEFT} />,
    )
    expect(wrapper.find(Item).prop('tag')).toEqual(<button type="button" />)
    wrapper.find(Item).simulate('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('should have a DatePicker in vertical orientation', () => {
    const wrapper = shallow(
      <DatePickerSection
        title="Today"
        name="Name"
        renderDatePickerComponent={props => <DatePicker {...props} />}
        onClose={() => {}}
      />,
    )

    expect(wrapper.find(DatePicker).prop('orientation')).toEqual(DatePickerOrientation.VERTICAL)
  })
})
