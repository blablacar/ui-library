import React from 'react'
import { mount } from 'enzyme'
import { useOverflowHiddenOnDocument } from './index'

let TestComponent

describe('useOverflowHiddenOnDocument', () => {
  beforeEach(() => {
    TestComponent = () => {
      useOverflowHiddenOnDocument()
      return <div>Hello</div>
    }
  })

  it('Should set overflow: hidden on html and reset it to visible when unmounting', () => {
    const wrapper = mount(<TestComponent />)
    const htmlNode = document.querySelector('html')
    expect(htmlNode.style.overflow).toEqual('hidden')
    wrapper.unmount()
    expect(htmlNode.style.overflow).toEqual('visible')
  })
})
