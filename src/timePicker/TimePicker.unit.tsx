import React from 'react'
import { shallow } from 'enzyme'

import { getTodayDate, TimePicker } from './TimePicker'

describe('TimePicker', () => {
  const defaultProps = {
    name: 'departure-time',
  }

  it('Renders TimePicker with a custom className', () => {
    const wrapper = shallow(<TimePicker {...defaultProps} className="custom" />)
    expect(wrapper.hasClass('custom')).toBe(true)
  })

  describe('#disabled', () => {
    it('Can be disabled', () => {
      const wrapper = shallow(<TimePicker {...defaultProps} disabled />)
      expect(wrapper.find('[aria-disabled]').exists()).toBe(true)
      expect(wrapper.find('select').prop('disabled')).toBe(true)
    })
  })

  describe('#defaultValue', () => {
    it('Can have an initial time value', () => {
      const defaultValue = '09:00'
      const wrapper = shallow(<TimePicker {...defaultProps} defaultValue={defaultValue} />)
      expect(wrapper.find('select').prop('value')).toBe(defaultValue)
      expect(wrapper.state('value')).toBe(defaultValue)
    })
  })

  describe('#minuteStep', () => {
    it('Can change the minutes step', () => {
      const wrapper = shallow(<TimePicker {...defaultProps} minuteStep={240} />)
      expect(Object.keys(wrapper.state('steps'))).toEqual([
        '00:00',
        '04:00',
        '08:00',
        '12:00',
        '16:00',
        '20:00',
      ])
    })
  })

  describe('#onChange', () => {
    it('Calls `onChange` when selecting a time value', () => {
      const onChangeSpy = jest.fn()
      const wrapper = shallow(<TimePicker {...defaultProps} onChange={onChangeSpy} />)
      const fakeValue = '09:30'
      wrapper.find('select').simulate('change', { target: { value: fakeValue } })
      expect(onChangeSpy).toHaveBeenCalledWith({ name: defaultProps.name, value: fakeValue })
    })
  })

  describe('#renderTime', () => {
    it('Can render time with a custom renderer', () => {
      const wrapper = shallow(
        <TimePicker
          {...defaultProps}
          minuteStep={480}
          renderTime={dt => `${dt.getHours()}h ${dt.getMinutes()}m`}
        />,
      )
      expect(wrapper.state('steps')).toEqual({
        '00:00': '0h 0m',
        '08:00': '8h 0m',
        '16:00': '16h 0m',
      })
    })
  })

  describe('#timeStart', () => {
    it('Can set a time start', () => {
      const wrapper = shallow(<TimePicker {...defaultProps} minuteStep={240} timeStart="08:00" />)
      expect(Object.keys(wrapper.state('steps'))).toEqual(['08:00', '12:00', '16:00', '20:00'])
    })
    it('Defaults to the first option if timeStart changes', () => {
      const wrapper = shallow(
        <TimePicker {...defaultProps} minuteStep={240} timeStart="08:00" defaultValue="08:00" />,
      )

      expect(wrapper.state('value')).toEqual('08:00')
      wrapper.setProps({ timeStart: '21:00' })
      expect(wrapper.state('value')).toEqual('21:00')
    })
  })

  describe('#getTodayDate', () => {
    it('should return today date with 00:00:00 as time', () => {
      const today = getTodayDate()
      expect(today.getHours()).toEqual(0)
      expect(today.getMinutes()).toEqual(0)
      expect(today.getSeconds()).toEqual(0)
      expect(today.getMilliseconds()).toEqual(0)
    })
    it('should have `referenceDate` with time at 00:00:00', () => {
      const wrapper = shallow(<TimePicker {...defaultProps} />)
      const instance = wrapper.instance() as InstanceType<typeof TimePicker>
      const { referenceDate } = instance
      expect(referenceDate.getHours()).toEqual(0)
      expect(referenceDate.getMinutes()).toEqual(0)
      expect(referenceDate.getSeconds()).toEqual(0)
      expect(referenceDate.getMilliseconds()).toEqual(0)
    })
  })

  describe('focus prop', () => {
    it('should focus the select on mount', () => {
      const wrapper = shallow(<TimePicker {...defaultProps} focus />, {
        disableLifecycleMethods: true,
      })
      const instance = wrapper.instance() as InstanceType<typeof TimePicker>
      instance.selectRef = {
        current: {
          focus: jest.fn(),
        },
      }
      instance.componentDidMount()
      expect(instance.selectRef.current.focus).toHaveBeenCalledTimes(1)
    })

    it('should focus when changing from false to true', () => {
      const wrapper = shallow(<TimePicker {...defaultProps} />)
      const instance = wrapper.instance() as InstanceType<typeof TimePicker>
      instance.selectRef = {
        current: {
          focus: jest.fn(),
        },
      }
      wrapper.setProps({ focus: true })
      expect(instance.selectRef.current.focus).toHaveBeenCalledTimes(1)
    })
  })
})
