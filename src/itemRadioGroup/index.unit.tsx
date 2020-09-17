import React, { useState } from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { ItemRadio } from '../itemRadio'
import { ItemRadioStatus } from '../itemRadio/ItemRadio'
import { ItemRadioGroup, ItemRadioGroupProps } from './index'

const defaultProps: ItemRadioGroupProps = {
  name: 'name',
  value: 2,
  onChange() {},
  onClick() {},
  status: ItemRadioStatus.DEFAULT,
  children: [
    <ItemRadio label="1" value={1} />,
    <ItemRadio label="2" value={2} />,
    <ItemRadio label="3" value={3} />,
  ],
}

function createProps(props: Partial<ItemRadioGroupProps> = {}): ItemRadioGroupProps {
  return { ...defaultProps, ...props }
}

describe('ItemRadioGroup', () => {
  it('Should render the 3 ItemRadio', () => {
    const props = createProps()
    render(<ItemRadioGroup {...props} />)
    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
    expect(screen.getAllByRole('radio')).toHaveLength(3)
  })

  it('Should change the checked radio when clicking on it', () => {
    const props = createProps()
    const Component = () => {
      const [radioValue, setRadioValue] = useState('2')
      return (
        <ItemRadioGroup
          {...props}
          value={radioValue}
          onChange={({ value }) => setRadioValue(value as string)}
        />
      )
    }
    render(<Component />)
    const inputRadio3 = screen.getByRole('radio', { name: '3' })
    expect(inputRadio3).not.toBeChecked()
    fireEvent.click(inputRadio3)
    expect(inputRadio3).toBeChecked()
  })
})
