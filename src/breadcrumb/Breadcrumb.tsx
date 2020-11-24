import React, { Fragment } from 'react'

import { ContentDivider } from '../divider/contentDivider'
import { TextCaption } from '../typography/caption'
import { StyledBreadcrumb } from './Breadcrumb.style'

// make sure it validates https://search.google.com/test/rich-results
export type CrumbProps = Readonly<{
  name: string
  url: string
}>

export enum DividerPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
  NONE = 'none',
}

export type BreadcrumbProps = {
  crumbs: Array<CrumbProps>
  divider?: DividerPosition
}

export const Breadcrumb = ({ crumbs, divider }: BreadcrumbProps) => (
  <Fragment>
    {divider === DividerPosition.TOP && <ContentDivider />}

    <StyledBreadcrumb divider={divider} itemScope itemType="https://schema.org/BreadcrumbList">
      {crumbs.map((crumb, index) => {
        const position = Number(index + 1)

        return (
          <li
            key={`crumb-${crumb.name}-${position}`}
            className="inline-block"
            itemScope
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
          >
            <TextCaption>
              <a
                itemScope
                itemProp="item"
                itemType="https://schema.org/WebPage"
                itemID={crumb.url}
                href={crumb.url}
              >
                <span itemProp="name">{crumb.name}</span>
              </a>

              {position < crumbs.length && (
                <span role="separator" className="breadcrumb-separator">
                  {' › '}
                </span>
              )}
            </TextCaption>
            <meta itemProp="position" content={String(position)} />
          </li>
        )
      })}
    </StyledBreadcrumb>

    {divider === DividerPosition.BOTTOM && <ContentDivider />}
  </Fragment>
)

Breadcrumb.defaultProps = {
  divider: DividerPosition.NONE,
}
