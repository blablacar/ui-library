import React, { useState } from 'react'
import cc from 'classcat'
import uniqueid from 'lodash.uniqueid'

import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { StyledHint } from './Hint.style'
import { HintBubble, HintBubblePosition } from './HintBubble'

export type HintProps = A11yProps &
  Readonly<{
    children: (a11yAttrs: A11yProps) => React.ReactNode
    mainTitle: string
    closeButtonTitle?: string
    description?: string
    position?: HintBubblePosition
    className?: string
    onClose?: () => void
    hidden?: boolean
  }>

export const Hint = (props: HintProps): JSX.Element => {
  const {
    mainTitle,
    children,
    className = '',
    description = '',
    position = HintBubblePosition.ABOVE,
    closeButtonTitle = '',
    onClose = () => {},
    hidden = false,
  } = props
  const [hiddenBubble, closeBubble] = useState(hidden)
  const id = uniqueid('kirk-hint-')
  const a11yAttrs = pickA11yProps(props)

  return (
    <StyledHint
      className={cc([className, { 'hidden-bubble': hiddenBubble }])}
      {...a11yAttrs}
      aria-live="polite"
    >
      {!hiddenBubble && (
        <HintBubble
          mainTitle={mainTitle}
          description={description}
          closeButtonTitle={closeButtonTitle}
          position={position}
          onClose={() => {
            closeBubble(true)
            onClose()
          }}
          id={id}
        />
      )}
      {children(hiddenBubble ? {} : { 'aria-describedby': id })}
    </StyledHint>
  )
}
