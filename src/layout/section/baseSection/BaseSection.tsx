import React from 'react'
import cc from 'classcat'

import { StyledBaseSection } from './BaseSection.style'

export enum SectionContentSize {
  SMALL = 'small',
  LARGE = 'large',
}

export type BaseSectionProps = Readonly<{
  className?: string
  contentClassName?: string
  backgroundStyle?: object
  tagName?: string
  role?: string
  children: JSX.Element | string | React.ReactNode
  contentSize?: SectionContentSize
  noHorizontalSpacing?: boolean
}>

/**
 * The core section: It sections horizontally a page while fitting its
 * content in width-constrained and centered column.
 */
export const BaseSection = (props: BaseSectionProps) => {
  const {
    className,
    contentClassName,
    backgroundStyle,
    tagName: ContentElement = 'div',
    children,
    role,
    contentSize = SectionContentSize.SMALL,
    noHorizontalSpacing,
  } = props

  const contentClassNames = cc([
    'section-content',
    contentClassName,
    {
      'section-content--large': contentSize === SectionContentSize.LARGE,
      'section-content--noHorizontalSpacing': noHorizontalSpacing,
    },
  ])

  const contentProps: any = {
    className: contentClassNames,
  }
  if (role) {
    contentProps.role = role
  }

  return (
    <StyledBaseSection role="presentation" className={cc([className])} style={backgroundStyle}>
      <ContentElement {...contentProps}>{children}</ContentElement>
    </StyledBaseSection>
  )
}
