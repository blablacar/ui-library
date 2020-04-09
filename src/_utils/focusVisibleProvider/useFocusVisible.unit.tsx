import React from 'react'
import { act } from 'react-dom/test-utils'
import { mount, ReactWrapper } from 'enzyme'

import { KEYS } from '_utils/keycodes'
import { useFocusVisible } from './useFocusVisible'
import FocusVisibleProvider from '.'

let wrapper: ReactWrapper
const ButtonComponent = () => {
  const { focusVisible, onFocus, onBlur } = useFocusVisible()
  return (
    <button className={focusVisible ? 'focus-visible' : null} onFocus={onFocus} onBlur={onBlur}>
      Test
    </button>
  )
}

describe('useFocusVisible', () => {
  beforeEach(() => {
    wrapper = mount(
      <FocusVisibleProvider>
        <ButtonComponent />
      </FocusVisibleProvider>,
    )
  })
  it('Should have `focusVisible` truthy value only when focused + keyboard nav used', () => {
    expect(wrapper.find('button').prop('className')).toEqual(null)
    act(() => {
      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: KEYS.TAB }))
    })
    wrapper.update()
    expect(wrapper.find('button').prop('className')).toEqual(null)

    wrapper.find('button').simulate('focus')
    expect(wrapper.find('button').prop('className')).toEqual('focus-visible')
  })
  it('Should have `focusVisible` falsy value when use not whitelisted key', () => {
    wrapper.find('button').simulate('focus')
    act(() => {
      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Alt' }))
    })
    wrapper.update()
    expect(wrapper.find('button').prop('className')).toEqual(null)
  })
})
