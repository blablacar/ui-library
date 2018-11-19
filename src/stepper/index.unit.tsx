import React from 'react'

import Stepper from 'stepper'
import MinusIcon from 'icon/minusIcon'
import PlusIcon from 'icon/plusIcon'

const defaultProps = {
  name: 'testName',
  increaseLabel: 'Increase',
  decreaseLabel: 'Decrease',
}

it('Should have classNames', () => {
  const stepper = shallow(
    <Stepper
      increaseLabel="Plus"
      decreaseLabel="Minus"
      className="customClassName"
      valueClassName="valueClassName"
    >
      Amount of something
    </Stepper>,
  )
  expect(stepper.hasClass('kirk-stepper')).toBe(true)
  expect(stepper.hasClass('customClassName')).toBe(true)
  expect(stepper.find('.kirk-stepper-value').hasClass('valueClassName')).toBe(true)
})

it('Should have the default text & attributes', () => {
  const stepper = mount(
    <Stepper name="test" increaseLabel="Plus" decreaseLabel="Minus">
      Amount of something
    </Stepper>,
  )
  expect(stepper.find('label span').text()).toBe('Amount of something')
  expect(stepper.find('input').prop('value')).toBe(0)
  expect(stepper.prop('min')).toBe(Number.MIN_SAFE_INTEGER)
  expect(stepper.prop('max')).toBe(Number.MAX_SAFE_INTEGER)
  expect(stepper.prop('step')).toBe(1)
  expect(stepper.prop('name')).toBe('test')
})

it('Should pass the button size to plus and minus icons', () => {
  const stepper = shallow(
    <Stepper {...defaultProps} buttonSize={48}>
      Amount of something
    </Stepper>,
  )
  expect(stepper.find(MinusIcon).prop('size')).toBe(48)
  expect(stepper.find(PlusIcon).prop('size')).toBe(48)
})

it('Should be able to increment/decrement the value', () => {
  const onChange = jest.fn()
  const stepper = shallow(
    <Stepper {...defaultProps} value={3} step={3} min={2} max={10} onChange={onChange}>
      Amount of something
    </Stepper>,
  )
  expect(stepper.state('value')).toBe(3)
  stepper.find('.kirk-stepper-increment').simulate('mouseUp')
  expect(stepper.state('value')).toBe(6)
  expect(onChange).toHaveBeenCalledWith({ name: 'testName', value: 6 })
  stepper.find('.kirk-stepper-decrement').simulate('mouseUp')
  expect(stepper.state('value')).toBe(3)
  expect(onChange).toHaveBeenCalledWith({ name: 'testName', value: 3 })
})

it('Should be able to have a max value', () => {
  const stepper = shallow(
    <Stepper {...defaultProps} value={8} step={3} max={10}>
      Amount of something
    </Stepper>,
  )
  stepper.find('.kirk-stepper-increment').simulate('mouseUp')
  expect(stepper.state('value')).toBe(10)
})

it('Should be able to have a min value', () => {
  const stepper = shallow(
    <Stepper {...defaultProps} value={5} step={3} min={3}>
      Amount of something
    </Stepper>,
  )
  stepper.find('.kirk-stepper-decrement').simulate('mouseUp')
  expect(stepper.state('value')).toBe(3)
})

it('Should have the right max value instead of wrong settings', () => {
  const stepper = shallow(
    <Stepper {...defaultProps} value={10} min={2} max={5}>
      Amount of something
    </Stepper>,
  )
  expect(stepper.state('value')).toBe(5)
})

it('Should have the right min value instead of wrong settings', () => {
  const stepper = shallow(
    <Stepper {...defaultProps} value={-10} min={2} max={5}>
      Amount of something
    </Stepper>,
  )
  expect(stepper.state('value')).toBe(2)
})

it('Be able to format the value', () => {
  const stepper = mount(
    <Stepper {...defaultProps} value={2} format={value => `${value} €`}>
      Amount of something
    </Stepper>,
  )
  expect(stepper.find('input').prop('value')).toBe('2 €')
})

it('Should be able to receive props and then update the value', () => {
  const stepper = mount(
    <Stepper {...defaultProps} value={4} min={0} max={10}>
      Amount of something
    </Stepper>,
  )
  const spyUpdateValue = jest.spyOn(Stepper.prototype, 'update')
  // Only change the max value
  stepper.setProps({ max: 3 })
  expect(spyUpdateValue).toHaveBeenCalledTimes(1)
  expect(stepper.state('value')).toBe(3)

  // Only change the min value
  stepper.setProps({ min: 5 })
  expect(spyUpdateValue).toHaveBeenCalledTimes(2)
  expect(stepper.state('value')).toBe(5)

  // Set state value higher than the max value
  stepper.setProps({ max: 4, min: 1, value: 5 })
  expect(spyUpdateValue).toHaveBeenCalledTimes(3)
  expect(stepper.prop('min')).toBe(1)
  expect(stepper.prop('max')).toBe(4)
  expect(stepper.state('value')).toBe(4)

  // Set state value lower than the min value
  stepper.setProps({ min: 4, max: 8, value: 0 })
  expect(spyUpdateValue).toHaveBeenCalledTimes(4)
  expect(stepper.prop('min')).toBe(4)
  expect(stepper.prop('max')).toBe(8)
  expect(stepper.state('value')).toBe(4)
})

it('Should be able to keep the right value after props change', () => {
  const stepper = shallow(
    <Stepper {...defaultProps} value={5} step={3} min={1}>
      Amount of something
    </Stepper>,
  )
  stepper.find('.kirk-stepper-increment').simulate('mouseUp')
  stepper.setProps({ min: 2 })
  expect(stepper.state('value')).toBe(8)
})

it('Should not call onChange on componentDidMount', () => {
  const onChange = jest.fn()
  const stepper = shallow(
    <Stepper {...defaultProps} min={1} value={2} step={3} max={5} onChange={onChange}>
      Amount of something
    </Stepper>,
  )
  expect(onChange).toHaveBeenCalledTimes(0)
})
