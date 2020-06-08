import React, { useContext } from 'react'
import { act } from 'react-dom/test-utils'
import { mount, ReactWrapper } from 'enzyme'

import { KEYS } from '../keycodes'
import { FOCUS_VISIBLE_CSS_CLASS, FocusVisibleContext, FocusVisibleProvider } from './index'

let focusVisibleContext = null
let wrapper: ReactWrapper
const ChildComponent = () => {
  focusVisibleContext = useContext(FocusVisibleContext)
  return null
}

describe('FocusVisibleProvider', () => {
  beforeEach(() => {
    wrapper = mount(
      <FocusVisibleProvider>
        <ChildComponent />
      </FocusVisibleProvider>,
    )
  })
  afterEach(() => {
    focusVisibleContext = null
  })

  it('Should provide "false" value for keyboard navigation context on mounting', () => {
    expect(focusVisibleContext).toEqual(false)
  })

  it("Shouldn't apply className on the body element by default", () => {
    expect(document.body.className).toEqual('')
    act(() => {
      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: KEYS.TAB }))
    })
    wrapper.update()
    expect(focusVisibleContext).toEqual(true)
    expect(document.body.className).toEqual('')
  })

  it('Should update the context value by switching from keyboard to pointer interaction', () => {
    act(() => {
      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: KEYS.TAB }))
    })
    wrapper.update()
    expect(focusVisibleContext).toEqual(true)

    act(() => {
      document.body.dispatchEvent(new MouseEvent('mousedown'))
    })
    wrapper.update()
    expect(focusVisibleContext).toEqual(false)
  })

  it('Should provide "false" value when using not whitelisted key', () => {
    act(() => {
      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Alt' }))
    })
    wrapper.update()
    expect(focusVisibleContext).toEqual(false)
  })
  describe('FocusVisibleProvider with hasGlobalClassName', () => {
    beforeEach(() => {
      wrapper = mount(
        <FocusVisibleProvider setGlobalClassName>
          <ChildComponent />
        </FocusVisibleProvider>,
      )
    })
    afterEach(() => {
      focusVisibleContext = null
    })
    it('Should update the body className by switching from keyboard to pointer interaction', () => {
      expect(document.body.className).toEqual('')
      act(() => {
        document.body.dispatchEvent(new KeyboardEvent('keydown', { key: KEYS.TAB }))
      })
      wrapper.update()
      expect(document.body.className).toEqual(FOCUS_VISIBLE_CSS_CLASS)

      act(() => {
        document.body.dispatchEvent(new MouseEvent('mousedown'))
      })
      wrapper.update()
      expect(document.body.className).toEqual('')
    })
  })
})
