import React from 'react'

import { render, screen } from '@testing-library/react'

import { Distances, Proximity, ProximityDisplay } from './Proximity'

describe('Proximity', () => {
  it('Should highlight FAR and have a title', () => {
    render(<Proximity value={Distances.FAR} title="Pretty far from your place" />)
    expect(screen.getByText('Pretty far from your place')).toBeInTheDocument()
  })

  it('Should render proximity with text', () => {
    render(
      <Proximity
        value={Distances.CLOSE}
        title="Pretty close to your place"
        display={ProximityDisplay.LABEL}
      />,
    )

    expect(screen.getByText('Pretty close to your place')).toBeInTheDocument()
  })
})
