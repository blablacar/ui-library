import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import SelectField from 'selectField'

const options = [
  { value: '1', label: 'val 1', ariaLabel: 'value 1' },
  { value: '2', label: 'value 2' },
]

const defaultProps = {
  name: 'selectFieldName',
  value: options[0].value,
  options,
  onChange() {},
  onFocus() {},
  onblur() {},
  forwardedRef: null,
}

const customProps = {
  ...defaultProps,
  id: 'selectFieldId',
  className: 'customClass',
  ariaLabel: 'selectLabel',
  autoFocus: true,
  disabled: false,
  required: true,
}

describe('SelectField', () => {
  const handleOnChange = jest.fn()
  const defaultWrapper = mount(<SelectField {...defaultProps} onChange={handleOnChange} />)

  it('should have the expected markup in the DOM', () => {
    const selectField = renderer.create(<SelectField {...defaultProps} />).toJSON()
    expect(selectField).toMatchSnapshot()
  })

  it('should have proper initial value and number of options', () => {
    expect(defaultWrapper.find('select').props().defaultValue).toBe(options[0].value)
    expect(defaultWrapper.find('option')).toHaveLength(2)
  })

  it('should have appropriate alternate label on options', () => {
    expect(
      defaultWrapper
        .find('option')
        .first()
        .prop('aria-label'),
    ).toBe(options[0].ariaLabel)
    expect(
      defaultWrapper
        .find('option')
        .last()
        .prop('aria-label'),
    ).toBeUndefined()
  })

  it('should receive selected value after change', () => {
    const select = defaultWrapper.find('select')
    const selectDOMNode = select.getDOMNode()
    selectDOMNode.value = '2'
    select.simulate('change', { target: selectDOMNode })
    expect(handleOnChange).toHaveBeenCalledWith({ name: 'selectFieldName', value: '2' })
  })

  it('Should have custom props', () => {
    const wrapper = mount(<SelectField {...customProps} />)
    const selectField = wrapper.find('select')
    expect(selectField.prop('id')).toEqual('selectFieldId')
    expect(wrapper.hasClass('customClass')).toBe(true)
    expect(selectField.prop('aria-label')).toEqual('selectLabel')
    expect(selectField.prop('autoFocus')).toBe(true)
    expect(selectField.prop('disabled')).toBe(false)
    expect(selectField.prop('required')).toBe(true)
  })
})
