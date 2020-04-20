import React from 'react'
import { shallow, mount } from 'enzyme'

import TextTitle from 'typography/title'
import { MediaSize } from '_utils/mediaSizeProvider'
import AutoComplete from 'autoComplete/AutoComplete'
import SearchForm from './SearchForm'
import DatePickerOverlay from './datePicker/overlay'
import StepperOverlay from './stepper/overlay'
import AutoCompleteOverlay from './autoComplete/overlay'
import AutoCompleteSection from './autoComplete/section'
import DatePickerSection from './datePicker/section'
import StepperSection from './stepper/section'

const today = new Date().toISOString()

const defaultProps = {
  onSubmit: () => {},
  autocompleteFromPlaceholder: 'Leaving from',
  autocompleteToPlaceholder: 'Going to',
  renderAutocompleteFrom: props => <AutoComplete {...props} />,
  renderAutocompleteTo: props => <AutoComplete {...props} />,
  datepickerProps: {
    defaultValue: today,
    format: value => `Date: ${new Date(value).toISOString()}`,
  },
  stepperProps: {
    defaultValue: 1,
    min: 1,
    max: 8,
    increaseLabel: 'Increase',
    decreaseLabel: 'Decrease',
    title: 'Choose your number of seats',
    format: value => `${value} seat(s)`,
    confirmLabel: 'Submit',
  },
}

describe('searchForm', () => {
  let wrapper
  const fakeEvent = { e: { relatedTarget: null } }

  describe('interactions', () => {
    describe('large', () => {
      beforeEach(() => {
        jest.spyOn(React, 'useContext').mockImplementation(() => MediaSize.LARGE)
        wrapper = mount(<SearchForm {...defaultProps} />)
      })

      it('should have the autocomplete placeholder', () => {
        expect(wrapper.find('.kirk-searchForm-from').text()).toBe('Leaving from')
        expect(wrapper.find('.kirk-searchForm-to').text()).toBe('Going to')
      })

      it('should open the autocomplete from overlay', () => {
        expect(wrapper.find(AutoCompleteOverlay).exists()).toBe(false)
        wrapper.find('.kirk-searchForm-from > .kirk-search-button').simulate('click')
        expect(wrapper.find(AutoCompleteOverlay).exists()).toBe(true)
        expect(
          wrapper.find(AutoCompleteOverlay).hasClass('kirk-searchForm-autocomplete-from'),
        ).toBe(true)
        wrapper.find(AutoCompleteOverlay).simulate('blur', fakeEvent)
        expect(wrapper.find(AutoCompleteOverlay).exists()).toBe(false)
      })

      it('should open the autocomplete to overlay and close it on blur', () => {
        expect(wrapper.find(AutoCompleteOverlay).exists()).toBe(false)
        wrapper.find('.kirk-searchForm-to > .kirk-search-button').simulate('click')
        expect(wrapper.find(AutoCompleteOverlay).exists()).toBe(true)
        expect(wrapper.find(AutoCompleteOverlay).hasClass('kirk-searchForm-autocomplete-to')).toBe(
          true,
        )
        wrapper.find(AutoCompleteOverlay).simulate('blur', fakeEvent)
        expect(wrapper.find(AutoCompleteOverlay).exists()).toBe(false)
      })

      it('should open the datepicker overlay and close it on blur', () => {
        expect(wrapper.find(DatePickerOverlay).exists()).toBe(false)
        wrapper.find('.kirk-searchForm-date > .kirk-search-button').simulate('click')
        expect(wrapper.find(DatePickerOverlay).exists()).toBe(true)
        wrapper.find(DatePickerOverlay).simulate('blur', fakeEvent)
        expect(wrapper.find(DatePickerOverlay).exists()).toBe(false)
      })

      it('should open the stepper overlay and close it on blur', () => {
        expect(wrapper.find(StepperOverlay).exists()).toBe(false)
        wrapper.find('.kirk-searchForm-seats > .kirk-search-button').simulate('click')
        expect(wrapper.find(StepperOverlay).exists()).toBe(true)
        wrapper.find(StepperOverlay).simulate('blur', fakeEvent)
        expect(wrapper.find(StepperOverlay).exists()).toBe(false)
      })
    })

    describe('small', () => {
      beforeEach(() => {
        jest.spyOn(React, 'useContext').mockImplementation(() => MediaSize.SMALL)
        wrapper = shallow(<SearchForm {...defaultProps} />)
      })

      it('should open the autocomplete from section', () => {
        expect(wrapper.find(AutoCompleteSection).exists()).toBe(false)
        wrapper.find('.kirk-searchForm-from > .kirk-search-button').simulate('click')
        expect(wrapper.find(AutoCompleteSection).exists()).toBe(true)
      })

      it('should open the autocomplete to section', () => {
        expect(wrapper.find(AutoCompleteSection).exists()).toBe(false)
        wrapper.find('.kirk-searchForm-to > .kirk-search-button').simulate('click')
        expect(wrapper.find(AutoCompleteSection).exists()).toBe(true)
      })

      it('should open the datepicker section', () => {
        expect(wrapper.find(DatePickerSection).exists()).toBe(false)
        wrapper.find('.kirk-searchForm-date > .kirk-search-button').simulate('click')
        expect(wrapper.find(DatePickerSection).exists()).toBe(true)
      })

      it('should open the stepper section', () => {
        expect(wrapper.find(StepperSection).exists()).toBe(false)
        wrapper.find('.kirk-searchForm-seats > .kirk-search-button').simulate('click')
        expect(wrapper.find(StepperSection).exists()).toBe(true)
      })
    })
  })

  describe('invert from to', () => {
    // TODO: implement test when autocomplete list will be available
    // beforeEach(() => {
    //   wrapper = shallow(<SearchForm {...defaultProps} />)
    // })
  })

  describe('format', () => {
    beforeEach(() => {
      jest.spyOn(React, 'useContext').mockImplementation(() => MediaSize.LARGE)
    })

    it('should format the stepper & datepicker values into human readable strings', () => {
      expect(
        wrapper
          .find('.kirk-searchForm-seats')
          .find(TextTitle)
          .text(),
      ).toEqual('1 seat(s)')
      expect(
        wrapper
          .find('.kirk-searchForm-date')
          .find(TextTitle)
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
          .find(TextTitle)
          .text(),
      ).toEqual(`Date: ${expectedDate}`)
    })

    it('should update the stepper value after changing it', () => {
      wrapper = mount(<SearchForm {...defaultProps} />)
      wrapper.find('.kirk-searchForm-seats > .kirk-search-button').simulate('click')

      wrapper
        .find('.kirk-stepper-increment')
        .at(0)
        .simulate('click')

      expect(
        wrapper
          .find('.kirk-searchForm-seats')
          .find(TextTitle)
          .text(),
      ).toEqual('2 seat(s)')
    })
  })
})
