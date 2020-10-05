import React from 'react'

import { render, screen } from '@testing-library/react'

import { SpacingDivider } from '../spacingDivider'

describe('SpacingDivider', () => {
  // https://www.w3.org/TR/wai-aria-1.2/#tree_exclusion
  it('Should not be in the a11y tree', () => {
    render(<SpacingDivider />)
    expect(screen.getByRole('presentation', { hidden: true })).toBeInTheDocument()
  })
})
