import React, { useContext } from 'react'

import { render, screen } from '@testing-library/react'

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
    render(
      <MediaSizeProvider>
        <ChildComponent />
      </MediaSizeProvider>,
    )
    screen.getByText('context: small | isSmall: true | isLarge: false')
  })

  it('Should provide "large" value when screen is above `responsiveBreakpoints.small`', () => {
    mockWindowInnerWidth(900)
    render(
      <MediaSizeProvider>
        <ChildComponent />
      </MediaSizeProvider>,
    )
    screen.getByText('context: large | isSmall: false | isLarge: true')
  })

  it('Should provide "small" when no provider', () => {
    mockWindowInnerWidth(900)
    render(<ChildComponent />)
    screen.getByText('context: small | isSmall: true | isLarge: false')
  })

  it('Should respect the mediaSizeForTestsOnly override`', () => {
    mockWindowInnerWidth(300)
    render(
      <MediaSizeProvider mediaSizeForTestsOnly={MediaSize.LARGE}>
        <ChildComponent />
      </MediaSizeProvider>,
    )
    screen.getByText('context: large | isSmall: false | isLarge: true')
  })
})
