import React, { ReactNode, useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

import { responsiveBreakpoints } from '../branding'

export enum MediaSize {
  SMALL = 'small',
  LARGE = 'large',
}

export type MediaSizeProviderProps = Readonly<{
  children: ReactNode
  mediaSizeForTestsOnly?: MediaSize
}>

const DEFAULT_MEDIA_SIZE = MediaSize.SMALL
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

export const MediaSizeProvider = ({ children, mediaSizeForTestsOnly }: MediaSizeProviderProps) => {
  const [mediaSize, setMediaSize] = useState(DEFAULT_MEDIA_SIZE)

  const handleResize = () => {
    const isSmall = window.innerWidth <= parseInt(responsiveBreakpoints.small, 10)
    setMediaSize(isSmall ? MediaSize.SMALL : MediaSize.LARGE)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', debounce(handleResize, DEBOUNCE_VALUE))
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (mediaSizeForTestsOnly) {
    return (
      <MediaSizeContext.Provider value={mediaSizeForTestsOnly}>
        {children}
      </MediaSizeContext.Provider>
    )
  }

  return <MediaSizeContext.Provider value={mediaSize}>{children}</MediaSizeContext.Provider>
}

export default MediaSizeProvider
