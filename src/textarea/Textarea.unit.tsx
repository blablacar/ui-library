import React from 'react'
import { mount, shallow } from 'enzyme'

import { EyeIcon } from '../icon/eyeIcon'
import { Textarea } from './index'

it('Should have the proper value.', () => {
  const wrapper = shallow(<Textarea name="test" defaultValue="blabla" />)
  const textarea = wrapper.find('textarea')
  expect(wrapper.hasClass('kirk-textarea')).toBe(true)
  expect(textarea.prop('value')).toBe('blabla')
})

it('Should set focus properly initially', () => {
  // Verify that focus is initially set without throwing.
  mount(<Textarea name="test" defaultValue="blabla" focus />)
})

it('Should set focus properly dynamically', () => {
  // Verify that focus is dynamically set without throwing.
  const wrapper = mount(<Textarea name="test" defaultValue="blabla" focus={false} />)
  wrapper.setProps({ focus: true })
})

it('Should have a valid button with title', () => {
  const mockOnButtonClick = jest.fn()
  const props = {
    name: 'test',
    defaultValue: 'blabla',
    buttonTitle: 'button title',
    buttonIcon: <EyeIcon />,
    onButtonClick: mockOnButtonClick,
  }
  const wrapper = mount(<Textarea {...props} />)
  const button = wrapper.find('button')
  expect(button.prop('title')).toBe('button title')
  expect(button.find('.kirk-icon').length).toBe(1)
  expect(mockOnButtonClick).not.toBeCalled()
  button.simulate('click')
  expect(mockOnButtonClick).toBeCalled()
})

it('Should have a placeholder', () => {
  const wrapper = shallow(<Textarea name="test" placeholder="this is a placeholder" />)
  const input = wrapper.find('textarea')
  expect(input.prop('placeholder')).toBe('this is a placeholder')
})

it('Should have an id', () => {
  const wrapper = shallow(<Textarea name="test" id="identifier" />)
  const input = wrapper.find('textarea')
  expect(input.prop('id')).toBe('identifier')
})

it('Should have a name', () => {
  const wrapper = shallow(<Textarea name="special_name" />)
  const input = wrapper.find('textarea')
  expect(input.prop('name')).toBe('special_name')
})

it('Should have a label', () => {
  const wrapper = shallow(<Textarea name="test" label="label_name" />)
  const label = wrapper.find('label')
  expect(label.text()).toBe('label_name')
})

it('Should have a required attr', () => {
  const wrapper = shallow(<Textarea name="test" label="label_name" required />)
  const input = wrapper.find('textarea')
  expect(input.prop('required')).toBe(true)
})

it('should have a label that has a for matching the inputs id', () => {
  const wrapper = shallow(<Textarea name="test" label="label_name" id="identifier" />)
  const textarea = wrapper.find('textarea')
  expect(textarea.prop('id')).toBe('identifier')
  const label = wrapper.find('label')
  expect(label.prop('htmlFor')).toBe('identifier')
})

it('should have a labelled by attribute', () => {
  const wrapper = shallow(<Textarea name="test" labelledBy="identifier" />)
  const textarea = wrapper.find('textarea')
  expect(textarea.prop('aria-labelledby')).toBe('identifier')
})

it('Should be disabled', () => {
  const wrapper = shallow(<Textarea name="test" disabled />)
  const textarea = wrapper.find('textarea')
  expect(textarea.prop('disabled')).toBe(true)
})

it('Should be read only', () => {
  const wrapper = shallow(<Textarea name="test" readOnly />)
  const textarea = wrapper.find('textarea')
  expect(textarea.prop('readOnly')).toBe(true)
})

describe('#error', () => {
  it('Should have an error state when passing an error string', () => {
    const errorText = 'this is an error'
    const errorClassName = 'custom-error-class'
    const wrapper = shallow(
      <Textarea name="test" error={errorText} errorClassName={errorClassName} />,
    )
    expect(wrapper.hasClass('kirk-error')).toBe(true)
    expect(wrapper.find('.kirk-error-message')).toHaveLength(1)
    expect(wrapper.find('.kirk-error-message').prop('className')).toContain(errorClassName)
    expect(wrapper.find('textarea').prop('aria-invalid')).toBe('true')
    expect(wrapper.find('span').text()).toBe(errorText)
  })

  it('Should have an error state when passing a JSX element', () => {
    const errorText = 'this is an error'
    const errorClassName = 'custom-error-class'
    const error = <span>{errorText}</span>
    const wrapper = shallow(<Textarea name="test" error={error} errorClassName={errorClassName} />)
    expect(wrapper.hasClass('kirk-error')).toBe(true)
    expect(wrapper.find('.kirk-error-message')).toHaveLength(1)
    expect(wrapper.find('.kirk-error-message').prop('className')).toContain(errorClassName)
    expect(wrapper.find('textarea').prop('aria-invalid')).toBe('true')
    expect(wrapper.find('span').text()).toBe(errorText)
  })

  it('Should not have an error state when passing a boolean `false`', () => {
    const wrapper = shallow(<Textarea name="test" error={false} />)
    expect(wrapper.hasClass('kirk-error')).toBe(false)
    expect(wrapper.find('.kirk-error-message')).toHaveLength(0)
  })
})

it('Should allow for an error element passed', () => {
  const ErrorMessage = () => <span>error</span>
  const wrapper = mount(<Textarea name="test" error={<ErrorMessage />} />)
  expect(wrapper.find('.kirk-error-message')).toHaveLength(1)
})

/* Testing for events */

it('Simulates a focus event.', () => {
  const onTextareaFocus = jest.fn()
  const wrapper = shallow(<Textarea name="test" onFocus={onTextareaFocus} />)
  expect(wrapper.find('.kirk-textarea-wrapper--hasFocus').exists()).toBe(false)
  wrapper.find('textarea').simulate('focus')
  expect(wrapper.find('.kirk-textarea-wrapper--hasFocus').exists()).toBe(true)
  expect(onTextareaFocus).toHaveBeenCalledTimes(1)
})

it('Should not display a focus border', () => {
  const wrapper = shallow(<Textarea name="test" focusBorder={false} />)
  wrapper.find('textarea').simulate('focus')
  expect(wrapper.find('.kirk-textField-wrapper--hasFocus').exists()).toBe(false)
})

it('Simulates a change event.', () => {
  const onTextareaChange = jest.fn()
  const wrapper = mount(<Textarea name="test" onChange={onTextareaChange} />)
  wrapper.find('textarea').simulate('change', { target: { value: 'foo' } })
  wrapper.find('textarea').simulate('change', { target: { value: '' } })
  expect(onTextareaChange).toHaveBeenCalledTimes(2)
})

it('Simulates a blur event.', () => {
  const onTextareaBlur = jest.fn()
  const wrapper = shallow(<Textarea name="test" onBlur={onTextareaBlur} />)
  wrapper.find('textarea').simulate('blur', {
    relatedTarget: 'body',
  })
  expect(onTextareaBlur).toHaveBeenCalledTimes(1)
})
