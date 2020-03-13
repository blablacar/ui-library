import React from 'react'
import cc from 'classcat'

import Paragraph from 'paragraph'
import Caption from 'caption'
import TextTitle from 'typography/title'

export interface ReviewProps {
  readonly className?: string
  readonly isResponse?: boolean
  readonly title: string
  readonly text: string
  readonly formattedDatetime: string
  readonly isoDatetime: string
}

const Review = (props: ReviewProps) => {
  const { className, title, text, formattedDatetime, isoDatetime, isResponse = false } = props

  return (
    <div
      className={cc([
        className,
        {
          'kirk-is-review-response': isResponse,
        },
      ])}
    >
      <h2 className="kirk-review-title">
        <TextTitle>{title}</TextTitle>
      </h2>
      <Paragraph>{text}</Paragraph>
      <Caption isoDate={isoDatetime}>{formattedDatetime}</Caption>
    </div>
  )
}

export default Review
