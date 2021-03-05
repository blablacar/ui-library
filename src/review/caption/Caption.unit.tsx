import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { Caption } from './index'

describe('Review/Caption', () => {
  it('should render the date', () => {
    render(<Caption isoDate="2017-08-07T14:10:40.526Z">08th August 2017</Caption>)

    expect(screen.getByText('08th August 2017')).toBeInTheDocument()
  })

  it('should render a link', () => {
    const onClick = jest.fn()
    render(
      <Caption
        isoDate="2017-08-07T14:10:40.526Z"
        secondaryText="Reply"
        href="https://www.blablacar.fr"
        onClick={onClick}
      >
        08th August 2017
      </Caption>,
    )

    expect(screen.getByRole('link', { name: 'Reply' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('link', { name: 'Reply' }))
    expect(onClick).toHaveBeenCalled()
  })
})
