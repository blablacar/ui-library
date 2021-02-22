import React from 'react'

import { render, screen } from '@testing-library/react'

import { HiddenStop } from './HiddenStop'

describe('HiddenStop', () => {
  it('Should render the list item', () => {
    render(<HiddenStop label="Lyon" />)
    expect(screen.getByRole('listitem')).toBeInTheDocument()
    expect(screen.getByText('Lyon')).toBeInTheDocument()
  })

  it('Should use a11y attributes', () => {
    render(<HiddenStop label="Lyon" aria-label="Your bus make a stop in Lyon" />)
    expect(
      screen.getByRole('listitem', { name: 'Your bus make a stop in Lyon' }),
    ).toBeInTheDocument()
  })
})
