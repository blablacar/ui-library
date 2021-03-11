import React from 'react'

import { render, screen } from '@testing-library/react'

import { SubHeader } from './SubHeader'

describe('SubHeader', () => {
  it('Should render the SubHeader as h2', () => {
    render(<SubHeader>SubHeader content</SubHeader>)
    expect(screen.getByRole('heading', { level: 2, name: 'SubHeader content' })).toBeInTheDocument()
  })

  it('Should render the SubHeader as h3', () => {
    render(<SubHeader as="h3">SubHeader content</SubHeader>)
    expect(screen.getByRole('heading', { level: 3, name: 'SubHeader content' })).toBeInTheDocument()
  })
})
