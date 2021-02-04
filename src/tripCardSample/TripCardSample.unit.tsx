import React from 'react'

import { render, screen } from '@testing-library/react'

import { TripCardSample, TripCardSampleProps } from './TripCardSample'

const props: TripCardSampleProps = {
  departure: 'Paris',
  arrival: 'Bordeaux',
}

describe('TripCardSample', () => {
  it('should render without price', () => {
    render(<TripCardSample {...props} />)

    expect(screen.getByText('Paris')).toBeInTheDocument()
    expect(screen.getByText('Bordeaux')).toBeInTheDocument()
  })

  it('should render with Price', () => {
    render(<TripCardSample {...props} priceLabel="from" price="8,00 €" />)

    expect(screen.getByText('from')).toBeInTheDocument()
    expect(screen.getByText('8,00 €')).toBeInTheDocument()
  })
})
