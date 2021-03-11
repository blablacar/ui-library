import React from 'react'

import { render } from '@testing-library/react'

import { TripCard } from '../../../tripCard'
import { tripCardConfig } from './CardsStackSection.example'
import { CardsStackSection } from './index'

describe('CardsStackSection', () => {
  it('should render TripCards', () => {
    const { container } = render(
      <CardsStackSection>
        <TripCard {...tripCardConfig} />
        <TripCard {...tripCardConfig} />
        <TripCard {...tripCardConfig} />
        <TripCard {...tripCardConfig} />
        <TripCard {...tripCardConfig} />
        <TripCard {...tripCardConfig} />
      </CardsStackSection>,
    )

    expect(container.querySelector('ul').children).toHaveLength(6)
  })
})
