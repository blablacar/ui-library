import React from 'react'

import { render, screen } from '@testing-library/react'

import { Addon } from './Addon'
import { Itinerary } from './Itinerary'
import { Place } from './Place'

describe('Itinerary', () => {
  it('Should render the itinerary', () => {
    render(
      <Itinerary>
        <Addon label="Brest" />
        <Place label="Paris" time="09:00" />
        <Place label="Lyon" time="13:00" />
        <Addon label="Grenoble" />
      </Itinerary>,
    )

    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(4)
  })

  it('Should use a11y attributes', () => {
    render(
      <Itinerary aria-label="Your trip from Paris to Lyon">
        <Addon label="Brest" />
        <Place label="Paris" time="09:00" />
        <Place label="Lyon" time="13:00" />
        <Addon label="Grenoble" />
      </Itinerary>,
    )

    expect(screen.getByRole('list', { name: 'Your trip from Paris to Lyon' })).toBeInTheDocument()
  })

  it('Should not display time in small', () => {
    render(
      <Itinerary small>
        <Addon label="Brest" />
        <Place label="Paris" time="09:00" />
        <Place label="Lyon" time="13:00" />
        <Addon label="Grenoble" />
      </Itinerary>,
    )

    expect(screen.queryByText('09:00')).not.toBeVisible()
    expect(screen.queryByText('13:00')).not.toBeVisible()
  })
})
