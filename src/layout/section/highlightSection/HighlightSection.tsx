import React, { Fragment } from 'react'

import { RideAxis } from '_utils/rideAxis/index'

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
    <HighlightSectionTitle as="h2">{heading}</HighlightSectionTitle>
    <GridListItems items={items} />
  </Fragment>
)

export const HighlightSection = (props: HighlightSectionProps) => {
  const { className, children } = props
  const items = [
    {
      label: <RideAxis from="Aéroport Lyon-Saint Exupéry" />,
      data: '8,99 €',
      href: <a href="#" />,
      ariaLabel: 'Aria label',
    },
    {
      label: <RideAxis from="Aéroport Lyon-Saint Exupéry" />,
      data: '8,99 €',
      href: <a href="#" />,
      ariaLabel: 'Aria label',
    },
    {
      label: <RideAxis from="Aéroport Lyon-Saint Exupéry" />,
      data: '8,99 €',
      href: <a href="#" />,
      ariaLabel: 'Aria label',
    },
    {
      label: <RideAxis from="Aéroport Lyon-Saint Exupéry" />,
      data: '8,99 €',
      href: <a href="#" />,
      ariaLabel: 'Aria label',
    },
    {
      label: <RideAxis from="Aéroport Lyon-Saint Exupéry" />,
      data: '8,99 €',
      href: <a href="#" />,
      ariaLabel: 'Aria label',
    },
    {
      label: <RideAxis from="Aéroport Lyon-Saint Exupéry" />,
      data: '8,99 €',
      href: <a href="#" />,
      ariaLabel: 'Aria label',
    },
    {
      label: <RideAxis from="Aéroport Lyon-Saint Exupéry" />,
      data: '8,99 €',
      href: <a href="#" />,
      ariaLabel: 'Aria label',
    },
    {
      label: <RideAxis from="Aéroport Lyon-Saint Exupéry" />,
      data: '8,99 €',
      href: <a href="#" />,
      ariaLabel: 'Aria label',
    },
    {
      label: <RideAxis from="Aéroport Lyon-Saint Exupéry" />,
      data: '8,99 €',
      href: <a href="#" />,
      ariaLabel: 'Aria label',
    },
  ]
  return (
    <StyledHighlightSection className={className}>
      <HighlightSectionContent>
        <HighlightContentItems heading="Nos top Trajets en bus" items={items} />
        <HighlightContentItems heading="Nos top Trajets en bus 2" items={items} />
        <HighlightSectionLink>Show more</HighlightSectionLink>
        {/* {children} */}
      </HighlightSectionContent>
    </StyledHighlightSection>
  )
}
