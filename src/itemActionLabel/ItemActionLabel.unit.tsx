import React from 'react'

import { render, screen } from '@testing-library/react'

import { ItemActionLabel, ItemActionLabelProps } from './index'

const defaultProps: ItemActionLabelProps = {
  className: 'custom-class-name',
  labelTitle: 'Title',
  subLabel: 'Secondary info',
  action: 'Action',
  onClick() {},
  onMouseDown() {},
}

function createProps(props: Partial<ItemActionLabelProps> = {}): ItemActionLabelProps {
  return { ...defaultProps, ...props }
}

describe('ItemActionLabel', () => {
  it('Should have button tag by default with provided content', () => {
    render(<ItemActionLabel {...defaultProps} />)
    expect(screen.getByRole('button', { name: 'Title Secondary info Action' })).toBeInTheDocument()
  })

  it('Should have a link tag with provided content', () => {
    const props = createProps({
      href: '#',
    })
    render(<ItemActionLabel {...props} />)
    expect(screen.getByRole('link', { name: 'Title Secondary info Action' })).toBeInTheDocument()
  })
  describe('A11y props', () => {
    it('Should have an alternative content', () => {
      // Screen reader read it as the main content
      const props = createProps({
        'aria-label': 'Screen reader content',
      })
      render(<ItemActionLabel {...props} />)
      expect(screen.getByRole('button', { name: 'Screen reader content' })).toBeInTheDocument()
    })

    it('Should pass aria props', () => {
      const props = createProps({
        'aria-controls': 'elem-ref',
        'aria-describedby': 'elem-ref',
        'aria-labelledby': 'elem-ref',
      })
      render(<ItemActionLabel {...props} />)
      const button = screen.getByRole('button', { name: 'Title Secondary info Action' })
      expect(button).toHaveAttribute('aria-controls', 'elem-ref')
      expect(button).toHaveAttribute('aria-describedby', 'elem-ref')
      expect(button).toHaveAttribute('aria-labelledby', 'elem-ref')
    })
  })
})
