import React from 'react'
import cc from 'classcat'

import { Button } from '../../../button'
import { SpacingDivider, SpacingDividerSize } from '../../../divider/spacingDivider'
import { BaseSection, SectionContentSize } from '../../../layout/section/baseSection'
import { TripCardProps } from '../../../tripCard'
import { StyledCardsGridSection, StyledTitle } from './CardsGridSection.style'

type ChildrenProps = React.ReactElement<TripCardProps>[] | React.ReactElement<TripCardProps>

export type CardsGridSectionProps = Readonly<{
  children: ChildrenProps
  className?: string
  contentSize?: SectionContentSize
  title?: string | JSX.Element
  buttonTitle?: string
  buttonHref?: string | JSX.Element
}>

export const CardsGridSection = ({
  children,
  className = '',
  contentSize = SectionContentSize.SMALL,
  title,
  buttonTitle,
  buttonHref,
}: CardsGridSectionProps) => (
  <StyledCardsGridSection
    className={cc([
      'kirk-cardsGridSection-wrapper',
      {
        'kirk-cardsGridSection-wrapper--large': contentSize === SectionContentSize.LARGE,
      },
      className,
    ])}
  >
    {title && (
      <BaseSection contentSize={contentSize}>
        <h2>
          <StyledTitle>{title}</StyledTitle>
        </h2>
      </BaseSection>
    )}

    <ul className={cc(['kirk-cardsGridSection'])}>{children}</ul>

    {buttonTitle && buttonHref && (
      <div className="kirk-cardsGridSection-button">
        <Button href={buttonHref}>{buttonTitle}</Button>
        <SpacingDivider size={SpacingDividerSize.LARGE} />
      </div>
    )}
  </StyledCardsGridSection>
)
