import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { Fog } from './Fog'

describe('Fog', () => {
  it('should be able to click on an interactive element', () => {
    const onClick = jest.fn()
    render(
      <Fog>
        <button onClick={onClick}>Button</button>
      </Fog>,
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })

  it('should not be able to click on an interactive element', () => {
    const onClick = jest.fn()
    render(
      <Fog isLoading>
        <button onClick={onClick}>Button</button>
      </Fog>,
    )

    const button = screen.getByRole('button')
    expect(onClick).not.toHaveBeenCalled()
  })
})
