import React, { Fragment } from 'react'

import { Button } from '../../../button'
import { ContentDivider } from '../../../divider/contentDivider'
import { SpacingDivider, SpacingDividerSize } from '../../../divider/spacingDivider'
import { Column } from '../../../layout/column'
import { Columns } from '../../../layout/columns'
import { SectionContentSize } from '../../../layout/section/baseSection'
import { Paragraph } from '../../../paragraph'
import { StyledFaqSection } from './FaqSection.style'

export type FaqItemProps = {
  question: string
  answer: string
}

export type FaqSectionProps = Readonly<{
  className?: string
  title?: string
  items: Array<FaqItemProps> // max 6 FAQ items
  expandLabel: string
  buttonLabel?: string
  buttonHref?: string | JSX.Element
}>

/**
 * A specialized section with up to 6 expandable paragraphs with Questions & Answers.
 *
 * Note: use of Columns is not ideal as it creates a listitem for each column
 * We would rather have one listitem by FAQ item instead
 */
export const FaqSection = (props: FaqSectionProps) => {
  const { className, items, title, buttonLabel, buttonHref, expandLabel } = props

  const renderFaqItem = ({ question, answer }: FaqItemProps): JSX.Element => (
    <Fragment>
      <StyledFaqSection.Question as="h3">{question}</StyledFaqSection.Question>
      <Paragraph isExpandable expandLabel={expandLabel}>
        {answer}
      </Paragraph>
      <ContentDivider />
      <SpacingDivider size={SpacingDividerSize.SMALL} />
    </Fragment>
  )

  return (
    <StyledFaqSection.Section
      contentSize={SectionContentSize.LARGE}
      tagName="article"
      noHorizontalSpacing
      className={className}
    >
      {title && <StyledFaqSection.Title as="h2">{title}</StyledFaqSection.Title>}

      <Columns>
        <Column>
          {renderFaqItem(items[0])}
          {items[2] && renderFaqItem(items[2])}
          {items[4] && renderFaqItem(items[4])}
        </Column>
        <Column>
          {renderFaqItem(items[1])}
          {items[3] && renderFaqItem(items[3])}
          {items[5] && renderFaqItem(items[5])}
        </Column>
      </Columns>

      {buttonLabel && buttonHref && (
        <StyledFaqSection.ButtonWrapper>
          <Button href={buttonHref}>{buttonLabel}</Button>
        </StyledFaqSection.ButtonWrapper>
      )}
    </StyledFaqSection.Section>
  )
}
