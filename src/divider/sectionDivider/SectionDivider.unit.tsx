import React from 'react'

import { render, screen } from '@testing-library/react'

import { SectionDivider } from '.'

describe('SectionDivider', () => {
  it('Should have a separator role', () => {
    render(<SectionDivider />)
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })
})
