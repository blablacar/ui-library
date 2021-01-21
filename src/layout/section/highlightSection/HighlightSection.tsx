import React, { Fragment } from 'react'

import { Toggle, useToggleContext } from './Accordion'
import {
  Col,
  Grid,
  HighlightSectionContent,
  HighlightSectionItem,
  HighlightSectionLink,
  HighlightSectionTitle,
  StyledHighlightSection,
} from './HighlightSection.style'

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
  const listItems = items.map(({ id, label, data, href, ariaLabel }) => (
    <Col key={id}>
      <HighlightSectionItem label={label} data={data} href={href} ariaLabel={ariaLabel} />
    </Col>
  ))
  return <Grid>{listItems}</Grid>
}

export const HighlightContentItems = ({ heading, items, ...props }) => (
  <Fragment>
    {heading && <HighlightSectionTitle as="h2">{heading}</HighlightSectionTitle>}
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
  const handleStartItems = (startItems: Array<Object>) => {
    const { on } = useToggleContext()
    console.log('on', on)
    const defaultItems = startItems.filter((item, index) =>
      index < DEFAULT_ITEMS_SIZE ? item : null,
    )
    return on ? defaultItems : startItems
  }

  return (
    <StyledHighlightSection className={className}>
      <HighlightSectionContent>
        <Toggle onToggle={on => handleStartItems(content[0].items)}>
          <HighlightContentItems
            key="bus"
            heading={content[0].heading}
            items={handleStartItems(content[0].items)}
          />
          <Toggle.On>
            <HighlightContentItems
              key="trajets"
              heading={content[1].heading}
              items={content[1].items}
            />
          </Toggle.On>
          <Toggle.Button element={HighlightSectionLink} ariaLabel>
            <Toggle.Off>{toggleLabel.off}</Toggle.Off>
            <Toggle.On>{toggleLabel.on}</Toggle.On>
          </Toggle.Button>
        </Toggle>
        {children}
      </HighlightSectionContent>
    </StyledHighlightSection>
  )
}
