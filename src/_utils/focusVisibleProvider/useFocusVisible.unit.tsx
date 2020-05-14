import React from 'react'
import { act } from 'react-dom/test-utils'
import { mount, ReactWrapper } from 'enzyme'

import { KEYS } from '../keycodes'
import FocusVisibleProvider, { FOCUS_VISIBLE_CSS_CLASS } from './index'
import { useFocusVisible } from './useFocusVisible'

let wrapper: ReactWrapper
const ButtonComponent = () => {
  const { focusVisible, onFocus, onBlur } = useFocusVisible()
  return (
    <button
      className={focusVisible ? FOCUS_VISIBLE_CSS_CLASS : null}
      onFocus={onFocus}
      onBlur={onBlur}
    >
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
    expect(wrapper.find('button').prop('className')).toEqual(FOCUS_VISIBLE_CSS_CLASS)
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
