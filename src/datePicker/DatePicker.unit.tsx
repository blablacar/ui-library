import React from 'react'
import DayPicker, { CaptionElementProps, NavbarElementProps } from 'react-day-picker'
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'

import { DatePicker, DatePickerOrientation } from './DatePicker'

describe('DatePicker', () => {
  it('Should apply the base className ', () => {
    const datepicker = shallow(<DatePicker />)
    expect(datepicker.prop('className')).toContain('kirk-datepicker')
  })

  describe('renderNavbar', () => {
    const navbarProps: Partial<NavbarElementProps> = {
      className: '',
      showNextButton: true,
      showPreviousButton: true,
      onPreviousClick() {},
      onNextClick() {},
    }
    it('Should render the weekdays in vertical mode', () => {
      const datepicker = shallow(
        <DatePicker name="datepicker" orientation={DatePickerOrientation.VERTICAL} />,
      )
      const navbar = renderer.create(datepicker.instance().renderNavbar(navbarProps))
      expect(navbar).toMatchSnapshot()
    })

    it('Should render the previous/next buttons in horizontal mode', () => {
      const datepicker = shallow(
        <DatePicker name="datepicker" orientation={DatePickerOrientation.HORIZONTAL} />,
      )
      const navbar = renderer.create(datepicker.instance().renderNavbar(navbarProps))
      expect(navbar).toMatchSnapshot()
    })
  })

  describe('renderCaption', () => {
    const currentYear = new Date().getFullYear()
    const datepicker = shallow(<DatePicker name="datepicker" />)
    const captionProps: Partial<CaptionElementProps> = {
      date: new Date(currentYear, 0, 1),
      localeUtils: {
        ...DayPicker.LocaleUtils,
        formatMonthTitle: datepicker.instance().formatMonthTitle,
      },
    }
    it('Should render the given month title', () => {
      const caption = renderer.create(datepicker.instance().renderCaption(captionProps))
      expect(caption).toMatchSnapshot()
    })
    it('Should render the given month title with year if it is not the current year', () => {
      const futureYearProps = { ...captionProps, date: new Date(2050, 0, 1) }
      const caption = renderer.create(datepicker.instance().renderCaption(futureYearProps))
      expect(caption).toMatchSnapshot()
    })
  })

  describe('onChange', () => {
    it('Should return the date in the format `YYYY-MM-DD`', () => {
      const onChange = jest.fn()
      const date = new Date(2020, 0, 1)
      const wrapper = shallow(<DatePicker name="datepicker" onChange={onChange} />)
      wrapper.instance().onDayClick(date, {})
      expect(onChange).toHaveBeenCalledWith({ name: 'datepicker', value: '2020-01-01' })
    })
  })

  describe('react-day-picker', () => {
    it('Should forward props to the DayPicker component', () => {
      const now = new Date()
      const wrapper = mount(<DatePicker name="datepicker" initialDate={now} />)
      const instance = wrapper.instance()

      expect(wrapper.find(DayPicker).prop('numberOfMonths')).toEqual(2)
      expect(wrapper.find(DayPicker).prop('selectedDays')).toEqual(now)
      expect(wrapper.find(DayPicker).prop('onDayClick')).toEqual(instance.onDayClick)
      expect(wrapper.find(DayPicker).prop('navbarElement')).toEqual(instance.renderNavbar)
      expect(wrapper.find(DayPicker).prop('captionElement')).toEqual(instance.renderCaption)
      expect(wrapper.find(DayPicker).prop('renderDay')).toEqual(instance.renderDay)
      expect(wrapper.find(DayPicker).prop('firstDayOfWeek')).toEqual(0)
    })

    it('Should forward same value for selectedDays and initialMonth props to the DayPicker component', () => {
      const initialDate = new Date()
      initialDate.setMonth(initialDate.getMonth() + 6)
      const wrapper = mount(
        <DatePicker
          name="datepicker"
          initialDate={initialDate}
          initialMonth={initialDate}
          numberOfMonths={12}
        />,
      )

      expect(wrapper.find(DayPicker).prop('numberOfMonths')).toEqual(12)
      expect(wrapper.find(DayPicker).prop('selectedDays')).toEqual(initialDate)
      expect(wrapper.find(DayPicker).prop('initialMonth')).toEqual(initialDate)
    })

    it('Should forward only selectedDays and keep default initialMonth props to the DayPicker component', () => {
      const offsetTop = 1000
      const stickyPositionTop = 50
      window.scrollTo = jest.fn()
      Object.defineProperty(HTMLElement.prototype, 'offsetTop', {
        configurable: true,
        value: offsetTop,
      })

      const initialDate = new Date()
      initialDate.setMonth(initialDate.getMonth() + 6)
      const wrapper = mount(
        <DatePicker
          name="datepicker"
          initialDate={initialDate}
          numberOfMonths={12}
          stickyPositionTop={stickyPositionTop}
        />,
      )

      expect(wrapper.find(DayPicker).prop('numberOfMonths')).toEqual(12)
      expect(wrapper.find(DayPicker).prop('selectedDays')).toEqual(initialDate)
      expect(wrapper.find(DayPicker).prop('initialMonth')).not.toEqual(initialDate)
      expect(window.scrollTo).toHaveBeenCalledWith(0, offsetTop + stickyPositionTop)
    })

    afterEach(() => {
      // Reset offsetTop
      Object.defineProperty(HTMLElement.prototype, 'offsetTop', {
        configurable: true,
        value: 0,
      })

      jest.clearAllMocks()
    })
  })
})
