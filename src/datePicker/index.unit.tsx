import React from 'react'
import moment from 'moment'
import DatePicker from 'datePicker'

describe('DatePicker', () => {
  it('Should render the DatePicker with an initialDate', () => {
    const initialDate = moment('2020-01-01')
    const wrapper = mount(<DatePicker
      name="datepicker"
      initialDate={initialDate}
    />)
    const dayPickerSingleDateController = wrapper.find('DayPickerSingleDateController')
    expect(dayPickerSingleDateController.prop('date')).toBe(initialDate)
  })

  describe('#onChange', () => {
    it('Should return the date in the format `YYYY-MM-DD`', () => {
      const onChange = jest.fn()
      const date = '2020-01-01 04:42:42'
      const wrapper = mount(<DatePicker
        name="datepicker"
        onChange={onChange}
      />)
      wrapper.instance().onDateChange(moment(date))
      expect(onChange).toHaveBeenCalledWith({ name: 'datepicker', value: '2020-01-01' })
    })
  })
})
