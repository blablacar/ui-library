import React from 'react'

import { render, screen } from '@testing-library/react'

import { Connection } from './Connection'

describe('Connection', () => {
  it('Should render the list item', () => {
    render(<Connection label="Change of vehicle" />)
    expect(screen.getByRole('listitem')).toBeInTheDocument()
    expect(screen.getByText('Change of vehicle')).toBeInTheDocument()
  })

  it('Should use a11y attributes', () => {
    render(<Connection label="Change of vehicle" aria-label="Wait for bus 8937 to arrive" />)
    expect(
      screen.getByRole('listitem', { name: 'Wait for bus 8937 to arrive' }),
    ).toBeInTheDocument()
  })
})
