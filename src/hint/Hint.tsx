import React, { useState } from 'react'
import cc from 'classcat'
import uniqueid from 'lodash.uniqueid'

import { A11yProps, pickA11yProps } from '_utils/interfaces'
import HintBubble, { HintBubblePosition } from './HintBubble'

export interface HintProps extends A11yProps {
  children: (a11yAttrs: A11yProps) => React.ReactNode
  title: string
  closeButtonTitle?: string
  description?: string
  position?: HintBubblePosition
  className?: string
  onClose?: () => void
  hidden?: boolean
}

export interface HintState {
  hiddenBubble: boolean
}

const Hint = (props: HintProps): JSX.Element => {
  const {
    title,
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
    <div
      className={cc([className, { 'hidden-bubble': hiddenBubble }])}
      {...a11yAttrs}
      aria-live="polite"
    >
      {!hiddenBubble && (
        <HintBubble
          title={title}
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
    </div>
  )
}

export default Hint
