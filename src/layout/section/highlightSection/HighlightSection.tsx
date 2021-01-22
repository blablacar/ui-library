import React, { useState } from 'react'

import { ItemChoiceProps } from '../../../itemChoice'
import { Col, Grid, HighlightSectionElements } from './HighlightSection.style'

type ContentItemsType = ItemChoiceProps &
  Readonly<{
    hidden: boolean
  }>

type GridListItemsProps = { items: Array<ContentItemsType> }
export const GridListItems = ({ items }: GridListItemsProps) => {
  const listItems = items.map(({ id, label, data, hidden, href }) => (
    <Col key={id} hidden={hidden}>
      <HighlightSectionElements.Item label={label} data={data} href={href} />
    </Col>
  ))
  return <Grid>{listItems}</Grid>
}

type HighlightContentItemsProps = { heading: string; items: Array<ContentItemsType> }
export const HighlightContentItems = ({ heading, items }: HighlightContentItemsProps) => (
  <article>
    {heading && <HighlightSectionElements.Title as="h2">{heading}</HighlightSectionElements.Title>}
    <GridListItems items={items} />
  </article>
)

/**
 * A specialized section with an highlighting background color.
 */
type highlightsType = { heading: string; items: Array<ContentItemsType> }
export type HighlightSectionProps = Readonly<{
  className?: string
  highlights: { rides: highlightsType; cities: highlightsType }
  toggle: { on: string; off: string }
}>
export const HighlightSection = ({ highlights, toggle, className }: HighlightSectionProps) => {
  const [showAll, setShowAll] = useState(false)
  const { rides, cities } = highlights

  const DEFAULT_ITEMS_SIZE = 3
  const defaultRides = rides.items.map((item, index) => {
    if (index < DEFAULT_ITEMS_SIZE) {
      return { ...item, hidden: false }
    }
    return { ...item, hidden: true }
  })
  const displayedItems = showAll ? rides.items : defaultRides

  return (
    <HighlightSectionElements.Section className={className}>
      <HighlightSectionElements.Content>
        <HighlightContentItems key="rides" heading={rides.heading} items={displayedItems} />
        {showAll && (
          <HighlightContentItems
            key="cities"
            heading={cities.heading}
            items={cities.items}
            aria-expanded={showAll}
          />
        )}
        <HighlightSectionElements.Link onClick={() => setShowAll(!showAll)} role="button">
          {toggle[showAll ? 'off' : 'on']}
        </HighlightSectionElements.Link>
      </HighlightSectionElements.Content>
    </HighlightSectionElements.Section>
  )
}
