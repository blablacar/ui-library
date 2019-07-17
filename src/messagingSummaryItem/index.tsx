import React, {Fragment} from 'react'
import style from './style'
import Avatar from 'avatar'
import {TextDisplayType} from "text"
import Item from '_utils/item'
import { color } from '_utils/branding'

interface MessagingSummaryItemProps {
  readonly url: string
  readonly pictureUrl: string
  readonly label: string
  readonly subLabel: string
  readonly timeLabel: string
  readonly hasUnreadMessages: boolean
}

const UNREAD_COLOR = color.primaryText
const READ_COLOR = color.secondaryText

const MessagingSummaryItem = ({
  url,
  pictureUrl,
  label,
  subLabel,
  timeLabel,
  hasUnreadMessages,
}: MessagingSummaryItemProps) => (
    <Fragment>
      <Item
        className={'kirk-messaging-summary-item'}
        leftTitle={label}
        leftTitleDisplay={TextDisplayType.TITLESTRONG}
        leftTitleColor={hasUnreadMessages ? UNREAD_COLOR : READ_COLOR}
        leftBody={subLabel}
        leftBodyDisplay={TextDisplayType.TITLE}
        leftBodyColor={hasUnreadMessages ? UNREAD_COLOR : READ_COLOR}
        leftBodyAnnotation={timeLabel}
        leftBodyAnnotationDisplay={TextDisplayType.CAPTION}
        rightAddon={<Avatar image={pictureUrl} />}
        chevron
        href={url}
        isClickable
      />
      <style jsx>{style}</style>
  </Fragment>
)

export default MessagingSummaryItem
