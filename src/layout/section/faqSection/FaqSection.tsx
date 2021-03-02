import React from 'react'
import uniqueId from 'lodash.uniqueid'

import { Button } from '../../../button'
import { ContentDivider } from '../../../divider/contentDivider'
import { SpacingDivider, SpacingDividerSize } from '../../../divider/spacingDivider'
import { SectionContentSize } from '../../../layout/section/baseSection'
import { Paragraph } from '../../../paragraph'
import { StyledFaqSection } from './FaqSection.style'

export type FaqItemProps = {
  question: string
  answer: string
}

export type FaqSectionProps = Readonly<{
  className?: string
  mainTitle?: string
  items: Array<FaqItemProps>
  expandLabel: string
  buttonLabel?: string
  buttonHref?: string | JSX.Element
}>

/**
 * A specialized section with multiple expandable paragraphs with Questions & Answers.
 */
export const FaqSection = (props: FaqSectionProps) => {
  const { className, items, mainTitle, buttonLabel, buttonHref, expandLabel } = props

  const renderFaqItem = ({ question, answer }: FaqItemProps): JSX.Element => {
    const id = uniqueId('faq-item-')

    return (
      <StyledFaqSection.ListItem key={id}>
        <StyledFaqSection.Question as="h3">{question}</StyledFaqSection.Question>
        <Paragraph isExpandable expandLabel={expandLabel}>
          {answer}
        </Paragraph>
        <ContentDivider />
        <SpacingDivider size={SpacingDividerSize.SMALL} />
      </StyledFaqSection.ListItem>
    )
  }

  return (
    <StyledFaqSection.Section
      contentSize={SectionContentSize.LARGE}
      tagName="article"
      noHorizontalSpacing
      className={className}
    >
      {mainTitle && <StyledFaqSection.Title as="h2">{mainTitle}</StyledFaqSection.Title>}

      <StyledFaqSection.List>{items.map(item => renderFaqItem(item))}</StyledFaqSection.List>

      {buttonLabel && buttonHref && (
        <StyledFaqSection.ButtonWrapper>
          <Button href={buttonHref}>{buttonLabel}</Button>
        </StyledFaqSection.ButtonWrapper>
      )}
    </StyledFaqSection.Section>
  )
}
