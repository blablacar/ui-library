import React, { Fragment } from 'react'
import cc from 'classcat'

import prefix from '_utils'

import BlankSeparator, { BlankSeparatorSize } from "blankSeparator"
import Text, { TextDisplayType } from "text"

export interface MessageProps {
  readonly children: string
  readonly date?: string
  readonly active?: boolean
  readonly author?: string | JSX.Element
  readonly className?: Classcat.Class
  readonly messageAnnotation?: string
}

const Message = ({
  active,
  date,
  children,
  messageAnnotation,
  className,
}: MessageProps) => (
  <div className={cc(['kirk-message', prefix({ active }), className])}>
    <div className="kirk-message-content">
      <blockquote>
        <div className="kirk-label">
          <p>{children}</p>
        </div>
      </blockquote>
    </div>
    {messageAnnotation &&
      <Fragment>
        <Text className='kirk-message-annotation' display={TextDisplayType.CAPTION}>
          {messageAnnotation}
        </Text>
        <BlankSeparator size={BlankSeparatorSize.MEDIUM} />
      </Fragment>
    }
  </div>

)

export default Message
