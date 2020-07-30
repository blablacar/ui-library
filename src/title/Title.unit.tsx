import React from 'react'

import { render, screen } from '@testing-library/react'

import { Title, TitleProps } from './Title'

const defaultProps: TitleProps = {
  children: 'Hello',
  headingLevel: 1,
}

function createProps(props: Partial<TitleProps> = {}): TitleProps {
  return { ...defaultProps, ...props }
}

describe('Title', () => {
  it('Should render the given title text', () => {
    const props = createProps({
      children: 'blabla',
    })

    render(<Title {...props} />)

    expect(screen.getByRole('heading')).toHaveTextContent(props.children.toString())
  })

  it('Should render a h1 when no headingLevel is specified', () => {
    const props = createProps()

    render(<Title {...props} />)

    expect(screen.getByRole('heading').nodeName.toLowerCase()).toBe('h1')
  })

  describe('#headingLevel', () => {
    it('Should render the correct heading level when passing a `number`', () => {
      const props = createProps({
        headingLevel: 5,
      })

      render(<Title {...props} />)
      expect(screen.getByRole('heading').nodeName.toLowerCase()).toBe('h5')
    })

    it('Should render the correct heading level when passing a `string`', () => {
      const props = createProps({
        headingLevel: '5',
      })

      render(<Title {...props} />)
      expect(screen.getByRole('heading').nodeName.toLowerCase()).toBe('h5')
    })
  })

  it('Should add id if provided', () => {
    const title = 'blabla'
    const id = 'my-id'
    const props = createProps({
      children: title,
      id,
    })

    render(<Title {...props} />)
    expect(screen.getByRole('heading')).toHaveAttribute('id', id)
  })
})
