import React, { useRef } from 'react'
import { mount } from 'enzyme'

import createFocusTrap from 'focus-trap'

import { useFocusTrap } from './index'

let TestComponent
const activate = jest.fn()
const deactivate = jest.fn()

describe('useFocusTrap', () => {
  const onClose = jest.fn()

  const mockFocusTrap = createFocusTrap as jest.Mock
  mockFocusTrap.mockReturnValue({
    activate,
    deactivate,
  })
  beforeEach(() => {
    TestComponent = () => {
      const ref = useRef<HTMLDivElement>(null)
      useFocusTrap(ref, onClose)
      return (
        <div ref={ref}>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
        </div>
      )
    }
  })

  it('Should activate focus trap', () => {
    mount(<TestComponent />)
    expect(createFocusTrap).toHaveBeenCalled()
    expect(activate).toHaveBeenCalled()
  })

  it('Should call onClose when pressing ESC key focus trap', () => {
    const wrapper = mount(<TestComponent />)
    const event = new KeyboardEvent('keydown', {
      code: 'Escape',
    })
    wrapper.getDOMNode().dispatchEvent(event)
    expect(onClose).toHaveBeenCalled()
  })

  it('Should deactivate focus trap on unmount', () => {
    const wrapper = mount(<TestComponent />)
    wrapper.unmount()
    expect(deactivate).toHaveBeenCalled()
  })

  it('Should set overflow hidden on html tag and reset it to visible when unmounting', () => {
    const wrapper = mount(<TestComponent />)
    const htmlNode = document.querySelector('html')
    expect(htmlNode.style.overflow).toEqual('hidden')
    wrapper.unmount()
    expect(htmlNode.style.overflow).toEqual('visible')
  })
})
