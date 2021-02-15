import React from 'react'

import { render, screen } from '@testing-library/react'

import { Marquee } from './index'

describe('Marquee', () => {
  it('Should render', () => {
    render(
      <Marquee>
        <h1>First</h1>
        <h2>Second</h2>
        <h3>Third</h3>
      </Marquee>,
    )
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    // TODO test that when an element is displayed, the others are not
  })
})
