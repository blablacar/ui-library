import React, { useState } from 'react'
import cc from 'classcat'

import { Button, ButtonStatus } from '../button'
import { Text, TextTagType } from '../text'
import { StyledParagraph } from './Paragraph.style'

const DEFAULT_MAX_CHAR_SIZE = 180

type ParagraphBaseProps = Readonly<{
  className?: string
  itemProp?: string
}>

export type ParagraphSimpleProps = ParagraphBaseProps &
  Readonly<{
    children: string
  }>

export type ParagraphExpandableProps = ParagraphBaseProps &
  Readonly<{
    isExpandable: true
    expandLabel: string
    children: string
  }>

export type ParagraphProps = ParagraphSimpleProps | ParagraphExpandableProps

const truncateText = (text: string) => `${text.substring(0, DEFAULT_MAX_CHAR_SIZE)}…`

function SimpleParagraph(props: ParagraphSimpleProps): JSX.Element {
  const { className, itemProp, children } = props

  return (
    <StyledParagraph className={cc(className)} role="presentation">
      <Text itemProp={itemProp} tag={TextTagType.PARAGRAPH} newlineToBr>
        {children}
      </Text>
    </StyledParagraph>
  )
}

function ExpandableParagraph(props: ParagraphExpandableProps): JSX.Element {
  const { className, itemProp, expandLabel, children: originalContent } = props

  const [isExpanded, setIsExpanded] = useState(originalContent.length < DEFAULT_MAX_CHAR_SIZE)

  const expandParagraph = () => {
    setIsExpanded(true)
  }

  const content = isExpanded ? originalContent : truncateText(originalContent)

  return (
    <StyledParagraph className={cc(className)} role="presentation">
      <Text itemProp={itemProp} tag={TextTagType.PARAGRAPH} newlineToBr>
        {content}
      </Text>
      {!isExpanded && (
        <Button status={ButtonStatus.UNSTYLED} onClick={expandParagraph} className="mt-s">
          {expandLabel}
        </Button>
      )}
    </StyledParagraph>
  )
}

export function Paragraph(props: ParagraphProps) {
  if ('isExpandable' in props && props.isExpandable) {
    return <ExpandableParagraph {...props} />
  }

  return <SimpleParagraph {...props} />
}
