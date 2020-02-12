import React from 'react'
import BaseSection, { SectionContentSize } from 'layout/section/baseSection'
import Columns from 'layout/columns'
import Column from 'layout/column'
import SubHeader from 'subHeader'
import Text, { TextTagType } from 'text'
import Button from 'button'

export interface MediaContentSectionProps {
  readonly className?: Classcat.Class
  readonly mediaUrl: string
  readonly title: string
  readonly content?: string
  readonly buttonLabel?: string
  readonly buttonHref?: string | JSX.Element
}

/**
 * A specialized section which show some marketing content associated with a picture.
 */
const MediaContentSection = (props: MediaContentSectionProps) => {
  const { className, mediaUrl, title, content, buttonLabel, buttonHref } = props
  const showButton = Boolean(buttonHref && buttonLabel)
  const showParagraph = Boolean(content)
  return (
    <BaseSection tagName="article" className={className} contentSize={SectionContentSize.LARGE}>
      <Columns>
        <Column>
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
