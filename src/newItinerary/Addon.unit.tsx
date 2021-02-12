import React from 'react'

import { render, screen } from '@testing-library/react'

import { Addon } from './Addon'

describe('Addon', () => {
  it('Should render the list item', () => {
    render(<Addon label="Paris" />)
    expect(screen.getByRole('listitem')).toBeInTheDocument()
    expect(screen.getByText('Paris')).toBeInTheDocument()
  })

  it('Should use a11y attributes', () => {
    render(<Addon label="Paris" aria-label="Drivers comes from Brest" />)
    expect(screen.getByRole('listitem', { name: 'Drivers comes from Brest' })).toBeInTheDocument()
  })
})
