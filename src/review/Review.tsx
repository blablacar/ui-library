import React from 'react'
import cc from 'classcat'

import { BaseSection } from '../layout/section/baseSection'
import { Paragraph } from '../paragraph'
import { TextTitle } from '../typography/title'
import { Caption } from './caption'
import { StyledReview } from './Review.style'

export type ReviewProps = Readonly<{
  className?: string
  isResponse?: boolean
  title: string
  text: string
  formattedDatetime: string
  isoDatetime: string
  replyLinkLabel?: string
  replyLinkHref?: string | JSX.Element
  replyLinkOnClick?: (event: React.MouseEvent<HTMLElement>) => void
}>

export const Review = (props: ReviewProps) => {
  const {
    className,
    title,
    text,
    formattedDatetime,
    isoDatetime,
    isResponse = false,
    replyLinkLabel,
    replyLinkHref,
    replyLinkOnClick,
  } = props

  // For responses, the title is not a rating but the name of the person replying.
  const titleMicroData = isResponse
    ? null
    : {
        itemScope: true,
        itemProp: 'reviewRating',
        itemType: 'https://schema.org/Rating',
      }

  const titleMicroDataContent = isResponse
    ? null
    : {
        itemProp: 'reviewRating',
      }

  const replyLinkProps =
    replyLinkLabel && (replyLinkHref || replyLinkOnClick)
      ? {
          secondaryText: replyLinkLabel,
          href: replyLinkHref,
          onClick: replyLinkOnClick,
        }
      : {}

  return (
    <StyledReview
      itemScope
      itemType="http://schema.org/Review"
      className={cc([
        className,
        {
          'kirk-is-review-response': isResponse,
        },
      ])}
    >
      <div className="kirk-review-inner">
        <BaseSection>
          <h2 className="kirk-review-title" {...titleMicroData}>
            <TextTitle {...titleMicroDataContent}>{title}</TextTitle>
          </h2>
        </BaseSection>
        <BaseSection noHorizontalSpacing>
          <Paragraph itemProp="reviewBody">{text}</Paragraph>
          <Caption isoDate={isoDatetime} {...replyLinkProps}>
            {formattedDatetime}
          </Caption>
        </BaseSection>
      </div>
    </StyledReview>
  )
}
