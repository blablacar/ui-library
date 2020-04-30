import React, { Fragment } from 'react'
import cc from 'classcat'

import { color } from '_utils/branding'
import Item from '_utils/item'
import Avatar from 'avatar'
import { TextDisplayType } from 'text'

export interface MessagingSummaryItemProps {
  readonly className?: string
  readonly url: string
  readonly pictureUrl: string
  readonly label: string
  readonly subLabel: string | JSX.Element
  readonly timeLabel: string
  readonly hasUnreadMessages: boolean
}

const UNREAD_COLOR = color.midnightGreen
const READ_COLOR = color.lightMidnightGreen

const generateSubLabel = (subLabel: string | JSX.Element): JSX.Element => (
  <span className="kirk-messaging-summary-item-sub-label">{subLabel}</span>
)

const MessagingSummaryItem = ({
  className,
  url,
  pictureUrl,
  label,
  subLabel,
  timeLabel,
  hasUnreadMessages,
}: MessagingSummaryItemProps) => (
  <Fragment>
    <Item
      className={cc(['kirk-messaging-summary-item', className])}
      leftTitle={label}
      leftTitleDisplay={TextDisplayType.TITLESTRONG}
      leftTitleColor={hasUnreadMessages ? UNREAD_COLOR : READ_COLOR}
      leftBody={generateSubLabel(subLabel)}
      leftBodyDisplay={TextDisplayType.BODYSTRONG}
      leftBodyColor={hasUnreadMessages ? UNREAD_COLOR : READ_COLOR}
      leftBodyAnnotation={timeLabel}
      leftBodyAnnotationDisplay={TextDisplayType.CAPTION}
      rightAddon={<Avatar image={pictureUrl} />}
      chevron
      href={url}
      isClickable
    />
  </Fragment>
)

export default MessagingSummaryItem
