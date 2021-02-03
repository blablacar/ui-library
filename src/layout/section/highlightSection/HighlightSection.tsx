import React, { useState } from 'react'

import { ItemChoiceProps } from '../../../itemChoice'
import { Col, Grid, HighlightSectionElements } from './HighlightSection.style'

type ContentItemsType = ItemChoiceProps &
  Readonly<{
    hidden: boolean
  }>

type GridListItemsProps = { items: Array<ContentItemsType> }
const GridListItems = ({ items }: GridListItemsProps) => {
  const listItems = items.map(({ id, label, data, hidden, href }) => (
    <Col key={id} hidden={hidden}>
      <HighlightSectionElements.Item label={label} data={data} href={href} />
    </Col>
  ))
  return <Grid>{listItems}</Grid>
}

type HighlightContentItemsProps = {
  heading: string
  items: Array<ContentItemsType>
}
const HighlightContentItems = ({ heading, items }: HighlightContentItemsProps) => (
  <HighlightSectionElements.Article>
    <HighlightSectionElements.Title as="h2">{heading}</HighlightSectionElements.Title>
    <GridListItems items={items} />
  </HighlightSectionElements.Article>
)

const DEFAULT_ITEMS_SIZE = 3

type highlightsType = { heading: string; items: Array<ContentItemsType> }
export type HighlightSectionProps = Readonly<{
  className?: string
  highlights: { axes: highlightsType; cities: highlightsType }
  toggle: { on: string; off: string }
}>
export const HighlightSection = ({ highlights, toggle, className }: HighlightSectionProps) => {
  const [collapsed, setCollapsed] = useState(true)
  const { axes, cities } = highlights

  const displayedItems = axes.items.map((item, index) => ({
    ...item,
    hidden: collapsed && index >= DEFAULT_ITEMS_SIZE,
  }))

  return (
    <HighlightSectionElements.Section className={className}>
      <HighlightSectionElements.Content>
        <HighlightContentItems heading={axes.heading} items={displayedItems} />
        <div hidden={collapsed}>
          <HighlightContentItems
            heading={cities.heading}
            items={cities.items}
            aria-hidden={collapsed}
          />
        </div>
        <HighlightSectionElements.Actions>
          <HighlightSectionElements.Button onClick={() => setCollapsed(!collapsed)} role="button">
            {toggle[collapsed ? 'on' : 'off']}
          </HighlightSectionElements.Button>
        </HighlightSectionElements.Actions>
      </HighlightSectionElements.Content>
    </HighlightSectionElements.Section>
  )
}
