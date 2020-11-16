import React, { useContext } from 'react'
import { mount } from 'enzyme'

import {
  MediaSize,
  MediaSizeContext,
  MediaSizeProvider,
  useIsLargeMediaSize,
  useIsSmallMediaSize,
} from './index'

const mockWindowInnerWidth = (value: number): void => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value,
  })
}

describe('MediaSizeProvider', () => {
  let ChildComponent: any

  beforeEach(() => {
    ChildComponent = () => {
      const valueFromContext = useContext(MediaSizeContext)
      const isSmall = useIsSmallMediaSize().toString()
      const isLarge = useIsLargeMediaSize().toString()
      return (
        <div>
          context: {valueFromContext} | isSmall: {isSmall} | isLarge: {isLarge}
        </div>
      )
    }
  })
  it('Should provide "small" value when screen is under `responsiveBreakpoints.small`', () => {
    mockWindowInnerWidth(300)
    const wrapper = mount(
      <MediaSizeProvider>
        <ChildComponent />
      </MediaSizeProvider>,
    )

    const expected = 'context: small | isSmall: true | isLarge: false'
    expect(wrapper.find('div').text()).toEqual(expected)
  })

  it('Should provide "large" value when screen is above `responsiveBreakpoints.small`', () => {
    mockWindowInnerWidth(900)
    const wrapper = mount(
      <MediaSizeProvider>
        <ChildComponent />
      </MediaSizeProvider>,
    )

    const expected = 'context: large | isSmall: false | isLarge: true'
    expect(wrapper.find('div').text()).toEqual(expected)
  })

  it('Should provide "small" when no provider', () => {
    mockWindowInnerWidth(900)
    const wrapper = mount(<ChildComponent />)

    const expected = 'context: small | isSmall: true | isLarge: false'
    expect(wrapper.find('div').text()).toEqual(expected)
  })

  it('Should respect the mediaSizeForTestsOnly override`', () => {
    mockWindowInnerWidth(300)
    const wrapper = mount(
      <MediaSizeProvider mediaSizeForTestsOnly={MediaSize.LARGE}>
        <ChildComponent />
      </MediaSizeProvider>,
    )

    const expected = 'context: large | isSmall: false | isLarge: true'
    expect(wrapper.find('div').text()).toEqual(expected)
  })
})
