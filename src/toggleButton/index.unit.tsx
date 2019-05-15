import React from 'react'
import { shallow } from 'enzyme'

import ToggleButton from 'toggleButton'

const defaultProps = {
  name: 'foo',
  label: 'Foo',
}

describe('ToggleButton', () => {
  let toggleButton
  let onChangeMock

  beforeEach(() => {
    onChangeMock = jest.fn()
    toggleButton = shallow(<ToggleButton {...defaultProps} onChange={onChangeMock} />)
  })

  it('Should render a button html component with the aria-pressed attribute', () => {
    const btn = toggleButton.find('button')
    expect(btn.prop('aria-pressed')).toBeDefined()
  })

  it('Should change the checked state when clicking on it', () => {
    const instance = toggleButton.instance()
    expect(toggleButton.state('checked')).toBe(false)
    instance.onButtonClick()
    expect(toggleButton.state('checked')).toBe(true)
  })

  it('Should call the onChange prop when clicking on it', () => {
    const instance = toggleButton.instance()
    instance.onButtonClick()
    expect(onChangeMock).toHaveBeenCalledWith({ name: 'foo', value: true })
  })

  describe('checked state', () => {
    beforeEach(() => {
      toggleButton = shallow(<ToggleButton {...defaultProps} checked />)
    })

    it('Should have the aria-pressed attribute to true', () => {
      const btn = toggleButton.find('button')
      expect(btn.prop('aria-pressed')).toBe(true)
    })
  })

  describe('unchecked state', () => {
    beforeEach(() => {
      toggleButton = shallow(<ToggleButton {...defaultProps} checked={false} />)
    })

    it('Should have the aria-pressed attribute to false', () => {
      const btn = toggleButton.find('button')
      expect(btn.prop('aria-pressed')).toBe(false)
    })
  })

  describe('loading status', () => {
    beforeEach(() => {
      toggleButton = shallow(
        <ToggleButton {...defaultProps} status={ToggleButton.STATUS.LOADING} />,
      )
    })

    it('Should be disabled', () => {
      const btn = toggleButton.find('button')
      expect(btn.prop('disabled')).toBe(true)
    })
  })
})
