import React from 'react'
import renderer from 'react-test-renderer'
import Checkbox, { labelDisplays } from 'checkbox'

it('should have the proper text & attributes', () => {
  const checkbox = shallow((
    <Checkbox
      name="checkbox1"
      value="value"
      subLabel="subLabel"
      checked
    >
      Label checkbox
    </Checkbox>
  ))
  expect(checkbox.text()).toContain('Label checkbox')
  expect(checkbox.find('input').prop('type')).toBe('checkbox')
  expect(checkbox.find('input').prop('name')).toBe('checkbox1')
  expect(checkbox.find('input').prop('value')).toBe('value')
  expect(checkbox.find('input').prop('checked')).not.toBeNull()
  expect(checkbox.find('.kirk-subLabel')).toHaveLength(1)
})

it('should not be checked by default', () => {
  const checkbox = shallow(<Checkbox name="checkbox1" value="value">Label</Checkbox>)
  expect(checkbox.find('input').prop('checked')).toBe(false)
})

it('should have the accessibility attributes', () => {
  const checkbox = shallow(<Checkbox name="checkbox1" value="value">Label</Checkbox>)
  expect(checkbox.find('label input')).toHaveLength(1)
})

it('should be able to receive props', () => {
  const checkbox = shallow(<Checkbox name="checkbox1" value="value">Label</Checkbox>)
  // Default value
  expect(checkbox.state('isChecked')).toBe(false)
  // Value changing
  checkbox.setProps({ checked: true })
  expect(checkbox.state('isChecked')).toBe(true)
  checkbox.setProps({ checked: false })
  expect(checkbox.state('isChecked')).toBe(false)
})

it('should trigger a change event on a normal checkbox', () => {
  const onCheckboxClick = jest.fn()
  const checkbox = shallow((
    <Checkbox onChange={onCheckboxClick} name="checkbox1" value="value">
      Label
    </Checkbox>
  ))
  expect(checkbox.state('isChecked')).toBe(false)
  checkbox.instance().onChange()
  expect(onCheckboxClick).toHaveBeenCalledWith({ name: 'checkbox1', value: true })
  expect(checkbox.state('isChecked')).toBe(true)
})

it('should trigger a change event on an async checkbox', () => {
  const onCheckboxClick = jest.fn()
  function callback() {
    expect(onCheckboxClick).toHaveBeenCalledTimes(1)
  }
  const checkbox = shallow((
    <Checkbox
      onChange={() => {
        setTimeout(() => { onCheckboxClick(callback) }, 1000)
      }}
      name="checkbox1"
      value="value"
      asynchronous
    >
      Label
    </Checkbox>
  ))
  checkbox.find('input').simulate('change')
})

it('should display the label on the left and the checkbox on the right', () => {
  const checkbox = renderer.create(<Checkbox
    labelDisplay={labelDisplays.LEFT}
    labelFirstname="checkbox1"
    value="value">Label</Checkbox>).toJSON()
  expect(checkbox).toMatchSnapshot()
})

it('should not display either the label or the sublabel', () => {
  const checkbox = renderer.create(<Checkbox
    labelDisplay={labelDisplays.NONE}
    labelFirstname="checkbox1"
    value="value">Label</Checkbox>).toJSON()
  expect(checkbox).toMatchSnapshot()
})
