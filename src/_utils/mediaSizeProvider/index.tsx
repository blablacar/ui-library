import React, { ReactNode, useLayoutEffect, useState } from 'react'
import debounce from 'lodash.debounce'

import { responsiveBreakpoints } from '../branding'

export enum MediaSize {
  SMALL = 'small',
  LARGE = 'large',
}

const DEFAULT_MEDIA_SIZE = MediaSize.SMALL

export type MediaSizeProviderProps = Readonly<{
  children: ReactNode
  serverSideMediaSize?: MediaSize
  mediaSizeForTestsOnly?: MediaSize
}>

export const MediaSizeContext = React.createContext(DEFAULT_MEDIA_SIZE)

const DEBOUNCE_VALUE = 500

export const useIsSmallMediaSize = (): boolean => {
  const mediaSize = React.useContext(MediaSizeContext)
  return mediaSize === MediaSize.SMALL
}

export const useIsLargeMediaSize = (): boolean => {
  const mediaSize = React.useContext(MediaSizeContext)
  return mediaSize === MediaSize.LARGE
}

const computeMediaSizeFromViewport = (): MediaSize => {
  const isSmall = window.innerWidth <= parseInt(responsiveBreakpoints.small, 10)
  return isSmall ? MediaSize.SMALL : MediaSize.LARGE
}

// Provides a media size based on the client viewport size to nested components.
// Use dedicated hooks useIsSmallMediaSize and/or useIsLargeMediaSize to get this media size.
// If the MediaSizeProvider is rendered server side, no viewport is available and a default media
// size will be sent. This default server side media size can be changed with serverSideMediaSize
// props.
export const MediaSizeProvider = (props: MediaSizeProviderProps) => {
  const { children, serverSideMediaSize, mediaSizeForTestsOnly } = props
  const [mediaSize, setMediaSize] = useState(serverSideMediaSize || DEFAULT_MEDIA_SIZE)

  const updateMediaSize = () => {
    setMediaSize(computeMediaSizeFromViewport())
  }

  useLayoutEffect(() => {
    if (!window) {
      // Server side rendering, no need to execute the client-side effects.
      return () => {}
    }
    // Initial client-side update.
    updateMediaSize()

    // Register listener for screen resize events.
    const debouncedHandleResize = debounce(updateMediaSize, DEBOUNCE_VALUE)
    window.addEventListener('resize', debouncedHandleResize)
    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [])

  if (mediaSizeForTestsOnly) {
    // When mediaSizeForTestsOnly is set for tests, override any previous logic.
    return (
      <MediaSizeContext.Provider value={mediaSizeForTestsOnly}>
        {children}
      </MediaSizeContext.Provider>
    )
  }
  return <MediaSizeContext.Provider value={mediaSize}>{children}</MediaSizeContext.Provider>
}
