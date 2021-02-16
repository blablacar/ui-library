import React from 'react'

import { render, screen } from '@testing-library/react'

import { BoostIcon } from '../icon/boostIcon'
import { BrandedVoice } from './BrandedVoice'

describe('BrandedVoice', () => {
  it('should render the content', () => {
    render(
      <BrandedVoice label="Main label" subLabel="Sub label" icon={<BoostIcon title="Boost" />} />,
    )

    expect(screen.getByText('Main label')).toBeInTheDocument()
    expect(screen.getByText('Sub label')).toBeInTheDocument()
    expect(screen.getByText('Boost')).toBeInTheDocument()
  })
})
