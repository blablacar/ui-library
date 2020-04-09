import React, { useContext } from 'react'
import { mount } from 'enzyme'
import MediaSizeProvider, { MediaSizeContext } from '.'

const mockWindowInnerWidth = value => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value,
  })
}

let ChildComponent
describe('MediaSizeProvider', () => {
  beforeEach(() => {
    ChildComponent = () => {
      const value = useContext(MediaSizeContext)
      return <div>{value}</div>
    }
  })
  it('Should provide "small" value when screen is under `responsiveBreakpoints.small`', () => {
    mockWindowInnerWidth(300)
    const wrapper = mount(
      <MediaSizeProvider>
        <ChildComponent />
      </MediaSizeProvider>,
    )

    expect(wrapper.find('div').text()).toEqual('small')
  })

  it('Should provide "large" value when screen is above `responsiveBreakpoints.small`', () => {
    mockWindowInnerWidth(900)
    const wrapper = mount(
      <MediaSizeProvider>
        <ChildComponent />
      </MediaSizeProvider>,
    )

    expect(wrapper.find('div').text()).toEqual('large')
  })
})
