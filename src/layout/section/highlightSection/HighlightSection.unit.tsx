import React from 'react'

import { fireEvent, render } from '@testing-library/react'

import { RideAxis } from '../../../_utils/rideAxis'
import { HighlightSection } from './index'

export const rides = [
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

export const cities = [
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
    id: '8',
    label: 'Amsterdam',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
  {
    id: '9',
    label: 'Tous les villes en bus',
    href: <a href="#" />,
    ariaLabel: 'Aria label',
  },
]

export const highlights = {
  rides: { heading: 'Top trajets en bus', items: rides },
  cities: { heading: 'Top villes en bus', items: cities },
}

describe('HighlightSection', () => {
  describe('rides', () => {
    it('should render ONLY highlighted items', () => {
      const view = render(
        <HighlightSection
          highlights={{
            rides: { heading: 'Top trajets en bus', items: rides },
            cities: { heading: 'Top villes en bus', items: [] },
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
            rides: { heading: 'Top trajets en bus', items: rides },
            cities: { heading: 'Top villes en bus', items: [] },
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

  describe('cities', () => {
    it('should not render cities by default', () => {
      const view = render(
        <HighlightSection
          highlights={{
            rides: { heading: 'Top trajets en bus', items: [] },
            cities: { heading: 'Top villes en bus', items: cities },
          }}
          toggle={{
            on: 'Show more',
            off: 'Show less',
          }}
        />,
      )

      expect(view.getByText('Lyon')).not.toBeVisible()
    })

    it('should render cities when expanded', () => {
      const view = render(
        <HighlightSection
          highlights={{
            rides: { heading: 'Top trajets en bus', items: [] },
            cities: { heading: 'Top villes en bus', items: cities },
          }}
          toggle={{
            on: 'Show more',
            off: 'Show less',
          }}
        />,
      )

      fireEvent.click(view.getByRole('button'))
      expect(view.getByText('Lyon')).toBeVisible()
    })
  })
})
