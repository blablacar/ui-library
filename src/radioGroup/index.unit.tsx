import React from 'react'

import RadioGroup from 'radioGroup'
import Radio from 'radio'
import Loader from 'loader'

jest.useFakeTimers()

it('should have the proper text & attributes', () => {
  const radio = mount((
    <RadioGroup name="radio1" value="radioValue1">
      <Radio value="radioValue1">Label 1</Radio>
      <Radio value="radioValue2" subLabel="Sublabel">Label 2</Radio>
    </RadioGroup>
  ))

  radio.find('input').forEach(elem => expect(elem.prop('name')).toBe('radio1'))
  expect(radio.find('input').first().prop('type')).toBe('radio')
  expect(radio.find('input').first().prop('value')).toBe('radioValue1')
  expect(radio.find('input').first().prop('checked')).toBe(true)
})

it('should have a loading state', () => {
  const radio = mount((
    <RadioGroup name="radio1" value="radioValue1">
      <Radio value="radioValue1">Label 1</Radio>
      <Radio value="radioValue2" subLabel="Sublabel">Label 2</Radio>
    </RadioGroup>
  ))

  expect(radio.find('.kirk-radio').first().find(Loader).exists()).toBe(false)
  radio.setProps({ status: Radio.STATUS.LOADING })
  expect(radio.find('.kirk-radio').first().find(Loader).exists()).toBe(true)
  expect(radio.find('.kirk-radio').last().find(Loader).exists()).toBe(false)
})

it('should have a valid state & fires the callback when valid', () => {
  const event = jest.fn()
  const radio = mount((
    <RadioGroup name="radio1" value="radioValue1" onDoneAnimationEnd={event}>
      <Radio value="radioValue1">Label 1</Radio>
      <Radio value="radioValue2" subLabel="Sublabel">Label 2</Radio>
    </RadioGroup>
  ))

  expect(radio.find('.kirk-radio').first().find(Loader).exists()).toBe(false)
  radio.setProps({ status: Radio.STATUS.CHECKED })
  expect(radio.find('.kirk-radio').first().find(Loader).exists()).toBe(true)
  expect(radio.find('.kirk-radio').last().find(Loader).exists()).toBe(false)
  expect(event).not.toBeCalled()
  jest.advanceTimersByTime(1500)
  expect(event).toBeCalled()
})

it('should be accessible via label', () => {
  const radio = mount((
    <RadioGroup name="radio1">
      <Radio value="radioValue1">Label 1</Radio>
      <Radio value="radioValue2">Label 2</Radio>
    </RadioGroup>
  ))
  expect(radio.find('label').first().prop('htmlFor')).toEqual('radioValue1')
  expect(radio.find('input').first().prop('id')).toEqual('radioValue1')
})

it('should be able to receive props', () => {
  const radio = mount((
    <RadioGroup name="radio1" value="radioValue1">
      <Radio value="radioValue1">Label 1</Radio>
      <Radio value="radioValue2">Label 2</Radio>
    </RadioGroup>
  ))
  const spyReceiveProps = jest.spyOn(RadioGroup.prototype, 'componentWillReceiveProps')
  const spySetState = jest.spyOn(RadioGroup.prototype, 'setState')
  expect(spyReceiveProps).not.toHaveBeenCalled()
  radio.setProps({ value: 'radioValue1' })
  // Value not changed
  expect(spyReceiveProps).toHaveBeenCalledTimes(1)
  expect(spySetState).not.toHaveBeenCalled()
  // Value changing
  radio.setProps({ value: 'radioValue2' })
  expect(spySetState).toHaveBeenCalledTimes(1)
})
