import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { ItemCheckbox, ItemCheckboxProps, ItemCheckboxStatus } from './index'

const defaultProps: ItemCheckboxProps = {
  label: 'Label',
  name: 'name',
  className: 'custom-class-name',
  labelTitle: 'Label title',
  data: 'Data',
  dataInfo: 'Data info',
  checked: false,
  disabled: false,
  onChange() {},
  status: ItemCheckboxStatus.DEFAULT,
  key: 0,
}

function createProps(props: Partial<ItemCheckboxProps> = {}): ItemCheckboxProps {
  return { ...defaultProps, ...props }
}

describe('ItemCheckbox', () => {
  it('Should have a label around the input', () => {
    const props = createProps({
      label: 'This is the field label',
      labelTitle: '',
      data: '',
      dataInfo: '',
    })
    render(<ItemCheckbox {...props} />)
    expect(screen.getByRole('checkbox', { name: 'This is the field label' })).toBeInTheDocument()
  })

  it('Should display a Loader when the component is in loading status', () => {
    const props = createProps({ status: ItemCheckboxStatus.LOADING })
    render(<ItemCheckbox {...props} />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('Should call onChange when clicking on the checkbox', () => {
    const props = createProps({ onChange: jest.fn() })
    render(<ItemCheckbox {...props} />)
    fireEvent.click(screen.getByRole('checkbox'))
    expect(props.onChange).toHaveBeenCalledWith({ name: 'name', value: true })
  })
})
