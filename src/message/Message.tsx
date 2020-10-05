import React, { Fragment } from 'react'
import cc from 'classcat'

import { prefix } from '../_utils'
import { SpacingDivider, SpacingDividerSize } from '../divider/spacingDivider'
import { Text, TextDisplayType } from '../text'
import { StyledMessage } from './Message.style'

export type MessageProps = Readonly<{
  children: string
  date?: string
  active?: boolean
  author?: string | JSX.Element
  className?: string
  messageAnnotation?: string
}>

export const Message = ({ active, children, messageAnnotation, className }: MessageProps) => (
  <StyledMessage className={cc(['kirk-message', prefix({ active }), className])}>
    <div className="kirk-message-content">
      <blockquote>
        <div className="kirk-label">
          <p>{children}</p>
        </div>
      </blockquote>
    </div>
    {messageAnnotation && (
      <Fragment>
        <Text className="kirk-message-annotation" display={TextDisplayType.CAPTION}>
          {messageAnnotation}
        </Text>
        <SpacingDivider size={SpacingDividerSize.MEDIUM} />
      </Fragment>
    )}
  </StyledMessage>
)
