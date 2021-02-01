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

type HighlightContentItemsProps = {
  heading?: string
  items: Array<ContentItemsType>
}
export const HighlightContentItems = ({ heading, items }: HighlightContentItemsProps) => (
  <HighlightSectionElements.Article>
    {heading && <HighlightSectionElements.Title as="h2">{heading}</HighlightSectionElements.Title>}
    <GridListItems items={items} />
  </HighlightSectionElements.Article>
)

type highlightsType = { heading: string; items: Array<ContentItemsType> }
export type HighlightSectionProps = Readonly<{
  className?: string
  highlights: { rides: highlightsType; cities: highlightsType }
  toggle: { on: string; off: string }
}>

const DEFAULT_ITEMS_SIZE = 3

export const HighlightSection = ({ highlights, toggle, className }: HighlightSectionProps) => {
  const [collapsed, setCollapsed] = useState(true)
  const { rides, cities } = highlights

  const displayedItems = rides.items.map((item, index) => ({
    ...item,
    hidden: collapsed && index >= DEFAULT_ITEMS_SIZE,
  }))

  return (
    <HighlightSectionElements.Section className={className}>
      <HighlightSectionElements.Content>
        <HighlightContentItems heading={rides.heading} items={displayedItems} />
        <div hidden={collapsed}>
          <HighlightContentItems
            heading={cities.heading}
            items={cities.items}
            aria-hidden={collapsed}
          />
        </div>
        <HighlightSectionElements.Button onClick={() => setCollapsed(!collapsed)} role="button">
          {toggle[collapsed ? 'on' : 'off']}
        </HighlightSectionElements.Button>
      </HighlightSectionElements.Content>
    </HighlightSectionElements.Section>
  )
}
