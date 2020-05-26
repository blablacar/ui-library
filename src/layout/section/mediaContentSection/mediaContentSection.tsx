import React from 'react'
import cc from 'classcat'

import Button from '../../../button'
import Column from '../../../layout/column'
import Columns from '../../../layout/columns'
import BaseSection, { SectionContentSize } from '../../../layout/section/baseSection'
import SubHeader from '../../../subHeader'
import Text, { TextTagType } from '../../../text'

export interface MediaContentSectionProps {
  readonly className?: string
  readonly mediaUrl: string
  readonly title: string
  readonly content?: string
  readonly buttonLabel?: string
  readonly buttonHref?: string | JSX.Element
  readonly flipped?: boolean
}

/**
 * A specialized section which show some marketing content associated with a picture.
 */
const MediaContentSection = (props: MediaContentSectionProps) => {
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
            <SubHeader className="kirk-media-content-title">{title}</SubHeader>
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

export default MediaContentSection
