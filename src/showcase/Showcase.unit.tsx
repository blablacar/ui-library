import React from 'react'

import { render, screen } from '@testing-library/react'

import { Paragraph } from '../paragraph'
import { Showcase } from './index'

describe('Showcase', () => {
  it('Should render', () => {
    render(
      <Showcase>
        <div>fhtagn</div>
        <div>cthulhu</div>
        <Paragraph>Paragraph</Paragraph>
      </Showcase>,
    )
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })
})
