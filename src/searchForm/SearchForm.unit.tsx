import React from 'react'
import { shallow, mount } from 'enzyme'

import TextBody from 'typography/body'
import SearchForm from './SearchForm'
import DatePickerOverlay from './datePicker/overlay'
import StepperOverlay from './stepper/overlay'
import AutoCompleteOverlay from './autoComplete/overlay'

const today = new Date().toISOString()

const defaultProps = {
  onSubmit: () => {},
  autocompleteFromProps: {
    placeholder: 'Leaving From',
  },
  autocompleteToProps: {
    placeholder: 'Going to',
  },
  datepickerProps: {
    defaultValue: today,
    format: value => `Date: ${new Date(value).toISOString()}`,
  },
  stepperProps: {
    defaultValue: 1,
    increaseLabel: 'Increase',
    decreaseLabel: 'Decrease',
    title: 'Choose your number of seats',
    format: value => `${value} seat(s)`,
  },
}

describe('searchForm', () => {
  let wrapper

  describe('interactions', () => {
    beforeEach(() => {
      wrapper = shallow(<SearchForm {...defaultProps} />)
    })
    it('should open the autocomplete from overlay', () => {
      expect(wrapper.find(AutoCompleteOverlay).exists()).toBe(false)
      wrapper.find('.kirk-searchForm-from > .kirk-search-button').simulate('click')
      expect(wrapper.find(AutoCompleteOverlay).exists()).toBe(true)
      expect(wrapper.find(AutoCompleteOverlay).hasClass('kirk-searchForm-autocomplete-from')).toBe(
        true,
      )
    })

    it('should open the autocomplete to overlay', () => {
      expect(wrapper.find(AutoCompleteOverlay).exists()).toBe(false)
      wrapper.find('.kirk-searchForm-to > .kirk-search-button').simulate('click')
      expect(wrapper.find(AutoCompleteOverlay).exists()).toBe(true)
      expect(wrapper.find(AutoCompleteOverlay).hasClass('kirk-searchForm-autocomplete-to')).toBe(
        true,
      )
    })

    it('should open the datepicker overlay', () => {
      expect(wrapper.find(DatePickerOverlay).exists()).toBe(false)
      wrapper.find('.kirk-searchForm-date > .kirk-search-button').simulate('click')
      expect(wrapper.find(DatePickerOverlay).exists()).toBe(true)
    })

    it('should open the stepper overlay', () => {
      expect(wrapper.find(StepperOverlay).exists()).toBe(false)
      wrapper.find('.kirk-searchForm-seats > .kirk-search-button').simulate('click')
      expect(wrapper.find(StepperOverlay).exists()).toBe(true)
    })
  })

  describe('format', () => {
    it('should format the stepper & datepicker values into human readable strings', () => {
      expect(
        wrapper
          .find('.kirk-searchForm-seats')
          .find(TextBody)
          .text(),
      ).toEqual('1 seat(s)')
      expect(
        wrapper
          .find('.kirk-searchForm-date')
          .find(TextBody)
          .text(),
      ).toEqual(`Date: ${today}`)
    })

    it('should update the datepicker value after changing it', () => {
      // Expected date is the first day of next month
      const todayDate = new Date(today)

      const expectedDate = new Date(
        Date.UTC(todayDate.getFullYear(), todayDate.getMonth() + 1, 1, 0, 0, 0),
      ).toISOString()

      wrapper = mount(<SearchForm {...defaultProps} />)
      wrapper.find('.kirk-searchForm-date > .kirk-search-button').simulate('click')

      wrapper
        .find('.kirk-datepicker-next-month')
        .at(0)
        .simulate('click')

      wrapper
        .find('.DayPicker-Day[aria-disabled=false]')
        .at(0) // Click on the first day of next month
        .simulate('click')

      expect(
        wrapper
          .find('.kirk-searchForm-date')
          .find(TextBody)
          .text(),
      ).toEqual(`Date: ${expectedDate}`)
    })

    it('should update the stepper value after changing it', () => {
      wrapper = mount(<SearchForm {...defaultProps} />)
      wrapper.find('.kirk-searchForm-seats > .kirk-search-button').simulate('click')

      wrapper
        .find(StepperOverlay)
        .find('button')
        .at(1)
        .simulate('click')

      expect(
        wrapper
          .find('.kirk-searchForm-seats')
          .find(TextBody)
          .text(),
      ).toEqual('2 seat(s)')
    })
  })
})
