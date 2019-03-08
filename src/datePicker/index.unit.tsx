import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import DatePicker from './index'

describe('DatePicker', () => {
  describe('snapshots', () => {
    it('Should render a datepicker with default settings', () => {
      const datepicker = renderer.create(<DatePicker name="datepicker" />).toJSON()
      expect(datepicker).toMatchSnapshot()
    })
    it('Should render a horizontal datepicker with two months', () => {
      const datepicker = renderer
        .create(
          <DatePicker
            name="datepicker"
            orientation={DatePicker.constants.HORIZONTAL}
            numberOfMonths={2}
          />,
        )
        .toJSON()
      expect(datepicker).toMatchSnapshot()
    })

    it('Should render a vertical datepicker with six months', () => {
      const datepicker = renderer
        .create(
          <DatePicker
            name="datepicker"
            orientation={DatePicker.constants.VERTICAL}
            numberOfMonths={6}
          />,
        )
        .toJSON()
      expect(datepicker).toMatchSnapshot()
    })

    it('Should allow to override all localization properties', () => {
      const months = [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
      ]
      const weekdaysLong = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
      const weekdaysShort = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam']
      const firstDayOfWeek = 1
      const datepicker = renderer
        .create(
          <DatePicker
            name="datepicker"
            months={months}
            weekdaysLong={weekdaysLong}
            weekdaysShort={weekdaysShort}
            firstDayOfWeek={firstDayOfWeek}
          />,
        )
        .toJSON()
      expect(datepicker).toMatchSnapshot()
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
})
