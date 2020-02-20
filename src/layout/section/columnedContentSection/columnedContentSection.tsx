import React from 'react'
import BaseSection, { SectionContentSize } from 'layout/section/baseSection'
import Columns from 'layout/columns'
import Column from 'layout/column'
import Button, { ButtonStatus } from 'button'
import Text, { TextTagType } from 'text'
import Title from 'title'

export interface ColumnedContentSectionProps {
  readonly className?: Classcat.Class
  readonly title: string
  readonly topLinkLabel?: string
  readonly topLinkHref?: string | JSX.Element
  readonly columnContentList: ColumnContent[]
}

interface ColumnContent {
  readonly title: string
  readonly content: string
  readonly media?: Media
  readonly footerLinkLabel?: string
  readonly footerLinkHref?: string | JSX.Element
  readonly deprecatedExtraFooter?: JSX.Element // Do not use.
}

type Media = MediaElement | MediaPictureCover | MediaPictureFit

// A set of rendering modes for the media (e.g. picture or visual illustrations) related to a
// particular content columns.
export enum ColumnedSectionContentMediaKind {
  // An element containing the media will be given and will be horizontally centered. The passed
  // element won't be resized depending on viewport. This can be used for SVG icon for instance.
  ELEMENT = 'element',

  // A rendering mode that will stretch the passed image to cover the full width of the column.
  // Used for rendering blog assets.
  COVER = 'cover',

  // A rendering mode that will try to fill about 2/3 of the width of the column with the image
  // without covering completely the column. This is used for the pro homepage.
  FIT = 'fit',
}

function isMediaElement(anyMedia: any): anyMedia is MediaElement {
  return anyMedia.kind === ColumnedSectionContentMediaKind.ELEMENT
}

function isMediaCover(anyMedia: any): anyMedia is MediaPictureCover {
  return anyMedia.kind === ColumnedSectionContentMediaKind.COVER
}

interface MediaElement {
  readonly kind: ColumnedSectionContentMediaKind
  readonly element: JSX.Element
}

interface MediaPictureCover {
  readonly kind: ColumnedSectionContentMediaKind
  readonly pictureUrl: string
  readonly href: string
}

interface MediaPictureFit {
  readonly kind: ColumnedSectionContentMediaKind
  readonly pictureUrl: string
}

const renderMedia = (media: Media): JSX.Element => {
  if (isMediaElement(media)) {
    return <div className="kirk-columned-content-section-media-element">{media.element}</div>
  }

  if (isMediaCover(media)) {
    return (
      <a
        className="kirk-columned-content-section-media-cover"
        target="_blank"
        rel="noopener noreferrer"
        href={media.href}
      >
        <img src={media.pictureUrl} alt="" />
      </a>
    )
  }

  return (
    <div className="kirk-columned-content-section-media-fit">
      <img src={media.pictureUrl} alt="" />
    </div>
  )
}

const renderColumnContent = (columnContent: ColumnContent, index: string): JSX.Element => {
  const {
    title,
    content,
    media,
    footerLinkHref,
    footerLinkLabel,
    deprecatedExtraFooter,
  } = columnContent
  const showFooterLink = Boolean(footerLinkHref && footerLinkLabel)

  return (
    <Column className="kirk-columned-content-section-column" key={index}>
      {media && renderMedia(media)}

      <Title className="kirk-columned-content-section-subtitle" headingLevel={3}>
        {title}
      </Title>

      <Text tag={TextTagType.PARAGRAPH}>{content}</Text>
      {showFooterLink && (
        <span>
          <Button
            className="kirk-columned-content-section-footer-link"
            href={footerLinkHref}
            status={ButtonStatus.UNSTYLED}
          >
            {footerLinkLabel}
          </Button>
        </span>
      )}
      {deprecatedExtraFooter}
    </Column>
  )
}

/**
 * A specialized section which shows some marketing content in columns (usually 3).
 */
const ColumnedContentSection = (props: ColumnedContentSectionProps) => {
  const { className, title, topLinkLabel, topLinkHref, columnContentList } = props
  const showTopLink = Boolean(topLinkLabel && topLinkHref)

  return (
    <BaseSection
      tagName="article"
      contentClassName="kirk-columned-content-section-content"
      className={className}
      contentSize={SectionContentSize.LARGE}
    >
      <Title headingLevel={2} className="kirk-columned-content-section-title">
        {title}
      </Title>
      {showTopLink && (
        <Button
          className="kirk-columned-content-section-top-link"
          href={topLinkHref}
          status={ButtonStatus.UNSTYLED}
        >
          {topLinkLabel}
        </Button>
      )}
      <Columns>
        {columnContentList.map((columnContent, index) =>
          renderColumnContent(columnContent, String(index)),
        )}
      </Columns>
    </BaseSection>
  )
}

export default ColumnedContentSection
