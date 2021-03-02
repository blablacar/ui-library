import React, { useEffect, useRef, useState } from 'react'
import uniqueId from 'lodash.uniqueid'

import { ItemChoiceProps } from '../../../itemChoice'
import { Col, Grid, HighlightSectionElements } from './HighlightSection.style'

export type HighlightItemsType = ItemChoiceProps &
  Readonly<{
    hidden?: boolean
  }>

type GridListItemsProps = { items: Array<HighlightItemsType> }
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
  items: Array<HighlightItemsType>
}
const HighlightContentItems = ({ heading, items }: HighlightContentItemsProps) => (
  <HighlightSectionElements.Article>
    <HighlightSectionElements.Title as="h2">{heading}</HighlightSectionElements.Title>
    <GridListItems items={items} />
  </HighlightSectionElements.Article>
)

const DEFAULT_ITEMS_SIZE = 3

export type HighlightsType = { heading: string; items: Array<HighlightItemsType> }
export type HighlightSectionProps = Readonly<{
  className?: string
  highlights: { featured: HighlightsType; optional?: HighlightsType }
  toggle: { on: string; off: string }
}>

const setFocus = (collapsed: boolean) => {
  const collapsibleRegionWrapper = useRef()

  const focusCollapsibleRegion = (): void => {
    const collapsibleRegion = collapsibleRegionWrapper.current as HTMLDivElement
    collapsibleRegion.focus()
  }

  useEffect(() => {
    if (!collapsed) {
      focusCollapsibleRegion()
    }
  }, [collapsed])

  return collapsibleRegionWrapper
}

export const HighlightSection = ({ highlights, toggle, className }: HighlightSectionProps) => {
  const [collapsed, setCollapsed] = useState(true)
  const { featured, optional } = highlights

  const displayedItems = featured.items.map((item, index) => ({
    ...item,
    hidden: collapsed && index >= DEFAULT_ITEMS_SIZE,
  }))

  const collapsibleRegionId = uniqueId('region-')

  // Set Focus

  const collapsibleRegionWrapper = optional ? setFocus(collapsed) : null

  return (
    <HighlightSectionElements.Section className={className}>
      <HighlightSectionElements.Content>
        <HighlightContentItems heading={featured.heading} items={displayedItems} />
        {optional && (
          <div
            id={collapsibleRegionId}
            ref={collapsibleRegionWrapper}
            hidden={collapsed}
            aria-hidden={collapsed}
            role="region"
            tabIndex={-1}
          >
            <HighlightContentItems heading={optional.heading} items={optional.items} />
          </div>
        )}
        <HighlightSectionElements.Actions>
          <HighlightSectionElements.Button
            onClick={() => setCollapsed(!collapsed)}
            aria-expanded={!collapsed}
            aria-controls={collapsibleRegionId}
          >
            {toggle[collapsed ? 'on' : 'off']}
          </HighlightSectionElements.Button>
        </HighlightSectionElements.Actions>
      </HighlightSectionElements.Content>
    </HighlightSectionElements.Section>
  )
}
