import React from 'react'

import { render, screen } from '@testing-library/react'

import { Avatar, AvatarProps } from './index'

function createProps(props: Partial<AvatarProps> = {}): AvatarProps {
  return {
    image: '//placehold.it/80x80',
    ...props,
  }
}

describe('Avatar', () => {
  it('should render the given image', () => {
    const props = createProps()
    render(<Avatar {...props} />)
    expect(screen.getByRole('img')).toHaveAttribute('src', props.image)
  })

  it('should render the alt text', () => {
    const props = createProps({ alt: 'Alternative text' })
    render(<Avatar {...props} />)
    expect(screen.getByRole('img', { name: 'Alternative text' })).toBeInTheDocument()
  })

  it('should render a badge if there are unread notifications', () => {
    const props = createProps({ unreadNotificationsCount: '345' })
    render(<Avatar {...props} />)
    expect(screen.getByText('345')).toBeInTheDocument()
  })

  it('should render a check bage if `isIdChecked` is `true`', () => {
    const props = createProps({ isIdChecked: true })
    render(<Avatar {...props} />)
    // There are no accessible way to check the badge is rendered.
    expect(document.querySelector('svg')).toBeInTheDocument()
  })

  it('should render a small avatar when `isSmall` is `true`', () => {
    const props = createProps({ isSmall: true })
    const { container } = render(<Avatar {...props} />)
    expect(container.firstChild).toHaveClass('kirk-avatar--small')
  })

  it('should render a medium avatar when `isMedium` is `true`', () => {
    const props = createProps({ isMedium: true })
    const { container } = render(<Avatar {...props} />)
    expect(container.firstChild).toHaveClass('kirk-avatar--medium')
  })

  it('should render a medium avatar when `isLarge` is `true`', () => {
    const props = createProps({ isLarge: true })
    const { container } = render(<Avatar {...props} />)
    expect(container.firstChild).toHaveClass('kirk-avatar--large')
  })
})
