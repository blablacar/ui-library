import React from 'react'

import { render, screen } from '@testing-library/react'

import { TheVoice } from './TheVoice'

describe('TheVoice', () => {
  const title = 'the voice content'

  it('Should use a h1 with the voice content', () => {
    render(<TheVoice>{title}</TheVoice>)
    expect(screen.getByRole('heading', { level: 1, name: title }))
  })

  it('Should use a h2 with the voice content', () => {
    render(<TheVoice as="h2">{title}</TheVoice>)
    expect(screen.getByRole('heading', { level: 2, name: title }))
  })

  it('Should forward id to Title if provided', () => {
    render(<TheVoice id="my-id">{title}</TheVoice>)
    expect(screen.getByRole('heading')).toHaveAttribute('id', 'my-id')
  })
})
