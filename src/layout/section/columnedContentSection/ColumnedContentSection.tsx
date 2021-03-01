import React from 'react'

import { ButtonStatus } from '../../../button'
import { Columns } from '../../../layout/columns'
import { SectionContentSize } from '../../../layout/section/baseSection'
import { StyledColumnedContentSection } from './ColumnedContentSection.style'

export type ColumnedContentSectionProps = Readonly<{
  className?: string
  title?: string
  topLinkLabel?: string
  topLinkHref?: string | JSX.Element
  columnContentList: ColumnContent[]
}>

export interface ColumnContent {
  readonly title: string
  readonly content: string
  readonly media?: Media
  readonly footerLinkLabel?: string
  readonly footerLinkHref?: string | JSX.Element
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
    return (
      <StyledColumnedContentSection.MediaElement>
        {media.element}
      </StyledColumnedContentSection.MediaElement>
    )
  }

  if (isMediaCover(media)) {
    return (
      <StyledColumnedContentSection.MediaCover
        target="_blank"
        rel="noopener noreferrer"
        href={media.href}
      >
        <img src={media.pictureUrl} alt="" />
      </StyledColumnedContentSection.MediaCover>
    )
  }

  return (
    <StyledColumnedContentSection.MediaFit>
      <img src={media.pictureUrl} alt="" />
    </StyledColumnedContentSection.MediaFit>
  )
}

const renderColumnContent = (columnContent: ColumnContent, index: string): JSX.Element => {
  const { title, content, media, footerLinkHref, footerLinkLabel } = columnContent
  const showFooterLink = Boolean(footerLinkHref && footerLinkLabel)

  return (
    <StyledColumnedContentSection.Column key={index}>
      {media && renderMedia(media)}

      <StyledColumnedContentSection.ColumnTitle as="p">
        {title}
      </StyledColumnedContentSection.ColumnTitle>
      <StyledColumnedContentSection.ColumnContent as="p">
        {content}
      </StyledColumnedContentSection.ColumnContent>

      {showFooterLink && (
        <StyledColumnedContentSection.ColumnFooter
          href={footerLinkHref}
          status={ButtonStatus.UNSTYLED}
        >
          {footerLinkLabel}
        </StyledColumnedContentSection.ColumnFooter>
      )}
    </StyledColumnedContentSection.Column>
  )
}

/**
 * A specialized section which shows some marketing content in columns (usually 3).
 */
export const ColumnedContentSection = (props: ColumnedContentSectionProps) => {
  const { className, title, topLinkLabel, topLinkHref, columnContentList } = props
  const showTopLink = Boolean(topLinkLabel && topLinkHref)

  return (
    <StyledColumnedContentSection.Section
      tagName="article"
      className={className}
      contentSize={SectionContentSize.LARGE}
    >
      {title && (
        <StyledColumnedContentSection.Header>
          <StyledColumnedContentSection.Title as="h2">{title}</StyledColumnedContentSection.Title>
          {showTopLink && (
            <StyledColumnedContentSection.TopLink href={topLinkHref} status={ButtonStatus.UNSTYLED}>
              {topLinkLabel}
            </StyledColumnedContentSection.TopLink>
          )}
        </StyledColumnedContentSection.Header>
      )}
      <Columns>
        {columnContentList.map((columnContent, index) =>
          renderColumnContent(columnContent, String(index)),
        )}
      </Columns>
    </StyledColumnedContentSection.Section>
  )
}
