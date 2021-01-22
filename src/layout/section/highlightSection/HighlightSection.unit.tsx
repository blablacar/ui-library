import React from 'react'
import renderer from 'react-test-renderer'

import { RideAxis } from '_utils/rideAxis/index.tsx'

import { HighlightSection } from './index'

export const initialItems = [
  {
    id: '1',
    label: 'Toulouse',
    data: '8,99 €',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '2',
    label: <RideAxis from="Grenoble" to="Aéroport Lyon-Saint Exupéry" />,
    data: '16,99 €',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '3',
    label: <RideAxis from="Bus Paris" to="Lille" />,
    data: '18,99 €',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '1',
    label: <RideAxis from="Aéroport Lyon-Saint Exupéry" to="Lyon" />,
    data: '8,99 €',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '2',
    label: <RideAxis from="Aéroport Lyon-Saint Exupéry" to="Cannes" />,
    data: '8,99 €',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '3',
    label: 'Tous les trajet en bus',
    data: '8,99 €',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
]

export const items = [
  {
    id: '1',
    label: 'Lyon',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '2',
    label: 'Cannes',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '3',
    label: 'Toulouse',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '4',
    label: 'Paris',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '5',
    label: 'Nantes',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '6',
    label: 'Bruxelles',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '7',
    label: 'Amsterdam',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '7',
    label: 'Amsterdam',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '8',
    label: 'Aéroport Lyon-Saint Exupéry',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
]

describe('HighlightSection', () => {
  const content = [
    { heading: 'Top trajets en bus', items: initialItems },
    { heading: 'Top villes en bus', items },
  ]

  it('should render default highlight section', () => {
    const section = (
      <HighlightSection
        content={content}
        toggleLabel={{
          on: 'Show more',
          off: 'Show less',
        }}
      >
        >default highlight section
      </HighlightSection>
    )
    const renderedSection = renderer.create(section).toJSON()
    expect(renderedSection).toMatchSnapshot()
  })
})
