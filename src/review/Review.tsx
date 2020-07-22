import React from 'react'
import cc from 'classcat'

import { Caption } from '../caption'
import { BaseSection as Section } from '../layout/section/baseSection'
import { Paragraph } from '../paragraph'
import { TextTitle } from '../typography/title'

export interface ReviewProps {
  readonly className?: string
  readonly isResponse?: boolean
  readonly title: string
  readonly text: string
  readonly formattedDatetime: string
  readonly isoDatetime: string
}

export const Review = (props: ReviewProps) => {
  const { className, title, text, formattedDatetime, isoDatetime, isResponse = false } = props

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

  return (
    <blockquote
      itemScope
      itemType="http://schema.org/Review"
      className={cc([
        className,
        {
          'kirk-is-review-response': isResponse,
        },
      ])}
    >
      <Section>
        <h2 className="kirk-review-title" {...titleMicroData}>
          <TextTitle {...titleMicroDataContent}>{title}</TextTitle>
        </h2>
      </Section>
      <Section noHorizontalSpacing>
        <Paragraph itemProp="reviewBody">{text}</Paragraph>
      </Section>
      <Section>
        <Caption isoDate={isoDatetime}>{formattedDatetime}</Caption>
      </Section>
    </blockquote>
  )
}
