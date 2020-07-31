import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Grip } from '../../../grip'
import { GRIP_HANDLE_HEIGHT } from '../../../grip/GripHandle'
import { StyledSlideLayout, StyledSlidePanel } from './SlideSection.style'

export enum SlideSectionPosition {
  DEFAULT = 'default',
  REDUCED = 'reduced',
  EXPANDED = 'expanded',
}

export interface SlideSectionProps {
  children: (d: () => void, r: () => void, e: () => void) => React.ReactNode
  media: React.ReactNode
  reducedContent?: React.ReactNode
  onPositionChange?: (p: SlideSectionPosition) => void
  disabledGestures?: boolean
}

export const SlideSection = (props: SlideSectionProps): JSX.Element => {
  const {
    children,
    media,
    reducedContent = null,
    onPositionChange,
    disabledGestures = false,
  } = props
  const [position, setPosition] = useState<SlideSectionPosition>(SlideSectionPosition.DEFAULT)
  const reducedContentRef = useRef(null)
  const layoutRef = useRef(null)

  const slideUp = useCallback(() => {
    if (position === SlideSectionPosition.DEFAULT) {
      setPosition(SlideSectionPosition.EXPANDED)
    } else if (position === SlideSectionPosition.REDUCED) {
      setPosition(SlideSectionPosition.DEFAULT)
    }
  }, [position])

  const slideDown = useCallback(() => {
    if (position === SlideSectionPosition.DEFAULT) {
      setPosition(SlideSectionPosition.REDUCED)
    } else if (position === SlideSectionPosition.EXPANDED) {
      setPosition(SlideSectionPosition.DEFAULT)
    }
  }, [position])

  // Methods to manually set the panel position from other components
  const setDefaultPosition = useRef(() => setPosition(SlideSectionPosition.DEFAULT))
  const setReducedPosition = useRef(() => setPosition(SlideSectionPosition.REDUCED))
  const setExpandedPosition = useRef(() => setPosition(SlideSectionPosition.EXPANDED))

  // Calculating sizes of the panel in different positions
  const [minimalHeight, setMinimalHeight] = useState<number>(0)
  const [defaultHeight, setDefaultHeight] = useState<number>(0)
  const [expandedHeight, setExpandedHeight] = useState<number>(0)
  useEffect(() => {
    // Reduced height is the height of reducedContent element + GripHandle height
    const reducedContentHeight = reducedContentRef.current.clientHeight
    setMinimalHeight(reducedContentHeight + GRIP_HANDLE_HEIGHT)

    // Default height is 50% of media height
    setDefaultHeight((layoutRef.current.clientHeight * 50) / 100)

    // Expanded height height is 100% of media height
    setExpandedHeight(layoutRef.current.clientHeight)
  })

  // Triggering onPositionChange
  useEffect(() => {
    if (onPositionChange) {
      onPositionChange(position)
    }
  }, [position])

  return (
    <StyledSlideLayout ref={layoutRef}>
      {media}
      <StyledSlidePanel
        className={position}
        minimalHeight={minimalHeight}
        defaultHeight={defaultHeight}
        expandedHeight={expandedHeight}
      >
        <Grip onSlideUp={slideUp} onSlideDown={slideDown} disabled={disabledGestures}>
          <div ref={reducedContentRef}>{reducedContent}</div>
          {children(
            setDefaultPosition.current,
            setReducedPosition.current,
            setExpandedPosition.current,
          )}
        </Grip>
      </StyledSlidePanel>
    </StyledSlideLayout>
  )
}
