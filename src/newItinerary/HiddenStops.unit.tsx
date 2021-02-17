import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { HiddenStop } from './HiddenStop'
import { HiddenStops } from './HiddenStops'

describe('HiddenStops', () => {
  it('Should render the list item & allow stops toggle', () => {
    render(
      <HiddenStops label="2 stops">
        <HiddenStop label="Paris" />
        <HiddenStop label="Lyon" />
      </HiddenStops>,
    )
    expect(screen.getByText('2 stops')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()

    // Toggle stops.
    // Note: aria-hidden makes .toBeInTheDocument() return false
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
    fireEvent.click(screen.getAllByRole('listitem')[0])
    expect(screen.getByRole('list')).toBeInTheDocument()
    fireEvent.click(screen.getAllByRole('listitem')[0])
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
  })

  it('Should render expanded stops if only one stop', () => {
    render(
      <HiddenStops label="1 stop">
        <HiddenStop label="Paris" />
      </HiddenStops>,
    )
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  it('Should use a11y attributes', () => {
    render(
      <HiddenStops label="2 stops" aria-label="Click to show all stops">
        <HiddenStop label="Paris" />
        <HiddenStop label="Lyon" />
      </HiddenStops>,
    )
    expect(screen.getByRole('listitem', { name: 'Click to show all stops' })).toBeInTheDocument()
  })
})
