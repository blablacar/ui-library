import React from 'react'

import { render, screen } from '@testing-library/react'

import { ThemeProvider } from './index'

describe('ThemeProvider', () => {
  it('renders properly', () => {
    render(<ThemeProvider>Some children content</ThemeProvider>)
    screen.getByText('Some children content')
    expect(document.head).toMatchSnapshot()
  })
})
