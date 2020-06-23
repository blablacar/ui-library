import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { mount, shallow } from 'enzyme'

import '../../__mocks__/matchMedia'

import { MediaSize } from '../_utils/mediaSizeProvider'
import { AutoComplete } from '../autoComplete/AutoComplete'
import { TextTitle } from '../typography/title'
import { AutoCompleteOverlay } from './autoComplete/overlay'
import { DatePickerOverlay } from './datePicker/overlay'
import { Overlay } from './overlay'
import { SearchForm, SearchFormProps } from './SearchForm'
import { StepperOverlay } from './stepper/overlay'

const today = new Date().toISOString()

const defaultProps: SearchFormProps = {
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

      it('should open the autocomplete from overlay and close it on blur', () => {
        expect(wrapper.find(AutoCompleteOverlay).exists()).toBe(false)
        wrapper.find('.kirk-searchForm-from .kirk-search-button').simulate('click')
        expect(wrapper.find(AutoCompleteOverlay).exists()).toBe(true)
        expect(
          wrapper
            .find(Overlay)
            .first()
            .hasClass('kirk-searchForm-autocomplete-from'),
        ).toBe(true)
        wrapper
          .find(Overlay)
          .first()
          .simulate('blur', fakeEvent)
        expect(
          wrapper
            .find(Overlay)
            .first()
            .prop('shouldDisplay'),
        ).toBe(false)
      })

      it('should open the autocomplete to overlay', () => {
        expect(wrapper.find(AutoCompleteOverlay).exists()).toBe(false)
        wrapper.find('.kirk-searchForm-to .kirk-search-button').simulate('click')
        expect(wrapper.find(AutoCompleteOverlay).exists()).toBe(true)
        expect(
          wrapper
            .find(Overlay)
            .at(1)
            .hasClass('kirk-searchForm-autocomplete-to'),
        ).toBe(true)
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

    describe('small', () => {
      beforeEach(() => {
        jest.spyOn(React, 'useContext').mockImplementation(() => MediaSize.SMALL)
        wrapper = shallow(<SearchForm {...defaultProps} />)
      })

      it('should open the autocomplete from section', () => {
        expect(
          wrapper
            .find(CSSTransition)
            .first()
            .prop('in'),
        ).toBe(false)
        wrapper.find('.kirk-searchForm-from .kirk-search-button').simulate('click')
        expect(
          wrapper
            .find(CSSTransition)
            .first()
            .prop('in'),
        ).toBe(true)
      })

      it('should open the autocomplete to section', () => {
        expect(
          wrapper
            .find(CSSTransition)
            .at(1)
            .prop('in'),
        ).toBe(false)
        wrapper.find('.kirk-searchForm-to .kirk-search-button').simulate('click')
        expect(
          wrapper
            .find(CSSTransition)
            .at(1)
            .prop('in'),
        ).toBe(true)
      })

      it('should open the datepicker section', () => {
        expect(
          wrapper
            .find(CSSTransition)
            .at(2)
            .prop('in'),
        ).toBe(false)
        wrapper.find('.kirk-searchForm-date > .kirk-search-button').simulate('click')
        expect(
          wrapper
            .find(CSSTransition)
            .at(2)
            .prop('in'),
        ).toBe(true)
      })

      it('should open the stepper section', () => {
        expect(
          wrapper
            .find(CSSTransition)
            .at(3)
            .prop('in'),
        ).toBe(false)
        wrapper.find('.kirk-searchForm-seats > .kirk-search-button').simulate('click')
        expect(
          wrapper
            .find(CSSTransition)
            .at(3)
            .prop('in'),
        ).toBe(true)
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
