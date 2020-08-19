import React from 'react'
import cc from 'classcat'

import { Button } from '../../../button'
import { Column } from '../../../layout/column'
import { Columns } from '../../../layout/columns'
import { BaseSection, SectionContentSize } from '../../../layout/section/baseSection'
import { Text, TextTagType } from '../../../text'
import { TextDisplay1 } from '../../../typography/display1'

export type MediaContentSectionProps = Readonly<{
  className?: string
  mediaUrl: string
  title: string
  content?: string
  buttonLabel?: string
  buttonHref?: string | JSX.Element
  flipped?: boolean
}>

/**
 * A specialized section which show some marketing content associated with a picture.
 */
export const MediaContentSection = (props: MediaContentSectionProps) => {
  const { className, mediaUrl, title, content, buttonLabel, buttonHref, flipped } = props
  const classNames = cc([
    'kirk-media-content',
    className,
    { 'kirk-media-content--flipped': flipped },
  ])
  const showButton = Boolean(buttonHref && buttonLabel)
  const showParagraph = Boolean(content)
  return (
    <BaseSection tagName="article" className={classNames} contentSize={SectionContentSize.LARGE}>
      <Columns>
        <Column className="kirk-media-content-img-column">
          <div className="kirk-media-content-img" style={{ backgroundImage: `url(${mediaUrl})` }} />
        </Column>
        <Column>
          <div className="kirk-media-content-wrapper">
            <TextDisplay1>{title}</TextDisplay1>
            {showParagraph && <Text tag={TextTagType.PARAGRAPH}>{content}</Text>}
            {showButton && (
              <Button className="kirk-media-content-button" href={buttonHref}>
                {buttonLabel}
              </Button>
            )}
          </div>
        </Column>
      </Columns>
    </BaseSection>
  )
}
