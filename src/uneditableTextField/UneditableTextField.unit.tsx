import React from 'react'

import { render, screen } from '@testing-library/react'

import { UneditableTextField, UneditableTextFieldProps } from './index'

function createProps(props: Partial<UneditableTextFieldProps> = {}): UneditableTextFieldProps {
  return { children: 'Hello world', ...props }
}

describe('UneditableTextField', () => {
  it('should render the content', () => {
    const props = createProps()
    const { container } = render(<UneditableTextField {...props} />)

    expect(container.firstChild).toHaveTextContent(props.children as string)
  })

  it('should apply public CSS classes', () => {
    const props = createProps()
    const { container } = render(<UneditableTextField {...props} />)

    expect(container.firstChild).toHaveClass('kirk-uneditableTextField')
    expect(screen.getByText(props.children as string)).toHaveClass('kirk-uneditableTextField-label')
  })

  it('should not add CSS class for text ellipsis by default', () => {
    const props = createProps()
    render(<UneditableTextField {...props} />)

    expect(screen.getByText(props.children as string)).not.toHaveClass(
      'kirk-uneditableTextField-label--ellipsis',
    )
  })

  it('should add CSS class for text ellipsis', () => {
    const props = createProps({ ellipsis: true })
    render(<UneditableTextField {...props} />)

    expect(screen.getByText(props.children as string)).toHaveClass(
      'kirk-uneditableTextField-label--ellipsis',
    )
  })

  it('should not add CSS class for grey text by default', () => {
    const props = createProps()
    render(<UneditableTextField {...props} />)

    expect(screen.getByText(props.children as string)).not.toHaveClass(
      'kirk-uneditableTextField-label--placeholder',
    )
  })

  it('should add CSS class for grey text with isPlaceholder prop', () => {
    const props = createProps({ isPlaceholder: true })
    render(<UneditableTextField {...props} />)

    expect(screen.getByText(props.children as string)).toHaveClass(
      'kirk-uneditableTextField-label--placeholder',
    )
  })

  it('should render the add-on', () => {
    const props = createProps({
      addOn: <div data-testid="add-on">Add-on</div>,
    })

    render(<UneditableTextField {...props} />)

    expect(screen.getByTestId(props.addOn.props['data-testid'])).toBeInTheDocument()
  })
})
