import React from 'react'

import { fireEvent, render } from '@testing-library/react'

import { RideAxis } from '../../../_utils/rideAxis'
import { HighlightSection } from './index'

export const featured = [
  {
    id: '11',
    label: 'Toulouse',
    data: '8,99 €',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '22',
    label: <RideAxis from="Grenoble" to="Aéroport Lyon-Saint Exupéry" />,
    data: '16,99 €',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '33',
    label: <RideAxis from="Bus Paris" to="Lille" />,
    data: '18,99 €',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '44',
    label: <RideAxis from="Aéroport Lyon-Saint Exupéry" to="Lyon" />,
    data: '8,99 €',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '55',
    label: <RideAxis from="Aéroport Lyon-Saint Exupéry" to="Cannes" />,
    data: '8,99 €',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '66',
    label: 'Tous les trajet en bus',
    data: '',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
]

export const optional = [
  {
    id: '1',
    label: 'Madrid',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '2',
    label: 'Barcelona',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '3',
    label: 'Guernica',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '4',
    label: 'Alicante',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '5',
    label: 'Sevilla',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '6',
    label: 'Tous les villes en bus',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
]

export const highlights = {
  featured: { heading: 'Top trajets en bus', items: featured },
  optional: { heading: 'Top villes en bus', items: optional },
}

describe('HighlightSection', () => {
  describe('featured items', () => {
    it('should render ONLY featured highlighted items', () => {
      const view = render(
        <HighlightSection
          highlights={{
            featured: { heading: 'Top trajets en bus', items: featured },
            optional: { heading: 'Top villes en bus', items: [] },
          }}
          toggle={{
            on: 'Show more',
            off: 'Show less',
          }}
        />,
      )

      expect(view.getByText('Toulouse')).toBeVisible()
      expect(view.getByText('Tous les trajet en bus')).not.toBeVisible()
    })

    it('should expand the items/section', () => {
      const view = render(
        <HighlightSection
          highlights={{
            featured: { heading: 'Top trajets en bus', items: featured },
            optional: { heading: 'Top villes en bus', items: [] },
          }}
          toggle={{
            on: 'Show more',
            off: 'Show less',
          }}
        />,
      )

      fireEvent.click(view.getByRole('button'))
      expect(view.getByText('Tous les trajet en bus')).toBeVisible()
    })
  })

  describe('optional items', () => {
    it('should not render the "optional" items by default', () => {
      const view = render(
        <HighlightSection
          highlights={{
            featured: { heading: 'Top trajets en bus', items: [] },
            optional: { heading: 'Top villes en bus', items: optional },
          }}
          toggle={{
            on: 'Show more',
            off: 'Show less',
          }}
        />,
      )

      expect(view.getByText('Tous les villes en bus')).not.toBeVisible()
    })

    it('should render the "optional" items when expanded', () => {
      const view = render(
        <HighlightSection
          highlights={{
            featured: { heading: 'Top trajets en bus', items: [] },
            optional: { heading: 'Top villes en bus', items: optional },
          }}
          toggle={{
            on: 'Show more',
            off: 'Show less',
          }}
        />,
      )

      fireEvent.click(view.getByRole('button'))
      expect(view.getByText('Tous les villes en bus')).toBeVisible()
    })
  })
})
