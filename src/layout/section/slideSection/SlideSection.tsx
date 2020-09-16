import React, { useCallback, useEffect, useRef, useState } from 'react'
import cc from 'classcat'

import { Grip } from '../../../grip'
import { GRIP_HANDLE_HEIGHT } from '../../../grip/GripHandle'
import { StyledSlideLayout, StyledSlidePanel } from './SlideSection.style'

export enum SlideSectionPosition {
  DEFAULT = 'default',
  REDUCED = 'reduced',
  EXPANDED = 'expanded',
}

export type SlideSectionProps = Readonly<{
  children: (d: () => void, r: () => void, e: () => void) => React.ReactNode
  media: React.ReactNode
  reducedContent?: React.ReactNode
  onPositionChange?: (p: SlideSectionPosition) => void
  disabledGestures?: boolean
}>

export const SlideSection = (props: SlideSectionProps): JSX.Element => {
  const {
    children,
    media,
    reducedContent = null,
    onPositionChange,
    disabledGestures = false,
  } = props
  const [position, setPosition] = useState<SlideSectionPosition>(SlideSectionPosition.DEFAULT)
  const [fingerOffset, setFingerOffset] = useState<number>(0)
  const [snapTransition, setSnapTransition] = useState<boolean>(false)
  const reducedContentRef = useRef(null)
  const layoutRef = useRef(null)

  const slideUp = useCallback(() => {
    if (position === SlideSectionPosition.DEFAULT) {
      setPosition(SlideSectionPosition.EXPANDED)
    } else if (position === SlideSectionPosition.REDUCED) {
      setPosition(SlideSectionPosition.DEFAULT)
    }
    setFingerOffset(0)
  }, [position])

  const slideDown = useCallback(() => {
    if (position === SlideSectionPosition.DEFAULT) {
      setPosition(SlideSectionPosition.REDUCED)
    } else if (position === SlideSectionPosition.EXPANDED) {
      setPosition(SlideSectionPosition.DEFAULT)
    }
    setFingerOffset(0)
  }, [position])

  const onGripTouchEnd = useCallback(() => {
    setSnapTransition(true)
    setFingerOffset(0)
  }, [])

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

    // Expanded height is 100% of media height
    setExpandedHeight(layoutRef.current.clientHeight)
  })

  // Triggering onPositionChange
  useEffect(() => {
    if (onPositionChange) {
      onPositionChange(position)
    }
  }, [position])

  // Calculating true position of the list (position and finger offset on move)
  let topOffset = 0
  if (position === SlideSectionPosition.DEFAULT) {
    topOffset = 0 - defaultHeight + fingerOffset
  } else if (position === SlideSectionPosition.EXPANDED) {
    topOffset = 0 - expandedHeight + fingerOffset
  } else if (position === SlideSectionPosition.REDUCED) {
    topOffset = 0 - minimalHeight + fingerOffset
  }
  if (topOffset > 0) {
    topOffset = 0
  } else if (topOffset < 0 - expandedHeight) {
    topOffset = 0 - expandedHeight
  }

  return (
    <StyledSlideLayout ref={layoutRef}>
      {media}
      <StyledSlidePanel
        className={cc([position, { animated: snapTransition }])}
        expandedHeight={expandedHeight}
        style={{ transform: `translateY(${topOffset}px)` }}
        onTransitionEnd={() => {
          setSnapTransition(false)
        }}
      >
        <Grip
          onSlideUp={slideUp}
          onSlideDown={slideDown}
          onTouchMove={setFingerOffset}
          onTouchEnd={onGripTouchEnd}
          disabled={disabledGestures}
        >
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
