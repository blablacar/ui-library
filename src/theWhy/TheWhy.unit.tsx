import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { TheWhy } from './TheWhy'

const text = 'Why this?'
const title = 'Why this? (new window)'

describe('Why', () => {
  it('Should render attributes and the given text.', () => {
    render(<TheWhy title={title}>{text}</TheWhy>)

    expect(screen.getByRole('button', { name: 'Why this? (new window)' })).toBeInTheDocument()
    expect(screen.getByText('Why this?')).toBeInTheDocument()
  })

  it('Should render the modifiers.', () => {
    const { container } = render(
      <TheWhy className="addClass" title={title}>
        Text
      </TheWhy>,
    )
    expect(container.firstChild).toHaveClass('addClass')
  })

  it('Should have a onClick behaviour.', () => {
    const onClick = jest.fn()
    render(
      <TheWhy title={title} onClick={onClick}>
        Text
      </TheWhy>,
    )

    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
