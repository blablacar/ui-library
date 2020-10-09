import React from 'react'

import { render, screen } from '@testing-library/react'

import { ContentDivider } from '.'

describe('ContentDivider', () => {
  it('Should have a separator role', () => {
    render(<ContentDivider />)
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })
})
