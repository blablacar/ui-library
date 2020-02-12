import React from 'react'
import cc from 'classcat'

export enum SectionContentSize {
  SMALL = 'small',
  LARGE = 'large',
}

export interface BaseSectionProps {
  readonly className?: Classcat.Class
  readonly contentClassName?: Classcat.Class
  readonly backgroundStyle?: object
  readonly tagName?: string
  readonly role?: string
  readonly children: JSX.Element | string | React.ReactNode
  readonly contentSize?: SectionContentSize
}

/**
 * The core section: It sections horizontally a page while fitting its
 * content in width-constrained and centered column.
 */
const BaseSection = (props: BaseSectionProps) => {
  const {
    className,
    contentClassName,
    backgroundStyle,
    tagName: ContentElement = 'div',
    children,
    role,
    contentSize = SectionContentSize.SMALL,
  } = props

  const contentClassNames = cc([
    'section-content',
    contentClassName,
    {
      'section-content--large': contentSize === SectionContentSize.LARGE,
    },
  ])

  const contentProps: any = {
    className: contentClassNames,
  }
  if (role) {
    contentProps.role = role
  }

  return (
    <div role="presentation" className={cc([className])} style={backgroundStyle}>
      <ContentElement {...contentProps}>{children}</ContentElement>
    </div>
  )
}

export default BaseSection
