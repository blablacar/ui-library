import React, { useEffect, useState, ReactNode } from 'react'
import debounce from 'lodash.debounce'
import { responsiveBreakpoints } from '../branding'

export enum MediaSize {
  SMALL = 'small',
  LARGE = 'large',
}

interface MediaSizeProviderProps {
  children: ReactNode
}

export const MediaSizeContext = React.createContext(MediaSize.SMALL)

const DEBOUNCE_VALUE = 500

export const MediaSizeProvider = ({ children }: MediaSizeProviderProps) => {
  const [mediaSize, setMediaSize] = useState(MediaSize.SMALL)

  const handleResize = () => {
    const isSmall = window.innerWidth < parseInt(responsiveBreakpoints.small, 10)
    setMediaSize(isSmall ? MediaSize.SMALL : MediaSize.LARGE)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', debounce(handleResize, DEBOUNCE_VALUE))
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <MediaSizeContext.Provider value={mediaSize}>{children}</MediaSizeContext.Provider>
}

export default MediaSizeProvider
