import React, { Fragment } from 'react'
import Avatar from 'avatar'
import { TextDisplayType } from "text"
import Item from '_utils/item'
import { color } from '_utils/branding'
import cc from "classcat"

interface MessagingSummaryItemProps {
    readonly className?: Classcat.Class
    readonly url: string
    readonly pictureUrl: string
    readonly label: string
    readonly subLabel: string|JSX.Element
    readonly timeLabel: string
    readonly hasUnreadMessages: boolean
}

const UNREAD_COLOR = color.primaryText
const READ_COLOR = color.secondaryText

const generateSubLabel = (subLabel:string|JSX.Element) : JSX.Element => (
    <span className="kirk-messaging-summary-item-sub-label">
      {subLabel}
    </span>
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
