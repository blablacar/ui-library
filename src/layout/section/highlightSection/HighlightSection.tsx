import React, { Fragment, useState } from 'react'

import { Col, Grid, HighlightSectionElements } from './HighlightSection.style'
import { Toggle } from './Toggle'

export type HighlightSectionProps = Readonly<{
  className?: string
  children: React.ReactNode
  content: Array<Object>
  toggleLabel: Object
}>

/**
 * A specialized section with an highlighting background color.
 */
export const GridListItems = ({ items }) => {
  const listItems = items.map(({ id, label, data, hidden, href, ariaLabel }) => (
    <Col key={id} hidden={hidden}>
      <HighlightSectionElements.Item label={label} data={data} href={href} ariaLabel={ariaLabel} />
    </Col>
  ))
  return <Grid>{listItems}</Grid>
}

export const HighlightContentItems = ({ heading, items, ...props }) => (
  <Fragment>
    {heading && <HighlightSectionElements.Title as="h2">{heading}</HighlightSectionElements.Title>}
    <GridListItems items={items} />
  </Fragment>
)

export const HighlightSection = ({
  content,
  toggleLabel,
  className,
  children,
}: HighlightSectionProps) => {
  const DEFAULT_ITEMS_SIZE = 3
  const [isToggled, setOnToggle] = useState(false)
  const startItems = content[0].items

  const defaultItems = startItems.filter((item, index) => {
    if (index < DEFAULT_ITEMS_SIZE) {
      item.hidden = !isToggled
    }
    return item
  })

  const items = isToggled ? defaultItems : startItems

  return (
    <HighlightSectionElements.Section className={className}>
      <HighlightSectionElements.Content>
        <Toggle onToggle={on => setOnToggle(on)}>
          <HighlightContentItems key="bus" heading={content[0].heading} items={items} />
          <Toggle.On aria-expanded={isToggled}>
            <HighlightContentItems
              key="trajets"
              heading={content[1].heading}
              items={content[1].items}
            />
          </Toggle.On>
          <Toggle.Button element={HighlightSectionElements.Link} role="button">
            <Toggle.Off>{toggleLabel.off}</Toggle.Off>
            <Toggle.On>{toggleLabel.on}</Toggle.On>
          </Toggle.Button>
        </Toggle>
      </HighlightSectionElements.Content>
    </HighlightSectionElements.Section>
  )
}
