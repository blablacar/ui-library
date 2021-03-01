import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { Paragraph } from './index'

const shortText = 'text'
const longText = 'text '.repeat(100).trim()
const expectedTruncatedLongText =
  'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text …'

it('should truncate long text', () => {
  const buttonLabel = 'Read more'

  render(
    <Paragraph isExpandable expandLabel={buttonLabel}>
      {longText}
    </Paragraph>,
  )

  expect(screen.getByRole('button', { name: buttonLabel })).toBeInTheDocument()

  expect(screen.getByText(expectedTruncatedLongText)).toBeInTheDocument()
})

it('should never truncate short text', () => {
  const buttonLabel = 'Read more'

  render(
    <Paragraph isExpandable expandLabel={buttonLabel}>
      {shortText}
    </Paragraph>,
  )

  expect(screen.queryByText('button')).not.toBeInTheDocument()

  expect(screen.getByText(shortText)).toBeInTheDocument()
})

it('should expand truncated long text', () => {
  const buttonLabel = 'Read more'

  render(
    <Paragraph isExpandable expandLabel={buttonLabel}>
      {longText}
    </Paragraph>,
  )

  const button = screen.getByRole('button', { name: buttonLabel })
  expect(button).toBeInTheDocument()

  // Initially the text is truncated and the button to expand is visible:
  expect(screen.getByText(expectedTruncatedLongText)).toBeInTheDocument()

  // Verify that truncated text is expanded after clicking the toggle
  fireEvent.click(button)
  expect(screen.getByText(longText)).toBeInTheDocument()

  // Verify button has been removed
  expect(screen.queryByRole('button')).not.toBeInTheDocument()
})

it('should allow JSX.Element as children for isExpandable=false version', () => {
  render(
    <Paragraph>
      Hello <a href="http://blablacar.com">BBC</a>!
    </Paragraph>,
  )

  expect(screen.getByRole('link')).toBeInTheDocument()
})
